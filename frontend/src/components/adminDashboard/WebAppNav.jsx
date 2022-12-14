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

const WebAppNav = (props) => {
	const currentRoute = useLocation();
	const ApiPrivate = useAxiosPrivate();

	useEffect(() => {
		fetchUserDetails();
	}, []);

	const fetchUserDetails = async () => {
		try {
			const response = await ApiPrivate.get('/api/auth/details');
			localStorage.setItem('user', response?.data.businessEntityName);
		} catch (err) {
			console.log(err);
		}
	};

	const userName = localStorage.getItem('user');

	return (
		<StyledWebAppNav>
			{props.pageTitle && <h3>{props.pageTitle}</h3>}

			<LogoContainer>
				<div>
					<img src={menu} alt="" onClick={props.openMenuHandler} />
				</div>
				<div>
					<img src={logo} id="site-logo" alt="" className="lgr" />
				</div>
			</LogoContainer>

			<NavItems>
				<ProfilePictureContainer>
					<p>Hi, {userName}</p>
				</ProfilePictureContainer>
			</NavItems>
		</StyledWebAppNav>
	);
};

export const LawyerWebAppNav = (props) => {

	return (
		<StyledWebAppNav>
			<LogoContainer>
				<div>
					<img src={menu} alt="" onClick={props.openMenuHandler} />
				</div>
				<div>
					<img src={logo} id="site-logo" alt="" className="lgr" />
				</div>
			</LogoContainer>
		</StyledWebAppNav>
	);
};

export default WebAppNav;
