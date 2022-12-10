namespace GrpcService.Db.Entities;

public class Chat2User
{
    public Guid UserId { get; set; }
    public Guid ChatId { get; set; }
    
    public User? User { get; set; }
    public Chat? Chat { get; set; }
}