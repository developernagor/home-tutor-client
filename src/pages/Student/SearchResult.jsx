import React, { useState, useRef } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function SearchResult() {
  const [studentId, setStudentId] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [examName, setExamName] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [merit, setMerit] = useState(null);
  const resultRef = useRef();



  // Fetch all results once
  const {
    data: allResults = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["results"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/results`
      );
      return response.data;
    },
  });
  console.log(allResults)

  const examOptions = [...new Set(allResults.map((r) => r.examName))];
  // Calculate merit position based on obtainedMarks
  const calculateMeritPosition = (studentResult, exam) => {
    if (!allResults.length) {
      setMerit(null);
      return;
    }
    const filtered = allResults.filter((r) => r.examName === exam);
    if (!filtered.length) {
      setMerit(null);
      return;
    }
    filtered.sort((a, b) => b.obtainedMarks - a.obtainedMarks);

    const position = filtered.findIndex(
      (r) => r.studentId === studentResult.studentId
    );
    setMerit(position === -1 ? null : position + 1);
  };

  const handleSearch = async () => {
    if (!studentId || !examName) {
      setError("Please enter both Student ID and Exam Name");
      setResult(null);
      setMerit(null);
      return;
    }
    setSearchLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/result`, {
        params: { studentId, examName },
      });
      if (res.data) {
        setResult(res.data);
        setError("");
        calculateMeritPosition(res.data, examName);
      } else {
        setResult(null);
        setMerit(null);
        setError("No result found.");
      }
    } catch (error) {
      setResult(null);
      setMerit(null);
      setError(
        error.response?.data?.message || "No result found or error occurred."
      );
    } finally {
      setSearchLoading(false);
    }
  };

  const handleDownload = () => {
    if (resultRef.current) {
      window.print();
    }
  };

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading results...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <>
      {/* Search Form Section */}
      <div className="min-h-screen bg-gradient-to-tr from-indigo-100 to-purple-200 p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-blue-200 space-y-6 transition-all duration-500">
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            🎓 Search Student Result
          </h2>

          <div className="space-y-5">
            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-1">
                Student ID
              </label>
              <input
                type="text"
                placeholder="e.g. STU12345"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-2xl font-medium text-gray-700 mb-1">
                Exam Name
              </label>
              <select
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Exam</option>
                {examOptions.map((exam, idx) => (
                  <option key={idx} value={exam}>
                    {exam}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearch}
              disabled={searchLoading}
              className={`w-full py-3 text-white font-semibold rounded-xl shadow-md transition duration-300
    ${
      searchLoading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
    }`}
            >
              {searchLoading ? "Searching..." : "🔍 Search Result"}
            </button>

            {error && (
              <p className="text-red-500 text-center font-medium">{error}</p>
            )}
          </div>
        </div>

        {/* Result Section */}
        {result && (
          <div
            ref={resultRef}
            className="w-full max-w-3xl mt-10 bg-white/90 backdrop-blur-lg border border-blue-200 p-8 rounded-3xl shadow-xl transition-all duration-700 animate-fade-in-down print:shadow-none print:border-none print:bg-white"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-blue-800">
                📄 Student Result
              </h3>
              <button
                onClick={handleDownload}
                className="text-sm bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
              >
                📥 Download / Print
              </button>
            </div>

            <table className="w-full text-xl text-left text-gray-700 print:text-black border border-collapse border-gray-300">
              <tbody>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100 w-1/3">👤 Name</th>
                  <td className="py-3 px-4">{result.studentName}</td>
                </tr>

              {/* Student Id */}
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100 w-1/3">👤 Student Id</th>
                  <td className="py-3 px-4">{result.studentId}</td>
                </tr>

              {/* Class */}
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100">🏫 Class</th>
                  <td className="py-3 px-4">{result.studentClass}</td>
                </tr>

                {/* Exam Name */}
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100">🗓️ Exam Name</th>
                  <td className="py-3 px-4">{result.examName}</td>
                </tr>

                {/* Exam subject name */}
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100">📚 Subject</th>
                  <td className="py-3 px-4">{result.subject}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100">📊 Full Marks</th>
                  <td className="py-3 px-4">{result.fullMarks}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100">✅ Obtained Marks</th>
                  <td className="py-3 px-4">{result.obtainedMarks}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100">🎖️ Grade</th>
                  <td className="py-3 px-4">{result.grade}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 bg-blue-100">⭐ GPA</th>
                  <td className="py-3 px-4">{result.gpa}</td>
                </tr>
                
                <tr>
                  <th className="py-3 px-4 bg-blue-100">🏆 Merit Position</th>
                  <td className="py-3 px-4">
                    {merit !== null && (
                      <p className="py-3 px-4">
                        <strong className="text-blue-700">{merit}</strong>{" "}
                        <span>
                          out of{" "}
                          {
                            allResults.filter(
                              (r) => r.examName === result.examName
                            ).length
                          }
                        </span>
                      </p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchResult;
