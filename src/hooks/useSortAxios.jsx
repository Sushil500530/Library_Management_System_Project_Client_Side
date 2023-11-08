import axios from "axios";
import { useEffect, useState } from "react";

const useSortAxios = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://assign-project-server-side.vercel.app/category-collection?sortField=quantity&sortOrder=desc')
            .then(res => setData(res.data))
    }, [])
    return {data}
};

export default useSortAxios;