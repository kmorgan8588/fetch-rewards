import React, { useState, useEffect } from 'react';
import "./Table.css";
import TESTDATA from '../../TestData';
import TableList from '../TableList/TableList';

const Table = (props) => {
    const [content, setContent] = useState("Loading...")
    const { filterFunc } = props;
    const [data, setData] = useState(filterFunc(TESTDATA));

    useEffect(() => {
        setTimeout(() => setContent(<TableList contents={data} />), 1000)
    }, [data])

    return (
        <div>
            <h1>Records</h1>
            {content}
        </div>
    )
}

export default Table;
