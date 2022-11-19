using src.Entities;
using src.Models.Dtos;

namespace src.Services
{
    public interface IReviewRepository
    {
        public IQueryable<Review> Reviews { get; }

        Review GetReviewById(Guid id);

        IEnumerable<Review> GetReviews();

        public void AddReview(Review review);

        public void DeleteReview(Guid id);

        public void DeleteReviews(Guid userId);

        public bool Save();

        // Add more CRUD
        Review UpdateReviewLawyer(ReviewForUpdateDTO review);
        Task<List<GetSuccessfulReviews>> GetAllSuccessfulReview();
    }
}
