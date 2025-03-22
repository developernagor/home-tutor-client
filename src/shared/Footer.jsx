import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold">Home Tutor</h2>
          <p className="text-gray-400 mt-2">
            Your one-stop solution for finding the best tutors and learning resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/find-tutors" className="hover:text-blue-400">Find Tutors</Link></li>
            <li><Link to="/courses" className="hover:text-blue-400">Courses</Link></li>
            <li><Link to="/ask-question" className="hover:text-blue-400">Ask a Question</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-400 mt-2">Email: support@hometutor.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Location: 123 Tutor Street, EduCity</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Home Tutor. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
