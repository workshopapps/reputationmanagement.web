using Microsoft.EntityFrameworkCore;
using src.Entities;

namespace src.Data
{
    public class ApplicationDbContext:DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Review> Reviews { get; set; }
    }
}
