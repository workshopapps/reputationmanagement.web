import React from 'react';
import useLogoutConfirmation from '../../hooks/useLogoutConfirmation';
import LogoutConfirmationModal from '../../modal/logoutConfirmationModal';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, SettingsIcon, SignoutIcon } from '../Dashboard/Icons';
import { MdInsertComment } from "react-icons/md"; 
import {StyledSidebarWrapper} from './Sidebar.styled'; 


function Menu(props) {
	const { isShowing, toggle } = useLogoutConfirmation();

	return (
		<div className="h-[90vh] w-full fixed top-[12vh] left-0 z-10 bg-white py-5">
			<StyledSidebarWrapper>
			
			<section>
				<ul>
					<li>
						<NavLink to="/lawyer-dashboard">
							<DashboardIcon />
							Dashboard
						</NavLink>
					</li>
                    <li>
						<NavLink to="/dashboard">
							<MdInsertComment />
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
		</ StyledSidebarWrapper>
		</div>
	);
}

export default Menu;
