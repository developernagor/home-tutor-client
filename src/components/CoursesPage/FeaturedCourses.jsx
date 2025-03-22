import React from 'react'

function FeaturedCourses() {
  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[1, 2, 3].map((id) => (
      <div key={id} className="bg-white shadow-lg p-6 rounded-lg">
        <img src={`https://source.unsplash.com/300x200/?education,course${id}`} alt="Course" className="w-full rounded-lg"/>
        <h3 className="text-xl font-semibold mt-4">Course Title {id}</h3>
        <p className="text-gray-600">Instructor: John Doe</p>
        <p className="mt-2 font-semibold text-blue-600">$50 | 20 Lessons</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View Course
        </button>
      </div>
    ))}
  </div>
</section>

  )
}

export default FeaturedCourses
