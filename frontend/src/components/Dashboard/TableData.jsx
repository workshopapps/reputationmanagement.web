const TableData = ({ data }) => {
	return (
		<tr>
			<td>0{data.id}</td>

			<td >
				<p className={data.priority}>{data.priority}</p>
			</td>

			<td>
				<p>{data.ticketName}</p>
			</td>
			<td>
				<p>{data.dueDate}</p>
			</td>
			<td>
				<p>{data.lastUpdated}</p>
			</td>
			<td>
				<p>{data.status}</p>
			</td>
		</tr>
	);
};

export default TableData;
