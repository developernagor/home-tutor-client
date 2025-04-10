import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

function WelcomeDashboard() {

  const {user} = useContext(AuthContext)

  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Welcome Back, {user?.displayName}</h1>
        <p className="mt-2">Here’s an overview of your activity.</p>
      </div>
  )
}

export default WelcomeDashboard;
