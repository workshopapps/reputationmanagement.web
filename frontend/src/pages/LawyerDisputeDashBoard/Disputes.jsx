import React, { useState, useEffect } from 'react';
import { DisputeTab } from './DisputeTab';
import { DisputeTabCopy } from './DisputeTab copy';
import DataTable from './DisputeTab copy';
// import { useLocation } from 'react-router-dom';
// import Sidebarr from '../../components/LawyerDashboard/Sidebarr';
import styled from 'styled-components';
import LawyerDashboardLayout from '../../layout/lawyerDashboardLayout';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const DisputeDashboard = () => {
	const ApiPrivate = useAxiosPrivate();
	const [show, setShow] = useState(false);
	// const [width, setWidth] = useState(window.innerWidth);
	// useEffect(() => {
	// 	window.addEventListener('resize', () => {
	// 		setWidth(window.innerWidth);
	// 	});
	// }, []);

	const getDispute = () => {
		try {
			const response = ApiPrivate.get('api/disputes/lawyer/').then((res) => {
				if (res.data.length > 0) {
					setShow(true);
				}
			});

			console.log(response?.data);
		} catch (err) {
			if (err?.response?.status) {
			}
			console.log(err);
		}
	};
	useEffect(() => {
		getDispute();
	}, []);
	// const hideMobile = `${width <= 800 ? 'hidden' : 'block'}`;
	return (
		<>
			<LawyerDashboardLayout>
				{/* <DisputeContainer className="px-1 mt-12 ">
					<Wrapper>
						<header>
							<h1 className="text-2xl leading-2 pb-4 font-semibold ">
								My Disputes
							</h1>
							<hr />
						</header>

						<table className="table w-full">
							<tr className="flex justify-between w-full leading text-lg font-light bg-[#E4E4E54D] px-3 py-2 ">
								<th>ID</th>
								<th>Email</th>
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
<br /> */}
				<Wrapper>
					{show ? (
						<header>
							<h1 className="text-2xl leading-2 pb-4 font-semibold ">
								My Disputes
							</h1>
							<hr />
						</header>
					) : (
						''
					)}

					{/* <table>
						<thead>
						<tr>
							<th>ID</th>
							<th>Email</th>
							<th>Complaint</th>
							<th>Status</th>
						</tr>
						</thead>
						<DisputeTabCopy />
					</table> */}

					<table>
						{show ? (
							<thead>
								<tr>
									<td className="idtd">&nbsp;&nbsp;ID</td>
									<td className="emailtd com-none">Email</td>
									<td className="comtd">Complaint</td>
									<td>Status</td>
									<td></td>
								</tr>
							</thead>
						) : (
							''
						)}
						<DataTable />
					</table>
				</Wrapper>
			</LawyerDashboardLayout>
		</>
	);
};

// const DisputeContainer = styled.div`
// 	@media (max-width: 1000px) {
// 		margin-left: 0px;
// 	}
// `;
const Wrapper = styled.div`
	box-shadow: 2px 2px 6px #00000040;
	border-radius: 4px;
	// padding: 5px;
	h1{
		padding-top: 15px;
		padding-left: 5px;
	}

	table{
		width: 100%;
		thead{
			font-weight: 700;
			background: #F7F7F7;
			height: 10vh;
		}
		tr{
			margin: 10px;
		}

		td{
			max-width: 20px;
		}
		// .emailtd{
		// 	max-width: 30px;
		// }
		@media screen and (max-width: 543px){
			.com-none{
				display: none;			
		}
		@media screen and (min-width: 544px){
			.emailtd{
				max-width: 50px;
			}
		}
		@media screen and (max-width: 330px){
			.comtd{
				display none;
			}
		}

	}
`;
export default DisputeDashboard;
