import React from 'react';
import "./Table.css";
import TESTDATA from '../../TestData';
import TableList from '../TableList/TableList'

const Table = (props) => {
    return (
        <div>
            Table goes here
            Loading...
            <h1>Records</h1>
            <TableList contents={TESTDATA} title="Stuff" />
        </div>
    )
}

export default Table;
