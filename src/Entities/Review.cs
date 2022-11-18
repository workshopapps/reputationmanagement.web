
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace src.Entities
{
    public class Review
    {

        [Key]
        [Required]
        public Guid ReviewId { get; set; }
        [Required]
        public Guid UserId { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public DateTime TimeStamp { get; set; }

        public DateTime TimeStamp { get; set; } 
        [Required]
        public string ReviewString { get; set; }
        [Required]
        public StatusType Status { get; set; }

        [Required]
        public string ReviewString { get; set; }

        public ApplicationUser Users { get; set; }


    }

    public enum StatusType
    {
        PendingReview = 1,
        Successful,
        Inconclusive,
        Failed
    }
}
