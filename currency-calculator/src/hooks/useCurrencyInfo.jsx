import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;
    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res['rates']))
    }, [currency]);
    console.log(data)
    return data;
}

export default useCurrencyInfo;