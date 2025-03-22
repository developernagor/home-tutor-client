import React from 'react'

function HowItWorks() {
  return (
    <section className="bg-gray-100 py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
  <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto">
    {["Find a Tutor", "Book a Session", "Start Learning"].map((step, index) => (
      <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
        <div className="text-3xl font-bold text-blue-600">{index + 1}</div>
        <h3 className="text-xl font-semibold mt-2">{step}</h3>
        <p className="text-gray-600 mt-2">A brief explanation of this step.</p>
      </div>
    ))}
  </div>
</section>

  )
}

export default HowItWorks
