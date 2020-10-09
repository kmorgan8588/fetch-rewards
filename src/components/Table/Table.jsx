import React, { useState, useEffect } from 'react';
import "./Table.css";
import TESTDATA from '../../TestData';
import TableList from '../TableList/TableList'

const Table = (props) => {
    const [content, setContent] = useState("Loading...")

    useEffect(() => {
        setTimeout(() => setContent(<TableList contents={TESTDATA} />), 1000)
    }, [])
    return (
        <div>
            <h1>Records</h1>
            {content}
        </div>
    )
}

export default Table;
