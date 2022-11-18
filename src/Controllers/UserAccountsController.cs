using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using src.Entities;
using src.Models;
using src.Models.Dtos;
using Swashbuckle.AspNetCore.Annotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace src.Controllers
{
        [SwaggerTag("For authorization for Customer")]
        [Route("api/auth")]
        [ApiController]
        public class UserAccountsController : ControllerBase
        {
            private readonly IMapper _mapper;
            private readonly UserManager<ApplicationUser> _userManager;
            private readonly IConfigurationSection _jwtSettings;
            public UserAccountsController(IMapper mapper, UserManager<ApplicationUser> userManager, IConfiguration configuration)
            {
                _mapper = mapper;
                _userManager = userManager;
                _jwtSettings = configuration.GetSection("JwtSettings");
            }
            
            [HttpPost("create_account")]
            public async Task<ActionResult> Register([FromBody] src.Models.Dtos.CustomerAccountForCreationDto userModel)
            {
                var user = _mapper.Map<ApplicationUser>(userModel);
                var result = await _userManager.CreateAsync(user, userModel.Password);
                if (!result.Succeeded)
                {
                    return Ok(result.Errors);
                }
                await _userManager.AddToRoleAsync(user, "Customer");
                return StatusCode(201);
            }

            [HttpPost("sign_in")]
            public async Task<IActionResult> Login([FromBody] UserLoginModel userModel)
            {
                var user = await _userManager.FindByEmailAsync(userModel.Email);
                if (user != null && await _userManager.CheckPasswordAsync(user, userModel.Password))
                {
                    var signingCredentials = GetSigningCredentials();
                    var claims = GetClaims(user);
                    var tokenOptions = GenerateTokenOptions(signingCredentials, await claims);
                    var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                    return Ok(token);
                }
                return Unauthorized("Invalid Authentication");
            }


        private SigningCredentials GetSigningCredentials()
        {
            var key = Encoding.UTF8.GetBytes(_jwtSettings.GetSection("securityKey").Value);
            var secret = new SymmetricSecurityKey(key);
            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }
        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var tokenOptions = new JwtSecurityToken(
            issuer: _jwtSettings.GetSection("ValidIssuer").Value,
            audience: _jwtSettings.GetSection("validAudience").Value,
            claims: claims,
            expires: DateTime.Now.AddMinutes(Convert.ToDouble(_jwtSettings.GetSection("expiryInMinutes").Value)),
            signingCredentials: signingCredentials);
            return tokenOptions;
        }
        private async Task<List<Claim>> GetClaims(ApplicationUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email)
            };
            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            return claims;
        }

    }
    
}
