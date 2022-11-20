using src.Data;
using src.Entities;
using src.Models.Dtos;


namespace src.Services
{
    public class AzSqlReviewRepo : IReviewRepository
    {
        public readonly ApplicationDbContext _context;

        public IQueryable<Review> Reviews => throw new NotImplementedException();

        public AzSqlReviewRepo(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

       
        public void AddReview(Review review)
        {            
            if (review.UserId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(review));
            }

            if (review == null)
            {
                throw new ArgumentNullException(nameof(review));
            }
            _context.Reviews.Add(review);
          
        }

        public Review GetReviewById(Guid id)
        {
            if (id == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(id));
            }
            return _context.Reviews
              .Where(c => c.UserId == id).FirstOrDefault();
        }

        public IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0)
        {
            return _context.Reviews.Select(x => x).ToList();
        }

        public void DeleteReview(Guid reviewId)
        {
            Review review = GetReviewById(reviewId);
            _context.Reviews.Remove(review);
        }


        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                // dispose resources when needed
            }
        }

        public Review UpdateReviewLawyer(ReviewForUpdateDTO review)
        {
            if (review == null)
            {
                throw new NotImplementedException("No review is passed");
            }
            Review reviewToUpdate = _context.Reviews.FirstOrDefault(r => r.ReviewId == review.ReviewId);

            if (reviewToUpdate == null)
            {
                throw new NullReferenceException("Data not found");
            }

            reviewToUpdate.ReviewString = review.ReviewString;
            reviewToUpdate.Status = review.Status;

            _context.SaveChanges();

            return reviewToUpdate;
        }

        public async Task<List<GetSuccessfulReviewsDto>> GetAllSuccessfulReview()
        {
            var resultModel = new List<GetSuccessfulReviewsDto>();

            var query = await _context.Reviews
                .Where(x => x.Status == StatusType.Successful)
                .Include(x => x.Users)
                .Select(x => new GetSuccessfulReviewsDto()
                {
                    ReviewId = x.ReviewId,
                    Username = x.Users.UserName,
                    Status = x.Status,
                    TimeStamp = x.TimeStamp,
                    Message = x.ReviewString,
                }).ToListAsync();

            if (query != null)
            {
                resultModel = query;
            }

            return resultModel;
        }
    }
}
