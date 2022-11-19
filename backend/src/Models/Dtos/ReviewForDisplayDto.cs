using src.Entities;

namespace src.Models.Dtos
{
    public class ReviewForDisplayDto
    {

        public Guid ReviewId { get; set; }
        public string Email { get; set; }
        public DateTime TimeStamp { get; set; }    
        public string ReviewString { get; set; }
        public StatusType Status { get; set; }
    }
}
