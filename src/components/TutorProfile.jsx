import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';

function TutorProfile() {
  const { id } = useParams();

  const { data: tutor, isLoading, isError, error } = useQuery({
    queryKey: ['tutor', id],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tutor/${id}`);
      return response.data;
    },
  });

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading tutor...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src={tutor.tutorImage || `https://api.dicebear.com/7.x/initials/svg?seed=${tutor.tutorName}`}
          alt={tutor.tutorName}
          className="w-36 h-36 rounded-full shadow-md object-cover mb-4"
        />
        <h1 className="text-3xl font-semibold text-gray-800">{tutor.tutorName}</h1>
        <p className="text-gray-500">{tutor.tutorSubject}</p>
        <p className="text-yellow-500 text-sm">⭐ Rating: {tutor.tutorRating}/5</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <h2 className="text-lg font-bold mb-1">Contact</h2>
          <p>Email: {tutor.tutorEmail}</p>
          <p>Phone: {tutor.tutorContact}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-1">Location & Availability</h2>
          <p>Location: {tutor.tutorLocation}</p>
          <p>Availability: {tutor.tutorAvailability}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-1">Experience & Qualification</h2>
          <p>Experience Since: {tutor.tutorExperience}</p>
          <p>Qualification: {tutor.tutorQualification}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-1">Teaching Details</h2>
          <p>Method: {tutor.tutorTeachingMethod}</p>
          <p>Days: {tutor.tutorTeachingDays}</p>
          <p>Time: {tutor.tutorTeachingTime}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-1">Other Info</h2>
          <p>Gender: {tutor.tutorGender}</p>
          <p>Languages: {tutor.tutorLanguages}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-gray-700 leading-relaxed">{tutor.tutorDescription}</p>
      </div>
    </section>
  );
}

export default TutorProfile;
