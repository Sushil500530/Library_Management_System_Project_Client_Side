import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxios = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://assign-project-server-side.vercel.app/book-category')
            .then(res => setData(res.data))
    }, [])
    return {data}
};

export default useAxios;