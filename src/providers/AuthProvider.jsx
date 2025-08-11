import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    // Upload image to imgbb
    const handleUploadImage = async (image) => {
    
    // const photo = form.image.files[0];

    try {
      if (!image) throw new Error("No image file selected");

      const imageFormData = new FormData();
      imageFormData.append("image", image);

      // Upload image to ImgBB
      const imgRes = await axios.post(image_hosting_api, imageFormData);

      if (imgRes.data.success) {
        return imgRes.data.data.url;

        // const photoURL = imgRes.data.data.url;
        // return photoURL;
      }
    } catch (error) {
        console.error("Image Upload Error:", error);
        setError(error.message || "Image upload failed.");
        return null;
    } finally {
      setLoading(false);
    }
  };


// Create User
  const createUser = async (email, password) => {
    setLoading(true);
    setError("");
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);

      // save current user in db
      // if (currentUser) {
      //   console.log(currentUser);
      //   const updateUser = {
      //     name: currentUser.displayName,
      //     image: currentUser.photoURL,
      //   };
      //   console.log(updateUser);
      //   try {
      //     await axios.post(
      //       `${import.meta.env.VITE_API_URL}/user/${currentUser?.email}`,
      //       updateUser
      //     );
      //   } catch (error) {
      //     console.error("Error saving user to database:", error.message);
      //   }
      // }
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
    updateProfile,
    handleUploadImage,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
