import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router'; // ✅ Correct import

function StudentProfile() {
  const { user } = useContext(AuthContext);
  console.log(user)

  const { data: dbUser = {}, isLoading, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`);
      return res.data;
    },
  });
  console.log(dbUser)

  const { data: studentResults = [] } = useQuery({
    queryKey: ['results', dbUser?.studentId],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/results/student`, {
        params: { studentId: dbUser?.studentId },
      });
      return response.data;
    },
    enabled: !!dbUser?.studentId,
  });

  if (isLoading) return <p className="text-center text-blue-500">Loading profile...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl space-y-6">
      {/* User Info */}
      <div className="flex flex-col items-center space-y-3">
        <img
          className="w-28 h-28 rounded-full object-cover ring-4 ring-blue-400 shadow-md"
          src={user.photoURL || 'https://i.pravatar.cc/150?img=32'}
          alt="User Avatar"
        />
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">{user.displayName}</h2>
          <p className="text-gray-500">{user.email}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
            {dbUser.role || 'Student'}
          </span>
        </div>
        <p className="text-sm text-gray-600">{dbUser.studentId ? `ID: ${dbUser.studentId}` : 'Student ID not available.'}</p>
        <Link
          to="/edit-profile"
          className="mt-2 inline-block px-5 py-2 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition"
        >
          Edit Profile
        </Link>
      </div>

      {/* Result Section (No Scrollbar) */}
      <div className="bg-white p-4 rounded-xl shadow-inner border border-blue-100">
        <h3 className="text-xl font-semibold text-center text-blue-700 mb-4 border-b pb-2">Your Results</h3>
        {studentResults.length > 0 ? (
          <ul className="space-y-4">
            {studentResults.map((result, idx) => (
              <li
                key={idx}
                className="p-4 bg-blue-50 rounded-md border border-blue-200 shadow-sm hover:shadow-md transition"
              >
                <p><span className="font-semibold text-gray-700">Student:</span> {result.studentName}</p>
                <p><span className="font-semibold text-gray-700">Class:</span> {result.studentClass}</p>
                <p><span className="font-semibold text-gray-700">Exam:</span> {result.examName}</p>
                <p><span className="font-semibold text-gray-700">Subject:</span> {result.subject || 'N/A'}</p>
                <p><span className="font-semibold text-gray-700">Marks:</span> {result.obtainedMarks} / {result.fullMarks}</p>
                <p><span className="font-semibold text-gray-700">Grade:</span> {result.grade || 'N/A'}</p>
                <p><span className="font-semibold text-gray-700">GPA:</span> {result.gpa || 'N/A'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No results available yet.</p>
        )}
      </div>
    </div>
  );
}

export default StudentProfile;
