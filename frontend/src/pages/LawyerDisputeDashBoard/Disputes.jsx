import React, { useState, useEffect } from 'react';
import { DisputeTab } from './DisputeTab';
import { useLocation } from 'react-router-dom';
import Sidebarr from '../../components/LawyerDashboard/Sidebarr';
import styled, { keyframes } from 'styled-components';
import LawyerDashboardLayout from '../../layout/lawyerDashboardLayout';

const DisputeDashboard = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
	}, [window.innerWidth]);
	const hideMobile = `${width <= 800 ? 'hidden' : 'block'}`;
	return (
		<>
			<LawyerDashboardLayout>
			<DisputeContainer className="px-1 mt-12 ">
				<Wrapper>
					<header>
						<h1 className="text-2xl leading-2 pb-4 font-semibold ">My Disputes</h1>
						<hr />
					</header>
					<table className='table w-full' >
					<tr className="flex justify-between w-full leading text-lg font-light bg-[#E4E4E54D] px-3 py-2 ">
						<th>ID</th>
						<th >Email</th>
						<th>Complaint</th>
						<th>Status</th>
					</tr>
					</table>
					<main className="mt-5">
						<table className="table w-full">
							<DisputeTab width={width} />
						</table>
					</main>
				</Wrapper>
			</DisputeContainer>
    </LawyerDashboardLayout>
		</>
	);
};

const DisputeContainer = styled.div`
	@media (max-width: 1000px) {
		margin-left: 0px;
	}
`;
const Wrapper = styled.div`
	box-shadow: 2px 2px 8px #00000040;
	padding: 1em 1.5em;
	border-radius: 1em;
`;
export default DisputeDashboard;
