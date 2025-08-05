// src/pages/EditProfile.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function EditProfile() {
  const { user } = useContext(AuthContext);

  const {data: dbUser = {}, isLoading, isError, error } = useQuery({
         queryKey: ["user"],
         queryFn: async() => {
             const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`)
             console.log(res.data)
             return res.data;
         }
     })

         if (isLoading) {
    return <p className="text-center text-blue-500">Loading results...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  const [formData, setFormData] = useState({
    displayName: dbUser.displayName || '',
    studentId: dbUser.studentId || '',
    photoURL: dbUser.photoURL || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/email/${user.email}`,
        formData
      );
      alert('Profile updated successfully');
      // Optional: refresh user context here
    } catch (err) {
      console.error(err);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-2">
        Student Id:
        <textarea
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-2">
        Photo URL:
        <input
          type="text"
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-1"
        />
      </label>
      <button
        onClick={handleSave}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditProfile;
