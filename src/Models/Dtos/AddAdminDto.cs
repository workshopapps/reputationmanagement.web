using System.ComponentModel.DataAnnotations;

namespace src.Models.Dtos
{
    public class AddAdminDto
    {
        public Guid Id { get; set; }    
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}
