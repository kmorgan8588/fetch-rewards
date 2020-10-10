import React from 'react';
import "./SelectPage.css";

const SelectPage = (props) => {
    const { count, update, value } = props;

    return (
        <select className="select-css" name="pages" value={value} onChange={(event) => update(event.target.value)}>
            {new Array(count).fill("").map((_, index) => (<option key={index} value={index + 1}>{index + 1}</option>))}
        </select>
    )
}


export default SelectPage;
