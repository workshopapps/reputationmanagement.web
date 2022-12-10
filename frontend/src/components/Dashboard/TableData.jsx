import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TableData = (props) => {
	const router = useNavigate();
	const [lastUpdated, setLastUpdated] = useState(props.lastUpdated);

	return (
		<tr>
			<td>{props.no + 1}</td>

			<td>
				<p className={`priority-${props.priority} priority desktop`}>
					{props.priority === 3
						? 'High'
						: props.priority === 2
						? 'Medium'
						: props.priority === 1
						? 'Low'
						: 'Not Urgent'}
				</p>
				<span className={`${props.priority} mobile`}></span>
			</td>

			<td>
				<p>{props.ticketName}</p>
			</td>
			<td>
				<p>
					{props.status === 4
						? 'failed'
						: props.status === 3
						? 'Completed'
						: props.status === 1 || props.status === 2
						? 'In Progress'
						: 'Pending'}
				</p>
			</td>
			<td>
				<p style={{ paddingLeft: '20px' }}>{lastUpdated?.substring(0, 10)}</p>
			</td>
			<td>
				<StyledClaimButton
					onClick={() => router(`/request?requestId=${props.id}`)}
				>
					View Details
				</StyledClaimButton>
			</td>
		</tr>
	);
};
export const LawyerTableData = (props) => {
	const router = useNavigate();
	const [lastUpdated, setLastUpdated] = useState(props.lastUpdated);
	return (
		<tr>
			<td>{props.no + 1}</td>

			<td>
				<p className={`priority-${props.priority} priority desktop`}>
					{props.priority === 3
						? 'High'
						: props.priority === 2
						? 'Medium'
						: props.priority === 1
						? 'Low'
						: 'Not Urgent'}
				</p>
				<span className={`${props.priority} mobile`}></span>
			</td>

			<td>
				<p>{props.ticketName}</p>
			</td>
			<td>
				<p>
					{props.status === 4
						? 'failed'
						: props.status === 3
						? 'Completed'
						: props.status === 1 || props.status === 2
						? 'In Progress'
						: 'Pending'}
				</p>
			</td>
			<td>
				<p style={{ paddingLeft: '20px' }}>{lastUpdated?.substring(0, 10)}</p>
			</td>
			<td>
				<StyledClaimButton
					onClick={() =>
						router(`/lawyer-request-details?requestId=${props.id}`)
					}
				>
					View Details
				</StyledClaimButton>
			</td>
		</tr>
	);
};

const StyledClaimButton = styled.button`
	height: 37px;
	width: 126px;
	border-radius: 4px;
	background: #233ba9;
	font-family: Lato;
	font-size: 14px;
	font-weight: 600;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: center;
	color: #ffffff;
`;

export default TableData;
