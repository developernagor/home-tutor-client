import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState("")


    const createUser = async(email,password) => {
        setLoading(true);
        setError("");
        await createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            console.log("current user", currentUser)
            
            // save current user in db
            if(currentUser) {
                console.log(currentUser)
                const updateUser = {
                    name: currentUser.displayName,
                    image: currentUser.photoURL
                }
                console.log(updateUser)
                try {
                   await axios.post(`${import.meta.env.VITE_API_URL}/user/${currentUser?.email}`,updateUser)
                        
                } catch (error) {
                    console.error("Error saving user to database:", error.message);
                }
            }
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const authInfo = {
        user,
        loading,
        error,
        createUser,
        signInUser,
        // signInWithGoogle,
        signOutUser,
        updateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
