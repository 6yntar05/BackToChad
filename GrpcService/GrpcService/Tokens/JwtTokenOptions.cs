using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace GrpcService.Tokens;

public class JwtTokenOptions
{
    public static string Position = "Jwt";
    public string Issuer { get; set; } = "DevBackend";
    public string Audience { get; set; } = "DevAudience";
    public string Key { get; set; } = "DevKeyDevKeyDevKeyDevKeyDevKey";
    public SymmetricSecurityKey SymmetricSecurityKey => new(Encoding.UTF8.GetBytes(Key));
}