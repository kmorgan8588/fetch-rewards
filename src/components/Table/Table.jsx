import React, { useState, useEffect } from 'react';
import "./Table.css";
import TESTDATA from '../../TestData';
import TableList from '../TableList/TableList';

const Table = (props) => {
    const { filterFunc } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        const filteredData = filterFunc(TESTDATA);
        setData(filteredData);
    }, [filterFunc])

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    return (
        <div>
            <h1>Records</h1>
            {isLoading ? "Loading..." : <TableList contents={data} />}
        </div>
    )
}

export default Table;
