import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

function StudentProfile() {

    const {user} = useContext(AuthContext)
    console.log(user)
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-4">
      <img
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        src={user.photoURL || "https://i.pravatar.cc/150?img=32"}
        alt="User Avatar"
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold">{user.displayName}</h2>
        <p className="text-gray-500">{user.email}</p>
        <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
          {user.role || "Student"}
        </span>
      </div>
      <div className="text-gray-600 text-sm text-center">
        {user.bio || "No bio available."}
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
  )
}

export default StudentProfile
