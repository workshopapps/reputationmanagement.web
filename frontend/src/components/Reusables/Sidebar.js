import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/Dashboard/logo.png';
import { DashboardIcon, SettingsIcon, ProfileIcon } from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SideBar.styled';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Sidebar = (props) => {
	const router = useNavigate();
	const handleLogout = () => {
		Cookies.remove('repboostAccessToken')
		localStorage.removeItem('auth')
		router('/login')
	}
	return (
		<StyledSidebar className={props.className}>
			<img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
			<img src={logo} alt="" />

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
					<StyledLogoutButton onClick={() => handleLogout()}>
						Logout
					</StyledLogoutButton>
				</li>
			</ul>
		</StyledSidebar>
	);
};

const StyledLogoutButton = styled.div`
	background-color: #233BA9;
	color: #ffffff;
	padding: 10px 55px;
	max-width: 100%;
	margin-left: 2rem;
	border-radius: 3px;
	border: none;
	text-align: center;
`;
export default Sidebar;
