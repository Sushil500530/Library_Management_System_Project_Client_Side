import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const secureAxios = axios.create({
    baseURL: 'https://assign-project-server-side.vercel.app',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { userLogOut } = useAuth()
    useEffect(() => {
        secureAxios?.interceptors?.response?.use(res => {
            return res;
        }, error => {
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                userLogOut()
                    .then(() => {
                        toast.error('cannot find your token! log out the user');
                        return navigate('/login')
                    })
                    .catch(error => console.error(error))
            }
        })

    }, [navigate, userLogOut])

    return secureAxios
};

export default useAxiosSecure;