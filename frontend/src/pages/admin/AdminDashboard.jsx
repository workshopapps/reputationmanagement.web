import React, { useState } from 'react';
import { LawyerWebAppNav } from '../../components/adminDashboard/WebAppNav';
import GlobalStyles from '../../components/Dashboard/Styles/Global';

import {
	StyledDashboard,
	StyledContainer,
	InputContainer,
	TableContainer,
	Header,
} from '../../components/Dashboard/Styles/Dashboard.styled';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Dashboard/Card';
import messaging from '../../assets/images/Dashboard/messaging.svg';
import progress from '../../assets/images/Dashboard/progress.svg';
import completed from '../../assets/images/Dashboard/completed.svg';
import searchBtn from '../../assets/images/Dashboard/search.svg';
import AdminSideBar from './adminSideBar';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useEffect } from 'react';
import useAppContext from '../../hooks/useAppContext';
import styled from 'styled-components';

const AdminDashboard = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const ApiPrivate = useAxiosPrivate();
	const [ claimedReview, setClaimedReview ] = useState([])
	const { setErrMessage, setRequestFailed } = useAppContext();

	const fetchdetails = async() => {
		try{
			const response = await ApiPrivate.get('/api/admin/reviews?pageNumber=0&pageSize=100')
			setClaimedReview(response?.data)
		}
		catch(err){
			console.log(err)
			setErrMessage("Couldn't fetch requests")
			setRequestFailed(true)
		}
	}
	useEffect(() => {
		fetchdetails();
		const fetchAgain = setInterval(() => {
			fetchdetails()
		},[5000])
		return () => {
			clearInterval(fetchAgain)
		}
	},[])
	return (
		<StyledDashboard>
			<GlobalStyles />

			<AdminSideBar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
			<LawyerWebAppNav
				openMenuHandler={() => setOpenMenu(true)}
			/>

			<StyledContainer>
				<h2>Overview</h2>
				<CardContainer>
					<Card img={messaging} title="All Complaints" digit={claimedReview.length}/>
					<Card img={progress} title="Pending" 
						digit={
							claimedReview
								? claimedReview.filter((data) => {
										return data.status === 0
									}).length
								: '0'
						}
					/>
					<Card img={progress} title="InProgress" 
						digit={
							claimedReview
								? claimedReview.filter((data) => {
										return data.status === 1 || data.status === 2
									}).length
								: '0'
						}
					/>
					<Card img={completed} title="Completed" 
						digit={
							claimedReview
								? claimedReview.filter((data) => {
										return data.status === 3
									}).length
								: '0'
						}
					/>
					<Card img={completed} title="Failed" 
						digit={
							claimedReview
								? claimedReview.filter((data) => {
										return data.status === 4;
									}).length
								: '0'
						}
					/>
					<Card img={completed} title="Paid" 
						digit={
							claimedReview
								? claimedReview.filter((data) => {
										return data.status === 5;
									}).length
								: '0'
						}
					/>
				</CardContainer>

				{/* <InputContainer>
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
				<p className="noRequest"> No Request Yet! </p> */}
			</StyledContainer>
		</StyledDashboard>
	);
};

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 40px;
	div{
		width: 334px;
		max-width: 90%;
	}
`;

export default AdminDashboard;
