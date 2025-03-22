import React from 'react'

function CoursesAndSubjects() {
  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Subjects We Offer</h2>
  <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {["Math", "Science", "English", "Programming"].map((subject, index) => (
      <div key={index} className="bg-blue-600 text-white text-center p-6 rounded-lg hover:bg-blue-700 transition">
        <h3 className="text-xl font-semibold">{subject}</h3>
      </div>
    ))}
  </div>
</section>

  )
}

export default CoursesAndSubjects
