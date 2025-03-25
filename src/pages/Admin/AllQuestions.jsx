import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router";

function AllQuestions() {
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

  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">All Questions</h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {questions.length > 0 ? (
          questions.map((item, index) => (
            <div key={index} className="flex justify-between bg-white">
              <div  className="w-9/12 p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold">{item.questionTitle}</p>
                <p className="text-lg font-semibold">
                  Question Id: {item.questionId}
                </p>
                <p className="text-sm text-gray-500">
                  Asked by {item.user || "Anonymous"}
                </p>
              </div>
              <div className="w-3/12 text-center flex justify-center items-center gap-2">
                <Link to={`/solution/${item.questionId}`}>
                  <button className="bg-blue-600 cursor-pointer text-white p-3 rounded-lg">
                    View Answer
                  </button>
                </Link>
                <Link 
                to="/dashboard/add-note"
                state={
                  {
                    question: item
                  }
                }
                >
                  <button className="bg-blue-600 cursor-pointer text-white p-3 rounded-lg">
                    Give Answer
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No recent questions found.
          </p>
        )}
      </div>
    </section>
  );
}

export default AllQuestions;
