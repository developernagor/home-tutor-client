import React from 'react'

function CourseCategory() {
  return (
    <section className="bg-gray-100 py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Course Categories</h2>
  <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      { title: "Mathematics", icon: "📏" },
      { title: "Science", icon: "🔬" },
      { title: "Languages", icon: "🗣️" },
      { title: "Programming", icon: "💻" },
    ].map((category, index) => (
      <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
        <div className="text-4xl">{category.icon}</div>
        <h3 className="text-xl font-semibold mt-2">{category.title}</h3>
      </div>
    ))}
  </div>
</section>

  )
}

export default CourseCategory
