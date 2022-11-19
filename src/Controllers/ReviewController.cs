using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using src.Models;
using src.Services;
using System.Threading.Tasks;

namespace src.Controllers
{

    [ApiController]
    [Route("api")]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }
        
        [Authorize(Roles = "LAWYER", AuthenticationSchemes = "Bearer")]
        [HttpGet("app/admin/reviews")]
        public async Task<IActionResult> GetAllReviews()
        {
            var reviews = await _reviewRepository.GetLawyerReviewsAsync();
            return Ok(reviews);
        }
    }
}


