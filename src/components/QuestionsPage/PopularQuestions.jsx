import React from 'react'

function PopularQuestions() {
  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Popular Questions</h2>
  <div className="max-w-4xl mx-auto space-y-4">
    {[
      { question: "How to solve quadratic equations?", answer: "You can use the quadratic formula: x = (-b ± √(b²-4ac)) / 2a." },
      { question: "What is Newton's First Law?", answer: "An object will remain at rest or move in a straight line unless acted upon by an external force." },
    ].map((faq, index) => (
      <div key={index} className="border p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        <p className="mt-2 text-gray-600">{faq.answer}</p>
      </div>
    ))}
  </div>
</section>

  )
}

export default PopularQuestions
