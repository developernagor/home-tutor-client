import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router";

function SingleQuestionSolution() {
  const { id } = useParams();
  console.log(id)

  const {
    data: solution,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["solution", id],
    queryFn: async() => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/solution/${id}`);
        console.log(response.data);
        return response.data;
      
    },
  });

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading solutions...</p>;
  }

  if (!solution || solution.length === 0 || !solution.questionId) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="text-center text-4xl my-4 text-gray-500">
          No solution found for this question.
        </p>
        {/* <Link to="/dashboard/add-note">
          <button className="btn bg-blue-600 text-white rounded-lg">
            Add Your Answer
          </button>
        </Link> */}
      </div>
    );
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  // If no solution is found

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">
        {solution.noteTitle}
      </h2>
      <div className="mb-4">
        <p className="text-md text-gray-600">
          <strong>Class:</strong> {solution.noteClass}
        </p>
        <p className="text-md text-gray-600">
          <strong>Subject:</strong> {solution.noteSubject}
        </p>
        <p className="text-md text-gray-600">
          <strong>Chapter:</strong> {solution.noteChapter}
        </p>
      </div>
      <p className="text-lg text-gray-800 leading-relaxed">
        {solution.noteSolution}
      </p>
      {solution.solutionFile && (
        <div className="mt-6 flex justify-center">
          <img
            src={solution.solutionFile}
            alt="Solution"
            className="w-full max-w-lg rounded-lg shadow-md border"
          />
        </div>
      )}
      <p className="text-sm text-gray-500 mt-6 text-right">
        <em>Posted on: {new Date(solution.solutionTime).toLocaleString()}</em>
      </p>
    </div>
  );
}

export default SingleQuestionSolution;
