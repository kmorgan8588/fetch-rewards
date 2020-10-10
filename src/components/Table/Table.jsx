import React, { useState, useEffect } from 'react';
import "./Table.css";
import TableList from '../TableList/TableList';
import SelectPage from '../SelectPages/SelectPage';
import queryFunc from '../../util/queryApi';
import EntriesOption from '../CustomInput/EntriesOption';


const Table = (props) => {
    const { filterFunc, url } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1)
    const [entriesPerPage, setEntriesPerPage] = useState(10);

    useEffect(() => {
        const cleanData = filterFunc(data);
        setFilteredData(cleanData);
    }, [filterFunc, data])

    useEffect(() => {
        async function fetchData() {
            const unfilteredData = await queryFunc(url);
            setData(unfilteredData)
        }
        fetchData()
    }, [url])

    useEffect(() => {
        const count = Math.ceil(filteredData.length / entriesPerPage);
        setPageCount(count);
    }, [filteredData, entriesPerPage])

    useEffect(() => {
        setPageNumber(1)
    }, [entriesPerPage])

    useEffect(() => {
        if (pageCount > 0) {
            setTimeout(
                () => setIsLoading(false), 1000)
        }
    }, [pageCount])

    return (
        <div>
            <h1>Records</h1>
            {isLoading ? null : <EntriesOption update={setEntriesPerPage} />}
            {isLoading ? null : <SelectPage count={pageCount} update={setPageNumber} value={pageNumber} />}
            {isLoading ? "Loading..." : <TableList contents={filteredData.slice(((pageNumber || 1) - 1) * entriesPerPage, (pageNumber || 1) * entriesPerPage)} />}
        </div>
    )
}

export default Table;
