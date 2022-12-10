using GrpcService.Db;
using GrpcService.Db.Entities;
using GrpcService.Services;
using GrpcService.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

var jwtTokenOptions = new JwtTokenOptions();
builder.Configuration.GetSection(JwtTokenOptions.Position).Bind(jwtTokenOptions);

builder.Services.AddIdentityCore<User>()
    .AddRoles<Role>()
    .AddEntityFrameworkStores<AppDbContext>();

builder.Services.AddAuthorization();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = jwtTokenOptions.Issuer,
            ValidateAudience = true,
            ValidAudience = jwtTokenOptions.Audience,
            ValidateLifetime = true,
            IssuerSigningKey = jwtTokenOptions.SymmetricSecurityKey,
            ValidateIssuerSigningKey = true,
        };
    });

builder.Services.AddDbContext<AppDbContext>(optionsBuilder =>
{
    var connectionString = builder.Configuration.GetConnectionString("Default");
    optionsBuilder.UseNpgsql(connectionString);
});

builder.Services.AddSingleton<ChatApp>();

// Add services to the container.
builder.Services.AddGrpc();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var appDbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    await appDbContext.Database.MigrateAsync();
}

app.UseAuthentication();
app.UseAuthorization();

// Configure the HTTP request pipeline.
app.MapGrpcService<ChatService>();
app.MapGrpcService<AuthService>();
app.MapGrpcService<UsersService>();
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
