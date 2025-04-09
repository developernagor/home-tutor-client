import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router';

function FeaturedTutors() {
  const { data: tutors = [], isLoading, isError, error } = useQuery({
    queryKey: ['tutors'],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tutors`);
      console.log(response.data);
      return response.data;
    }
  });

  if (isLoading) {
    return <p className="text-center text-blue-500 text-xl mt-10">Loading tutors...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500 text-xl mt-10">Error: {error.message}</p>;
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">🌟 Top Rated Tutors</h2>

      {tutors.length !== 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={tutor.tutorImage}
                  alt="Tutor"
                  className="w-28 h-28 object-cover rounded-full border-4 border-blue-100 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-800">{tutor.tutorName}</h3>
              <p className="text-blue-500 font-medium mt-2">{tutor.tutorSubject}</p>
              <p className="text-yellow-500 text-lg mt-2 flex items-center justify-center gap-1">
                ⭐ {tutor.tutorRating}
              </p>

              <Link to={`/tutor/${tutor._id}`} className="w-full">
                <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View Profile
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-600">Tutors are not available right now. Please check back later. 📚</p>
        </div>
      )}
    </section>
  );
}

export default FeaturedTutors;
