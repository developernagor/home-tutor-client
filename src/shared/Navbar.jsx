import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Home Tutor
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/find-tutors" className="hover:text-gray-300">Find Tutors</Link>
          <Link to="/courses" className="hover:text-gray-300">Courses</Link>
          <Link to="/ask-question" className="hover:text-gray-300">Ask a Question</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/solution" className="hover:text-gray-300">Solution</Link>
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </div>

        {/* Login/Signup */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
            Login
          </Link>
          <Link to="/signup" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-500">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white text-2xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
