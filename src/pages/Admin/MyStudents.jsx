import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function MyStudents() {
  const [student, setStudent] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    school: "",
    className: "",
    studentId: "",
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.name || !student.email) {
      toast.error("Name and email are required!");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/student`, student);
      toast.success("✅ Student info added successfully!");
      setStudent({
        name: "",
        fatherName: "",
        motherName: "",
        school: "",
        className: "",
        studentId: "",
        email: "",
        mobile: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg rounded-2xl">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Add Student
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">Student Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter student name"
            value={student.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Father's Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            placeholder="Enter father's name"
            value={student.fatherName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            placeholder="Enter mother's name"
            value={student.motherName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* School */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">School Name</label>
          <input
            type="text"
            name="school"
            placeholder="Enter school name"
            value={student.school}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Class */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">Class</label>
          <input
            type="text"
            name="className"
            placeholder="Enter class"
            value={student.className}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Student ID */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">Student ID</label>
          <input
            type="text"
            name="studentId"
            placeholder="Enter student ID"
            value={student.studentId}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={student.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block mb-1 font-semibold text-gray-600">Mobile</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            value={student.mobile}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600 shadow-md"
          }`}
        >
          {loading ? "⏳ Saving..." : "💾 Add Student"}
        </button>
      </form>
    </div>
  );
}

export default MyStudents;
