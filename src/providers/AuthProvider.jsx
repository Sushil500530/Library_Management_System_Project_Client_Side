/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../config/firebase.config";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    const createUser = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        isLoading,
        createUser,
        loginUser,
        googleSignIn,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;