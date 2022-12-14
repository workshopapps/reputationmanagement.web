import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styled, { keyframes } from 'styled-components';

export const DisputeTab = (props) => {
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
					const {
						id,
						status,
						badReviewerEmail,
						complaint,
						Dispute,
						businessEntityName,
					} = data;
					return (
						<tbody
							className="w-full"
							key={index + 1}
						>
							<TabRow className="flex hover:bg-[#E4E4E54D] gap-[10%]  rounded-md pt-2 pb-2 md:gap-[6%] border-b px-2 items-center ">
								<td className="w-[5%]">{index + 1}</td>
								<Emailtab className="text-left w-[25%] break-normal">{badReviewerEmail}</Emailtab>
								<Complaint className="text-left w-[25%]">{complaint}</Complaint>
								<Status
									className={`${
										status === 1 ? 'text-[#2A47CB]' : 'text-[#F16F04]'
									}  px-1 py-1 rounded-sm  flex items-center font-semibold  justify-center text-center`}
								>
									{' '}
									{status === 1 ? 'Closed' : 'Open'}{' '}
								</Status>
                        <td className=" cursor-pointer text-[12px] md:text-[16px] text-[#233ba9] "
                        							onClick={() => router(`/lawyer-dispute-details?requestId=${id}`)}

                        >View Details </td>

							</TabRow>
						</tbody>
					);
				})
			) : (
				<EmptyDisputes className="text-xl leading pt-5 font-bold text-center ">
					{' '}
					No Disputes At This Time{' '}
				</EmptyDisputes>
			)}
		</>
	);
};
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
		font-size: .8rem;
	}
`
const Emailtab = styled.td`
	@media (max-width: 768px) {
		display: none;
	}
`
const TabRow = styled.tr `
@media (max-width: 600px) {
		gap:0%;
      justify-content:space-between;
	}
`
const Complaint = styled.td`
	@media (max-width: 600px) {
		${'' /* display: none; */}
		font-size:.8rem;
	}
`
;