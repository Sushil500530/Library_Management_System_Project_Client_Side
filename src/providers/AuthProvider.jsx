/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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
    const userLogOut = () => {
        setIsLoading(true);
        return signOut(auth)
    }
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unSubcriber = onAuthStateChanged(auth,currentUser => {
            setIsLoading(false);
            const emailInUser = currentUser?.email || user?.email ;
            const loggedUserEmail = {email : emailInUser}
            setUser(currentUser);
            console.log('current user is--->', loggedUserEmail);

        })
        return () => {
            return unSubcriber();
        }
        
    },[user?.email])

    const authInfo = {
        user,
        isLoading,
        createUser,
        loginUser,
        googleSignIn,
        userLogOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;