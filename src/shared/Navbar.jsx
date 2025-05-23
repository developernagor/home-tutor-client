import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const ifLogin = (
    <>
      <Link
        onClick={() => {
          if (confirm("Are you sure you want to logout?")) {
            signOutUser().then(() => navigate("/login"));
          }
        }}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
      >
        Logout
      </Link>
    </>
  );
  const ifLogOut = (
    <>
      <Link
        to="/login"
        className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
      >
        Login
      </Link>
    </>
  );


  const navMenuItem = (
    <>
      <Link to="/" className="hover:text-gray-300">
        Home
      </Link>
      <Link to="/find-tutors" className="hover:text-gray-300">
        Find Tutors
      </Link>
      <Link to="/courses" className="hover:text-gray-300">
        Courses
      </Link>
      <Link to="/ask-question" className="hover:text-gray-300">
        Ask a Question
      </Link>
      <Link to="/solution" className="hover:text-gray-300">
        Solution
      </Link>
      <Link to="/blog" className="hover:text-gray-300">
        Blog
      </Link>
      <Link to="/results" className="hover:text-gray-300">
        Results
      </Link>
      {user?.email && (
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
      )}
    </>
  );

  const dropdownMenuItem = (
    <>
      <Link to="/" className="mb-2 hover:text-white">
        Home
      </Link>
      <Link to="/find-tutors" className="mb-2 hover:text-white">
        Find Tutors
      </Link>
      <Link to="/courses" className="mb-2 hover:text-white">
        Courses
      </Link>
      <Link to="/ask-question" className="mb-2 hover:text-white">
        Ask a Question
      </Link>
      <Link to="/solution" className="mb-2 hover:text-white">
        Solution
      </Link>
      <Link to="/blog" className="hover:text-gray-300">
        Blog
      </Link>
      <Link to="/results" className="mb-2 hover:text-white">
        Results
      </Link>
      {user?.email && (
        <Link to="/dashboard" className="hover:text-gray-300 mb-2">Dashboard</Link>
      )}

      {
        user?.email ? ifLogin : ifLogOut
      }

    </>
  );

  

  return (
    <div className="navbar bg-blue-600 text-white p-4 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-10 mt-3 w-32 p-2 shadow"
          >
            {dropdownMenuItem}
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
        {user?.email ? ifLogin : ifLogOut}
      </div>
    </div>
  );
}

export default Navbar;
