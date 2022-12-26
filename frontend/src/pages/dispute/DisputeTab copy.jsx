import React, { useState, useEffect } from 'react';
// import arrowDown from './assets/arrow-down.svg';
import { useNavigate } from 'react-router-dom';
import { DetailsDispute } from './DetailsDispute';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styled, { keyframes } from 'styled-components';

const DataTemp = [
	{
		ID: 2314028,
		Name: 'Raya Enterprises',
		Email: 'rayaenterprises.ng',
		PhoneNo: '070456780',
		Website: 'rayaenterprises.ng',
		Dispute: 'Closed',
	},
	{
		ID: 2314028,
		Name: 'Raya Enterprises',
		Email: 'rayaenterprises.ng',
		PhoneNo: '070456782',
		Website: 'rayaenterprises.ng',
		Dispute: 'Closed',
	},
	{
		ID: 2314028,
		Name: 'Raya Enterprises',
		Email: 'rayaenterprises.ng',
		PhoneNo: '070456780',
		Website: 'rayaenterprises.ng',
		Dispute: 'Open',
	},
	{
		ID: 2314028,
		Name: 'Raya Enterprises',
		Email: 'rayaenterprises.ng',
		PhoneNo: '070456780',
		Website: 'rayaenterprises.ng',
		Dispute: 'Closed',
	},
	{
		ID: 2314028,
		Name: 'Raya Enterprises',
		Email: 'rayaenterprises.ng',
		PhoneNo: '070456780',
		Website: 'rayaenterprises.ng',
		Dispute: 'Closed',
	},
];
export const DisputeTab = (props) => {
	const hideForMobile = `${props.width <= 800 ? 'hidden' : 'block'}`;
	const router = useNavigate();
	const ApiPrivate = useAxiosPrivate();

	const [disputes, setDisputes] = useState([]);

	async function getDisputes() {
		try {
			const response = await ApiPrivate.get('api/disputes/lawyer/');
			setDisputes(response?.data);
			console.log(response?.data);
		} catch (err) {
			if (err?.response?.status) {
			}
			console.log(err);
		}
	}

	useEffect(() => {
		getDisputes();
	}, []);

	return (
		<>
			{disputes.length > 0 ? (
				disputes.map((data, index) => {
					const { id, status, badReviewerEmail, complaint } = data;
					return (
						<StyledWrapp>
							<tbody
								key={index + 1}
								onClick={() =>
									router(`/lawyer-dispute-details?requestId=${id} `)
								}
							>
								<tr>
									<td>{index + 1}</td>
									<td className="ovf">Email</td>
									<td>{complaint}</td>
									<Status
										className={`${
											status === 1 ? 'text-green-900' : 'text-red-900'
										} ${
											status === 1 ? 'bg-[#D1FADF]' : 'bg-[#FECDCA]'
										} px-[1] py-[1] rounded-sm w-[80px] flex items-center justify-center w-[10%] text-center`}
									>
										{status === 1 ? 'Closed' : 'Open'}
									</Status>
								</tr>
							</tbody>
						</StyledWrapp>
					);
				})
			) : (
				<EmptyDisputes className="text-xl leading pt-5 font-bold text-center ">
					No Disputes At This Time
				</EmptyDisputes>
			)}
		</>
	);
};

const StyledWrapp = styled.div`
	tbody {
		width: 100%;
	}
`;

const appear = keyframes`
0%{
  transform:translateY(-100%);
  opacity:0;
}
100%{
  transform:translateY(0%);
  opacity:1;
}
`;

const EmptyDisputes = styled.h2`
	animation: ${appear} 0.7s;
`;
const Status = styled.td`
	padding: 0px;
	height: 40px;
	align-self: center;
	@media (max-width: 600px) {
		display: flex;
	}
`;



const DataTable = () => {
	const router = useNavigate();
	const ApiPrivate = useAxiosPrivate();

	const [disputes, setDisputes] = useState([]);

	async function getDisputes() {
		try {
			const response = await ApiPrivate.get('api/disputes/lawyer/');
			setDisputes(response?.data);
			console.log(response?.data);
		} catch (err) {
			if (err?.response?.status) {
			}
			console.log(err);
		}
	}

	useEffect(() => {
		getDisputes();
	}, []);
	return (
		<>
			{disputes.length > 0 ? (
				disputes.map((data, index) => {
					const { id, status, badReviewerEmail, complaint } = data;
					return (
						<>
							<StyledTBody
								key={index + 1}
								onClick={() =>
									router(`/lawyer-dispute-details?requestId=${id} `)
								}
							>
								<StyledTr>
									<td>&nbsp;&nbsp;{index + 1}</td>
									<td className="emailtd com-none">{badReviewerEmail}</td>
									<td className='comtd'>{complaint}</td>
									<StyledTd className={status === 1 ? 'closed' : 'open'}>
										{status === 1 ? 'Closed' : 'Open'}
									</StyledTd>
									<td>
										<StyledBtn>view</StyledBtn>
									</td>
								</StyledTr>
							</StyledTBody>
						</>
					);
				})
			) : (
				<StyledMarg>
					<EmptyDisputes className="text-xl leading pt-5 font-bold text-center ">
						No Disputes At This Time
					</EmptyDisputes>
				</StyledMarg>
			)}
		</>
	);
};

//Styling

const StyledMarg = styled.div`
	margin: 30px;
`;
const StyledTBody = styled.tbody`
	width: 100%;
	height: 10vh;
	border-bottom: 1px solid #f7f7f7;
	// &:hover{
	// 	background: #F7F7F7;
	// }

	@media screen and (max-width: 543px) {
		.com-none {
			display: none;
		}
	}

	@media screen and (min-width: 544px) {
		.emailtd {
			max-width: 40px;
		}
	}
	@media screen and (max-width: 330px) {
		.comtd {
			display: none;
		}
	}
`;

const StyledTr = styled.tr``;
const StyledTd = styled.td`
	&.closed {
		font-weight: 600;
		color: #2a47cb;
	}
	&.open {
		font-weight: 600;
		color: #f16f04;
	}
`;

const StyledBtn = styled.button`
	background: #2a47cb;
	color: #fff;
	border-radius: 4px;
	padding: 5px 0;
	margin-right: 8px;
	font-size: 16px;
	width: 90%;
`;

export default DataTable;
