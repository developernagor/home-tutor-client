import { Outlet, Link } from 'react-router';

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-64 p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <ul className="mt-4 space-y-2">
          {/* Navigate to MainLayout (Home Page) */}
          <li><Link to="/" className="text-white">Home</Link></li>
          {/* <li><Link to="/dashboard/analytics" className="text-white">Analytics</Link></li> */}
          {/* <li><Link to="/dashboard/settings" className="text-white">Settings</Link></li> */}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This will render the dashboard pages */}
      </div>
    </div>
  );
}

export default DashboardLayout;
