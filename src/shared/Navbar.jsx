import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

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
      <Link to="/contact" className="hover:text-gray-300">
        Contact
      </Link>
      <Link to="/dashboard" className="hover:text-gray-300">
        Dashboard
      </Link>
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
      <Link to="/contact" className="mb-2 hover:text-white">
        Contact
      </Link>
      <Link to="/dashboard" className="mb-2 hover:text-white">
        Dashboard
      </Link>

      <Link
        to="/login"
        className="mb-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-500"
      >
        Sign Up
      </Link>
    </>
  );

  const ifLogin = (
    <>
      <Link
        onClick={signOutUser}
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
      <Link
        to="/signup"
        className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-500"
      >
        Sign Up
      </Link>
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
