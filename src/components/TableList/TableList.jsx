import React from 'react';
import './TableList.css';

const TableList = (props) => {
    const { contents } = props;

    return (
        <table className="Table">
            <tbody>
                <tr key="header">
                    {Object.keys(contents[0]).map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
                {contents.map((row, index) => (
                    <tr key={index}>
                        {Object.keys(row).map((column, index) => (
                            <td key={column + index}>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default TableList;
