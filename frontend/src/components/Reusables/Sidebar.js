import React from 'react';
import { NavLink } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/Dashboard/logo.png';
import { DashboardIcon, SettingsIcon, HomeIcon } from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SideBar.styled';

const Sidebar = (props) => {
	return (
		<StyledSidebar className={props.className}>
			<img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
			<img src={logo} alt="" />

			<ul>
				<li>
					<NavLink to="/">
						<HomeIcon />
						Home
					</NavLink>
				</li>

				<li>
					<NavLink to="/dashboard">
						<DashboardIcon />
						Dashboard
					</NavLink>
				</li>
			</ul>

			<NavLink to="/">
				<SettingsIcon />
				Settings
			</NavLink>
		</StyledSidebar>
	);
};

export default Sidebar;
