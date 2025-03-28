import { Outlet, Link } from 'react-router';

function DashboardLayout() {
  const user = {
    name: "Mehedi",
    email: "devmehedi@gmail.com",
    role: "admin"
  }


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-4/12 md:w-2/12 p-4">
        <h2 className="text-sm md:text-3xl font-bold">Dashboard</h2>
        <ul className="mt-2 md:mt-4 text-sm md:text-2xl space-y-1 md:space-y-2">
          
          {
            user.role === "admin" 
            ?
            <>
            <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="add-course" className="text-white">Add Course</Link></li>
          <li><Link to="add-tutor" className="text-white">Add Tutor</Link></li>
          <li><Link to="all-tutors" className="text-white">All Tutors</Link></li>
          <li><Link to="all-questions" className="text-white">All Questions</Link></li>
          <li><Link to="add-note" className="text-white">Add Note</Link></li>
            </>
            : 
            <>
            <li><Link to="/" className="text-white">Home</Link></li>
            </>
          }

        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-2 md:p-4 lg:p-6 w-8/12 md:w-10/12">
        <Outlet /> {/* This will render the dashboard pages */}
      </div>
    </div>
  );
}

export default DashboardLayout;
