import { useContext } from 'react';
import { Outlet, Link } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function DashboardLayout() {
 const {user, signOutUser} = useContext(AuthContext)

     const {data: dbUser = {}, isLoading, isError, error } = useQuery({
         queryKey: ["user"],
         queryFn: async() => {
             const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`)
             console.log(res.data)
             return res.data;
         }
     })
     
     if(isLoading){
      return <p>Loading.........</p>
     }

     if(isError){
      console.log("Error:", error.message)
     }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-4/12 md:w-2/12 p-4">
        <h2 className="text-sm md:text-3xl font-bold">Dashboard</h2>
        <ul className="mt-2 md:mt-4 text-sm md:text-2xl space-y-1 md:space-y-2">
          
          {
            dbUser.role === "admin" 
            ?
            <>
            <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="add-course" className="text-white">Add Course</Link></li>
          <li><Link to="add-tutor" className="text-white">Add Tutor</Link></li>
          <li><Link to="all-tutors" className="text-white">All Tutors</Link></li>
          <li><Link to="all-questions" className="text-white">All Questions</Link></li>
          <li><Link to="add-note" className="text-white">Add Note</Link></li>
          <li><Link to="add-solution" className="text-white">Add Solution</Link></li>
          <li><Link to="add-blog" className="text-white">Add Blog</Link></li>
            </>
            : 
            <>
            <li><Link to="/" className="text-white">Home</Link></li>
            </>
}

        </ul>
        <button onClick={signOutUser} className="bg-white mt-6 text-blue-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">Logout</button>

      </aside>

      {/* Main Content */}
      <div className="flex-1 p-2 md:p-4 lg:p-6 w-8/12 md:w-10/12">
        <Outlet /> {/* This will render the dashboard pages */}
      </div>
    </div>
  );
}

export default DashboardLayout;
