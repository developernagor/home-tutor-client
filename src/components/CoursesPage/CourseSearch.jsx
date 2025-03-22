import React from 'react'

function CourseSearch() {
  return (
    <section className="py-8 px-4 bg-gray-100">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    <input type="text" placeholder="Search courses..." className="p-3 border rounded-lg"/>
    <select className="p-3 border rounded-lg">
      <option value="">Select Category</option>
      <option value="math">Mathematics</option>
      <option value="science">Science</option>
      <option value="language">Language</option>
    </select>
    <select className="p-3 border rounded-lg">
      <option value="">Difficulty Level</option>
      <option value="beginner">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
    <select className="p-3 border rounded-lg">
      <option value="">Price Range</option>
      <option value="free">Free</option>
      <option value="paid">Paid</option>
    </select>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
      Search Courses
    </button>
  </div>
</section>

  )
}

export default CourseSearch
