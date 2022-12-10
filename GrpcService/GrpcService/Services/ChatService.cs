using Grpc.Core;
using GrpcService.Db;
using GrpcService.Db.Entities;


//GrpcService.Services
namespace GrpcService.Services
{
    public class ChatService : ChatRoom.ChatRoomBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly Server.ChatRoom _chatroomService;

        public ChatService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
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
    }
}