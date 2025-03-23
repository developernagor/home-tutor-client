import React from 'react'

function ToDoList() {
  return (
    <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">To-Do List</h2>
        <ul className="space-y-3">
          <li className="p-3 bg-gray-100 rounded">🔔 Attend Live Session on Monday</li>
          <li className="p-3 bg-gray-100 rounded">📄 Submit Assignment for "Algebra 101"</li>
          <li className="p-3 bg-gray-100 rounded">✍️ Write a review for "Python Course"</li>
        </ul>
      </div>
  )
}

export default ToDoList
