
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace src.Models
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
        [Required]
        public string ReviewString { get; set; }
        [Required]
        public StatusType Status { get; set; }
        
    }

    public enum StatusType
    {
        PendingReview = 0,
        Successful = 1,
        Inconclusive = 2,   
        Failed = 3, 
    }
}
