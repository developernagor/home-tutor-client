import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import {v4 as uuidv4} from 'uuid';

function QuestionSubmission() {

    const [newSubject, setNewSubject] = useState(""); // State for new subject

    const [subjectList, setSubjectList] = useState([
      "Mathematics",
      "Science",
      "Bangla",
      "English",
      "Chemistry",
      "Physics",
      "Biology",
      "Higher Mathematics",
      "Islamic Studies",
      "Economics",
      "Agriculture",
      "ICT"
    ]);
    

     // Handle new subject input change
  const handleNewSubjectChange = (e) => {
    setNewSubject(e.target.value);
  };

    // Add new subject to the subject list
    const addNewSubject = () => {
      const trimmedSubject = newSubject.trim();
    const subjectLowerCase = trimmedSubject.toLowerCase();

    if (trimmedSubject && !subjectList.some(sub => sub.toLowerCase() === subjectLowerCase)) {
      setSubjectList((prevSubjects) => [...prevSubjects, trimmedSubject]);
      setNewSubject(""); // Clear input after adding
    }
    };


  

  const handleQuestionSubmission = async(event) => {
    event.preventDefault();
    const form = event.target;
    const questionTitle = form.question.value;
    const questionClass = form.class.value;
    const questionSubject = form.category.value;
    const questionChapter = form.chapter.value;
    const questionDetails = form.questionDetails.value;
    const questionId = uuidv4();

    const questionData = {
      questionId,
      questionTitle,
      questionClass,
      questionSubject,
      questionChapter,
      questionDetails,

    }
    // console.log(questionData)

    try{
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/question`, questionData)

      console.log (response.data)

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your question has been submitted successfully !",
        showConfirmButton: false,
        timer: 1500
      });

      form.reset();

      
    }catch(error){
      console.log(error.message)
    }

  }
  return (
    <section className="py-10 px-4 bg-gray-100">
  <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4">Write Your Question</h2>
    <form onSubmit={handleQuestionSubmission}>
      <lebel>
        <h1 className='text-2xl font-semibold mb-2'>Question</h1>
      </lebel>
      <input type="text" name="question" placeholder="Enter your question..." className="w-full p-3 border rounded-lg mb-4"/>
      
      <lebel>
        <h1 className='text-2xl font-semibold mb-2'>Class</h1>
      </lebel>
      <select name='class' className="w-full p-3 border rounded-lg mb-4">
        <option>Select Class</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
        <option value="Four">Four</option>
        <option value="Five">Five</option>
        <option value="Six">Six</option>
        <option value="Seven">Seven</option>
        <option value="Eight">Eight</option>
        <option value="Nine">Nine</option>
        <option value="Ten">Ten</option>
        <option value="Eleven">Eleven</option>
        <option value="Other">Other</option>
      </select>

      <lebel>
        <h1 className='text-2xl font-semibold mb-2'>Subject</h1>
      </lebel>
      <select name='category' className="w-full p-3 border rounded-lg mb-4">
  <option>Select Subject</option>
  {subjectList.map((subject, index) => (
    <option key={index} value={subject}>{subject}</option>
  ))}
</select>

      {/* Add New Subject */}
      <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Enter new subject if subject is not at the list"
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


        <lebel>
        <h1 className='text-2xl font-semibold mb-2'>Chapter / Topic</h1>
      </lebel>
      <input type="number,text" name="chapter" placeholder="Enter chapter or topic" className="w-full p-3 border rounded-lg mb-4"/>
      
      <lebel>
        <h1 className='text-2xl font-semibold mb-2'>Brief description</h1>
      </lebel>
      <textarea name='questionDetails' placeholder="Provide more details (optional)" className="w-full p-3 border rounded-lg mb-4"></textarea>
      <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Submit Question
      </button>
    </form>
  </div>
</section>

  )
}

export default QuestionSubmission
