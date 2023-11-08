/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const PrivetRouter = ({children}) => {
    const {user,isLoading} = useAuth();
    const location = useLocation();
    // console.log(user);
    if(isLoading){
        return <p className="flex items-center justify-center w-full h-[50vh]"><RotatingLines
        strokeColor="purple"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
    /></p>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace ></Navigate>
}
export default PrivetRouter;