import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { TableContainer } from '../../components/Dashboard/Styles/Dashboard.styled';
import { LawyerTableData } from '../../components/Dashboard/TableData';
import Sidebarr from '../../components/LawyerDashboard/Sidebarr';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import ARROW_DOWN from '../../assets/images/img/arrow-down.svg';
import ModalLayout from '../../layout/modalLayout';
import LawyerDashboardLayout from '../../layout/lawyerDashboardLayout';

const Requests = () => {
	const username = localStorage.getItem('auth');
	const [showPendingRequests, setShowPendingRequests] = useState(false);
	const [showInProgressRequests, setShowInProgressRequests] = useState(false);
	const [showSuccessfulRequests, setShowSuccessfulRequests] = useState(false);
	const [showFailedRequests, setShowFailedRequests] = useState(false);
	const [inProgressRequests, setInProgressRequests] = useState([]);
	const [successfulRequests, setSuccessfulRequests] = useState([]);
	const [failedRequests, setFailedRequests] = useState([]);
	const [showMyRequests, setShowMyRequests] = useState(false);
	const [tickets, setTickets] = useState([]);
	const [claimedReviews, setClaimedReviews] = useState([]);
	const { setRequestFailed, setErrMessage } = useAppContext();

	const ApiPrivate = useAxiosPrivate();

	const fetchDetails = useCallback(async () => {
		try {
			const response = await ApiPrivate.get('/api/lawyer/PendingReview');
			setTickets(response?.data);
		} catch (err) {
			if (err?.response?.status) {
				setErrMessage("Couldn't fetch your requests");
				setRequestFailed(true);
			}
			console.log(err);
		}
	}, [ApiPrivate, setErrMessage, setRequestFailed]);

	const fetchMyDetails = async () => {
		try {
			const response = await ApiPrivate.get('/api/lawyer/GetClaimedReviews');
			setClaimedReviews(response?.data);
		} catch (err) {
			if (err?.response?.status) {
				setErrMessage("Couldn't fetch your request");
				setRequestFailed(true);
			}
			console.log(err);
		}
	};

	useEffect(() => {
		if (claimedReviews.length) {
			setInProgressRequests(
				claimedReviews.filter((data) => {
					return data.status === 1 || data.status === 2;
				})
			);

			setSuccessfulRequests(
				claimedReviews.filter((data) => {
					return data.status === 3;
				})
			);

			setFailedRequests(
				claimedReviews.filter((data) => {
					return data.status === 4;
				})
			);
		}
	}, [claimedReviews]);
	useEffect(() => {
		fetchDetails();
		fetchMyDetails();
	}, []);

	return (
		<div className="requests">
			<LawyerDashboardLayout>
				<StyledRequest>
					<div
						className="claimed-tickets tickets"
						onClick={() => setShowMyRequests(!showMyRequests)}
					>
						<div className="title">
							<h3>Unclaimed Tickets</h3>
							<img
								src={ARROW_DOWN}
								alt=""
								className={showMyRequests ? 'rotate' : ''}
							/>
						</div>
						{showMyRequests ? (
							tickets.length !== 0 ? (
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
									{tickets.length >= 1 && (
										<tbody>
											{tickets
												? tickets.map((data, index) => {
														return (
															<LawyerTableData
																id={data.reviewId}
																ticketName={data.complainerName}
																lastUpdated={data.lastUpdated}
																priority={data.priority}
																status={data.status}
																key={index}
																no={index}
															/>
														);
												  })
												: ''}
										</tbody>
									)}
								</TableContainer>
							) : (
								<h4>No Requests found</h4>
							)
						) : (
							''
						)}
					</div>
					<div
						className="my-tickets tickets"
						onClick={() => setShowPendingRequests(!showPendingRequests)}
					>
						<div className="title">
							<h3>All My Tickets</h3>
							<img
								src={ARROW_DOWN}
								alt=""
								className={showPendingRequests ? 'rotate' : ''}
							/>
						</div>
						{showPendingRequests ? (
							claimedReviews.length !== 0 ? (
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
									{claimedReviews.length >= 1 && (
										<tbody>
											{claimedReviews.map((data, index) => {
												return (
													<LawyerTableData
														id={data.reviewId}
														ticketName={data.complainerName}
														lastUpdated={data.updatedAt}
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
							) : (
								<h4>No Requests found</h4>
							)
						) : (
							''
						)}
					</div>
					<div
						className="my-tickets tickets"
						onClick={() => setShowInProgressRequests(!showInProgressRequests)}
					>
						<div className="title">
							<h3>Tickets In Progress</h3>
							<img
								src={ARROW_DOWN}
								alt=""
								className={showInProgressRequests ? 'rotate' : ''}
							/>
						</div>
						{showInProgressRequests ? (
							inProgressRequests.length !== 0 ? (
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
									{inProgressRequests.length >= 1 && (
										<tbody>
											{inProgressRequests.map((data, index) => {
												return (
													<LawyerTableData
														id={data.reviewId}
														ticketName={data.complainerName}
														lastUpdated={data.updatedAt}
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
							) : (
								<h4>No Requests Infound</h4>
							)
						) : (
							''
						)}
					</div>
					<div
						className="my-tickets tickets"
						onClick={() => setShowSuccessfulRequests(!showSuccessfulRequests)}
					>
						<div className="title">
							<h3>Successful Tickets</h3>
							<img
								src={ARROW_DOWN}
								alt=""
								className={showSuccessfulRequests ? 'rotate' : ''}
							/>
						</div>
						{showSuccessfulRequests ? (
							successfulRequests.length > 0 ? (
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
									{
										<tbody>
											{successfulRequests
												? successfulRequests.map((data, index) => {
														return (
															<LawyerTableData
																id={data.reviewId}
																ticketName={data.complainerName}
																lastUpdated={data.updatedAt}
																priority={data.priority}
																status={data.status}
																key={index}
																no={index}
															/>
														);
												  })
												: ''}
										</tbody>
									}
								</TableContainer>
							) : (
								<h4>No Successful Requests found</h4>
							)
						) : (
							''
						)}
					</div>
					<div
						className="my-tickets tickets"
						onClick={() => setShowFailedRequests(!showFailedRequests)}
					>
						<div className="title">
							<h3>Failed Tickets</h3>
							<img
								src={ARROW_DOWN}
								alt=""
								className={showFailedRequests ? 'rotate' : ''}
							/>
						</div>
						{showFailedRequests ? (
							failedRequests.length > 0 ? (
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
									{
										<tbody>
											{failedRequests.map((data, index) => {
												return (
													<LawyerTableData
														id={data.reviewId}
														ticketName={data.complainerName}
														lastUpdated={data.updatedAt}
														priority={data.priority}
														status={data.status}
														key={index}
														no={index}
													/>
												);
											})}
										</tbody>
									}
								</TableContainer>
							) : (
								<h4>No Failed Requests found</h4>
							)
						) : (
							''
						)}
					</div>
				</StyledRequest>
			</LawyerDashboardLayout>
		</div>
	);
};

export const StyledRequest = styled.div`
	/* margin-left: 280px; */
	padding-top: 20px;
	.username {
		text-align: right;
		margin-bottom: 40px;
	}
	h4 {
		font-family: Lato;
		font-size: 20px;
		font-weight: 500;
		line-height: 42px;
		letter-spacing: 0em;
		text-align: center;
		color: #292d32;
	}
	h2 {
		font-family: Lato;
		font-size: 28px;
		font-weight: 700;
		line-height: 42px;
		letter-spacing: 0em;
		text-align: left;
		color: #292d32;
		margin-bottom: 50px;
	}
	.tickets {
		width: 100%;
		border-bottom: 1px solid #e4e4e5;
		display: flex;
		flex-direction: column;
		.title {
			display: flex;
			justify-content: space-between;
			padding: 20px;
		}
		h3 {
			font-family: Lato;
			font-size: 22px;
			font-weight: 600;
			line-height: 33px;
			letter-spacing: 0em;
			text-align: left;
			color: #2d1717;
		}
		img {
			transition: all ease-in-out 0.2s;
		}
		.rotate {
			transform: rotate(180deg);
			transition: all ease-in-out 0.2s;
		}
	}
`;

export default Requests;
