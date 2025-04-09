import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function TutorResponsesQuestions() {

  const {data: answer = [], isLoading, isError, error} = useQuery({
    queryKey: ["answer"],
    queryFn: async() => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/solutions`)
      console.log(res.data)
      return res.data;
    }
  })

  if(isLoading){
    return <p>Answer is Loading........</p>
  }

  if(isError){
    return <p>Error: {error.message}</p>
  }



  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Tutor Answers</h2>
  <div className="max-w-5xl mx-auto space-y-6">
    {answer.map((response, index) => (
      <div key={index} className="border p-6 rounded-lg shadow-md flex items-center">
        <div className='w-9/12'>
        <h3 className="text-lg font-semibold">Question: {response.noteTitle}</h3>
        <p className="mt-2 font-bold text-blue-600">Answer: {response.noteSolution}</p>
        <p className="text-yellow-500 text-lg mt-2">Details: {response.noteDescription}</p>
        </div>
        <div className='w-3/12'>
          <p className='bg-black mb-2 text-white text-center rounded-2xl p-1 text-xs'>{response.noteSubject}</p>
          <p className='bg-black mb-2 text-white text-center rounded-2xl p-1 text-xs'>{response.noteChapter}</p>
          <p className='bg-black mb-2 text-white text-center rounded-2xl p-1 text-xs'>{response.solutionTime}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}

export default TutorResponsesQuestions
