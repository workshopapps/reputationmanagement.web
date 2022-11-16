using src.Data;
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


    }
}
