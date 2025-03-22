import { useState } from "react";
// import { UploadCloud } from "lucide-react";

const SolutionSubmission = () => {
  const [solution, setSolution] = useState({
    file: null,
    subject: "",
    topic: "",
    description: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setSolution({ ...solution, file });
  };

  const handleChange = (e) => {
    setSolution({ ...solution, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting solution:", solution);
    // Handle form submission (e.g., send to backend)
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">
        {/* <UploadCloud className="w-7 h-7" /> */}
         Submit Your Solution
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* File Upload */}
        <div>
          <label className="block font-medium text-gray-700">Upload File:</label>
          <input 
            type="file" 
            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
            onChange={handleFileChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Subject Selection */}
        <div>
          <label className="block font-medium text-gray-700">Select Subject:</label>
          <select
            name="subject"
            value={solution.subject}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Choose a subject</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="history">History</option>
            <option value="computer">Computer Science</option>
          </select>
        </div>

        {/* Topic Input */}
        <div>
          <label className="block font-medium text-gray-700">Topic:</label>
          <input
            type="text"
            name="topic"
            value={solution.topic}
            onChange={handleChange}
            placeholder="Enter topic name..."
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Solution Description */}
        <div>
          <label className="block font-medium text-gray-700">Solution Description:</label>
          <textarea
            name="description"
            value={solution.description}
            onChange={handleChange}
            placeholder="Describe the solution..."
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium"
        >
          Submit Solution (Pending Approval)
        </button>
      </form>
    </div>
  );
};

export default SolutionSubmission;
