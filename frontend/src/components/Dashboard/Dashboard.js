import React from 'react';
import Sidebar from '../Layout/Sidebar';
import WebAppNav from '../Layout/WebAppNav';

import {
	StyledDashboard,
	StyledContainer,
	CardContainer,
	InputContainer,
	TableContainer,
} from '../Styles/Dashboard/Dashboard.styled';

import Card from '../Dashboard/Card';
import messaging from '../../assets/Dashboard/images/messaging.svg';
import progress from '../../assets/Dashboard/images/progress.svg';
import completed from '../../assets/Dashboard/images/completed.svg';
import searchBtn from '../../assets/Dashboard/images/search.svg';
import TableData from '../Dashboard/TableData';
import { TableDatas } from '../Dashboard/data/TableData';

const Dashboard = () => {
	return (
		<StyledDashboard>
			<Sidebar />
			<WebAppNav />

			<StyledContainer>
				<h1>Complaints Dashboard</h1>

				<CardContainer>
					<Card img={messaging} title="All Complaints" digit="50" />
					<Card img={progress} title="In Progress" digit="50" />
					<Card img={completed} title="Completed" digit="50" />
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
						{TableDatas.map((data) => {
							return <TableData data={data} key={data.id} />;
						})}
					</tbody>
				</TableContainer>
			</StyledContainer>
		</StyledDashboard>
	);
};

export default Dashboard;
