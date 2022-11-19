using src.Entities;
using src.Models.Dtos;
using src.Models;

namespace src.Services
{
    public interface IReviewRepository
    {
        public IQueryable<Review> Reviews { get; }

        Response<ReviewForDisplayDto> GetReviewById(Guid id);

        IEnumerable<Review> GetReviews(int pageNumber=0, int pageSize=0);

        public bool AddReview(Review review);

        // Add more CRUD
    }
}
