import React, { useState, useEffect } from 'react';
import "./Table.css";
import TESTDATA from '../../TestData';
import TableList from '../TableList/TableList';
import SelectPage from '../SelectPages/SelectPage';

const Table = (props) => {
    const { filterFunc } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const filteredData = filterFunc(TESTDATA);
        setData(filteredData);
    }, [filterFunc])

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    useEffect(() => {
        const count = Math.ceil(data.length / 10);
        setPageCount(count);
    }, [data])

    return (
        <div>
            <h1>Records</h1>
            {isLoading ? null : <SelectPage count={pageCount} update={setPageNumber} />}
            {isLoading ? "Loading..." : <TableList contents={data.slice((pageNumber - 1) * 10, pageNumber * 10)} />}
        </div>
    )
}

export default Table;
