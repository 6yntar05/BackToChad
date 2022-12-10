using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Grpc.Core;
using GrpcService.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace GrpcService.Services;

public class AuthService: Auth.AuthBase
{
    private readonly JwtTokenOptions _jwtTokenOptions;
    
    public AuthService(IOptions<JwtTokenOptions> jwtTokenOptions)
    {
        _jwtTokenOptions = jwtTokenOptions.Value;
    }
    
    public override Task<LoginResponseDto> Login(LoginRequestDto request, ServerCallContext context)
    {
        var claims = new List<Claim> {new Claim("Login", request.Login) };
        var jwt = new JwtSecurityToken(
            issuer: _jwtTokenOptions.Issuer,
            audience: _jwtTokenOptions.Audience,
            claims: claims,
            expires: DateTime.UtcNow.Add(TimeSpan.FromDays(4)), 
            signingCredentials: new SigningCredentials(_jwtTokenOptions.SymmetricSecurityKey, SecurityAlgorithms.HmacSha256));

        return Task.FromResult(new LoginResponseDto
        {
            Token = new JwtSecurityTokenHandler().WriteToken(jwt)
        });
    }

    [Authorize]
    public override Task<Void> Check(Void request, ServerCallContext context)
    {
        return Task.FromResult(new Void());
    }
}