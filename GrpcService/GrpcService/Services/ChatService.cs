using Grpc.Core;
using GrpcService.Db;
using GrpcService.Db.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


//GrpcService.Services
namespace GrpcService.Services
{
    public class ChatService : ChatRoom.ChatRoomBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly UserManager<User> _userManager;
        private readonly Server.ChatRoom _chatroomService;

        public ChatService(AppDbContext appDbContext, UserManager<User> userManager)
        {
            _appDbContext = appDbContext;
            _userManager = userManager;
        }

        public override async Task<CreateChatResponseDto> CreateChat(CreateChatRequestDto request, ServerCallContext context)
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

        public override async Task<AddUserToChatResponseDto> AddUserToChat(AddUserToChatRequestDto request, ServerCallContext context)
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
            
            if(chat is null)
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
}