
using GrpcService.Db;
using GrpcService.Db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;



public class ChatApp
{
    internal IServiceScopeFactory ServiceScopeFactory;
    internal ILogger<ChatApp> Logger;
    internal Dictionary<Guid,List<UserSession>> Sessions = new();

    public ChatApp(IServiceScopeFactory scopeFactory, ILogger<ChatApp> logger)
    {
        ServiceScopeFactory = scopeFactory;
        Logger = logger;
    }

    public UserSession JoinUser(User user, Chat chat)
    {
        var userSession = new UserSession(this, user.Id);
        bool sessionsCneck = Sessions.TryGetValue(chat.Id,out var sessions);
         if (!sessionsCneck)
            {
            //Хранение Сесиий
            List <UserSession> sessions1 = new List<UserSession>();
            sessions1.Add(userSession);
            Sessions.Add(chat.Id, sessions1);
        }
  
        return userSession;  
    }

    public async Task SendAsync(Guid userId, Message chatMessage)
    {
        using var scope = ServiceScopeFactory.CreateScope();

        var chatDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        bool Collections = Sessions.TryGetValue(chatMessage.Id,out var userSessions);
        foreach (var session in userSessions)
        {
            session.MessageInvoked(chatMessage);
        }

        try
        {
            var userDb = await chatDbContext.Users.FirstAsync(u => u.Id == userId);

            chatMessage.User = userDb;

            await chatDbContext.Messages.AddAsync(chatMessage);
            await chatDbContext.SaveChangesAsync();
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