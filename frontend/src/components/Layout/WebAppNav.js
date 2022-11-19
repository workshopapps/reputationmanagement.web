import React from 'react';

import logo from '../../assets/Dashboard/images/logo.png';
import menu from '../../assets/Dashboard/images/menu.jpg';
import message from '../../assets/Dashboard/images/message.svg';
import notificaton from '../../assets/Dashboard/images/notification.svg';
import profilePhoto from '../../assets/Dashboard/images/profile photo.jpg';
import searchBtn from '../../assets/Dashboard/images/search.svg';

import {
	StyledWebAppNav,
	NavItems,
	ProfilePictureContainer,
} from '../Styles/Dashboard/WebAppNav.styled';

const WebAppNav = () => {
	return (
		<StyledWebAppNav>
			<img src="" alt="" />

			<img src="" alt="" />

			<NavItems>
				<button>
					<img src={message} alt="" />
					New Request
				</button>
				<ProfilePictureContainer>
					<div>
						{/* <img src={searchBtn} alt="" /> */}
						<img src={notificaton} alt="" />
					</div>
					<img src={profilePhoto} alt="" />
				</ProfilePictureContainer>
			</NavItems>
		</StyledWebAppNav>
	);
};

export default WebAppNav;
