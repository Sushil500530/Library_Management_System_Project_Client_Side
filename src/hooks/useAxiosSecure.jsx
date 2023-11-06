import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const secureAxios = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    useEffect(() =>{
       secureAxios?.interceptors?.response?.use(res => {
        return res;
       }, error => {
        if(error?.response?.status === 401 || error?.response?.status === 403){
            toast.error('cannot find your token! log out the user');
            return navigate('/login')
        }
       })
        
    },[navigate])

    return secureAxios
};

export default useAxiosSecure;