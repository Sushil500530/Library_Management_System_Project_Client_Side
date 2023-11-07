import axios from "axios";
import { useEffect, useState } from "react";

const useOther2Axios = () => {
    const [exData, setExData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/other2-category')
            .then(res => setExData(res.data))
    }, [])
    return {exData}
};

export default useOther2Axios;