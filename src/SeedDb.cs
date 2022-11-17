using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using src.Models;
using src.Services;

namespace src
{
    public class SeedDb
    {

        private static string Username { get; set; }
        private static string Email { get; set; }
        private static string Password { get; set; }
        private static string Role { get; set; }
        private static string PostAddress { get; set; } = "";

        public static async Task Seed(IApplicationBuilder app, IConfiguration config)
        {
           CreateAdminAccount(app, config).Wait();
           CreateLawyerAccount(app, config).Wait();
           CreateCustomerUserAccount(app, config).Wait();
        }


        public static async Task CreateAdminAccount(IApplicationBuilder app, IConfiguration config)
        {
            // If environment is development enivironment...
            GetAdminCredFromConfig(config);
            using var scope = app?.ApplicationServices.CreateScope();
            UserManager<ApplicationUser> userManager =
            scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            RoleManager<IdentityRole> roleManager =
            scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

           
            
            if (await userManager.FindByNameAsync(Username).ConfigureAwait(true) == null)
            {

                ApplicationUser user = new()
                {

                    UserName = Username,
                    Email = Email,
                    PostAddress = PostAddress,

                };

                IdentityResult result = await userManager
                .CreateAsync(user, Password).ConfigureAwait(true);

                if (result.Succeeded)
                {
                    var addUserToRoleResult = await userManager.AddToRoleAsync(user, Role).ConfigureAwait(true);

                    if (addUserToRoleResult.Succeeded) { scope.Dispose(); }
                    else { throw new InvalidOperationException(); }
                }
               
            }
        }
        public static async Task CreateLawyerAccount(IApplicationBuilder app, IConfiguration config)
        {
            // If environment is development enivironment...
            GetLawyerCredFromConfig(config);
            using var scope = app?.ApplicationServices.CreateScope();
            UserManager<ApplicationUser> userManager =
            scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            RoleManager<IdentityRole> roleManager =
            scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            
            
            if (await userManager.FindByNameAsync(Username).ConfigureAwait(true) == null)
            {

                ApplicationUser user = new()
                {

                    UserName = Username,
                    Email = Email,
                    PostAddress = PostAddress
                    

                };

                IdentityResult result = await userManager
                .CreateAsync(user, Password).ConfigureAwait(true);

                if (result.Succeeded)
                {
                    var addUserToRoleResult = await userManager.AddToRoleAsync(user, Role).ConfigureAwait(true);
                    if (addUserToRoleResult.Succeeded) { scope.Dispose(); }
                    else { throw new InvalidOperationException(); }
                }
               
            }

            // add a review

        }

        public static async Task CreateCustomerUserAccount(IApplicationBuilder app, IConfiguration config)
        {
            // If environment is development enivironment...
            GetCustomerUserCredFromConfig(config);
            using var scope = app?.ApplicationServices.CreateScope();
            UserManager<ApplicationUser> userManager =
            scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

            RoleManager<IdentityRole> roleManager =
            scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            IReviewRepository reviewRepository = scope.ServiceProvider.GetRequiredService<IReviewRepository>();

            if (await userManager.FindByNameAsync(Username).ConfigureAwait(true) == null)
            {
                ApplicationUser user = new()
                {
                    UserName = Username,
                    Email = Email,
                    Id = Guid.NewGuid().ToString(),
                    PostAddress = PostAddress
                };
                IdentityResult result = await userManager
                .CreateAsync(user, Password).ConfigureAwait(true);
                if (result.Succeeded)
                {
                    var addUserToRoleResult = await userManager.AddToRoleAsync(user, Role).ConfigureAwait(true);
                    if (addUserToRoleResult.Succeeded) {  }
                    else { throw new InvalidOperationException(); }
                }
                Review badReview = new() { Email = "baduser@test.com", ReviewString = "Bad product, won't recommend",ReviewId = Guid.NewGuid(), Status = StatusType.PendingReview, UserId = new Guid(user.Id), TimeStamp = DateTime.Now };
                reviewRepository.AddReview(badReview);
                scope.Dispose();
            }

           
        }

        public static void GetAdminCredFromConfig(IConfiguration config)
        {
            if (config is not null)
            {

                Username = config["Data:AdminUser:Username"];
                Email = config["Data:AdminUser:Email"];
                Password = config["Data:AdminUser:Password"];
                Role = config["Data:AdminUser:Role"];
            }
            else
            {
                throw new ArgumentException("Bad input");

            }
        }


        public static void GetCustomerUserCredFromConfig(IConfiguration config)
        {
            if (config is not null)
            {

                Username = config["Data:CustomerUser:Username"];
                Email = config["Data:CustomerUser:Email"];
                Password = config["Data:CustomerUser:Password"];
                Role = config["Data:CustomerUser:Role"];
                PostAddress = config["Data:CustomerUser:PostAddress"];
            }
            else
            {
                throw new ArgumentException("Bad input");

            }
        }

        public static void GetLawyerCredFromConfig(IConfiguration config)
        {
            if (config is not null)
            {

                Username = config["Data:LawyerUser:Username"];
                Email = config["Data:LawyerUser:Email"];
                Password = config["Data:LawyerUser:Password"];
                Role = config["Data:LawyerUser:Role"];
            }
            else
            {
                throw new ArgumentException("Bad input");

            }
        }
    }
}
