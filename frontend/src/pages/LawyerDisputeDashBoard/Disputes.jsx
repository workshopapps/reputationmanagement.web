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
	const location = useLocation();
	const requestId = new URLSearchParams(location.search).get('requestId');
	return (
		<>
			<LawyerDashboardLayout>
			<DisputeContainer className="px-1 mt-12 md:px-10">
				<Wrapper>
					<header>
						<h1 className="text-xl leading pb-2 ">My Disputes</h1>
						<hr />
					</header>
					<div className="flex justify-between bg-[#E4E4E54D] px-3 py-2 ">
						<h2>ID</h2>
						<h2>Name</h2>
						<h2 className={hideMobile}>Email</h2>
						<h2 className={hideMobile}>Phone No</h2>
						<h2 className={hideMobile}>Website</h2>
						<h2>Dispute</h2>
					</div>
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

const appear = keyframes`
0%{
  transform:translateY(-100%);
  opacity:0;
}
100%{
  transform:translateX(0%);
  opacity:1;
}
`;
const DisputeContainer = styled.div`
	margin-left: 280px;
	@media (max-width: 1000px) {
		margin-left: 0px;
		animation: ${appear} 0.7s;
	}
`;
const Wrapper = styled.div`
	box-shadow: 2px 2px 8px #00000040;
	padding: 1em 1.5em;
	border-radius: 1em;
`;
export default DisputeDashboard;
