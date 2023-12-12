/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import axios from "axios";


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
            // http://localhost:5000
            setIsLoading(false);
            const emailInUser = currentUser?.email || user?.email ;
            const loggedUserEmail = {email : emailInUser}
            setUser(currentUser);
            // console.log('current user is--->', loggedUserEmail);
            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedUserEmail,
                {withCredentials:true})
                .then(() => {
                    // console.log('token in user--->', res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUserEmail, {withCredentials:true})
                .then(res => console.log(res.data))
            }

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