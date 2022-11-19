using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
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
        private readonly IMapper _mapper;
        private readonly UserManager<ApplicationUser> _userManager;

        public AdminController(IMapper mapper, UserManager<ApplicationUser> userManager)
        {
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpPost]
        [Route("/create_account")]
        public async Task<IActionResult> Register([FromBody] AddAdminDto admin)
        {
            var user = _mapper.Map<ApplicationUser>(admin);
            var result = await _userManager.CreateAsync(user, admin.Password);
            if (!result.Succeeded)
            {
                return Ok(result.Errors);
            }
            await _userManager.AddToRoleAsync(user, "Admin");
            return StatusCode(201);
        }
    }
}
