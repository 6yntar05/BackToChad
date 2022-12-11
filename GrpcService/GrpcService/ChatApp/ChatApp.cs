using GrpcService.Db;
using GrpcService.Db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;


public class ChatApp
{
    internal IServiceScopeFactory ServiceScopeFactory;
    internal ILogger<ChatApp> Logger;
    internal Dictionary<Guid, List<UserSession>> Sessions = new();

    public ChatApp(IServiceScopeFactory scopeFactory, ILogger<ChatApp> logger)
    {
        ServiceScopeFactory = scopeFactory;
        Logger = logger;
    }

    public UserSession JoinUser(User user, Guid chatId)
    {
        var userSession = new UserSession(this, user.Id, chatId);
        bool sessionsCneck = Sessions.TryGetValue(chatId, out var chatSessions);
        if (!sessionsCneck)
        {
            //Хранение Сесиий
            chatSessions = new List<UserSession>();
            Sessions.Add(chatId, chatSessions);
        }
        
        chatSessions!.Add(userSession);
        return userSession;
    }

    public async Task SendAsync(Guid userId, Message chatMessage)
    {
        using var scope = ServiceScopeFactory.CreateScope();

        var chatDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        try
        {
            var userDb = await chatDbContext.Users.FirstAsync(u => u.Id == userId);

            chatDbContext.Add(chatMessage);
            await chatDbContext.SaveChangesAsync();
            
            if (!Sessions.TryGetValue(chatMessage.ChatId, out var userSessions))
                return;

            foreach (var session in userSessions) 
                session.MessageInvoked(chatMessage);
        }
        catch (Exception ex)
        {
            LogException(ex, "SendAsync");
        }
    }

    private void LogException(Exception error, string message)
    {
        var realerror = error;

        while (realerror.InnerException != null)
            realerror = realerror.InnerException;

        Logger.LogError(error, $"ChatApp.{message}");
    }
}