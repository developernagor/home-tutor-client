import WelcomeDashboard from "./DashboardHomePage/WelcomeDashboard";
import QuickStats from "./DashboardHomePage/QuickStats";
import RecentActivities from "./DashboardHomePage/RecentActivities";
import ToDoList from "./DashboardHomePage/ToDoList";
import GraphAnalytics from "./DashboardHomePage/GraphAnalytics";
import QuickActions from "./DashboardHomePage/QuickActions";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import StudentProfile from "../pages/Student/StudentProfile";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserList from "../pages/Admin/UserList";
import EmailSendToUser from "../pages/Admin/EmailSendToUser";

function DashboardHome() {
  const { user } = useContext(AuthContext);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const {
    data: dbUser = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading.........</p>;
  }

  if (isError) {
    console.log("Error:", error.message);
  }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}

        {/* Content Area */}
        <main className="p-6">
          {dbUser?.role === "admin" ? (
            <>
              {/* <WelcomeDashboard></WelcomeDashboard> */}
              <EmailSendToUser></EmailSendToUser>
              <QuickStats></QuickStats>
              <UserList></UserList>
              <RecentActivities></RecentActivities>
              <ToDoList></ToDoList>
              <GraphAnalytics></GraphAnalytics>
              <QuickActions></QuickActions>
            </>
          ) : (
            <>
              {/* <WelcomeDashboard></WelcomeDashboard> */}
              <StudentProfile></StudentProfile>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default DashboardHome;
