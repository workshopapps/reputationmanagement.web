using src.Data;
using src.Entities;

namespace src.Services
{
    public class AzSqlReviewRepo : IReviewRepository
    {
        public readonly ApplicationDbContext _context;


        public AzSqlReviewRepo(ApplicationDbContext context)
        {
            _context = context;
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
            if(Reviews == null)
                throw new NullReferenceException("The product repository is Empty");
            return Reviews.FirstOrDefault(x => x.ReviewId == id);
        }

        public IEnumerable<Review> GetReviews()
        {
            if (Reviews == null)
                throw new NullReferenceException("The product repository is empty");
            return Reviews.Select(x => x).ToList();
        }


    }
}
