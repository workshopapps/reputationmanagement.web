import React, { useState } from 'react';
import Sidebar from '../../components/adminDashboard/Sidebar';
import WebAppNav from '../../components/adminDashboard/WebAppNav';
import GlobalStyles from '../../components/Dashboard/Styles/Global';

import {
	StyledDashboard,
	StyledContainer,
	CardContainer,
	InputContainer,
	TableContainer,
	Header,
	CardSemiWrapper,
} from '../../components/Dashboard/Styles/Dashboard.styled';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Dashboard/Card';
import messaging from '../../assets/images/Dashboard/messaging.svg';
import progress from '../../assets/images/Dashboard/progress.svg';
import completed from '../../assets/images/Dashboard/completed.svg';
import searchBtn from '../../assets/images/Dashboard/search.svg';

const AdminDashboard = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<StyledDashboard>
			<GlobalStyles />

			<Sidebar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
			<WebAppNav
				pageTitle="Admin Dashboard"
				openMenuHandler={() => setOpenMenu(true)}
			/>

			<StyledContainer>
				<Header>
					<NavLink to="/request-form">New Request</NavLink>
				</Header>

				<CardContainer>
					<Card img={messaging} title="All Complaints" />
					<CardSemiWrapper>
						<Card img={progress} title="In Progress" />
						<Card img={completed} title="Completed" />
					</CardSemiWrapper>
				</CardContainer>

				<InputContainer>
					<img src={searchBtn} alt="search" />
					<input type="search" placeholder="Search for anything..." />
				</InputContainer>

				<TableContainer>
					<thead>
						<tr>
							<th>No</th>
							<th>Priority</th>
							<th>Ticket Name</th>
							<th>Status</th>
							<th>Last Updated</th>
							<th></th>
						</tr>
					</thead>
					<tbody></tbody>
				</TableContainer>
				<p className="noRequest"> No Request Yet! </p>
			</StyledContainer>
		</StyledDashboard>
	);
};

export default AdminDashboard;
