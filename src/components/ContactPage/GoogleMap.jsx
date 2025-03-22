import React from 'react'

function GoogleMap() {
  return (
    <section className="py-10">
  <h2 className="text-3xl font-bold text-center mb-6">Find Us on the Map</h2>
  <div className="max-w-5xl mx-auto">
    <iframe 
      className="w-full h-80 rounded-lg shadow-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094534!2d144.9537363153177!3d-37.81627927975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f1fd81%3A0xb1d4f46e0d14b2c4!2s123%20Main%20Street%2C%20Your%20City!5e0!3m2!1sen!2s!4v1614138180716!5m2!1sen!2s" 
      allowFullScreen="" 
      loading="lazy">
    </iframe>
  </div>
</section>

  )
}

export default GoogleMap
