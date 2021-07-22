import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        console.log('dont asdfasdf')
        axios.get(url).then(res => {
            setData(res.data);
            setIsFetching(false);
            setError(false)
        }).catch(err => {
            console.error(err);
            console.log('kazkas ne to')
            setIsFetching(false);
            setError(true)
        })
    }, [url])

    return { data, isFetching, error };
}

export default useFetch;

