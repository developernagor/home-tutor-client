import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function AddTutor() {
  const [tutorData, setTutorData] = useState({
    tutorName: "",
    tutorSubject: "",
    tutorDescription: {},
    tutorExperience: "",
    tutorRating: "",
    tutorContact: "",
    tutorLocation: "",
    tutorAvailability: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    if (!tutorData.tutorName) newErrors.tutorName = "Tutor name is required";
    if (!tutorData.tutorSubject) newErrors.tutorSubject = "Subject is required";
    if (!tutorData.tutorDescription)
      newErrors.tutorDescription = "Description is required";
    if (!tutorData.tutorExperience)
      newErrors.tutorExperience = "Experience is required";
    if (!tutorData.tutorRating) newErrors.tutorRating = "Rating is required";
    if (!tutorData.tutorContact)
      newErrors.tutorContact = "Contact info is required";
    if (!tutorData.tutorLocation)
      newErrors.tutorLocation = "Location is required";
    if (!tutorData.tutorAvailability)
      newErrors.tutorAvailability = "Availability is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the tutor data
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/tutor`,
          tutorData
        );
        console.log(response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tutor added successfully !",
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset form after successful submission
        setTutorData({
          tutorName: "",
          tutorSubject: "",
          tutorDescription: "",
          tutorExperience: "",
          tutorRating: "",
          tutorContact: "",
          tutorLocation: "",
          tutorAvailability: "",
        });

        navigate("/dashboard/all-tutors");
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
      console.log("Tutor Added:", tutorData);
    }
  };

  // Gender: Male
  //Email: mehedi.tutor@example.com
  //Preferred Teaching Method: Online & In-person
  //Teaching Days: Sunday to Thursday
  //Teaching Hours: 4:00 PM – 8:00 PM
  //Qualification: B.Sc in Physics, National University
  //Languages Spoken: Bangla, English
  //About: Passionate physics tutor with over a decade of experience in simplifying complex concepts for high school and college students. Focused on building strong fundamentals and boosting student confidence.

  return (
    <div className="p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Tutor</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="tutorName" className="block text-gray-700">
            Tutor Name
          </label>
          <input
            type="text"
            id="tutorName"
            name="tutorName"
            value={tutorData.tutorName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.tutorName && (
            <p className="text-red-500 text-sm">{errors.tutorName}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tutorSubject" className="block text-gray-700">
            Tutor Subject
          </label>
          <input
            type="text"
            id="tutorSubject"
            name="tutorSubject"
            value={tutorData.tutorSubject}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.tutorSubject && (
            <p className="text-red-500 text-sm">{errors.tutorSubject}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tutorDescription" className="block text-gray-700">
            Tutor Description
          </label>
          <textarea
            id="tutorDescription"
            name="tutorDescription"
            value={tutorData.tutorDescription}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          {errors.tutorDescription && (
            <p className="text-red-500 text-sm">{errors.tutorDescription}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tutorExperience" className="block text-gray-700">
            Experience (in years)
          </label>
          <input
            type="number"
            id="tutorExperience"
            name="tutorExperience"
            value={tutorData.tutorExperience}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.tutorExperience && (
            <p className="text-red-500 text-sm">{errors.tutorExperience}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tutorRating" className="block text-gray-700">
            Tutor Rating (out of 5)
          </label>
          <input
            type="number"
            id="tutorRating"
            name="tutorRating"
            value={tutorData.tutorRating}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            max="5"
            min="1"
          />
          {errors.tutorRating && (
            <p className="text-red-500 text-sm">{errors.tutorRating}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tutorContact" className="block text-gray-700">
            Contact Information
          </label>
          <input
            type="text"
            id="tutorContact"
            name="tutorContact"
            value={tutorData.tutorContact}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.tutorContact && (
            <p className="text-red-500 text-sm">{errors.tutorContact}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tutorLocation" className="block text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="tutorLocation"
            name="tutorLocation"
            value={tutorData.tutorLocation}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.tutorLocation && (
            <p className="text-red-500 text-sm">{errors.tutorLocation}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tutorAvailability" className="block text-gray-700">
            Availability
          </label>
          <input
            type="text"
            id="tutorAvailability"
            name="tutorAvailability"
            value={tutorData.tutorAvailability}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.tutorAvailability && (
            <p className="text-red-500 text-sm">{errors.tutorAvailability}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Add Tutor
        </button>
      </form>
    </div>
  );
}

export default AddTutor;
