import useLogoutConfirmation from '../../hooks/useLogoutConfirmation';
import LogoutConfirmationModal from '../../modal/logoutConfirmationModal';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/repute_logo.svg';
import {
	DashboardIcon,
	SettingsIcon,
	SignoutIcon,
	RequestIcon,
} from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SideBar.styled';

const Sidebarr = (props) => {
	const { isShowing, toggle } = useLogoutConfirmation();
	const location = useLocation();
	return (
		<StyledSidebar className={props.className}>
			<div>
				<img src={closeBtn} alt="" onClick={props.closeMenuHandler} />
				<NavLink to="/" className="logo">
					<img src={logo} alt="" />
				</NavLink>
			</div>

			<section>
				<ul>
					<li>
						<NavLink to="/lawyer-dashboard">
							<DashboardIcon />
							Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to="/requests">
							<RequestIcon
								fill={location.pathname === '/requests' ? '#F16F04' : '#A5A6A8'}
							/>
							Requests
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
						<button onClick={toggle}>
							<SignoutIcon />
							Signout
						</button>
					</li>
				</ul>
			</section>

			<LogoutConfirmationModal isShowing={isShowing} hide={toggle} />
		</StyledSidebar>
	);
};

export default Sidebarr;
