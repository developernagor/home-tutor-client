import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const CourseDetails = () => {
  const { courseId } = useParams();  // Get the courseId from URL params

  const { data: course, isLoading, isError, error } = useQuery({
    queryKey: ['courseDetails', courseId],
    queryFn: async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/courses/${courseId}`);
        return response.data;  // Fetch the course details using the courseId
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading course details...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Course Image */}
          <img
            src={course.courseImage || '/default-image.jpg'}  // Use default if no image
            alt={course.courseSubject}
            className="w-full md:w-1/3 rounded-lg"
          />
          {/* Course Details */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">{course.courseSubject}</h2>
            <p className="text-gray-600 mb-2">Instructor: {course.courseInstructor}</p>
            <p className="text-gray-600 mb-2">Price: BDT {course.coursePrice}</p>
            <p className="text-gray-800 mt-4">{course.courseDescription}</p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
