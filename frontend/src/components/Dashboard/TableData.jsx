import { useNavigate } from "react-router-dom";

const TableData = (props) => {
	const router = useNavigate();
	
	return (
		<tr onClick={() => router(`/request?requestId=${props.id}`)}>
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
				<p>{props.dueDate}</p>
			</td>
			<td>
				<p>{props.lastUpdated}</p>
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
		</tr>
	);
};

export default TableData;
