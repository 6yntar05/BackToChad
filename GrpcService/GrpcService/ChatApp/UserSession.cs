using GrpcService;
using GrpcService.Db;
using GrpcService.Db.Entities;
using Microsoft.Extensions.DependencyInjection;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;


public class UserSession : IDisposable
{
    #region Private Fields

    private ChatApp _chatApp;

    #endregion

    #region Public Properties

    public Guid UserId { get; }
    public Guid ChatId { get; set; }

    #endregion

    #region Events

    public event Action<Message>? NewMessageSended;

    #endregion

    #region Constructor

    public UserSession(ChatApp chatApp, Guid userId, Guid chatId)
    {
        UserId = userId;
        ChatId = chatId;
        _chatApp = chatApp;
    }

    #endregion

    #region Public Methods

    public async Task Init()
    {
        using var scope = _chatApp.ServiceScopeFactory.CreateScope();

        var chatDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        var messages = await chatDbContext.Messages.Where(x => x.ChatId == ChatId).ToListAsync();

        foreach (var message in messages)
            MessageInvoked(message);
    }

    public void Dispose()
    {
        _chatApp.Sessions[ChatId].Remove(this);
        _chatApp = null!;
    }

    public void MessageInvoked(Message message)
    {
        NewMessageSended?.Invoke(message);
    }

    #endregion
}