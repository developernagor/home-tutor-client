import React from 'react'

function SearchQuestions() {
  return (
    <section className="py-8 px-4">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
    <input type="text" placeholder="Search questions..." className="p-3 border rounded-lg flex-1"/>
    <select className="p-3 border rounded-lg">
      <option value="">Filter by Category</option>
      <option value="math">Mathematics</option>
      <option value="science">Science</option>
      <option value="language">Language</option>
    </select>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
      Search
    </button>
  </div>
</section>

  )
}

export default SearchQuestions
