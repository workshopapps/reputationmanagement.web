import React from 'react';
import { NavLink } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/Dashboard/logo.png';
import {
	DashboardIcon,
	SettingsIcon,
	SignoutIcon,
	ProfileIcon,
} from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SideBar.styled';
import useLogoutConfirmation from '../../hooks/useLogoutConfirmation';
import LogoutConfirmationModal from '../../modal/logoutConfirmationModal';
import Cookies from 'js-cookie';

const Sidebar = (props) => {
	const handleLogout = () => {
		localStorage.removeItem('auth')
		Cookies.remove('reputeAccessToken')
	}
	const { isShowing, toggle } = useLogoutConfirmation();

	return (
		<StyledSidebar className={props.className}>
			<div>
				<img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
				<img src={logo} alt="" />
			</div>

			<ul>
				<li>
					<NavLink to="/dashboard">
						<DashboardIcon />
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

				<li>
					<button onClick={toggle}>
						<SignoutIcon />
						Signout
					</button>
				</li>
			</ul>

			<LogoutConfirmationModal isShowing={isShowing} hide={toggle} />
		</StyledSidebar>
	);
};

export default Sidebar;
