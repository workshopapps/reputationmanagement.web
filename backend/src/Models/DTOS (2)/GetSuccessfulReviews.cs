using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using src.Models;

namespace src.DTOS
{
    public class GetSuccessfulReviews
    {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public Guid ReviewId { get; set; }
        public DateTime TimeStamp { get; set; }
        public StatusType Status { get; set; }
        public string Message { get; set; }
    }
}
