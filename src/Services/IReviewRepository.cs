using src.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
     
namespace src.Services
{
    public interface IReviewRepository
    {
        public IQueryable<Review> Reviews { get; }

        Review GetReviewById(Guid id);

        IEnumerable<Review> GetReviews(int pageNumber=0, int pageSize=0);

        Task<List<Review>> GetLawyerReviewsAsync();

        public bool AddReview(Review review);

        // Add more CRUD
    }
}
