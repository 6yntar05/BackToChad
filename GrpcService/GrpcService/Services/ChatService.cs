using Grpc.Core;
using GrpcService.Db;
using GrpcService.Db.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


//GrpcService.Services
namespace GrpcService.Services;

public class ChatService : ChatRoom.ChatRoomBase
{
    private readonly AppDbContext _appDbContext;

    private readonly ChatApp _chatroomService;

    //User 
    private readonly UserManager<User> _userManager;

    //gRPC ServerStream
    private IServerStreamWriter<MessageDto> _resposonceStream;
    private readonly ILogger<ChatMessage> _logger;


    public ChatService(AppDbContext appDbContext, UserManager<User> userManager, ChatApp chatroomService,
        ILogger<ChatMessage> logger)
    {
        _appDbContext = appDbContext;
        _userManager = userManager;
        _chatroomService = chatroomService;
        _logger = logger;
    }


    //Task to DataBase
    public override async Task<CreateChatResponseDto> CreateChat(CreateChatRequestDto request,
        ServerCallContext context)
    {
        var chat = new Chat
        {
            Id = Guid.NewGuid(),
            Name = request.Name
        };

        _appDbContext.Add(chat);
        await _appDbContext.SaveChangesAsync();

        return new CreateChatResponseDto
        {
            Id = chat.Id.ToString(),
            Name = chat.Name
        };
    }

    public override async Task<GetChatsResponseDto> GetChats(GetChatsRequestDto request, ServerCallContext context)
    {
        var chats = await _appDbContext.Chats.ToListAsync();
        var responseDto = new GetChatsResponseDto();
        responseDto.Chats.AddRange(chats.Select(x => new ChatDto
        {
            Id = x.Id.ToString(),
            Name = x.Name
        }));

        return responseDto;
    }

    [Authorize]
    public override async Task JoinChat(ChatRequest request,
        IServerStreamWriter<MessageDto> responseStream,
        ServerCallContext context)
    {
        var userId = Guid.Parse(context.GetHttpContext().User.Claims.First(x => x.Type == "Id").Value);
        var user = await _userManager.Users.FirstAsync(x => x.Id == userId);

        var chatId = Guid.Parse(request.ChatId);

        var session = _chatroomService.JoinUser(user, chatId);
        _resposonceStream = responseStream;
        session.NewMessageSended += SessionOnNewMessageSended;
        await session.Init();

        try
        {
            await Task.Delay(int.MaxValue, context.CancellationToken);
        }
        catch (TaskCanceledException e)
        {
            _logger.Log(LogLevel.Information, e, "ChatRoomService.JoinChat.Cancelled");
        }
        catch (Exception e)
        {
            _logger.Log(LogLevel.Error, e, "ChatRoomService.JoinChat");
        }
        finally
        {
            session.NewMessageSended -= SessionOnNewMessageSended;

            session.Dispose();
            _resposonceStream = null!;
        }
    }

    [Authorize]
    public override async Task<ChatRequest> Send(ChatMessage request, ServerCallContext context)
    {
        var userId = Guid.Parse(context.GetHttpContext().User.Claims.First(x => x.Type == "Id").Value);
        var chatMessage = new Message
        {
            Id = Guid.NewGuid(),
            AuthorId = userId,
            ChatId = Guid.Parse(request.IdChat),
            TextBody = request.Message,
            CreatedAt = DateTime.UtcNow
        };

        await _chatroomService.SendAsync(userId, chatMessage);

        return new ChatRequest();
    }

    #region Private Methods

    private async void SessionOnNewMessageSended(Message message)
    {
        await _resposonceStream.WriteAsync(new MessageDto
        {
            Id = message.Id.ToString(),
            ChatId = message.ChatId.ToString(),
            CreatedAt = message.CreatedAt.ToString("O"),
            TextBody = message.TextBody,
            AuthorId = message.AuthorId.ToString()
        });
    }

    #endregion

    public override async Task<AddUserToChatResponseDto> AddUserToChat(AddUserToChatRequestDto request,
        ServerCallContext context)
    {
        if (!Guid.TryParse(request.UserId, out var userId))
        {
            return new AddUserToChatResponseDto
            {
                Error = "Invalid userId"
            };
        }

        if (!Guid.TryParse(request.ChatId, out var chatId))
        {
            return new AddUserToChatResponseDto
            {
                Error = "Invalid chatId"
            };
        }

        var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == userId);
        if (user is null)
            return new AddUserToChatResponseDto
            {
                Error = "User was not found"
            };

        var chat = await _appDbContext.Chats
            .Include(x => x.Chat2Users)
            .FirstOrDefaultAsync(x => x.Id == chatId);

        if (chat is null)
            return new AddUserToChatResponseDto
            {
                Error = "Chat was not found"
            };

        if (chat.Chat2Users!.Any(x => x.UserId == userId))
            return new AddUserToChatResponseDto();

        var chat2User = new Chat2User
        {
            UserId = userId,
            ChatId = chatId,
        };

        _appDbContext.Add(chat2User);
        await _appDbContext.SaveChangesAsync();

        return new AddUserToChatResponseDto();
    }
}