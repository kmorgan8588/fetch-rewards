import React, { useState, useEffect } from 'react';
import "./SelectPage.css";

const SelectPage = (props) => {
    const { count, update } = props;
    const [page, setPage] = useState(1)

    useEffect(() => {
        update(page)
    }, [page, update])
    return (
        <select className="select-css" name="pages" value={page} onChange={(event) => setPage(event.target.value)}>
            {new Array(count).fill("").map((_, index) => (<option key={index} value={index + 1}>{index + 1}</option>))}
        </select>
    )
}


export default SelectPage;
