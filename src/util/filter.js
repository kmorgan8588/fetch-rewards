//filterData is a custom filter and sorting function that takes record data and removes empty string and null name records
//and then sorts based on listId and then orders within that listId based on name
const filterData = (data) => {
    return data.filter(record => record.name !== "" && record.name !== null).sort((a, b) => {
        //slices off the number portion of each Item ### and converts to Number for comparision
        let aNum = a.name.substring(5) - '0';
        let bNum = b.name.substring(5) - '0';
        return aNum - bNum;
    }).sort((a, b) => a.listId - b.listId)
}

export default filterData;
