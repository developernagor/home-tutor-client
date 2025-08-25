import React, { useState, useEffect } from "react";
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
  const [students, setStudents] = useState([]);
  const [fetching, setFetching] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Fetch all students
  const fetchStudents = async () => {
    try {
      setFetching(true);
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/students`);
      setStudents(data);
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to fetch students");
    } finally {
      setFetching(false);
    }
  };

  // Add new student
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
      fetchStudents(); // Refresh list
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  // Fetch students on page load
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg rounded-2xl">
      <Toaster position="top-center" />

      {/* ---------- Form Section ---------- */}
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Add Student
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "fatherName", "motherName", "school", "className", "studentId", "email", "mobile"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-semibold text-gray-600">
              {field === "name"
                ? "Student Name"
                : field === "fatherName"
                ? "Father's Name"
                : field === "motherName"
                ? "Mother's Name"
                : field === "school"
                ? "School Name"
                : field === "className"
                ? "Class"
                : field === "studentId"
                ? "Student ID"
                : field === "email"
                ? "Email"
                : "Mobile"}
            </label>
            <input
              type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
              name={field}
              placeholder={`Enter ${field}`}
              value={student[field]}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        ))}

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

      {/* ---------- Student Cards Section ---------- */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-center text-gray-700">
        All Students
      </h2>

      {fetching ? (
        <p className="text-center text-gray-500">⏳ Loading students...</p>
      ) : students.length === 0 ? (
        <p className="text-center text-gray-500">No students found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {students.map((s) => (
            <div
              key={s._id}
              className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-purple-600 mb-2">
                {s.name}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Father:</span> {s.fatherName || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Mother:</span> {s.motherName || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">School:</span> {s.school || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Class:</span> {s.className || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Student ID:</span> {s.studentId || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Email:</span> {s.email}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Mobile:</span> {s.mobile}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyStudents;
