import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/Dashboard/logo.png';
import menu from '../../assets/images/Dashboard/menu.jpg';
import message from '../../assets/images/Dashboard/message.svg';

import notificaton from '../../assets/images/Dashboard/notification.svg';
import search from '../../assets/images/Dashboard/search.svg';
import human from '../../assets/images/Settings/human.svg';

import {
	StyledWebAppNav,
	NavItems,
	ProfilePictureContainer,
	LogoContainer,
} from '../Styles/WebAppNav.styled';

const WebAppNav = (props) => {
	const currentRoute = useLocation();
	return (
		<StyledWebAppNav>
			{ (currentRoute.pathname === '/request-form' ||  currentRoute.pathname === '/request-form') && <h3>Request Removal Form</h3>}
			<LogoContainer>
				<div>
					<img src={menu} alt="" onClick={props.openMenuHandler} />
				</div>
				<div>
					<img src={logo} alt="" />
				</div>
			</LogoContainer>

			<NavItems>
				<NavLink to="/request-form">
					<img src={message} alt="" />
					New Request
				</NavLink>
				<ProfilePictureContainer>
					<div>
						<img src={search} alt="" />
						<div>
							<img src={notificaton} alt="" />
						</div>
					</div>

					<img src={human} alt="" />
					{ (currentRoute.pathname === '/request-form' ||  currentRoute.pathname === '/request-form') && <p>Mr Team Socket</p>}
				</ProfilePictureContainer>
			</NavItems>
		</StyledWebAppNav>
	);
};

export default WebAppNav;
