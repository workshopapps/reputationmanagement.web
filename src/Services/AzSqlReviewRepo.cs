using AutoMapper;
using src.Data;
using src.Entities;
using src.Models;
using src.Models.Dtos;
using System.Net;

namespace src.Services
{
    public class AzSqlReviewRepo : IReviewRepository
    {
        public readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public AzSqlReviewRepo(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public IQueryable<Review> Reviews { get => _context.Reviews; }

        public bool AddReview(Review review)
        {
            _context.Reviews.Add(review);
            _context.SaveChanges();
            return true;
        }

        public Response<ReviewForDisplayDto> GetReviewById(Guid id)
        {
          var reviews =   Reviews.Where(x => x.ReviewId.Equals(id)).SingleOrDefault();
            if (reviews is null)
            {
                return Response<ReviewForDisplayDto>.Fail($"Review with id = {id} does not exist", (int)HttpStatusCode.NotFound);
            }
            var reveiwToReturn = _mapper.Map<ReviewForDisplayDto>(reviews);
            return Response<ReviewForDisplayDto>.Success("Review successfully rechieved", reveiwToReturn, (int)HttpStatusCode.OK);
        }

        public IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0)
        {
            if (Reviews == null)
                throw new NullReferenceException("The product repository is empty");
            return Reviews.Select(x => x).ToList();
        }


    }
}
