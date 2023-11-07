import axios from "axios";
import { useEffect, useState } from "react";

const useOtherAxios = () => {
    const [otherData, setOtherData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/other-category')
            .then(res => setOtherData(res.data))
    }, [])
    return {otherData}
};

export default useOtherAxios;