import React from 'react'

function FAQ() {
  return (
    <section className="py-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
  <div className="max-w-4xl mx-auto space-y-4">
    {[
      { question: "How can I book a tutor?", answer: "You can book a tutor by signing up and selecting a tutor from our directory." },
      { question: "What subjects do you cover?", answer: "We cover a wide range of subjects including Math, Science, and Languages." },
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

export default FAQ
