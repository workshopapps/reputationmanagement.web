import React, { useCallback } from 'react';
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
import message from '../../assets/images/Dashboard/message.svg';
import Card from './Card';
import messaging from '../../assets/images/Dashboard/messaging.svg';
import progress from '../../assets/images/Dashboard/progress.svg';
import completed from '../../assets/images/Dashboard/completed.svg';
import searchBtn from '../../assets/images/Dashboard/search.svg';
import TableData from './TableData';
import { NavLink } from 'react-router-dom';
import useAppContext from '../../hooks/useAppContext';
import { useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
	const { setRequestFailed, setAllRequests, setErrMessage } = useAppContext();
	const [ unauthorized, setUnauthorized ] = useState(false)

	const ApiPrivate = useAxiosPrivate();

	const fetchAllRequests = useCallback(async () => {
		try {
			const response = await ApiPrivate.get(
				'/api/reviews?pageNumber=0&pageSize=100'
			);
			setAllRequests(response?.data);
		} catch (err) {
			console.log(err);
			err.response.status === 401 && setUnauthorized(true)
			setErrMessage("Couldn't fetch requests");
			setRequestFailed(true);
		}
	}, [ApiPrivate, setAllRequests, setErrMessage, setRequestFailed]);

	useEffect(() => {
		const interval = setInterval(() => {
			!unauthorized && fetchAllRequests();
		}, 5000);
		return () => clearTimeout(interval);
	}, [unauthorized]);

	useEffect(() => {
		fetchAllRequests();
	}, [fetchAllRequests]);

	const [openMenu, setOpenMenu] = useState(false);
	const [searchTicket, setSearchTicket] = useState('');
	const { allRequests } = useAppContext();
	return (
		<StyledDashboard>
			<ToastContainer/>
			<GlobalStyles />

			<Sidebar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
			<WebAppNav openMenuHandler={() => setOpenMenu(true)} />

			<StyledContainer>
				<Header>
					<h1>Complaints Dashboard</h1>
					<NavLink to="/request-form" style={{ whiteSpace: 'nowrap'}}>
						<img src={message} alt="" />
						New Request
					</NavLink>
				</Header>

				<CardContainer>
					<Card
						img={messaging}
						title="All Complaints"
						digit={allRequests ? allRequests.length : '0'}
					/>
					<CardSemiWrapper>
						<Card
							img={progress}
							title="In Progress"
							digit={
								allRequests
									? allRequests.filter((data) => {
											return data.status === 1 || data.status === 2;
									  }).length
									: '0'
							}
						/>
						<Card
							img={completed}
							title="Completed"
							digit={
								allRequests
									? allRequests.filter((data) => {
											return data.status === 3 || data.status === 5;
									  }).length
									: '0'
							}
						/>
					</CardSemiWrapper>
				</CardContainer>

				<InputContainer>
					<img src={searchBtn} alt="search" />
					<input
						type="search"
						placeholder="Search for anything..."
						onChange={(event) => {
							setSearchTicket(event.target.value);
						}}
					/>
				</InputContainer>

				<TableContainer>
					<thead>
						<tr>
							<th>No</th>
							<th>Priority</th>
							<th style={{ whiteSpace: 'nowrap'}}>Ticket Name</th>
							<th>Status</th>
							<th>Last Updated</th>
							<th></th>
						</tr>
					</thead>
					{allRequests.length >= 1 && (
						<tbody>
							{allRequests
								.filter((data) => {
									if (searchTicket === '') {
										return data;
									} else if (
										data.complainerName
											.toLowerCase()
											.includes(searchTicket.toLowerCase())
									) {
										return data;
									}
								})
								.map((data, index) => {
									return (
										<TableData
											id={data.reviewId}
											ticketName={data.complainerName}
											lastUpdated={data.lastUpdated}
											priority={data.priority}
											status={data.status}
											key={index}
											no={index}
										/>
									);
								})}
						</tbody>
					)}
				</TableContainer>
				{allRequests.length < 1 && (
					<p className="noRequest"> No Request Yet! </p>
				)}
			</StyledContainer>
		</StyledDashboard>
	);
};

export default Dashboard;
