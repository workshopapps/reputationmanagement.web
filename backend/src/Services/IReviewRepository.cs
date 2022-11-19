using src.Entities;
using src.Models;
using src.DTOS;

namespace src.Services
{
    public interface IReviewRepository
    {
        public IQueryable<Review> Reviews { get; }

        Review GetReviewById(Guid id);

        IEnumerable<Review> GetReviews(int pageNumber=0, int pageSize=0);

        public bool AddReview(Review review);

        // Add more CRUD

        Task<List<GetSuccessfulReviews>> GetAllSuccessfulReview();

    }
}
