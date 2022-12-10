using Microsoft.AspNetCore.Identity;

namespace GrpcService.Db.Entities;

public class UserRole: IdentityUserRole<Guid>
{
    public User? User { get; set; }
    public Role? Role { get; set; }
}