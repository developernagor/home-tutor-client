import React from 'react'

function TutorResponsesQuestions() {
  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Tutor Answers</h2>
  <div className="max-w-5xl mx-auto space-y-6">
    {[
      { tutor: "Dr. Smith", answer: "Newton’s First Law states that an object will remain at rest or in motion unless acted upon by an external force.", rating: "⭐ 4.9" },
      { tutor: "Prof. Lisa", answer: "The quadratic formula is a universal method to solve quadratic equations.", rating: "⭐ 5.0" },
    ].map((response, index) => (
      <div key={index} className="border p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{response.tutor}</h3>
        <p className="mt-2 text-gray-600">{response.answer}</p>
        <p className="text-yellow-500 text-lg mt-2">{response.rating}</p>
      </div>
    ))}
  </div>
</section>

  )
}

export default TutorResponsesQuestions
