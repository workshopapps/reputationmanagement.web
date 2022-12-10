import React, {useState, useCallback, useEffect} from 'react';
import Accordion from './Accordion';
import Sidebarr from '../../components/LawyerDashboard/Sidebarr';
import hamburger from '../../assets/images/hamburger.svg';
import x from '../../assets/images/x.svg';
import logo from '../../assets/images/logo.png';
import Menu from '../LawyerDashboard/MobileMenu';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/images/searchIcon.png';
import notificationsIcon from '../../assets/images/notificationsIcon.svg';
import profileImg from '../../assets/images/profileImg.svg';
import useAppContext from '../../hooks/useAppContext'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { TableContainer } from '../../components/Dashboard/Styles/Dashboard.styled';
import { LawyerTableData } from '../../components/Dashboard/TableData';


export default function Requests() {
    const [menuActive, setMenuActive] = useState(false);
	const [myTickets, setMyTickets] = useState([]);
	const [unclaimedTickets, setUnclaimedTickets] = useState([]);

	const ApiPrivate = useAxiosPrivate();
	const { setRequestFailed, setErrMessage } = useAppContext();

	const fetchTickets = useCallback(async() => {
		try{
			const response = await ApiPrivate.get('/lawyer/GetClaimedReviews')
			setMyTickets(response?.data)
			console.log(response)
		}
		catch(err){
			if ( err?.response?.status ){
				setErrMessage('Unable to retrieve data')
				setRequestFailed(true)
			}
			console.log(err)

		}
	},[ ApiPrivate, setErrMessage, setRequestFailed ])

	const fetchUnclaimedTickets = useCallback(async() => {
		try{
			const response = await ApiPrivate.get('/lawyer/reviews?pageNumber=0&pageSize=100')
			setUnclaimedTickets(response?.data)
			console.log(response)
		}
		catch(err){
			if ( err?.response?.status ){
				setErrMessage('Unable to retrieve data')
				setRequestFailed(true)
			}
			console.log(err)

		}
	},[ ApiPrivate, setErrMessage, setRequestFailed ])


	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	useEffect(() => {
		fetchTickets();
		fetchUnclaimedTickets();
	}, []);

    return (
        <div className="h-screen flex relative">
            <Sidebarr />
            <div className='inline-flex flex-col w-full lg:w-[75%] relative md:absolute right-0'>
                <div className="flex justify-between fixed md:static items-center w-full px-5 h-[12vh] bg-white z-10 border-b md:border-none">
					<form
						action=""
						className="hidden md:flex items-center border rounded-md overflow-hidden h-[40px] w-2/5"
					>
						<img src={searchIcon} alt="" className="px-2 h-[24px]" />
						<input
							type="text"
							placeholder="Search for anything..."
							className="outline-none px-2"
						/>
					</form>

					<button className="flex md:hidden" onClick={toggleMenu}>
						<img src={menuActive ? x : hamburger} alt="" className="w-[25px]" />
					</button>

					<Link to="/" className="w-[30%] sm:w-[20%] h-auto flex md:hidden">
						<img src={logo} className="" alt="" />
					</Link>

					<div className="flex items-center">
						<img
							src={searchIcon}
							alt=""
							className="flex md:hidden mr-2 w-[20px]"
						/>
						<img src={notificationsIcon} alt="" />
						<img src={profileImg} alt="" className="ml-4 hidden md:flex" />
					</div>
				</div>

				{menuActive && <Menu />}

				<div className="p-5 absolute md:static top-[15vh] left-0 w-full">
					<h1 className='text-2xl font-bold mb-5'>Requests</h1>
					
					<div>
						<Accordion
							title='My Tickets'
							content={
								<div className="w-full overflow-x-auto my-2">
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
								{myTickets.length >= 1 && (
									<tbody>
										{myTickets ?
											myTickets.map((data, index) => {
												return (
													<LawyerTableData id={data.reviewId} ticketName={data.complainerName} lastUpdated={data.lastUpdated} priority={data.priority} status={data.status} key={index} no={index} />
												)
											})
											:
											<p className='font-semibold mx-2'>No claimed tickets</p>
										}
									</tbody>
								)}
							</TableContainer>
								</div>
							} 
						/>

						<Accordion 
							title='Unclaimed Tickets'
							content={
								<div className="w-full overflow-x-auto my-2">
								<TableContainer>
								<thead>
									<tr>
										<th>No</th>
										<th>Priority</th>
										<th>Ticket Name</th>
										<th>Status</th>
										<th>Last Updated</th>
										<th></th>
										<th></th>
									</tr>
								</thead>
								{unclaimedTickets.length >= 1 && (
									<tbody>
										{unclaimedTickets ?
											unclaimedTickets.map((data, index) => {
												return (
												<LawyerTableData  id={data.reviewId} ticketName={data.complainerName} lastUpdated={data.lastUpdated} priority={data.priority} status={data.status} key={index} no={index} unclaimed
												
												/>
												)
											})
											:
											<p className='font-semibold mx-2'>No unclaimed tickets</p>
										}
									</tbody>
								)}
							</TableContainer>
								</div>
							}
						/>
					</div>
				</div>
            </div>
        </div>
    )
}