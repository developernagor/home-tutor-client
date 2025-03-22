import React from 'react'

function ContactForm() {
  return (
    <section className="py-10 px-4 bg-gray-100">
  <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
    <form>
      <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg mb-4" />
      <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg mb-4" />
      <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg mb-4" rows="5"></textarea>
      <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Submit
      </button>
    </form>
  </div>
</section>


  )
}

export default ContactForm;
