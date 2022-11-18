using System.ComponentModel.DataAnnotations;

namespace src.Models
{
    public class CustomerAccountForCreationDto
    { 
        [Required]
        public string UserName { get; set; }
        
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
