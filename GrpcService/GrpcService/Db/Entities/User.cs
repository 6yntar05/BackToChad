using Microsoft.AspNetCore.Identity;

namespace GrpcService.Db.Entities;

public class User: IdentityUser<Guid>
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    
    public ICollection<Chat2User>? Chat2Users { get; set; }
    public ICollection<UserRole>? UserRoles { get; set; }
}