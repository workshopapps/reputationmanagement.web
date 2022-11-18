using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using src.Models;
using src.Services;

namespace src.Controllers
{
    
    [ApiController]
    [Route("api")]
    public class HomeController:ControllerBase
    {
        public readonly IReviewRepository _reviewRepo;
        public HomeController(IReviewRepository reviewRepo, 
            UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _reviewRepo = reviewRepo;
        }

        [HttpGet("greet")]
        public IActionResult greet()
        {
           
            string greetings = "Hello world!";
            return Ok(greetings);
        }

        // ToDo
        [Authorize(Roles = "Customer", AuthenticationSchemes ="Bearer")]
        [HttpGet("postedreviews")]
        public ActionResult<IEnumerable<Review>> PostedReviews()
        {
            var result = _reviewRepo.GetReviews();
            return Ok(result);
        }

        [HttpGet("/api/reviews/{reviewId}")]
        [Authorize(Roles = "Lawyer", AuthenticationSchemes ="Bearer")]
        public IActionResult GetSingleReview(Guid reviewId)
        {
            if(reviewId == Guid.Empty)
            {
                return new ArgumentException("Review Id is Empty");
            } 
            Review singleReview = _reviewRepo.GetReviewById(reviewId);

            if(singleReview == null)
                return NotFound();

            return Ok(singleReview);
        }


    }
}
