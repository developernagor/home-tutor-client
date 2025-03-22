import React from 'react'

function FeaturedTutors() {
  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Top Rated Tutors</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[1, 2, 3].map((id) => (
      <div key={id} className="bg-white shadow-lg p-6 rounded-lg text-center">
        <img src={`https://i.pravatar.cc/150?img=${id}`} alt="Tutor" className="w-24 h-24 mx-auto rounded-full"/>
        <h3 className="text-xl font-semibold mt-4">Tutor Name</h3>
        <p className="text-gray-600">Math & Science Expert</p>
        <p className="text-yellow-500 text-lg mt-2">⭐ 4.9 Rating</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View Profile
        </button>
      </div>
    ))}
  </div>
</section>

  )
}

export default FeaturedTutors
