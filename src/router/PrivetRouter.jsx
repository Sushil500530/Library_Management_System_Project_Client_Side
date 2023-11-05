/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RotatingLines } from "react-loader-spinner";

const PrivetRouter = ({children}) => {
    const {user,isLoading} = useAuth();
    console.log(user);
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
    return <Navigate state={location.pathname} to="/login"></Navigate>
}
export default PrivetRouter;