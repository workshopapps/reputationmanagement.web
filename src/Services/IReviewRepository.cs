using src.Entities;

namespace src.Services
{
    public interface IReviewRepository
    {
        public IQueryable<Review> Reviews { get; }

        Review GetReviewById(Guid id);

        IEnumerable<Review> GetReviews();

        public bool AddReview(Review review);

        // Add more CRUD
    }
}
