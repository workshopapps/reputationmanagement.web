import React, { useState, useEffect } from 'react';
import { DisputeTab } from './DisputeTab';
import styled from 'styled-components';
import LawyerDashboardLayout from '../../layout/lawyerDashboardLayout';

const DisputeDashboard = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
	}, [window.innerWidth]);
	return (
		<>
			<LawyerDashboardLayout>
				<DisputeContainer className="px-1 mt-12 ">
					<Wrapper>
						<header>
							<h1 className="text-2xl leading-2 pb-4 font-semibold ">
								My Disputes
							</h1>
							<hr />
						</header>
						<table className="table w-full bg-[#E4E4E54D] ">
							<TabRow className="flex gap-[11%] md:gap-[8%] w-full leading text-md md:text-lg font-light  px-3 py-2 ">
								<th className="  md :w-[5%]">ID</th>
								<EmailHead className="md:w-[23%] text-left">Email</EmailHead>
								<Complaint className="md:w-[24%] w-[25%] text-left">
									Complaint
								</Complaint>
								<th className=" md:w-[5%] w-[10%]">Status</th>
							</TabRow>
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
	font-family: 'Lato', sans-serif;
	@media (max-width: 1000px) {
		margin-left: 0px;
	}
`;
const Wrapper = styled.div`
	box-shadow: 2px 2px 8px #00000040;
	padding: 1em 1.5em;
	border-radius: 1em;
`;
const EmailHead = styled.th`
	@media (max-width: 768px) {
		display: none;
	}
`;
const Complaint = styled.th`
	@media (max-width: 600px) {
		display: none;
	}
`;
const TabRow = styled.tr`
	@media (max-width: 600px) {
		gap: 32%;
	}
	@media (max-width: 500px) {
		gap: 27%;
	}
	@media (max-width: 400px) {
		gap: 20%;
	}
	@media (max-width: 370px) {
		gap: 15%;
	}
	@media (max-width: 350px) {
		gap: 10%;
	}
`;

export default DisputeDashboard;
