import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Dashboard/logo.png';
import menu from '../../assets/images/Dashboard/menu.jpg';
import message from '../../assets/images/Dashboard/message.svg';

import notificaton from '../../assets/images/Dashboard/notification.svg';
import profilePhoto from '../../assets/images/Dashboard/profile photo.jpg';
import search from '../../assets/images/Dashboard/search.svg';
import searchBtn from '../../assets/images/Dashboard/search.svg';

import {
    StyledWebAppNav,
    NavItems,
    ProfilePictureContainer,
    LogoContainer,
} from './RequestNav.styled';

import {
    StyledDashboard,
    StyledContainer,
    CardContainer,
    InputContainer,
    TableContainer,
    Header,
    CardSemiWrapper,
} from '../Dashboard/Styles/Dashboard.styled';

const WebAppNav = (props) => {
    return (
        <StyledWebAppNav>
            <LogoContainer>
                <div>
                    <img src={menu} alt="" onClick={props.openMenuHandler} />
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </LogoContainer>
           
                <InputContainer>
                    <img src={searchBtn} alt="" />
                    <input type="search" placeholder="Search for anything..." />
                </InputContainer>
           
            <StyledContainer>
            <NavItems>
                <ProfilePictureContainer>
                    <div>
                        <img src={search} alt="" />
                        <div>
                            <img src={notificaton} alt="" />
                        </div>
                    </div>

                    <img src={profilePhoto} alt="" />
                </ProfilePictureContainer>
            </NavItems>
            </StyledContainer>
        </StyledWebAppNav>
    );
};

export default WebAppNav;
