import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router';

function TutorProfile() {

  const {id} = useParams();


  const {data: tutor, isLoading, isError, error} = useQuery({
    queryKey: ["tutor", id],
    queryFn: async() => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tutor/${id}`)
      console.log(response.data)
      return response.data;
    }
  })

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading tutor...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <img
        src={tutor.tutorImage}
        alt={tutor.tutorName}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-center">{tutor.tutorName}</h2>
      <p className="text-center text-gray-600">Subject: {tutor.tutorSubject}</p>
      <p className="text-center text-yellow-500">⭐ Rating: {tutor.tutorRating}</p>
    </section>
  )
}

export default TutorProfile
