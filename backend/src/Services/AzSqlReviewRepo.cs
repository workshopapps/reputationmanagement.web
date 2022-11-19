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
            return Reviews.Select(x => x.ReviewId == id).ToList();
        }

        public IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0)
        {
            if (Reviews == null)
                throw new NullReferenceException("The product repository is empty");
            return Reviews.Select(x => x).ToList();
        }


        public  IEnumerable<Review> GetPendingReviews()
        {
            if (Reviews == null)
                throw new NullReferenceException("The product repository is empty");
           return Reviews.Where(x => x.Status== StatusType.PendingReview).ToList();
        }

    }
}
