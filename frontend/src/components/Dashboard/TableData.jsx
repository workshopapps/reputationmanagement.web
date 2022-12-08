import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TableData = (props) => {
	const router = useNavigate();
	
	return (
		<tr>
			<td>{props.no}</td>

			<td>
				<p className={`priority-${props.priority} priority desktop`}>
					{
						props.priority === 3
							?
							'High'
							:
							props.priority === 2
								?
								'Medium'
								:
								props.priority === 1
									?
									'Low'
									:
									'Not Urgent'
					}
				</p>
				<span className={`${props.priority} mobile`}></span>
			</td>

			<td>
				<p>{props.ticketName}</p>
			</td>
			<td>
				<p>
					{
						props.status ===  2
							?
							'Completedp'
							:
							props.status === 1
								?
								'In Progress'
								:
								'Pending'
					}
				</p>
			</td>
			<td>
				<p>{props.lastUpdated}</p>
			</td>
			<td>
				<StyledClaimButton onClick={() => router(`/request?requestId=${props.id}`)}>
					View Details
				</StyledClaimButton>
			</td>

		</tr>
	);
};
export const LawyerTableData = (props) => {
	const router = useNavigate();
	
	return (
		<tr>
			<td>{props.no}</td>

			<td>
				<p className={`priority-${props.priority} priority desktop`}>
					{
						props.priority === 3
							?
							'High'
							:
							props.priority === 2
								?
								'Medium'
								:
								props.priority === 1
									?
									'Low'
									:
									'Not Urgent'
					}
				</p>
				<span className={`${props.priority} mobile`}></span>
			</td>

			<td>
				<p>{props.ticketName}</p>
			</td>
			<td>
				<p>
					{
						props.status ===  2
							?
							'Completedp'
							:
							props.status === 1
								?
								'In Progress'
								:
								'Pending'
					}
				</p>
			</td>
			<td>
				<p>{props.lastUpdated}</p>
			</td>
			<td>
				<StyledClaimButton onClick={() => router(`/lawyer-request-details?requestId=${props.id}`)}>
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
	background: #233BA9;
	font-family: Lato;
	font-size: 14px;
	font-weight: 600;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: center;
	color: #ffffff;
`;

export default TableData;
