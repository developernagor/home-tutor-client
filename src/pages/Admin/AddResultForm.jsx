import axios from "axios";
import { useEffect, useState } from "react";

const AddResultForm = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    studentClass: "",
    subject: "",
    fullMarks: "",
    obtainedMarks: "",
    grade: "",
    gpa: "",
    examName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate Grade and GPA automatically
  useEffect(() => {
    const { fullMarks, obtainedMarks } = formData;

    if (fullMarks && obtainedMarks) {
      const percentage = (Number(obtainedMarks) / Number(fullMarks)) * 100;

      let grade = "";
      let gpa = 0;

      if (percentage >= 80) {
        grade = "A+";
        gpa = 5.00;
      } else if (percentage >= 70) {
        grade = "A";
        gpa = 4.00;
      } else if (percentage >= 60) {
        grade = "A-";
        gpa = 3.50;
      } else if (percentage >= 50) {
        grade = "B";
        gpa = 3.00;
      } else if (percentage >= 40) {
        grade = "C";
        gpa = 2.00;
      } else if (percentage >= 33) {
        grade = "D";
        gpa = 1.00;
      } else {
        grade = "F";
        gpa = 0.00;
      }

      setFormData((prev) => ({
        ...prev,
        grade,
        gpa: gpa.toFixed(2),
      }));
    }
  }, [formData.fullMarks, formData.obtainedMarks]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-result`, formData);
        console.log("Saved Result:", data);
    
        // Reset the form
        setFormData({
          studentId: "",
          studentName: "",
          studentClass: "",
          subject: "",
          fullMarks: "",
          obtainedMarks: "",
          grade: "",
          gpa: "",
          examName: "",
          teacherComment: "",
          answerPaperLink: "",
        });
      } catch (error) {
        console.error("Error submitting result:", error);
      }
    };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg lg:p-8 md:p-2 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Add Student Result
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Exam Name */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Exam Name</label>
            <input
              type="text"
              name="examName"
              value={formData.examName}
              onChange={handleChange}
              placeholder="e.g., Final Exam 2025"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Student Id */}
          <div>
            <label className="block text-sm font-medium mb-1">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="Enter Student ID"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter Student Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <input
              type="text"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              placeholder="e.g., 9, 10, 12"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g., Math, English"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Full Marks */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Marks</label>
            <input
              type="number"
              name="fullMarks"
              value={formData.fullMarks}
              onChange={handleChange}
              placeholder="e.g., 100"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Obtained Marks */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Obtained Marks
            </label>
            <input
              type="number"
              name="obtainedMarks"
              value={formData.obtainedMarks}
              onChange={handleChange}
              placeholder="e.g., 85"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Grade */}
          <div>
            <label className="block text-sm font-medium mb-1">Grade</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          {/* GPA */}
          <div>
            <label className="block text-sm font-medium mb-1">GPA</label>
            <input
              type="number"
              step="0.01"
              name="gpa"
              value={formData.gpa}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          {/* Teacher's Comment */}
<div className="sm:col-span-2">
  <label className="block text-sm font-medium mb-1">Teacher's Comment</label>
  <textarea
    name="teacherComment"
    value={formData.teacherComment}
    onChange={handleChange}
    placeholder="Write feedback or remarks"
    className="textarea textarea-bordered w-full"
  />
</div>

{/* Answer Paper Link */}
<div className="sm:col-span-2">
  <label className="block text-sm font-medium mb-1">Answer Paper Link</label>
  <input
    type="url"
    name="answerPaperLink"
    value={formData.answerPaperLink}
    onChange={handleChange}
    placeholder="https://drive.google.com/..."
    className="input input-bordered w-full"
  />
</div>



        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Submit Result
        </button>
      </form>
    </div>
  );
};

export default AddResultForm;
