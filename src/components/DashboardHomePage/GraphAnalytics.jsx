import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

function GraphAnalytics() {

  const barChartData = [
    { name: 'Math', students: 40 },
    { name: 'Science', students: 30 },
    { name: 'English', students: 20 },
    { name: 'History', students: 25 },
    { name: 'Physics', students: 35 },
  ];

  const lineChartData = [
    { month: 'Jan', progress: 20 },
    { month: 'Feb', progress: 40 },
    { month: 'Mar', progress: 60 },
    { month: 'Apr', progress: 80 },
    { month: 'May', progress: 100 },
  ];

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Students Enrolled per Course</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#4A90E2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Student Progress Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#34D399" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

  )
}

export default GraphAnalytics;
