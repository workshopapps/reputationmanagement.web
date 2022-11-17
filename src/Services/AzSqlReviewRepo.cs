using Microsoft.EntityFrameworkCore;
using src.Data;
using src.DTOS;
using src.Models;

namespace src.Services
{
    public class AzSqlReviewRepo : IReviewRepository
    {
        public readonly ApplicationDbContext _context;

        public AzSqlReviewRepo(ApplicationDbContext context)
        {
            _context = context;
        }


        public IQueryable<Review> Reviews => throw new NotImplementedException();

        public Review GetReviewById(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0)
        {
            throw new NotImplementedException();
        }

        public async Task<List<GetSuccessfulReviews>> GetAllSuccessfulReview()
        {
            var resultModel = new List<GetSuccessfulReviews>();

            var query = await _context.Reviews
                .Where(x => x.Status == StatusType.Successful)
                .Include(x => x.Users)
                .Select(x => new GetSuccessfulReviews()
                {
                    ReviewId = x.ReviewId,
                    Username = x.Users.UserName,
                    UserId = x.UserId,
                    Status = x.Status,
                    TimeStamp = x.TimeStamp,
                    Message = x.Message
                }).ToListAsync();

            if (query != null)
            {
                resultModel = query;
            }

            return resultModel;
        }
    }
}
