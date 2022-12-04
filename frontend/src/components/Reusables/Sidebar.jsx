import React from 'react';
import { NavLink } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/Dashboard/logo.png';
import { DashboardIcon, SettingsIcon, ProfileIcon } from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SideBar.styled';
import styled from 'styled-components';
import useLogoutConfirmation from '../../hooks/useLogoutConfirmation';
import LogoutConfirmationModal from '../../modal/logoutConfirmationModal';
import logout from "../../assets/images/logout.svg"

const Sidebar = (props) => {
	

	const {isShowing, toggle} = useLogoutConfirmation();

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
					<StyledLogoutButton onClick={toggle}>
					<img src={logout} alt="logout"/>Logout
					</StyledLogoutButton>
				</li>

				<LogoutConfirmationModal isShowing={isShowing} hide={toggle} />
			</ul>

			

		</StyledSidebar>
	);
};

const StyledLogoutButton = styled.div`
	//position: absolute;
	display: flex;
	align-items: center;
	color: gray;
	padding: 10px 55px;
	max-width: 100%;
	margin-left: 2rem;
	border-radius: 3px;
	border: none;
	text-align: center;
	cursor: pointer;

	img {
		margin-right: 5px;
	}
`;
export default Sidebar;
