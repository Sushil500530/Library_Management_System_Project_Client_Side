import axios from "axios";
import { useEffect, useState } from "react";

const useOther2Axios = () => {
    const [exData, setExData] = useState([]);
    useEffect(() => {
        axios.get('https://assign-project-server-side.vercel.app/other2-category')
            .then(res => setExData(res.data))
    }, [])
    return {exData}
};

export default useOther2Axios;