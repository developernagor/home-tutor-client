// UserList.jsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import {AuthContext} from "../../providers/AuthProvider"

const UserList = () => {
  const {user} = useContext(AuthContext)
  console.log(user)

    const {data: allUser = {}, isLoading, isError, error } = useQuery({
        queryKey: ["allUser"],
        queryFn: async() => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
            console.log(res.data)
            return res.data;
        }
    })
    
    if(isLoading){
     return <p>Loading.........</p>
    }
    
    if(isError){
     console.log("Error:", error.message)
    }


    return (
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">User List</h1>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">#</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Role</th>
                  <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6 font-medium">{user.name}</td>
                    <td className="py-4 px-6 text-gray-600">{user.email}</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button className="px-3 py-1 mr-2 bg-green-500 text-white text-sm rounded hover:bg-green-600">
                        View
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default UserList;
