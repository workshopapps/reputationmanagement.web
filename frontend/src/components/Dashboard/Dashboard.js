import React from 'react';
import Sidebar from '../Reusables/Sidebar';
import WebAppNav from '../Reusables/WebAppNav';
import { useState } from 'react';
import GlobalStyles from './Styles/Global';

import {
	StyledDashboard,
	StyledContainer,
	CardContainer,
	InputContainer,
	TableContainer,
	Header,
	CardSemiWrapper,
} from './Styles/Dashboard.styled';
import Card from './Card';
import messaging from '../../assets/images/Dashboard/messaging.svg';
import progress from '../../assets/images/Dashboard/progress.svg';
import completed from '../../assets/images/Dashboard/completed.svg';
import searchBtn from '../../assets/images/Dashboard/search.svg';
import TableData from './TableData';
import { NavLink } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext'

const Dashboard = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const { allRequests } = useAppContext()
	return (
		<StyledDashboard>
			<GlobalStyles />

			<Sidebar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
			<WebAppNav openMenuHandler={() => setOpenMenu(true)} />

			<StyledContainer>
				<Header>
					<h1>Complaints Dashboard</h1>
					<NavLink to="/request-form">New Request</NavLink>
				</Header>

				<CardContainer>
					<Card img={messaging} title="All Complaints" digit="50" />
					<CardSemiWrapper>
						<Card img={progress} title="In Progress" digit="50" />
						<Card img={completed} title="Completed" digit="50" />
					</CardSemiWrapper>
				</CardContainer>

				<InputContainer>
					<img src={searchBtn} alt="" />
					<input type="search" placeholder="Search for anything..." />
				</InputContainer>

				<TableContainer>
					<thead>
						<tr>
							<th>No</th>
							<th>Priority</th>
							<th>Ticket Name</th>
							<th>Source</th>
							<th>Last Updated</th>
							<th>Status</th>
						</tr>
					</thead>

					<tbody>
						{allRequests.map((data) => {
							return <TableData data={data} key={data.id} />;
						})}
					</tbody>
				</TableContainer>
			</StyledContainer>
		</StyledDashboard>
	);
};

export default Dashboard;
