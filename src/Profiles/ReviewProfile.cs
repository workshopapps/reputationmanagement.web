using AutoMapper;

namespace EarlyMan.PL.Profiles
{
    public class ReviewProfile : Profile
    {
        public ReviewProfile()
        {
            CreateMap<src.Entities.Review, src.Models.Dtos.ReviewForDisplayDto>();

            
            CreateMap<src.Models.Dtos.ReviewForCreationDto, src.Entities.Review>()
                .ForMember(dest => dest.ReviewId, o => o.MapFrom(guid => Guid.NewGuid()));
            CreateMap<src.Models.Dtos.ReviewForCreationDto, src.Entities.Review>()
                .ForMember(dest => dest.UserId, o => o.MapFrom(guid => Guid.Empty));
            CreateMap<src.Models.Dtos.ReviewForCreationDto, src.Entities.Review>()
                .ForMember(dest => dest.TimeStamp, o => o.MapFrom(time => DateTime.Now));

        }
    }
}