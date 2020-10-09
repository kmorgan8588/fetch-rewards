import React, { useState, useEffect } from 'react';
import "./Table.css";
import TableList from '../TableList/TableList';
import SelectPage from '../SelectPages/SelectPage';
import queryFunc from '../../util/queryApi';


const Table = (props) => {
    const { filterFunc, url } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        const cleanData = filterFunc(data);
        setFilteredData(cleanData);
    }, [filterFunc, data])

    useEffect(() => {
        const unfilteredData = queryFunc(url);
        setData(unfilteredData)
    }, [url])

    useEffect(() => {
        const count = Math.ceil(filteredData.length / 10);
        setPageCount(count);
    }, [filteredData])

    useEffect(() => {
        if (pageCount > 0) {
            setTimeout(
                () => setIsLoading(false), 1000)
        }
    }, [pageCount])

    return (
        <div>
            <h1>Records</h1>
            {isLoading ? null : <SelectPage count={pageCount} update={setPageNumber} />}
            {isLoading ? "Loading..." : <TableList contents={filteredData.slice((pageNumber - 1) * 10, pageNumber * 10)} />}
        </div>
    )
}

export default Table;
