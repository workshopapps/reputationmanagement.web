using src.Data;
using src.Entities;

namespace src.Services
{
    public class AdminRepository : IAdminRepository
    {
        private readonly ApplicationDbContext _context;

        public AdminRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Admin AddAdmin(Admin admin)
        {
           admin.Id = Guid.NewGuid();
            _context.Add(admin);
            _context.SaveChanges(); 
            return admin;
        }
    }
}
