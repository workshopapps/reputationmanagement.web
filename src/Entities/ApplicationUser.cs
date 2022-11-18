using Microsoft.AspNetCore.Identity;

namespace src.Entities
{
    public class ApplicationUser:IdentityUser
    {

        public string PostAddress { get; set; }
        
    }
}
