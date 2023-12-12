import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/book-category')
            .then(res => setData(res.data))
    }, [])
    return {data}
};

export default useAxios;