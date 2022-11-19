using src.Data;
using src.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace src.Services
{
    public class AzSqlReviewRepo : IReviewRepository
    {
        private readonly ApplicationDbContext _context;


        public AzSqlReviewRepo(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<List<Review>> GetLawyerReviewsAsync()
        {
            var lawyerReviews = await _context.Reviews.Select(codedSamurai => new Review()
            {
                ReviewId = codedSamurai.ReviewId,
                Status = codedSamurai.Status,
                ReviewString = codedSamurai.ReviewString,

            }).ToListAsync();
            return lawyerReviews;
        }
        

        public IQueryable<Review> Reviews { get => _context.Reviews; }

        public bool AddReview(Review review)
        {
            _context.Reviews.Add(review);
            _context.SaveChanges();
            return true;
        }

        public Review GetReviewById(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0)
        {
            throw new NotImplementedException();
        }

        /*public IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0)
        {
           var reviews = _context(codedSamurai => new Review() {

            ReviewId = codedSamurai.Id,
            ReviewString = codedSamurai.ReviewString,
            Status = codedSamurai.Status,
            }).ToListAsync();
                return reviews;
            }*/



    }
}
