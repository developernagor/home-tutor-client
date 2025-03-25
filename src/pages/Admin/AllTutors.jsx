// import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function AllTutors() {
  // const [tutors, setTutors] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);


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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Tutors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{tutor.tutorName}</h2>
            <p className="text-gray-600">Subject: {tutor.tutorSubject}</p>
            <p className="text-gray-600">Location: {tutor.tutorLocation}</p>
            <p className="text-gray-600">Experience: {tutor.tutorExperience} years</p>
            <p className="text-gray-600">Availability: {tutor.tutorAvailability}</p>
            <p className="text-gray-600">Contact: {tutor.tutorContact}</p>
            <p className="text-yellow-500 font-semibold">⭐ {tutor.tutorRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTutors;
