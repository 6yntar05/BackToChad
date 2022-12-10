using Microsoft.AspNetCore.Identity;

namespace GrpcService.Db.Entities;

public class Role: IdentityRole<Guid>
{
    public ICollection<UserRole>? UserRoles { get; set; }
}