import axios from "axios";
import { useEffect, useState } from "react";

const useSortAxios = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/category-collection?sortField=quantity&sortOrder=desc')
            .then(res => setData(res.data))
    }, [])
    return {data}
};

export default useSortAxios;