import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/Dashboard/logo.png';
import { DashboardIcon, SettingsIcon, SignoutIcon } from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SidebarDashboard.styled';
import Cookies from 'js-cookie';

const Sidebar = (props) => {
	const router = useNavigate();
	const handleLogout = () => {
		Cookies.remove('repboostAccessToken');
		localStorage.removeItem('auth');
		router('/login', { replace: true });
	};

	return (
		<StyledSidebar className={props.className}>
			<div>
				<img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
				<img src={logo} alt="" />
			</div>

			<section>
				<ul>
					<li>
						<NavLink to="/dashboard">
							<DashboardIcon />
							Dashboard
						</NavLink>
					</li>
				</ul>
				<ul>
					<li>
						<NavLink to="/settings">
							<SettingsIcon />
							Settings
						</NavLink>
					</li>
					<li>
						<button onClick={() => handleLogout()}>
							<SignoutIcon />
							Signout
						</button>
					</li>
				</ul>
			</section>
		</StyledSidebar>
	);
};

export default Sidebar;
