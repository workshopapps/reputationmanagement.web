﻿using src.DTOS;
using src.Models;

namespace src.Services
{
    public interface IReviewRepository
    {
        public IQueryable<Review> Reviews { get; }

        Review GetReviewById(Guid id);

        IEnumerable<Review> GetReviews(int pageNumber = 0, int pageSize = 0);

        // Add more CRUD

        Task<List<GetSuccessfulReviews>> GetAllSuccessfulReview();


    }
}
