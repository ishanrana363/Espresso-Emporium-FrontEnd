import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider =({ children }) => {
    const auth = getAuth(app);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const [user, setUser] = useState(null);
    const userInfo = {
        user,
        loading,
        createUser
    }
    return (
        <AuthContext.Provider value={ userInfo}  >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
