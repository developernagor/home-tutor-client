import { useState } from "react";
// import { Eye, Download, Filter } from "lucide-react";

const sampleData = [
  { id: 1, class: "One", chapter:"2.1", subject: "Mathematics", question: "Do you have your Resume ?", file: "https://drive.google.com/file/d/1lORi14saDUPN1QV3xSlT79axRavNcKws/view?usp=sharing" },
  { id: 2, class: "One", chapter:"2.1", subject: "Science", question: "What is Newton’s first law?", file: "/files/newton-law.pdf" },
  { id: 3, class: "One", chapter:"2.1", subject: "English", question: "What is a metaphor?", file: "/files/metaphor.docx" },
  { id: 4, class: "One", chapter:"2.1", subject: "History", question: "Who was Napoleon Bonaparte?", file: "/files/napoleon.docx" },
  { id: 5, class: "One", chapter:"2.1", subject: "Computer Science", question: "What is an algorithm?", file: "/files/algorithm.pdf" },
];

const DownloadQuestion = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState("All");


 // Filter the data based on selections
 const filteredData = sampleData.filter((item) => 
  (selectedClass === "All" || item.class === selectedClass) &&
  (selectedSubject === "All" || item.subject === selectedSubject) &&
  (selectedChapter === "All" || item.chapter === selectedChapter)
);

// Get unique values for dropdowns
const uniqueClasses = ["All", ...new Set(sampleData.map((item) => item.class))];
const uniqueSubjects = ["All", ...new Set(sampleData.map((item) => item.subject))];
const uniqueChapters = ["All", ...new Set(sampleData.map((item) => item.chapter))];


  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-bold text-blue-600">Subject-wise Questions & Answers</h2>

      {/* Subject Filter */}
      <div className="filterQuestion flex justify-between">
      <div className="mt-4 flex items-center gap-2">
        {/* <Filter className="w-5 h-5 text-gray-600" /> */}
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {
            uniqueClasses.map(cls => 
              <option key={cls} value={cls}>{cls}</option>
            )
          }
        </select>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {/* <Filter className="w-5 h-5 text-gray-600" /> */}
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {
            uniqueSubjects.map(sub => 
              <option key={sub} value={sub}>{sub}</option>
            )
          }
        </select>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {/* <Filter className="w-5 h-5 text-gray-600" /> */}
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {
            uniqueChapters.map(chap => 
              <option key={chap} value={chap}>{chap}</option>
            )
          }
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
              <th className="border border-gray-300 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{item.subject}</td>
                  <td className="border border-gray-300 p-3">{item.question}</td>
                  <td className="border border-gray-300 p-3 flex gap-2 justify-center">
                    <a href={item.file} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-3 py-1 rounded-lg flex items-center gap-1">
                      {/* <Eye className="w-4 h-4" />  */}
                      View
                    </a>
                    <a href={item.file} download className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-1">
                      {/* <Download className="w-4 h-4" />  */}
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="border border-gray-300 p-3 text-center text-gray-500">
                  No questions available for this subject.
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
