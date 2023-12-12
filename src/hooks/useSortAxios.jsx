import axios from "axios";
import { useEffect, useState } from "react";

const useSortAxios = (asc) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/category-collection?sort=${asc ? 'asc' : 'desc'}`)
            .then(res => setCategories(res.data))
    }, [asc])
    return categories
};

export default useSortAxios;