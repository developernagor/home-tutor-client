import { useState } from "react";
// import { Search, Filter } from "lucide-react";

const SolutionFilterBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        {/* <Search className="w-5 h-5 text-gray-500" /> */}
        <input
          type="text"
          placeholder="Search solutions by subject or topic..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </div>

      {/* Filter & Sort */}
      <div className="flex justify-between items-center mt-4">
        {/* Status Filter */}
        <div className="flex items-center gap-2">
          {/* <Filter className="w-5 h-5 text-gray-600" /> */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Date</option>
            <option value="subject">Subject</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SolutionFilterBar;
