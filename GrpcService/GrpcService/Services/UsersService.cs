using Google.Protobuf.Collections;
using Grpc.Core;
using GrpcService.Db;
using GrpcService.Db.Entities;
using GrpcService.Grpc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace GrpcService.Services;

public class UsersService: Grpc.Users.UsersBase
{
    private readonly AppDbContext _appDbContext;
    private readonly UserManager<User> _userManager;
    private readonly ILogger<User> _logger;
    public UsersService(AppDbContext appDbContext, UserManager<User> userManager, ILogger<User> logger)
    {
        _appDbContext = appDbContext;
        _userManager = userManager;
        _logger = logger;
    }

    public override async Task<Grpc.CreateUserResponseDto> CreateUser(Grpc.CreateUserRequestDto request, ServerCallContext context)
    {
        var user = new User
        {
            Id = Guid.NewGuid(),
            UserName = request.Login,
        };

        var identityResult = await _userManager.CreateAsync(user, request.Password);

        if (identityResult.Errors?.Count() > 0)
        {
            return new CreateUserResponseDto
            {
                Errors = string.Join("; ", identityResult.Errors.Select(x => x.Description))
            };
        }

        return new CreateUserResponseDto
        {
            Id = user.Id.ToString(),
            Login = user.UserName,
        };
    }

    public override async Task<GetUsersResponseDto> GetUsers(GetUsersRequestDto request, ServerCallContext context)
    {
        var users = await _userManager.Users.ToListAsync();
        var repeatedField = new RepeatedField<UserDto>();

        var responseDto = new GetUsersResponseDto();
        responseDto.Users.AddRange(users.Select(x => new UserDto
        {
            Id = x.Id.ToString(),
            Login = x.UserName,
        }));
        return responseDto;
    }
}