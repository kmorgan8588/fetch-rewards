import React, { useState, useEffect } from 'react';
import "./EntriesOption.css"

const EntriesOption = (props) => {
    const { update } = props;
    const [entries, setEntries] = useState(10)

    useEffect(() => {
        if (entries >= 10 && entries <= 100) {
            update(entries)
        }
    }, [entries, update])
    return (
        <span className="Entry">
            <label htmlFor="entries">Items per page</label>
            <input type="number" id="entries" className="input-css" value={entries} min="10" max="100" onChange={(event) => setEntries(parseInt(event.target.value))}></input>
        </span>
    )
}


export default EntriesOption;
