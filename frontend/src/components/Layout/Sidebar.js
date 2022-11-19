import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Dashboard/images/logo.png';
import homeIcon from '../../assets/Dashboard/images/home-icon.svg';
import dashboardIcon from '../../assets/Dashboard/images/dashboard.svg';
import settingsIcon from '../../assets/Dashboard/images/settings.svg';

import { StyledSidebar } from '../Styles/Dashboard/SideBar.styled';

const Sidebar = () => {
	return (
		<StyledSidebar>
			<img src={logo} alt="" />

			<ul>
				<li>
					<NavLink to="/home">
						<img src={homeIcon} alt="" />
						Home
					</NavLink>
				</li>

				<li>
					<NavLink>
						<img src={dashboardIcon} alt="" />
						Dashboard
					</NavLink>
				</li>
			</ul>

			<NavLink>
				<img src={settingsIcon} alt="" />
				Settings
			</NavLink>
		</StyledSidebar>
	);
};

export default Sidebar;
