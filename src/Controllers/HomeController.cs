using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using src.DTOS;
using src.Models;
using src.Services;

namespace src.Controllers
{

    [ApiController]
    [Route("app")]
    public class HomeController : ControllerBase
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

        [HttpGet]
        [AllowAnonymous]
        [Route("SuccessfulReview")]
        public async Task<ActionResult> SuccessReview()
        {
            var resultModel = new List<GetSuccessfulReviews>();

            var query = await _reviewRepo.GetAllSuccessfulReview();

            return Ok(query);
        }
    }
}
