using System.ComponentModel.DataAnnotations;

namespace src.Entities
{
    public class Admin
    {
        public Guid Id { get; set; }

        [Required]  
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
