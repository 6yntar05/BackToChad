﻿
using GrpcService;
using GrpcService.Db;
using GrpcService.Db.Entities;
using Microsoft.Extensions.DependencyInjection;
using System.Xml.Linq;



public class UserSession : IDisposable
{
    #region Private Fields

    private ChatApp _chatApp;

    #endregion

    #region Public Properties

    public Guid UserId { get; }

    #endregion

    #region Events

    public event Action<ChatMessage>? NewMessageSended;

    #endregion

    #region Constructor

    public UserSession(ChatApp chatApp, Guid userId)
    {
         UserId = userId;
        _chatApp = chatApp;
    }

    #endregion
    
    #region Public Methods

    public void Init()
    {
        using var scope = _chatApp.ServiceScopeFactory.CreateScope();

        var chatDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        foreach (var message in chatDbContext.Messages) 
            MessageInvoked(message);
    }

    public void Dispose()
    {
        _chatApp.Sessions.Remove(this);
        _chatApp = null!;
    }

    public void MessageInvoked(Message message)
    {
        NewMessageSended?.Invoke(new ChatMessage
        {
            IdChat = message.ChatId.ToString(),
            Message = message.TextBody
        });
    }

    #endregion
}