using Microsoft.AspNetCore.Identity;

namespace src.Models
{
    public class ApplicationUser:IdentityUser
    {

        public string PostAddress { get; set; }
        
    }
}
