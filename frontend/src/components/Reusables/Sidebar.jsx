import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/Dashboard/logo.png';
import { DashboardIcon, SettingsIcon, SignoutIcon } from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SideBar.styled';
import styled from 'styled-components';
import useLogoutConfirmation from '../../hooks/useLogoutConfirmation';
import LogoutConfirmationModal from '../../modal/logoutConfirmationModal';


const Sidebar = (props) => {
	

	const {isShowing, toggle} = useLogoutConfirmation();

	return (
		<StyledSidebar className={props.className}>
			<div>
				<img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
				<img src={logo} alt="" />
			</div>

			<ul>
				<li>
					<NavLink to="/dashboard">
						<DashboardIcon  />
						Dashboard
					</NavLink>
				</li>

				<li>
					<NavLink to="/profile">
						<ProfileIcon />
						profile
					</NavLink>
				</li>
				<li>
					<NavLink to="/settings">
						<SettingsIcon />
						Settings
					</NavLink>
				</li>
			</ul>
			<ul style={{ maxHeight: '50px'}}>
				<li>
					<StyledLogoutButton onClick={toggle}>
						Logout
					</StyledLogoutButton>
				</li>

				<LogoutConfirmationModal isShowing={isShowing} hide={toggle} />
			</ul>

			

		</StyledSidebar>
	);
};

export default Sidebar;
