namespace GrpcService.Db.Entities;

public class Message
{
    public Guid Id { get; set; }
    public Guid ChatId { get; set; }
    public Guid AuthorId { get; set; }
    
    public DateTime CreatedAt { get; set; }
    public string TextBody { get; set; }
    
    public Chat? Chat { get; set; }
    public User? Author { get; set; }
}