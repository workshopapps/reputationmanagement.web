import useLogoutConfirmation from '../../hooks/useLogoutConfirmation';
import LogoutConfirmationModal from '../../modal/logoutConfirmationModal';
import React from 'react';
import { NavLink } from 'react-router-dom';
import closeBtn from '../../assets/images/Dashboard/x.svg';
import logo from '../../assets/images/Dashboard/logo.png';
import { DashboardIcon, SettingsIcon, SignoutIcon } from '../Dashboard/Icons';
import { StyledSidebar } from '../Styles/SideBar.styled';

const Sidebarr = (props) => {
	const { isShowing, toggle } = useLogoutConfirmation();

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
						<NavLink to="/dashboard">
							<DashboardIcon />
							Dashboard
						</NavLink>
					</li>
                    <li>
						<NavLink to="/dashboard">
							<DashboardIcon />
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
