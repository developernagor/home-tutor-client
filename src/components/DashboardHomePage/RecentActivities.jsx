import React from 'react'

function RecentActivities() {
  return (
    <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="p-3 bg-gray-100 rounded">📚 Enrolled in "Math Basics"</li>
          <li className="p-3 bg-gray-100 rounded">❓ Asked a question on "Physics Homework"</li>
          <li className="p-3 bg-gray-100 rounded">✅ Completed "JavaScript Basics" course</li>
        </ul>
      </div>
  )
}

export default RecentActivities
