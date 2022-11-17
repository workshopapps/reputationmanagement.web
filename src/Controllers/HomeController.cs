using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using src.Models;
using src.Services;

namespace src.Controllers
{
    
    [ApiController]
    [Route("app")]
    public class HomeController:ControllerBase
    {
        public readonly IReviewRepository _reviewRepo;
        public HomeController(IReviewRepository reviewRepo, 
            UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _reviewRepo = reviewRepo;
        }

        [HttpGet]
        public IActionResult greet()
        {
           
            string greetings = "Hello world!";
            return Ok(greetings);
        }
    }
}
