using GrpcService.Db.Entities;
using Microsoft.EntityFrameworkCore;

namespace GrpcService.Db;

public class AppDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Chat> Chats { get; set; }
    public DbSet<Entities.Message> Messages { get; set; }
    public DbSet<Chat2User> Chat2Users { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Chat2User>()
            .HasKey(x => new { x.UserId, x.ChatId });
        
        base.OnModelCreating(modelBuilder);
    }
}