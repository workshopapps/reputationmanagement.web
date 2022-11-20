using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using src.Entities;

namespace src.Models.Dtos
{
    public class GetSuccessfulReviewsDto
    {
        public string Email { get; set; }

        public Guid ReviewId { get; set; }

        public DateTime TimeStamp { get; set; }

        public StatusType Status { get; set; }

        public string Message { get; set; }
    }
}
