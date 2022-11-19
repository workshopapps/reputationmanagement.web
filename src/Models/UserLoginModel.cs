using System.ComponentModel.DataAnnotations;

namespace src.Models
{
    public class UserLoginModel
    {
            [Required]
            [EmailAddress]
            public string Email { get; set; }
            [Required]
            [DataType(DataType.Password)]
            public string Password { get; set; }
    
    }
}
