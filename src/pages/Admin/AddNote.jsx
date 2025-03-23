import axios from 'axios';
import React, { useState } from 'react';

function AddNote() {

  const solutionTime = new Date();
  const [noteData, setNoteData] = useState({
    noteTitle: '',
    noteDescription: '',
    noteSubject: '',
    noteClass: '',
    noteChapter: '',
    noteSolution: '',
    solutionTime,
    solutionFile: null,
  });

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNoteData((prevData) => ({
      ...prevData,
      solutionFile: e.target.files[0],
    }));
  };

  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    if (!noteData.noteTitle) newErrors.noteTitle = 'Title is required';
    if (!noteData.noteDescription) newErrors.noteDescription = 'Description is required';
    if (!noteData.noteSubject) newErrors.noteSubject = 'Subject is required';
    if (!noteData.noteClass) newErrors.noteClass = 'Class is required';
    if (!noteData.noteChapter) newErrors.noteChapter = 'Chapter is required';
    if (!noteData.noteSolution) newErrors.noteSolution = 'Solution is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the note data

      let uploadedImageUrl = null;

      // If a file is selected, upload it to ImgBB first
    if (noteData.solutionFile) {
      const formData = new FormData();
      formData.append("image", noteData.solutionFile);

      try {
        const res = await axios.post(image_hosting_api, formData);
        uploadedImageUrl = res.data.data.display_url;
      } catch (error) {
        console.log("Image upload error:", error.message);
        return;
      }

    }


      // Prepare final note data for submission
    const finalNoteData = {
      ...noteData,
      solutionFile: uploadedImageUrl || null, // Store uploaded image URL or null
    };

    // Send data to backend
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/note`, finalNoteData);
      // console.log("Note Added:", response.data);
    } catch (error) {
      console.log("Error adding note:", error.message);
    }

      // Reset form after successful submission
      setNoteData({
        noteTitle: '',
        noteDescription: '',
        noteSubject: '',
        noteClass: '',
        noteChapter: '',
        noteSolution: '',
        solutionFile: null,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add Note / Solution</h1>
      <form onSubmit={handleSubmit}>

        {/* Note Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Note Title</label>
          <input
            type="text"
            id="noteTitle"
            name="noteTitle"
            value={noteData.noteTitle}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.noteTitle && <p className="text-red-500 text-sm">{errors.noteTitle}</p>}
        </div>

        {/* Note Description */}
        <div className="mb-4">
          <label htmlFor="noteDescription" className="block text-gray-700">Note Description</label>
          <textarea
            id="noteDescription"
            name="noteDescription"
            value={noteData.noteDescription}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          {errors.noteDescription && <p className="text-red-500 text-sm">{errors.noteDescription}</p>}
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="noteSubject" className="block text-gray-700">Subject</label>
          <input
            type="text"
            id="noteSubject"
            name="noteSubject"
            value={noteData.noteSubject}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.noteSubject && <p className="text-red-500 text-sm">{errors.noteSubject}</p>}
        </div>

        {/* Class */}
        <div className="mb-4">
          <label htmlFor="noteClass" className="block text-gray-700">Class</label>
          <input
            type="text"
            id="noteClass"
            name="noteClass"
            value={noteData.noteClass}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.noteClass && <p className="text-red-500 text-sm">{errors.noteClass}</p>}
        </div>

        {/* Chapter */}
        <div className="mb-4">
          <label htmlFor="noteChapter" className="block text-gray-700">Chapter</label>
          <input
            type="text"
            id="noteChapter"
            name="noteChapter"
            value={noteData.noteChapter}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.noteChapter && <p className="text-red-500 text-sm">{errors.noteChapter}</p>}
        </div>

        {/* Solution */}
        <div className="mb-4">
          <label htmlFor="noteSolution" className="block text-gray-700">Solution</label>
          <textarea
            id="noteSolution"
            name="noteSolution"
            value={noteData.noteSolution}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="6"
          ></textarea>
         
         {/* Solution File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Solution File</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

          {errors.noteSolution && <p className="text-red-500 text-sm">{errors.noteSolution}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
