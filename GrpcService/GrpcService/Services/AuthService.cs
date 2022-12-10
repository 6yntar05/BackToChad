using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Grpc.Core;
using GrpcService.Db;
using GrpcService.Db.Entities;
using GrpcService.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace GrpcService.Services;

public class AuthService: Auth.AuthBase
{
    private readonly UserManager<User> _userManager;
    private readonly JwtTokenOptions _jwtTokenOptions;
    
    public AuthService(IOptions<JwtTokenOptions> jwtTokenOptions, UserManager<User> userManager)
    {
        _userManager = userManager;
        _jwtTokenOptions = jwtTokenOptions.Value;
    }
    
    public override async Task<LoginResponseDto> Login(LoginRequestDto request, ServerCallContext context)
    {
        var user = await _userManager.Users.FirstOrDefaultAsync(x => x.NormalizedUserName == _userManager.NormalizeName(request.Login));

        if (user is null)
            return new LoginResponseDto
            {
                Error = "User was not found"
            };
        
        var passwordVerificationResult = _userManager.PasswordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password);

        if (passwordVerificationResult == PasswordVerificationResult.Success)
        {
            var claims = new List<Claim> {
                new Claim("Login", user.UserName),
                new Claim("Id", user.Id.ToString())
            };
            
            var jwt = new JwtSecurityToken(
                issuer: _jwtTokenOptions.Issuer,
                audience: _jwtTokenOptions.Audience,
                claims: claims,
                expires: DateTime.UtcNow.Add(TimeSpan.FromDays(4)), 
                signingCredentials: new SigningCredentials(_jwtTokenOptions.SymmetricSecurityKey, SecurityAlgorithms.HmacSha256));
    
            return new LoginResponseDto
            {
                Token = new JwtSecurityTokenHandler().WriteToken(jwt)
            };
        }
        else
        {
            return new LoginResponseDto
            {
                Error = "Authorisation was failed"
            };
        }
    }

    [Authorize]
    public override Task<Void> Check(Void request, ServerCallContext context)
    {
        return Task.FromResult(new Void());
    }
}