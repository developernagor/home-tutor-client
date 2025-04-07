import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 

function AddSolution() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [subjectList, setSubjectList] = useState([
    "Bangla",
    "English",
    "Ict",
    "Science",
    "Mathematics",
    "Islamic Studies",
  ]);
  const [newSubject, setNewSubject] = useState(""); // State for new subject


  const [solutionData, setSolutionData] = useState({
    solutionId:  "",
    solutionSubject:  "",
    solutionClass:  "",
    solutionChapter:  "",
    solutionFile: null,
  });

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSolutionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setSolutionData((prevData) => ({
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

const solutionId = uuidv4();
console.log(solutionId)
  
    let uploadedImageUrl = null;

    if (solutionData.solutionFile) {
      const formData = new FormData();
      formData.append("image", solutionData.solutionFile);

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
    const finalSolutionData = {
      ...solutionData,
      solutionTime: new Date(),
      solutionFile: uploadedImageUrl,
    };

    // Send data to backend
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/subject-wise-solution`,
        finalSolutionData
      );
      console.log("Solution Added:", response.data);
      setSuccessMessage("Solution added successfully!");

      // Reset form after successful submission
      setSolutionData({
        solutionId: "",
        solutionSubject: "",
        solutionClass: "",
        solutionChapter: "",
        solutionFile: null,
      });

      console.log(errors)
      setErrors({});
    } catch (error) {
      console.log("Error adding solution:", error.message);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add Solution</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Solution ID */}
        <div className="mb-4">
          <label className="block text-gray-700">Solution Id</label>
          <input
            type="text"
            name="solutionId"
            value={solutionData.solutionId}
            
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Subject Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <select
            name="solutionSubject"
            value={solutionData.solutionSubject}
            
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
            name="solutionClass"
            value={solutionData.solutionClass}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Chapter */}
        <div className="mb-4">
          <label className="block text-gray-700">Chapter</label>
          <input
            type="text"
            name="solutionChapter"
            value={ solutionData.solutionChapter }
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
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
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Solution"}
        </button>
      </form>

      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
}

export default AddSolution;
