import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState("")


    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
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
            setLoading(false);
            // save current user in db
            if(currentUser) {
                try {
                   await axios.post(`${import.meta.env.VITE_API_URL}/users`,{
                        name: currentUser?.displayName || "Anonymous User",
              email: currentUser?.email,
              image: currentUser?.photoURL || "",
                    })
                    console.log("User saved to database successfully.");
                } catch (error) {
                    console.error("Error saving user to database:", error.message);
                }
            }
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
        // updateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
