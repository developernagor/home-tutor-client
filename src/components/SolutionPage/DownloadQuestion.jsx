import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
// import { Eye, Download, Filter } from "lucide-react";

const DownloadQuestion = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState("All");

  const {
    data: questions = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/questions`
      );
      console.log(response.data);
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <p className="text-center text-blue-500">Loading all questions...</p>
    );
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  // Filter the data based on selections
  const filteredData = questions.filter(
    (item) =>
      (selectedClass === "All" || item.questionClass === selectedClass) &&
      (selectedSubject === "All" || item.questionSubject === selectedSubject) &&
      (selectedChapter === "All" || item.questionChapter === selectedChapter)
  );

  // Get unique values for dropdowns
  const uniqueClasses = [
    "All",
    ...new Set(questions.map((item) => item.questionClass)),
  ];
  const uniqueSubjects = [
    "All",
    ...new Set(questions.map((item) => item.questionSubject)),
  ];
  const uniqueChapters = [
    "All",
    ...new Set(questions.map((item) => item.questionChapter)),
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-600">
        Class, subject & chapter-wise Questions & Answers
      </h2>

      {/* Subject Filter */}
      <div className="filterQuestion flex justify-between">
        <div className="mt-4 flex items-center gap-2">
          {/* <Filter className="w-5 h-5 text-gray-600" /> */}
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {uniqueClasses.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {/* <Filter className="w-5 h-5 text-gray-600" /> */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {uniqueSubjects.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {/* <Filter className="w-5 h-5 text-gray-600" /> */}
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {uniqueChapters.map((chap) => (
              <option key={chap} value={chap}>
                {chap}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border border-gray-300 p-3">#</th>
              <th className="border border-gray-300 p-3">Subject</th>
              <th className="border border-gray-300 p-3">Question</th>
              <th className="border border-gray-300 p-3">Answers</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-3 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {item.questionSubject}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {item.questionTitle}
                  </td>
                  <td className="border border-gray-300 p-3 flex gap-2 justify-center">
                    <Link to={`/solution/${item.questionId}`}>
                      <button className="bg-blue-600 cursor-pointer text-white p-3 rounded-lg">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="border border-gray-300 p-3 text-center text-gray-500"
                >
                  No questions available for this subject or chapter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadQuestion;
