import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router'

function FeaturedCourses() {

  const {data: courses = [], isLoading, isError, error} = useQuery({
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

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading all courses...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }


  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {courses.map((course) => (
      <div key={course._id} className="bg-white shadow-lg p-6 rounded-lg">
        <img src="" alt="Course" className="w-full rounded-lg"/>
        <h3 className="text-xl font-semibold mt-4">Course Title: {course.courseSubject}</h3>
        <p className="text-gray-600">Instructor: {course.courseInstructor}</p>
        <p className="mt-2 font-semibold text-blue-600">Course Price: BDT {course.coursePrice}</p>
        <Link to={`/courses/${course._id}`}>
    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      View Course
    </button>
  </Link>
      </div>
    ))}
  </div>
</section>

  )
}

export default FeaturedCourses
