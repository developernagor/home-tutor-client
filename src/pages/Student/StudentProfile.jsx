import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router';

function StudentProfile() {
  const { user } = useContext(AuthContext);
  console.log(user)

  const {data: dbUser = {}, isLoading, isError, error } = useQuery({
         queryKey: ["user"],
         queryFn: async() => {
             const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`)
             console.log(res.data)
             return res.data;
         }
     })

    // Fetch all results once
    const {
    data: studentResults = [],
  } = useQuery({
    queryKey: ['results', dbUser?.studentId],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/results/student`,
        { params: { studentId: dbUser?.studentId } }
      );
      return response.data;
    },
    enabled: !!dbUser?.studentId, // only run if studentId is available
  });
    console.log(studentResults)

     if (isLoading) {
    return <p className="text-center text-blue-500">Loading results...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }



  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-4">
      <img
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        src={user.photoURL || 'https://i.pravatar.cc/150?img=32'}
        alt="User Avatar"
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold">{dbUser.displayName}</h2>
        <p className="text-gray-500">{user.email}</p>
        <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
          {user.role || 'Student'}
        </span>
      </div>
      <div className="text-gray-600 text-sm text-center">
        {dbUser.studentId || 'Student Id not available.'}
      </div>

    </div>
  );
}

export default StudentProfile;
