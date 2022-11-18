using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using src.Entities;
using src.Models;
using src.Services;
using Swashbuckle.AspNetCore.Annotations;
using System.Data;
using System.Linq;

namespace src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        public readonly IReviewRepository _reviewRepo;
        public ReviewController(IReviewRepository reviewRepo,
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
        [SwaggerOperation(Summary = "Get all users reviews")]
        [Authorize(Roles = "Customer", AuthenticationSchemes = "Bearer")]
        [HttpGet("api/reviews")]
        public ActionResult<IEnumerable<Review>> PostedReviews(int? pageNumber, int? pageSize)
        {
            if (pageNumber == null && pageSize == null)
            {
                return Ok(_reviewRepo.GetReviews());
            }
            var result = _reviewRepo.GetReviews()
                .Skip((int)((pageNumber - 1) * pageSize))
                .Take((int)pageSize);

            return Ok(result);
        }
    }
}
