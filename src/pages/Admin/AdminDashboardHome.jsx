import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

function AdminDashboardHome() {
  const barChartData = [
    { name: 'Jan', revenue: 120 },
    { name: 'Feb', revenue: 150 },
    { name: 'Mar', revenue: 180 },
    { name: 'Apr', revenue: 200 },
    { name: 'May', revenue: 220 },
  ];

  const lineChartData = [
    { month: 'Jan', users: 30 },
    { month: 'Feb', users: 50 },
    { month: 'Mar', users: 80 },
    { month: 'Apr', users: 100 },
    { month: 'May', users: 150 },
  ];

  return (
    <div className="p-6">
      {/* Overview of System Health */}
      <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold">System Health</h1>
        <p className="mt-2">All systems are running smoothly.</p>
      </div>

      {/* User Management */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Active Users</h2>
          <p className="text-2xl text-blue-500 font-bold">1500</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Inactive Users</h2>
          <p className="text-2xl text-red-500 font-bold">200</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Banned Users</h2>
          <p className="text-2xl text-gray-500 font-bold">25</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="p-3 bg-gray-100 rounded">🔔 User "John Doe" logged in.</li>
          <li className="p-3 bg-gray-100 rounded">📄 User "Jane Smith" updated their profile.</li>
          <li className="p-3 bg-gray-100 rounded">⚠️ User "Mark Lee" flagged inappropriate content.</li>
        </ul>
      </div>

      {/* Sales/Revenue Overview */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Revenue Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Analytics and Reports */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">User Growth Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#34D399" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pending Actions */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4">Pending Actions</h2>
        <ul className="space-y-3">
          <li className="p-3 bg-gray-100 rounded">📝 Approve new user registrations</li>
          <li className="p-3 bg-gray-100 rounded">⚠️ Review flagged content</li>
          <li className="p-3 bg-gray-100 rounded">📦 Process 5 pending orders</li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">👥 Manage Users</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">📊 View Reports</button>
      </div>
    </div>
  );
}

export default AdminDashboardHome;
