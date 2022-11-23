const TableData = ({ data }) => {
	return (
		<tr>
			<td>0{data.no}</td>

			<td>{data.priority}</td>

			<td>
				<p>{data.ticketName}</p>
			</td>
			<td>
				<img src={data.source} alt="" />
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
