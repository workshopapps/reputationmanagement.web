using src.Entities;
using System.ComponentModel.DataAnnotations;

namespace src.Models.Dtos
{
    public class ReviewForCreationDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string ReviewString { get; set; }
        [Required]
        public StatusType Status { get; set; }
    }
}
