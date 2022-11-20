using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using src.Entities;
using src.Models;
using src.Models.Dtos;

namespace src.Controllers;

[Route("api/Admin/Auth")]
[ApiController]
public class AdminAccountsController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IConfigurationSection _jwtSettings;

    public AdminAccountsController(IMapper mapper, UserManager<ApplicationUser> userManager, IConfiguration configuration)
    {
        _mapper = mapper;
        _userManager = userManager;
        _jwtSettings = configuration.GetSection("JwtSettings");
    }

    [HttpPost("create_account")]
    public async Task<IActionResult> Register([FromBody] LawyerAccountForCreationDto adminRegisterModel)
    {
        var existingAdmin = await _userManager.FindByEmailAsync(adminRegisterModel.Email);

        if(existingAdmin == null)
        {
            var admin = _mapper.Map<ApplicationUser>(adminRegisterModel);
            var result = await _userManager.CreateAsync(admin, adminRegisterModel.Password);

            if(!result.Succeeded)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, result.Errors);
            }

            await _userManager.AddToRoleAsync(admin, "Administrator");
            return StatusCode(201);
        }

        return BadRequest("Email already in use");
    }

    [HttpPost("Login")]
    public async Task<IActionResult> Login([FromBody] UserLoginModel adminLogin)
    {
        var admin = await _userManager.FindByEmailAsync(adminLogin.Email);

        if (admin != null && await _userManager.CheckPasswordAsync(admin, adminLogin.Password))
            {
                var signingCredentials = GetSigningCredentials();
                var claims = GetClaims(admin);
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