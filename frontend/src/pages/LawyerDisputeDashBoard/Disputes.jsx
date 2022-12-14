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
								<Id className="  md :w-[5%]">ID</Id>
								<EmailHead className="md:w-[23%] text-left">Email</EmailHead>
								<Complaint className="md:w-[24%]  text-left">
									Complaint
								</Complaint>
								<Status className=" md:w-[5%] w-[10%]">Status</Status>
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
	@media (max-width: 1000px) {
		padding: .8em.5em;
	}
	`
const Id = styled.th`
	@media (max-width: 400px) {
		font-size: .8rem;
	}

`
const Status =styled.th`
	@media (max-width: 400px) {
		font-size: .8rem;
	}

`
const EmailHead = styled.th`
	@media (max-width: 768px) {
		display: none;
	}
`;
const Complaint = styled.th`
	@media (max-width: 600px) {
		gap: 30%;
	}
	@media (max-width: 400px) {
		font-size: .8rem;
	}

`;
const TabRow = styled.tr`
	@media (max-width: 768px) {
		gap: 16%;
	}

	@media (max-width: 600px) {
		gap: 20%;
	}
	@media (max-width: 500px) {
		gap: 10%;
	}
	@media (max-width: 400px) {
		gap: 12%;
	}
	@media (max-width: 370px) {
		gap: 5%;
	}
	@media (max-width: 350px) {
		gap: 5%;
	}
`;

export default DisputeDashboard;