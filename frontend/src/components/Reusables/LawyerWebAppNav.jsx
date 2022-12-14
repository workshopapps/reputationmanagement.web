import React from 'react';
// import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/repute_logo.svg';
import menu from '../../assets/images/Dashboard/menu.svg';
import styled from 'styled-components';
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';
// import notificaton from '../../assets/images/Dashboard/notification.svg';
// import search from '../../assets/images/Dashboard/search.svg';
// import human from '../../assets/images/Settings/human.svg';
import {
    StyledWebAppNav,
    NavItems,
    LogoContainer,
} from '../Styles/WebAppNav.styled';
const WebAppNav = (props) => {
    // const currentRoute = useLocation();
    // const ApiPrivate = useAxiosPrivate();
    // useEffect(() => {
    //  fetchUserDetails();
    // }, []);
    // const fetchUserDetails = async () => {
    //  try {
    //      const response = await ApiPrivate.get('/api/auth/details');
    //      localStorage.setItem('auth', response?.data.businessEntityName);
    //  } catch (err) {
    //      console.log(err);
    //  }
    // };
    const email = localStorage.getItem('auth');
    return (
        <StyledWebAppNav>
            <LogoContainer>
                <div>
                    <img src={menu} alt="" onClick={props.openMenuHandler} className="lgrr"/>
                </div>
                <div>
                    <img src={logo} id="site-logo" alt="" className="lgr" />
                </div>
            </LogoContainer>
            <NavItems>
                <ProfilePictureContainerh>
                    <p>Hi, {email}</p>
                </ProfilePictureContainerh>
            </NavItems>
        </StyledWebAppNav>
    );
};
const ProfilePictureContainerh = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    // p{
    //  font-weight: 800;
    // }
    & > div {
        display: flex;
        gap: 16px;
        img {
            width: 24px;
            height: 24px;
        }
        & > img {
            display: none;
        }
    }
    @media (max-width: 1140px) {
        & > img {
            display: none;
        }
        & > div {
            & > img {
                display: block;
            }
        }
    }
`;
export default WebAppNav;