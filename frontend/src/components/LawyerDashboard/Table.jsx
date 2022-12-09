import React from 'react';

function Table(props) {
    return (  
        <table className='w-full'>
            <tr className="bg-gray-200 border-b">{props.heading}</tr>
            {props.rows}
        </table>
    );
}

export default Table;