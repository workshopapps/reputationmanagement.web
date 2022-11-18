using Microsoft.AspNetCore.Authorization;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using src.DTOS;
using src.Entities;
using src.Models;
using src.Models.Dtos;
using src.Services;
using Swashbuckle.AspNetCore.Annotations;

namespace src.Controllers
{

    [ApiController]
    [Route("app")]
    public class HomeController : ControllerBase
    [Authorize(Roles = "Customer", AuthenticationSchemes = "Bearer")]
    [Route("api")]
    public class HomeController:ControllerBase
    {
        public readonly IReviewRepository _reviewRepo;
        public HomeController(IReviewRepository reviewRepo,
            UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
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

            string greetings = "Hello world!";
           
            string greetings = "Hello customer!";
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
