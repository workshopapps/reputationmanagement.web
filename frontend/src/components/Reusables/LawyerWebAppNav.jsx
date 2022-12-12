import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/repute_logo.svg';
import menu from '../../assets/images/Dashboard/menu.svg';
import message from '../../assets/images/Dashboard/message.svg';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

// import notificaton from '../../assets/images/Dashboard/notification.svg';
// import search from '../../assets/images/Dashboard/search.svg';
// import human from '../../assets/images/Settings/human.svg';

import {
	StyledWebAppNav,
	NavItems,
	ProfilePictureContainer,
	LogoContainer,
} from '../Styles/WebAppNav.styled';

const LawyerWebAppNav = (props) => {
	const currentRoute = useLocation();

	const userName = localStorage.getItem('auth');

	return (
		<StyledWebAppNav>
			{(currentRoute.pathname === '/request-form' ||
				currentRoute.pathname === '/request-form') && (
				<h3>Request Removal Form</h3>
			)}
			<LogoContainer>
				<div>
					<img src={menu} alt="" onClick={props.openMenuHandler} />
				</div>
				<div>
					<img src={logo} id="site-logo" alt="" />
				</div>
			</LogoContainer>

			<NavItems>
				{currentRoute.pathname === '/request-form' ||
				currentRoute.pathname === '/request-form' ? (
					''
				) : (
					<NavLink to="/request-form">
						<img src={message} alt="" />
						New Request
					</NavLink>
				)}

				<ProfilePictureContainer>
					<p>Hi, {userName}</p>
				</ProfilePictureContainer>
			</NavItems>
		</StyledWebAppNav>
	);
};

export default LawyerWebAppNav;
