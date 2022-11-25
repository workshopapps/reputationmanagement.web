import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/LawyerDashboard/Sidenav';
import searchIcon from '../../assets/images/searchIcon.png';
import notificationsIcon from '../../assets/images/notificationsIcon.svg';
import profileImg from '../../assets/images/profileImg.svg';
import lineChart from '../../assets/images/lineChart.svg';
import arrowDown from '../../assets/images/arrowDown.svg';
import arrowUp from '../../assets/images/arrowUp.svg';
import requestsIcon from '../../assets/images/requestsIcon.svg';
import low from '../../assets/images/low.svg';
import medium from '../../assets/images/medium.svg';
import high from '../../assets/images/high.svg';
import today from '../../assets/images/today.svg';
import thisWeek from '../../assets/images/thisWeek.svg';
import nextWeek from '../../assets/images/nextWeek.svg';
import doughnut from '../../assets/images/doughnut.svg';
import failed from '../../assets/images/failed.svg';
import progress from '../../assets/images/progress.svg';
import successful from '../../assets/images/successful.svg';
import hamburger from '../../assets/images/hamburger.svg';
import x from '../../assets/images/x.svg';
import logo from '../../assets/images/logo.png';
import Menu from './MobileMenu';

function LawyerDashboard() {
	// const [tickets, setTickets] = useState([
	//     {no: '123', title: 'Afrobox Review', priority: high, dueDate: today, lastUpdated: '4 days ago'},
	//     {no: '123', title: 'Afrobox Review', priority: high, dueDate: today, lastUpdated: '4 days ago'},
	//     {no: '123', title: 'Afrobox Review', priority: medium, dueDate: thisWeek, lastUpdated: '4 days ago'},
	//     {no: '123', title: 'Afrobox Review', priority: medium, dueDate: thisWeek, lastUpdated: '4 days ago'},
	//     {no: '123', title: 'Afrobox Review', priority: medium, dueDate: thisWeek, lastUpdated: '4 days ago'},
	//     {no: '123', title: 'Afrobox Review', priority: low, dueDate: nextWeek, lastUpdated: '4 days ago'},
	//     {no: '123', title: 'Afrobox Review', priority: low, dueDate: nextWeek, lastUpdated: '4 days ago'},
	// ]);

	const tickets = [
		{
			no: '123',
			title: 'Afrobox Review',
			priority: high,
			dueDate: today,
			lastUpdated: '4 days ago',
		},
		{
			no: '123',
			title: 'Afrobox Review',
			priority: high,
			dueDate: today,
			lastUpdated: '4 days ago',
		},
		{
			no: '123',
			title: 'Afrobox Review',
			priority: medium,
			dueDate: thisWeek,
			lastUpdated: '4 days ago',
		},
		{
			no: '123',
			title: 'Afrobox Review',
			priority: medium,
			dueDate: thisWeek,
			lastUpdated: '4 days ago',
		},
		{
			no: '123',
			title: 'Afrobox Review',
			priority: medium,
			dueDate: thisWeek,
			lastUpdated: '4 days ago',
		},
		{
			no: '123',
			title: 'Afrobox Review',
			priority: low,
			dueDate: nextWeek,
			lastUpdated: '4 days ago',
		},
		{
			no: '123',
			title: 'Afrobox Review',
			priority: low,
			dueDate: nextWeek,
			lastUpdated: '4 days ago',
		},
	];

	const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	return (
		<div className="h-screen w-screen flex relative">
			<Sidenav />

			<div className="flex flex-col w-full md:w-[80vw] relative md:absolute right-0">
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
					<div className="flex justify-center flex-wrap">
						<div className="w-full mx-2 sm:w-[250px] md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border my-2 p-5 rounded-md">
							<img src={requestsIcon} alt="" />
							<h3 className="mt-2 mb-3 text-[22px] font-[600px]">
								Total requests
							</h3>
							<span className="text-[45px] font-semibold">50</span>
						</div>

						<div className="w-[47%] overflow-hidden mx-1 sm:w-[250px] md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border p-2 my-2 md:p-5 rounded-md">
							<h3 className="mt-8 mb-3 text-[22px] font-[600px]">
								Successful removals
							</h3>
							<div className="flex justify-between w-full">
								<div>
									<span className="text-[45px] font-semibold">50</span>
									<div className="flex text-[#32D583]">
										+50 <img src={arrowUp} alt="" />
									</div>
								</div>

								<img src={lineChart} alt="" />
							</div>
						</div>

						<div className="w-[47%] overflow-hidden sm:w-[250px] mx-1 md:h-[210px] md:w-[300px] lg:h-[224px] lg:w-[332px] border p-2 my-2 md:p-5 rounded-md">
							<h3 className="mt-8 mb-3 text-[22px] font-[600px]">
								Failed removals
							</h3>
							<div className="flex justify-between w-full">
								<div>
									<span className="text-[45px] font-semibold">50</span>
									<div className="flex text-[#FF718B]">
										-50 <img src={arrowDown} alt="" />
									</div>
								</div>

								<img src={lineChart} alt="" />
							</div>
						</div>
					</div>

					<div className="flex flex-col-reverse items-center md:flex-row mt-5 w-full">
						<div className="w-full md:w-[60%]">
							<h2 className="text-xl font-[600] mb-2 hidden md:flex">
								Current Tickets
							</h2>

							<div className="w-full overflow-x-auto my-2">
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
							</div>
						</div>

						<div className="py-5 border rounded-lg ml-0 md:ml-3 my-2">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LawyerDashboard;
