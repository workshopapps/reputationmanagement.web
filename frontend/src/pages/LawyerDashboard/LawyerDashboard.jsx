import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/images/searchIcon.png';
import notificationsIcon from '../../assets/images/notificationsIcon.svg';
import profileImg from '../../assets/images/profileImg.svg';
import lineChart from '../../assets/images/lineChart.svg';
import arrowDown from '../../assets/images/arrowDown.svg';
import arrowUp from '../../assets/images/arrowUp.svg';
import requestsIcon from '../../assets/images/requestsIcon.svg';
import hamburger from '../../assets/images/hamburger.svg';
import x from '../../assets/images/x.svg';
import logo from '../../assets/images/logo.png';
import Menu from './MobileMenu';
import { useEffect } from 'react';
import Sidebarr from '../../components/LawyerDashboard/Sidebarr';
import { TableContainer } from '../../components/Dashboard/Styles/Dashboard.styled';
import { LawyerTableData } from '../../components/Dashboard/TableData';
import useAppContext from '../../hooks/useAppContext';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styled from 'styled-components';
import green from './assets/green.svg'
import yellow from './assets/yellow.svg'
import red from './assets/red.svg'
import LawyerDashboardLayout from '../../layout/lawyerDashboardLayout';


function LawyerDashboard() {
	const [tickets, setTickets] = useState([]);
	const { setRequestFailed, setErrMessage } = useAppContext();
	const [ successfulRequestNo, setSuccessfulRequestNo ] = useState(0)
	const [ pendingRequestNo, setPendingRequestNo ] = useState(0)
	const [ failedRequestNo, setFailedRequestNo ] = useState(0);

	const [searchTicket, setSearchTicket] = useState('');

	const ApiPrivate = useAxiosPrivate();

	const fetchDetails = async () => {
		try {
			const response = await ApiPrivate.get('/lawyer/PendingReview');
			const successfulRequest = await ApiPrivate.get('/lawyer/GetReviewByStatus?status=3')
			const inProgressResponse = ApiPrivate.get('/lawyer/GetReviewByStatus?status=2')
			const pendingResponse = ApiPrivate.get('/lawyer/GetReviewByStatus?status=1')
			const failedResponse = ApiPrivate.get('/lawyer/GetReviewByStatus?status=4')
			setSuccessfulRequestNo(successfulRequest?.data?.length)
			console.log(pendingResponse?.data)
			console.log(inProgressResponse?.data)
			setPendingRequestNo( pendingResponse?.data?.length ? pendingResponse.data.length : 0 + inProgressResponse?.data?.length ? inProgressResponse.data.length : 0 )
			setFailedRequestNo(failedResponse?.data?.length ? failedResponse.data.length : 0)
			setTickets(response?.data);
			console.log(response);
		} catch (err) {
			if (err?.response?.status === 403) {
				setErrMessage("You're not authorised to view this page");
				setRequestFailed(true);
			}
			else{
				setErrMessage("Server  error");
				setRequestFailed(true);
			}
			console.log(err);
		}
	}

	useEffect(() => {
		fetchDetails();
	}, []);

	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const email = localStorage.getItem('auth');
	return (
		<div className="h-screen flex relative">
			<LawyerDashboardLayout>

			{/* <StyledDashboard className="inline-flex flex-col w-full relative right-0"> */}
				{/* <StyledNav className="flex justify-between fixed md:static items-center w-full px-5 py-5 bg-white z-10 border-b md:border-none"> */}
					{/* <div className="hidden md:flex items-center border rounded-md overflow-hidden h-[40px] w-2/5">
						<img src={searchIcon} alt="" className="px-2 h-[24px]" />
						<input
							type="text"
							placeholder="Search for anything..."
							className="outline-none px-2"
							value={searchTicket}
							onChange={(e) => setSearchTicket(e.target.value)}
						/>
					</div>

					<button className="flex md:hidden small" onClick={toggleMenu}>
						<img src={menuActive ? x : hamburger} alt="" className="w-[25px]" />
					</button> */}
{/* 
					<Link
						to="/"
						className="w-[30%] sm:w-[20%] h-auto flex md:hidden small"
					>
						<img src={logo} className="" alt="" />
					</Link> */}

					{/* <div className="flex items-center">
						<p>Hi, {email}</p>
					</div> */}
				{/* </StyledNav> */}

				{/* {menuActive && <Menu />} */}

				{/* <div className="p-5 absolute md:static md:pt-0 pt-24 left-0 w-full"> */}
					<StyledCardWrapper className="flex justify-center flex-wrap">
						<div className="w-full mx-2 sm:w-[250px] md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border my-2 p-5 rounded-md">
							<img src={requestsIcon} alt="" />
							<h3 className="mt-2 mb-3 text-[22px] font-[600px]">
								Total requests
							</h3>
							<span className="text-[45px] font-semibold">
								{successfulRequestNo + failedRequestNo + pendingRequestNo }
							</span>
						</div>

						<div className="w-[47%] card overflow-hidden mx-1 sm:w-[250px] md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border p-2 my-2 md:p-5 rounded-md">
							<h3 className="mt-8 mb-3 text-[22px] font-[600px]">
								Successful removals
							</h3>
							<div className="flex justify-between w-full">
								<div>
									<span className="text-[45px] font-semibold">{successfulRequestNo}</span>
									<div className="flex text-[#32D583]">
										+{successfulRequestNo} <img src={arrowUp} alt="" />
									</div>
								</div>

								<img src={lineChart} alt="" />
							</div>
						</div>

						<div className="w-[47%] card overflow-hidden sm:w-[250px] mx-1 md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border p-2 my-2 md:p-5 rounded-md">
							<h3 className="mt-8 mb-3 text-[22px] font-[600px]">
								Failed removals
							</h3>
							<div className="flex justify-between w-full">
								<div>
									<span className="text-[45px] font-semibold">{failedRequestNo}</span>
									<div className="flex text-[#FF718B]">
										-{failedRequestNo} <img src={arrowDown} alt="" />
									</div>
								</div>

								<img src={lineChart} alt="" />
							</div>
						</div>
					</StyledCardWrapper>
					<StyledBody>
						<div className="top">
							<StyledP>Statistics</StyledP>
							<Styledh3>Monthly activity</Styledh3>
							<hr />

							<StyledC>
							<div className="one">
								<img src={green} alt="" />
								<div className="text">
								Successful
								</div>
							</div>
							<div className="two">
								<p>{successfulRequestNo}</p>
							</div>
							
							</StyledC>


							<StyledC>
							<div className="one">
								<img src={yellow} alt="" />
								<div className="text">
								In Progress
								</div>
							</div>
							<div className="two">
								<p>{pendingRequestNo}</p>
							</div>
							
							</StyledC>


							<StyledC>
							<div className="one">
								<img src={red} alt="" />
								<div className="text">
								Failed
								</div>
							</div>
							<div className="two">
								<p>{failedRequestNo}</p>
							</div>
							
							</StyledC>
						</div>

						{/* <div className="flex flex-col items-center mt-5 w-full"> */}
						{/* <div className="w-full"> */}
						{/* <h2
									className="text-xl font-[600] mb-2 hidden md:flex"
									style={{ fontSize: '30px', marginBottom: '20px' }}
								>
									Current Tickets
								</h2> */}
						{/* <TableContainer>
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
									{tickets.length >= 1 && (
										<tbody>
											{tickets
												? tickets
														.filter((data) => {
															if (searchTicket === '') {
																return data;
															} else if (
																data.ticketName
																	.toLowerCase()
																	.includes(searchTicket.toLowerCase())
															) {
																return data;
															}

															return data;
														})
														.map((data, index) => {
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
									)}
								</TableContainer> */}

						{/* ........................  */}
						{/* <div className="w-full overflow-x-auto my-2">
								<table className="w-full">
									<tbody>
										<tr className="bg-gray-200 border-b">
											<th className="p-4 text-left">No</th>
											<th className="p-4 text-left">Title</th>
											<th className="p-4 text-left">Priority</th>
											<th className="p-4 text-left">Due Date</th>
											<th className="p-4 text-left">Last Updated</th>
										</tr>
										{tickets.map((t, idx) => {
											return (
												<tr key={idx} className="border-b">
													<td className="p-3">{t.no}</td>
													<td className="p-3">{t.title}</td>
													<td className="p-3">
														<img src={t.priority} alt="" />
													</td>
													<td className="p-3">
														<img src={t.dueDate} alt="" />
													</td>
													<td className="p-3">
														<span className="text-gray-400">
															{t.lastUpdated}
														</span>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div> */}
						{/* </div> */}

						{/* <div className="py-5 border rounded-lg ml-0 md:ml-3 my-2">
							<div className="pb-5 border-b mx-6">
								<p className="text-gray-500 text-[12px]">Statistics</p>
								<p className="text-[14px] font-[500]">Monthly activity</p>
							</div>

							<img src={doughnut} alt="" />

							<div className="mx-6">
								<div className="flex justify-between w-full">
									<img src={successful} alt="" />
									<span className="text-gray-500">20</span>
								</div>
								<div className="flex justify-between w-full">
									<img src={progress} alt="" />
									<span className="text-gray-500">4</span>
								</div>
								<div className="flex justify-between w-full">
									<img src={failed} alt="" />
									<span className="text-gray-500">3</span>
								</div>
							</div>
						</div> */}
						{/* </div> */}
					</StyledBody>

					{/* <StyledCardWrapper className="flex justify-center flex-wrap">
						<div className="w-full mx-2 sm:w-[250px] md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border my-2 p-5 rounded-md">
							<img src={requestsIcon} alt="" />
							<h3 className="mt-2 mb-3 text-[22px] font-[600px]">
								Total requests
							</h3>
							<span className="text-[45px] font-semibold">
								{tickets.length || 0}
							</span>
						</div>

						<div className="w-[47%] card overflow-hidden mx-1 sm:w-[250px] md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border p-2 my-2 md:p-5 rounded-md">
							<h3 className="mt-8 mb-3 text-[22px] font-[600px]">
								Successful removals
							</h3>
							<div className="flex justify-between w-full">
								<div>
									<span className="text-[45px] font-semibold">0</span>
									<div className="flex text-[#32D583]">
										+0 <img src={arrowUp} alt="" />
									</div>
								</div>

								<img src={lineChart} alt="" />
							</div>
						</div>

						<div className="w-[47%] card overflow-hidden sm:w-[250px] mx-1 md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border p-2 my-2 md:p-5 rounded-md">
							<h3 className="mt-8 mb-3 text-[22px] font-[600px]">
								Failed removals
							</h3>
							<div className="flex justify-between w-full">
								<div>
									<span className="text-[45px] font-semibold">0</span>
									<div className="flex text-[#FF718B]">
										-0 <img src={arrowDown} alt="" />
									</div>
								</div>

								<img src={lineChart} alt="" />
							</div>
						</div>
					</StyledCardWrapper> */}
				{/* </div> */}
			{/* </StyledDashboard> */}
			</LawyerDashboardLayout>
		</div>
	);
}

const StyledC = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
	.one{
		display: flex;
		align-items: center;
		img{
			margin-right: 10px;
		}
	}
`

const StyledBody = styled.div`
	display: block;
	border: 1px solid #e5e5ef;
	height: 50vh;
	padding: 30px;
	margin: 20px 0;
	border-radius: 13.41px;
	hr{
		margin-top: 10px;
	}
`;
const StyledP = styled.div`
	color: #a5a6a8;
	
`;
const Styledh3 = styled.div`
	font-weight: 700;
	
`;

const StyledDashboard = styled.div`
	margin-left: 300px;
	max-width: 1351px;
	@media (max-width: 1140px) {
		width: 100% !important;
		margin-left: 0;
	}
`;
const StyledNav = styled.div`
	@media (max-width: 1140px) {
		.small {
			display: flex !important;
		}
		.hidden {
			display: none !important;
		}
	}
`;
const StyledCardWrapper = styled.div`
	display: flex;
	@media (max-width: 938px) {
		flex-wrap: wrap;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		.card {
			width: 100% !important;
		}
	}
`;
export default LawyerDashboard;