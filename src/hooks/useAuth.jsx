import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
    const authContent = useContext(AuthContext);
    return authContent; 
};

export default useAuth;