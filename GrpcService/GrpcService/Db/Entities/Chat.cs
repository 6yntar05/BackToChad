namespace GrpcService.Db.Entities;

public class Chat
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    
    public ICollection<Chat2User>? Chat2Users { get; set; }
}