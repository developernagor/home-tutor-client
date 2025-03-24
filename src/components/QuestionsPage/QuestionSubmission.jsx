import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import {v4 as uuidv4} from 'uuid';

function QuestionSubmission() {

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
    <h2 className="text-2xl font-bold mb-4">Post Your Question</h2>
    <form onSubmit={handleQuestionSubmission}>
      <input type="text" name="question" placeholder="Enter your question..." className="w-full p-3 border rounded-lg mb-4"/>
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
      <select name='category' className="w-full p-3 border rounded-lg mb-4">
        <option>Select Subject</option>
        <option value="Mathematics">Mathematics</option>
        <option value="science">Science</option>
        <option value="Bangla">Bangla</option>
        <option value="English">English</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>
        <option value="Biology">Biology</option>
        <option value="Higher Mathematics">Higher Mathematics</option>
        <option value="Islamic Studies">Islamic Studies</option>
        <option value="Economics">Economics</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Other">Other</option>
      </select>
      <input type="number,text" name="chapter" placeholder="Enter chapter or topic" className="w-full p-3 border rounded-lg mb-4"/>
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
