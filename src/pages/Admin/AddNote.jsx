import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";

function AddNote() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const location = useLocation();
  const questionData = location.state?.question || {};
  // console.log("Received question data", questionData)
  // console.log(questionData)

  const {
    questionChapter,
    questionClass,
    // questionDetails,
    questionId,
    questionSubject,
    questionTitle,
    _id
  } = questionData;

  const [subjectList, setSubjectList] = useState([
    "Bangla",
    "English",
    "Ict",
    "Science",
    "Mathematics",
    "Islamic Studies",
  ]);
  const [newSubject, setNewSubject] = useState(""); // State for new subject

  const [noteData, setNoteData] = useState({
    noteTitle: questionTitle || "",
    questionId: questionId || "",
    noteDescription: "",
    noteSubject: questionSubject || "",
    noteClass: questionClass || "",
    noteChapter: questionChapter || "",
    noteSolution: "",
    solutionFile: null,
  });

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

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

  // Handle new subject input change
  const handleNewSubjectChange = (e) => {
    setNewSubject(e.target.value);
  };

  // Add new subject to the subject list
  const addNewSubject = () => {
    if (newSubject.trim() && !subjectList.includes(newSubject.trim())) {
      setSubjectList((prevSubjects) => [...prevSubjects, newSubject.trim()]);
      setNewSubject(""); // Clear the input after adding
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let uploadedImageUrl = null;

    if (noteData.solutionFile) {
      const formData = new FormData();
      formData.append("image", noteData.solutionFile);

      try {
        setLoading(true);
        const res = await axios.post(image_hosting_api, formData);
        uploadedImageUrl = res.data.data.display_url;
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          solutionFile: "Image upload failed. Please try again.",
        }));
        return;
      }
    }

    // Prepare final note data for submission
    const finalNoteData = {
      ...noteData,
      solutionTime: new Date(),
      solutionFile: uploadedImageUrl,
    };

    // Send data to backend
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/note`,
        finalNoteData
      );
      console.log("Note Added:", response.data);
      setSuccessMessage("Note added successfully!");

      // Reset form after successful submission
      setNoteData({
        noteTitle: "",
        questionId: "",
        noteDescription: "",
        noteSubject: "",
        noteClass: "",
        noteChapter: "",
        noteSolution: "",
        solutionFile: null,
      });

      console.log(errors)
      setErrors({});
    } catch (error) {
      console.log("Error adding note:", error.message);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add Note / Solution</h1>
      <form onSubmit={handleSubmit}>
        {/* Note Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Note Title</label>
          <input
            type="text"
            name="noteTitle"
            value={questionTitle}
            readOnly
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Question ID */}
        <div className="mb-4">
          <label className="block text-gray-700">Question Id</label>
          <input
            type="text"
            name="questionId"
            value={questionId}
            readOnly
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Note Description */}
        <div className="mb-4">
          <label className="block text-gray-700">Note Description</label>
          <textarea
            name="noteDescription"
            value={noteData.noteDescription}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>

        {/* Subject Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <select
            name="noteSubject"
            value={questionSubject}
            readOnly
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a subject</option>
            {subjectList.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Add New Subject */}
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Enter new subject"
            value={newSubject}
            onChange={handleNewSubjectChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={addNewSubject}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Subject
          </button>
        </div>

        {/* Class */}
        <div className="mb-4">
          <label className="block text-gray-700">Class</label>
          <input
            type="text"
            name="noteClass"
            value={questionClass}
            readOnly
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Chapter */}
        <div className="mb-4">
          <label className="block text-gray-700">Chapter</label>
          <input
            type="text"
            name="noteChapter"
            value={ questionChapter || noteData.noteChapter }
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Solution */}
        <div className="mb-4">
          <label className="block text-gray-700">Solution</label>
          <textarea
            name="noteSolution"
            value={noteData.noteSolution}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="6"
          ></textarea>
        </div>

        {/* Upload Solution File */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Solution File</label>
          <input
            type="file"
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Note"}
        </button>
      </form>

      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
}

export default AddNote;
