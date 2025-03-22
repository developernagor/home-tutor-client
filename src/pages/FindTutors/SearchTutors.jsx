import React from 'react'

function SearchTutors() {
  return (
    <section className="py-8 px-4 bg-gray-100">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    <input type="text" placeholder="Search by name or subject..." className="p-3 border rounded-lg"/>
    <select className="p-3 border rounded-lg">
      <option value="">Select Subject</option>
      <option value="math">Math</option>
      <option value="science">Science</option>
      <option value="english">English</option>
    </select>
    <select className="p-3 border rounded-lg">
      <option value="">Select Location</option>
      <option value="online">Online</option>
      <option value="new-york">New York</option>
      <option value="los-angeles">Los Angeles</option>
    </select>
    <select className="p-3 border rounded-lg">
      <option value="">Availability</option>
      <option value="morning">Morning</option>
      <option value="afternoon">Afternoon</option>
      <option value="evening">Evening</option>
    </select>
    <select className="p-3 border rounded-lg">
      <option value="">Price Range</option>
      <option value="low">Low ($10 - $30/hr)</option>
      <option value="medium">Medium ($30 - $60/hr)</option>
      <option value="high">High ($60+/hr)</option>
    </select>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
      Search Tutors
    </button>
  </div>
</section>

  )
}

export default SearchTutors
