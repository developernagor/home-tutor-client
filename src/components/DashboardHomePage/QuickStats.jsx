import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

function QuickStats() {

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

    const {data: courses = []} = useQuery({
      queryKey: ["courses"],
      queryFn: async () => {
        try{
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/courses`)
          return response.data;
        }catch(error){
          console.log(error.message)
        }
      }
    })



  const {data: allUser = {} } = useQuery({
    queryKey: ["allUser"],
    queryFn: async() => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
        console.log(res.data)
        return res.data;
    }
})

if(isLoading){
 return <p>Loading.........</p>
}

if(isError){
 console.log("Error:", error.message)
}


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Total Courses</h2>
          <p className="text-2xl text-blue-500 font-bold">{courses.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Asked Questions</h2>
          <p className="text-2xl text-green-500 font-bold">{questions.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Total User</h2>
          <p className="text-2xl text-purple-500 font-bold">{allUser.length}</p>
        </div>
      </div>
  )
}

export default QuickStats
