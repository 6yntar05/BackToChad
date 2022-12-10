using Grpc.Core;
using GrpcService.Db;
using GrpcService.Db.Entities;
using Microsoft.AspNetCore.Identity;
using System;

//GrpcService.Services
namespace GrpcService.Services
{
    public class ChatService : ChatRoom.ChatRoomBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly ChatApp _chatroomService;
        //User 
        private readonly UserManager<User> _userManager;
        //gRPC ServerStream
        private IServerStreamWriter<Message> _resposonceStream = null;



        public ChatService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
   

        //Task to DataBase
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


        public override async Task JoinChat(ChatRequest request, 
            IServerStreamWriter<ChatMessage> responseStream, 
            ServerCallContext context)
        {
            var user = await _userManager.GetUserAsync(context.GetHttpContext().User);
            Guid session = _chatroomService.JoinUser(user);


        }
            
    }
}