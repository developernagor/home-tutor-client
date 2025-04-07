import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams, Link } from "react-router";

function SubjectWiseSolution() {
  const { id } = useParams();

  const {
    data: subjectWiseSolution = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["subjectWiseSolution", id],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/subject-wise-solution/${id}`);
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-xl text-blue-500 animate-pulse">Loading solution...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-xl text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  if (!subjectWiseSolution || !subjectWiseSolution.solutionId) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center">
        <h2 className="text-3xl font-semibold text-gray-500 mb-4">
          No solution found for this subject.
        </h2>
        <Link to="/dashboard/add-note">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Add Your Solution
          </button>
        </Link>
      </div>
    );
  }

  if (subjectWiseSolution.solutionId === id) {
    return (
      <div className="max-w-4xl mx-auto p-8 my-10 bg-white rounded-2xl shadow-2xl border border-gray-200">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {subjectWiseSolution.solutionSubject}
          </h1>
          <p className="text-gray-600">
            Class {subjectWiseSolution.solutionClass} &bull; Chapter {subjectWiseSolution.solutionChapter}
          </p>
        </div>

        {subjectWiseSolution.solutionFile && (
          <div className="flex justify-center mb-6">
            <img
              src={subjectWiseSolution.solutionFile}
              alt="Solution"
              className="w-full max-w-2xl rounded-lg shadow-md border"
            />
          </div>
        )}

        <div className="text-right">
          <p className="text-sm text-gray-500">
            Posted on: {new Date(subjectWiseSolution.solutionTime).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export default SubjectWiseSolution;
