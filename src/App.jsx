import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import FindTutors from './pages/FindTutors/FindTutors';
import Courses from './pages/Courses/Courses';
import AskQuestions from './pages/AskQuestions/AskQuestions';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Solution from './pages/Solution/Solution';
import TutorProfile from './components/TutorProfile';
import DashboardLayout from './layouts/DashboardLayout';
import { useState } from 'react';
import DashboardHome from './components/DashboardHome';
import AddCourse from './pages/Admin/AddCourse';
import AddTutor from './pages/Admin/AddTutor';
import AllTutors from './pages/Admin/AllTutors';

import AllQuestions from './pages/Admin/AllQuestions';
import AdminDashboardHome from './pages/Admin/AdminDashboardHome';
import SingleQuestionSolution from './components/SolutionPage/SingleQuestionSolution';
import CourseDetails from './components/CoursesPage/CourseDetails';
import AddNote from './pages/Admin/AddNote';
import SubjectWiseSolution from './components/SolutionPage/SubjectWiseSolution';
import AddSolution from './components/AddSolution';

function App() {

  const user = {
    name: "Mehedi",
    email: "devmehedi@gmail.com",
    role: "admin" // This should be dynamically set via authentication (e.g., Firebase, JWT)
  };

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/find-tutors" element={<FindTutors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} /> {/* Simplified CourseDetails route */}
        <Route path="/ask-question" element={<AskQuestions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/:id" element={<SingleQuestionSolution />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />
        <Route path="/subject-wise-solution/:id" element={<SubjectWiseSolution />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />} >
        
        {/* Admin or User Dashboard */}
        <Route index element={user.role === "admin" ? <AdminDashboardHome /> : <DashboardHome />} />

        {/* Admin Routes */}
        {user.role === "admin" && (
          <>
            <Route path='add-course' element={<AddCourse />} />
            <Route path='add-tutor' element={<AddTutor />} />
            <Route path='all-tutors' element={<AllTutors />} />
            <Route path='add-note' element={<AddNote />} />
            <Route path='add-solution' element={<AddSolution />} />
            <Route path='all-questions' element={<AllQuestions />} />
          </>
        )}

        {/* User Routes */}
        {user.role !== "admin" && (
          <>
            {/* You can add specific user-related routes here */}
          </>
        )}
        
        {/* <Route path="analytics" element={<Analytics />} /> */}
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
