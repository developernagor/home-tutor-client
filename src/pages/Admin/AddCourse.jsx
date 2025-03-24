import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AddCourse() {
  const [courseData, setCourseData] = useState({
    courseSubject: '',
    courseDescription: '',
    coursePrice: '',
    courseId: '',
    courseDifficulty: '',
    courseDuration: '',
    courseLocation: '',
    courseInstructor: '',
    courseEnrollStart: '',
    courseEnrollEnd: '',
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Simple validation function
  const validateForm = () => {
    const newErrors = {};
    if (!courseData.courseSubject) newErrors.courseSubject = 'Course subject is required';
    if (!courseData.courseDescription) newErrors.courseDescription = 'Course description is required';
    if (!courseData.coursePrice) newErrors.coursePrice = 'Course price is required';
    if (!courseData.courseId) newErrors.courseId = 'Course ID is required';
    if (!courseData.courseDifficulty) newErrors.courseDifficulty = 'Course difficulty is required';
    if (!courseData.courseDuration) newErrors.courseDuration = 'Course duration is required';
    if (!courseData.courseLocation) newErrors.courseLocation = 'Course location is required';
    if (!courseData.courseInstructor) newErrors.courseInstructor = 'Course instructor is required';
    if (!courseData.courseEnrollStart) newErrors.courseEnrollStart = 'Enrollment start date is required';
    if (!courseData.courseEnrollEnd) newErrors.courseEnrollEnd = 'Enrollment end date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the form data
      console.log('Course Added:', courseData);

      try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/course`, courseData)
  
        console.log (response.data)
  
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your course has been submitted successfully !",
          showConfirmButton: false,
          timer: 1500
        });  
        
      }catch(error){
        console.log(error.message)
      }



      // Reset form after successful submission
      setCourseData({
        courseSubject: '',
        courseDescription: '',
        coursePrice: '',
        courseId: '',
        courseDifficulty: '',
        courseDuration: '',
        courseLocation: '',
        courseInstructor: '',
        courseEnrollStart: '',
        courseEnrollEnd: '',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="courseSubject" className="block text-gray-700">Course Subject</label>
          <input
            type="text"
            id="courseSubject"
            name="courseSubject"
            value={courseData.courseSubject}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.courseSubject && <p className="text-red-500 text-sm">{errors.courseSubject}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseDescription" className="block text-gray-700">Course Description</label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            value={courseData.courseDescription}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          {errors.courseDescription && <p className="text-red-500 text-sm">{errors.courseDescription}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="coursePrice" className="block text-gray-700">Course Price</label>
          <input
            type="number"
            id="coursePrice"
            name="coursePrice"
            value={courseData.coursePrice}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.coursePrice && <p className="text-red-500 text-sm">{errors.coursePrice}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseId" className="block text-gray-700">Course ID</label>
          <input
            type="text"
            id="courseId"
            name="courseId"
            value={courseData.courseId}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.courseId && <p className="text-red-500 text-sm">{errors.courseId}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseDifficulty" className="block text-gray-700">Course Difficulty</label>
          <select
            id="courseDifficulty"
            name="courseDifficulty"
            value={courseData.courseDifficulty}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Difficulty</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {errors.courseDifficulty && <p className="text-red-500 text-sm">{errors.courseDifficulty}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseDuration" className="block text-gray-700">Course Duration (in hours)</label>
          <input
            type="number"
            id="courseDuration"
            name="courseDuration"
            value={courseData.courseDuration}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.courseDuration && <p className="text-red-500 text-sm">{errors.courseDuration}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseLocation" className="block text-gray-700">Course Location</label>
          <input
            type="text"
            id="courseLocation"
            name="courseLocation"
            value={courseData.courseLocation}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.courseLocation && <p className="text-red-500 text-sm">{errors.courseLocation}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseInstructor" className="block text-gray-700">Course Instructor</label>
          <input
            type="text"
            id="courseInstructor"
            name="courseInstructor"
            value={courseData.courseInstructor}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.courseInstructor && <p className="text-red-500 text-sm">{errors.courseInstructor}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseEnrollStart" className="block text-gray-700">Enrollment Start Date</label>
          <input
            type="date"
            id="courseEnrollStart"
            name="courseEnrollStart"
            value={courseData.courseEnrollStart}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.courseEnrollStart && <p className="text-red-500 text-sm">{errors.courseEnrollStart}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="courseEnrollEnd" className="block text-gray-700">Enrollment End Date</label>
          <input
            type="date"
            id="courseEnrollEnd"
            name="courseEnrollEnd"
            value={courseData.courseEnrollEnd}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.courseEnrollEnd && <p className="text-red-500 text-sm">{errors.courseEnrollEnd}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
