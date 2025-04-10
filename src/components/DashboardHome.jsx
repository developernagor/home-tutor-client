import WelcomeDashboard from "./DashboardHomePage/WelcomeDashboard";
import QuickStats from "./DashboardHomePage/QuickStats";
import RecentActivities from "./DashboardHomePage/RecentActivities";
import ToDoList from "./DashboardHomePage/ToDoList";
import GraphAnalytics from "./DashboardHomePage/GraphAnalytics";
import QuickActions from "./DashboardHomePage/QuickActions";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import StudentProfile from "../pages/Student/StudentProfile";

function DashboardHome() {
  const { user } = useContext(AuthContext);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}

        {/* Content Area */}
        <main className="p-6">
          {user?.role === "admin" ? (
            <>
              <WelcomeDashboard></WelcomeDashboard>
              <QuickStats></QuickStats>
              <RecentActivities></RecentActivities>
              <ToDoList></ToDoList>
              <GraphAnalytics></GraphAnalytics>
              <QuickActions></QuickActions>
            </>
          ) : (
            <>
              <WelcomeDashboard></WelcomeDashboard>
              <StudentProfile></StudentProfile>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default DashboardHome;
