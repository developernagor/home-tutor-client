import React from "react";
import { Link } from "react-router";

const DownloadPDF = () => {

  const academicBooks = [
    {
      class: "One",
      title: "Bangla",
      author: "NCTB",
      pdfUrl: "", 
    },
    {
      class: "One",
      title: "English",
      author: "NCTB",
      pdfUrl: "",
    },
    {
      class: "One",
      title: "Math",
      author: "NCTB",
      pdfUrl: "",
    },
  ];


  const nonAcademicBooks = [
    {
      title: "Bangla",
      author: "NCTB",
      pdfUrl: "", 
    },
    {
      title: "English",
      author: "NCTB",
      pdfUrl: "",
    },
    {
      title: "Math",
      author: "NCTB",
      pdfUrl: "",
    },
  ];

  return (
    <div>
      <div className="p-8 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Academic PDF Book Downloads</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-1 md:py-3 md:px-6 text-center">Class</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Book Name</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Author</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {academicBooks.map((book, index) => (
              <tr key={index} className="border-b">
                <td className="py-1 md:py-3 md:px-6 text-center">{book.class}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">{book.title}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">{book.author}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">
                  <Link to={book.pdfUrl} target="_blank">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 md:py-2 md:px-4 rounded">
                    Download
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Non Academic PDF Book Downloads</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-1 md:py-3 md:px-6 text-center">Book Name</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Author</th>
              <th className="py-1 md:py-3 md:px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {nonAcademicBooks.map((book, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-1 md:py-3 md:px-6 text-center">{book.title}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">{book.author}</td>
                <td className="py-1 md:py-3 md:px-6 text-center">
                  <Link to={book.pdfUrl} target="_blank">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 md:py-2 md:px-4 rounded">
                    Download
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default DownloadPDF;
