import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Dashboard/logo.png';
import menu from '../../assets/images/Dashboard/menu.jpg';
import message from '../../assets/images/Dashboard/message.svg';

import notificaton from '../../assets/images/Dashboard/notification.svg';
import profilePhoto from '../../assets/images/Dashboard/profile photo.jpg';
import search from '../../assets/images/Dashboard/search.svg';

import {
	StyledWebAppNav,
	NavItems,
	ProfilePictureContainer,
	LogoContainer,
} from '../Styles/WebAppNav.styled';

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

			<NavItems>
				<NavLink to="/requestForm">
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

					<img src={profilePhoto} alt="" />
				</ProfilePictureContainer>
			</NavItems>
		</StyledWebAppNav>
	);
};

export default WebAppNav;
