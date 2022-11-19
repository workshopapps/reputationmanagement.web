import React from "react";

const TableData = ({ data }) => {
  //   const colors=  [
  //         high: {
  //             color: "green",
  //             backgroundColor: 'lightGtreen'
  //         },
  //   ]

  const color = (value) => {
    let colorValue, backgroundColor;
    if (value === "High") {
      colorValue = "green";
      backgroundColor = "lightgreen";
    }

    if (value === "Low") {
      colorValue = "yellow";
      backgroundColor = "lightyellow";
    }

    if (value === "Medium") {
      colorValue = "red";
      backgroundColor = "lightred";
    }

    return [colorValue, backgroundColor];
  };

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
