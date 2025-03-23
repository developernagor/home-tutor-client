import React, { useState } from 'react'

function DashboardHome() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-900 text-white w-64 p-4 transition-transform ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul className="mt-4 space-y-2">
          <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Analytics</li>
          <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-gray-700">
            ☰
          </button>
          <h1 className="text-lg font-semibold">Welcome to Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">User</span>
            <button className="bg-blue-500 px-3 py-1 text-white rounded">Logout</button>
          </div>
        </nav>

        {/* Content Area */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">Card 1</div>
            <div className="bg-white p-4 rounded shadow">Card 2</div>
            <div className="bg-white p-4 rounded shadow">Card 3</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardHome;
