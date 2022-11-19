using AutoMapper;
using src.Entities;
using src.Models.Dtos;
using System;

namespace src.Profiles
{
    public class AdminProfile : Profile
    {
        public AdminProfile()
        {
            CreateMap<Admin, AddAdminDto>()
                .ReverseMap();
        }
    }
}
