import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router"; // corrected router import

function AllQuestions() {
  const queryClient = useQueryClient();

  // Fetching questions
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
      return response.data;
    },
  });

  // Mutation for deleting a question
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${import.meta.env.VITE_API_URL}/questions/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["questions"]); // Refresh list
    },
  });

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this question?");
    if (confirm) {
      deleteMutation.mutate(id);
    }
  };

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
          questions.map((item) => (
            <div key={item.questionId} className="flex justify-between bg-white rounded shadow">
              <div className="w-9/12 p-4">
                <p className="text-lg font-semibold">{item.questionTitle}</p>
                <p className="text-lg font-semibold">
                  Question Id: {item.questionId}
                </p>
                <p className="text-sm text-gray-500">
                  Asked by {item.user || "Anonymous"}
                </p>
              </div>
              <div className="w-3/12 text-center flex flex-col justify-center items-center gap-2 p-2">
                <Link to={`/solution/${item.questionId}`}>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    View Answer
                  </button>
                </Link>
                <Link
                  to="/dashboard/add-note"
                  state={{ question: item }}
                >
                  <button className="bg-green-600 text-white px-3 py-1 rounded">
                    Give Answer
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(item.questionId)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No recent questions found.</p>
        )}
      </div>
    </section>
  );
}

export default AllQuestions;
