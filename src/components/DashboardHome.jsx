import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import WelcomeDashboard from './DashboardHomePage/WelcomeDashboard';
import QuickStats from './DashboardHomePage/QuickStats';
import RecentActivities from './DashboardHomePage/RecentActivities';
import ToDoList from './DashboardHomePage/ToDoList';
import GraphAnalytics from './DashboardHomePage/GraphAnalytics';
import QuickActions from './DashboardHomePage/QuickActions';

function DashboardHome() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-gray-700">
          <FaBars />
          </button>
          <h1 className="text-lg font-semibold hidden md:block">Welcome to Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">User</span>
            <button className="bg-blue-500 px-3 py-1 text-white rounded">Logout</button>
          </div>
        </nav>

        {/* Content Area */}
        <main className="p-6">
          <WelcomeDashboard></WelcomeDashboard>
          <QuickStats></QuickStats>
          <RecentActivities></RecentActivities>
          <ToDoList></ToDoList>
          <GraphAnalytics></GraphAnalytics>
          <QuickActions></QuickActions>
        </main>
      </div>
    </div>
  )
}

export default DashboardHome;
