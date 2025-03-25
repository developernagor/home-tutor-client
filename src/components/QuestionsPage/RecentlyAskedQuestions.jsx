import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function RecentlyAskedQuestions() {


  const {data: questions = [], isLoading, isError, error} = useQuery({
    queryKey: ["questions"],
    queryFn: async() => {

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/questions`)
      return response.data;
    }
  })

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading recent questions...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }


  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Questions</h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {questions.length > 0 ? (
          questions.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold">{item.questionTitle}</p>
              <p className="text-sm text-gray-500">Asked by {item.user || "Anonymous"}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No recent questions found.</p>
        )}
      </div>
    </section>

  )
}

export default RecentlyAskedQuestions
