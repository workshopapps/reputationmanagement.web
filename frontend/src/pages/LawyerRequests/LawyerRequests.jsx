import React, {useState} from 'react';
import Accordion from '../../components/LawyerDashboard/Accordion';
import Sidebarr from '../../components/LawyerDashboard/Sidebarr';
import hamburger from '../../assets/images/hamburger.svg';
import x from '../../assets/images/x.svg';
import logo from '../../assets/images/logo.png';
import Menu from '../../components/LawyerDashboard/MobileMenu';
import {ticketsData} from '../LawyerDashboard/TicketsData';
import Table from '../../components/LawyerDashboard/Table';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/images/searchIcon.png';
import notificationsIcon from '../../assets/images/notificationsIcon.svg';
import profileImg from '../../assets/images/profileImg.svg';


export default function LawyerRequests() {
    const [menuActive, setMenuActive] = useState(false);

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

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
								<Table 
									heading={
										<>
											<th className="p-4 text-left">No</th>
											<th className="p-4 text-left">Title</th>
											<th className="p-4 text-left">Priority</th>
											<th className="p-4 text-left">Last Updated</th>
										</>
									}
									rows={
										ticketsData.map(t => {
											return (
												<tr key={t.no} className="border-b">
													<td className="p-3">{t.no}</td>
													<td className="p-3">{t.title}</td>
													<td className="p-3">
														<img src={t.priority} alt="" />
													</td>
													
													<td className="p-3">
														<span className="text-gray-400">
															{t.lastUpdated}
														</span>
													</td>
												</tr>
											)
										})
									}
								/>
								</div>
							} 
						/>

						<Accordion 
							title='Unclaimed Tickets'
							content={
								<div className="w-full overflow-x-auto my-2">
								<Table 
									heading={
										<>
											<th className="p-4 text-left">No</th>
											<th className="p-4 text-left">Title</th>
											<th className="p-4 text-left">Priority</th>
											<th className="p-4 text-left">Last Updated</th>
											<th className="p-4 text-left"> </th>
										</>
									}
									rows={
										ticketsData.map(t => {
											return (
												<tr key={t.no} className="border-b">
													<td className="p-3">{t.no}</td>
													<td className="p-3">{t.title}</td>
													<td className="p-3">
														<img src={t.priority} alt="" />
													</td>
													
													<td className="p-3">
														<span className="text-gray-400">
															{t.lastUpdated}
														</span>
													</td>

													<td>
														<button className='text-white text-sm font-semibold bg-blue-600 px-5 py-2 rounded-[5px] cursor-pointer'>
															Claim Ticket
														</button>
													</td>
												</tr>
											)
										})
									}
								/>
								</div>
							}
						/>
					</div>
				</div>
            </div>
        </div>
    )
}