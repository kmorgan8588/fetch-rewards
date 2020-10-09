import TESTDATA from '../TestData';

const queryApi = (url) => {
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
    };
    return fetch(url, options)
        .then(res => res.json())
        .catch((err) => {
            console.log('something happened', err.message)
            return TESTDATA
        })
}

export default queryApi;
