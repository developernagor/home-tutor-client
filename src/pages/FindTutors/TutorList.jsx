import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router';

function TutorList() {

  const {data: tutors = [], isLoading, isError, error} = useQuery({
    queryKey: ["tutors"],
    queryFn: async() => {

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tutors`)
      console.log(response.data)
      return response.data;
    }
  })

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading tutors...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Available Tutors</h2>

  {
      tutors?.length !== 0 
      ? 
      <>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {tutors.map((tutor, index) => (
      <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
        <img src={tutor.tutorImage} alt="Tutor" className="w-24 h-24 mx-auto rounded-full"/>
        <h3 className="text-xl font-semibold mt-4">{tutor.tutorName}</h3>
        <p className="text-gray-600">{tutor.tutorSubject} expert</p>
        <p className="text-yellow-500 text-lg mt-2">⭐{tutor.tutorRating}</p>
        <Link to={`/tutor/${tutor._id}`}>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View Profile
        </button>
        </Link>
      </div>
    ))}
  </div>
      </>
      : 
      <>
      <div>
        <p className='text-2xl text-center'>Tutors are not available.</p>
      </div>
      </>
    }


  
</section>

  )
}

export default TutorList
