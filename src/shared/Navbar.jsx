import { Link } from "react-router";

function Navbar() {
  const navMenuItem = (
    <>
      <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/find-tutors" className="hover:text-gray-300">Find Tutors</Link>
          <Link to="/courses" className="hover:text-gray-300">Courses</Link>
          <Link to="/ask-question" className="hover:text-gray-300">Ask a Question</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/solution" className="hover:text-gray-300">Solution</Link>
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {navMenuItem}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          Home Tutor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex space-x-6">
        
          {navMenuItem}
        
      </div>
      <div className="navbar-end hidden md:flex space-x-4">
      <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
            Login
          </Link>
          <Link to="/signup" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-500">
            Sign Up
          </Link>
      </div>
    </div>
  );
}

export default Navbar;
