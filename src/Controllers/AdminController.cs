using Microsoft.AspNetCore.Mvc;
using src.Entities;
using src.Models;
using src.Models.Dtos;
using src.Services;

namespace src.Controllers
{
    [ApiController]
    [Route("api/admin")]
    public class AdminController : Controller
    {
        private readonly IAdminRepository adminRepository;

        public AdminController(IAdminRepository adminRepository)
        {
            this.adminRepository = adminRepository;
        }

        [HttpPost]
        [Route("/create_account")]
        public IActionResult Index(AddAdminModel admin)
        {
            var newAdmin = new Admin()
            {
                FirstName = admin.FirstName,
                LastName = admin.LastName,
                Email = admin.Email,
                Password = admin.Password,
            };


            newAdmin = adminRepository.AddAdmin(newAdmin);

            var newAdminDto = new AddAdminDto
            {
                Id = newAdmin.Id,
                FirstName = newAdmin.FirstName,
                LastName = newAdmin.LastName,
                Email = newAdmin.Email,
                Password = newAdmin.Password
            };

            return Ok(newAdminDto);
        }
    }
}
