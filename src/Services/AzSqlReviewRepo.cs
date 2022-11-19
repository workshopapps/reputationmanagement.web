using Microsoft.AspNetCore.Mvc;
using src.Data;
using src.Entities;
using src.Models.Dtos;

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

        public IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0)
        {
            if (Reviews == null)
                throw new NullReferenceException("The product repository is empty");
            return Reviews.Select(x => x).ToList();
        }

        public Review UpdateReviewLawyer(ReviewForUpdateDTO review)
        {
            if (review == null)
            {
                throw new NotImplementedException("No review is passed");
            }
            Review reviewToUpdate = _context.Reviews.FirstOrDefault(r => r.ReviewId == review.ReviewId);

            if(reviewToUpdate == null)
            {
                throw new NullReferenceException("Data not found");
            }

            reviewToUpdate.ReviewString = review.ReviewString;
            reviewToUpdate.Status = review.Status;

            _context.SaveChanges();

            return reviewToUpdate;

        }
    }
}
