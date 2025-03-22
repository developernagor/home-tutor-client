import React from 'react'

function ContactInformation() {
  return (
    <section className="py-16 px-4 text-center">
  <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">📍 Address</h3>
      <p className="text-gray-600 mt-2">123 Main Street, Your City, Country</p>
    </div>
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">📞 Phone</h3>
      <p className="text-gray-600 mt-2">+123 456 7890</p>
    </div>
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">📧 Email</h3>
      <p className="text-gray-600 mt-2">support@hometutor.com</p>
    </div>
  </div>
</section>

  )
}

export default ContactInformation
