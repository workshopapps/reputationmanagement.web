using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using src.Entities;
using src.Models;
using src.Models.Dtos;
using src.Services;
using Swashbuckle.AspNetCore.Annotations;
using System.Security.Claims;

namespace src.Controllers
{
    
    [ApiController]
    [Authorize(Roles = "Customer", AuthenticationSchemes = "Bearer")]
    [Route("api")]
    public class HomeController:ControllerBase
    {
        private readonly IReviewRepository _reviewRepo;
        private readonly IMapper _mapper;

        public HomeController(IReviewRepository reviewRepo, 
            UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IMapper mapper)
        {
            _reviewRepo = reviewRepo;
            _mapper = mapper;
        }

        /// <summary>
        /// Greets the user
        /// </summary>
        /// <returns>Hello customer!</returns>
        [SwaggerOperation(Summary = "Greets the customer")]
        [HttpGet("greet")]
        [AllowAnonymous]
        public IActionResult greet()
        {
           
            string greetings = "Hello customer!";
            return Ok(greetings);
        }

        /// <summary>
        /// Returns the reviews posted by the currently signed in user
        /// </summary>
        /// <returns>a list of reviews</returns>
        [SwaggerOperation(Summary = "Returns the reviews posted by the currently signed in user")]
        [HttpGet("postedreviews")]
        public ActionResult<IEnumerable<ReviewForDisplayDto>> PostedReviews()
        {
            //todo
            return Ok();
        }

        /// <summary>
        /// Create a Review with this endpoint
        /// </summary>
        /// <param name="CreateReview"></param>
        /// <returns></returns>
        [SwaggerOperation(Summary = "Create a Review with this endpoint")]
        [HttpGet("create")]
        public ActionResult CreateReview([FromBody] ReviewForCreationDto reviewForCreationDto)
        {
            // use this to get user Id From request and 
            //  var userId = new Guid(HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

            return Ok();
        }

        [HttpGet("/api/reviews/{reviewId}")]
        [Authorize(Roles = "Customer", AuthenticationSchemes ="Bearer")]
        public IActionResult GetSingleReview(Guid reviewId)
        {
            if (reviewId == Guid.Empty)
            {
                return BadRequest();
            } 
            Review singleReview = _reviewRepo.GetReviewById(reviewId);

            if (singleReview == null)
                return NotFound();

            return Ok(singleReview);
        }

        /// <summary>
        /// Deletes All Reviews Associated With this user
        /// </summary>
        /// <returns>Ok</returns>
        [SwaggerOperation(Summary = "Deletes All Reviews Associated With this user")]
        [HttpDelete("reviews/delete-all-reviews")]
        public IActionResult DeleteReviews()
        {
            //todo
            var userId = new Guid(HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier).Value);

            _reviewRepo.DeleteReviews(userId);
            _reviewRepo.Save();

            return Ok();
        }

        [HttpGet("inconclusive")]
        [Authorize(Roles = "Lawyer", AuthenticationSchemes = "Bearer")]
        public IActionResult GetAllInconclusiveReviews()
        {
            IEnumerable<Review> inconclusiveIsNull = null;
            IEnumerable<Review> inconclusiveReviews = _reviewRepo.GetInconclusiveReviews();
            if (inconclusiveReviews == null || inconclusiveReviews.Count() < 1)
            {
                return Ok(inconclusiveIsNull);
            }
            return Ok(inconclusiveReviews);
        }

        [SwaggerOperation(Summary = "Get all users reviews")]
        [Authorize(Roles = "Customer", AuthenticationSchemes = "Bearer")]
        [HttpGet("user/reviews")]
        public ActionResult<IEnumerable<Review>> PostedUserReviews(int? pageNumber, int? pageSize)
        {
            if (pageNumber == null && pageSize == null)
            {
                return Ok(_reviewRepo.GetUserReviews());
            }
            var result = _reviewRepo.GetUserReviews()
                .Skip((int)((pageNumber - 1) * pageSize))
                .Take((int)pageSize);

            return Ok(result);
        }

    }
}
