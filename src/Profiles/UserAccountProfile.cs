using AutoMapper;

namespace EarlyMan.PL.Profiles
{
    public class UserAccountProfile:Profile
    {
        public UserAccountProfile()
        {
            CreateMap<src.Models.Dtos.CustomerAccountForCreationDto, src.Entities.ApplicationUser>()
                .ForMember(x => x.UserName, opt => opt.MapFrom(source => source.BusinessEntityName));
            CreateMap<src.Models.Dtos.LawyerAccountForCreationDto, src.Entities.ApplicationUser>()
                .ForMember(x => x.UserName, opt => opt.MapFrom(source => source.FirstName+ " " + source.LastName)); ;
        }
    }
}
