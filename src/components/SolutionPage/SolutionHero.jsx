import React from 'react'

function SolutionHero() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center space-y-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold flex justify-center items-center gap-2 text-blue-600">
        {/* <FileText className="w-8 h-8" />  */}
        Solution Hub
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg">
        Find and download educational solutions across different subjects.  
        Submit your own solutions to help others and earn recognition!
      </p>

      {/* CTA Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 mx-auto">
        {/* <UploadCloud className="w-5 h-5" /> */}
        Submit Your Solution
      </button>
    </div>
  )
}

export default SolutionHero
