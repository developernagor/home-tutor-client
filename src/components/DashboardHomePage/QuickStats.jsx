import React from 'react'

function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Total Courses</h2>
          <p className="text-2xl text-blue-500 font-bold">5</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Asked Questions</h2>
          <p className="text-2xl text-green-500 font-bold">12</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Completed Tasks</h2>
          <p className="text-2xl text-purple-500 font-bold">8</p>
        </div>
      </div>
  )
}

export default QuickStats
