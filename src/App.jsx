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
import { useContext } from 'react';
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
import { AuthContext } from './providers/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import Blog from './pages/Blog/Blog';
import AddBlog from './pages/Blog/AddBlog';
import AddResultForm from './pages/Admin/AddResultForm';
import SearchResult from './pages/Student/SearchResult';

import EditProfile from './pages/Student/EditProfile';
import MyStudents from './pages/Admin/MyStudents';

function App() {

  const user = useContext(AuthContext)
  // console.log(user)

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/find-tutors" element={<FindTutors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} /> {/* Simplified CourseDetails route */}
        <Route path="/ask-question" element={<AskQuestions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/:id" element={<SingleQuestionSolution />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />
        <Route path="/subject-wise-solution/:id" element={<SubjectWiseSolution />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={<PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>} >
        
        {/* Admin or User Dashboard */}
        <Route index element={user.role === "admin" ? <AdminDashboardHome /> : <DashboardHome />} />

        {/* Admin Routes */}
            <Route path='add-course' element={<AddCourse />} />
            <Route path='add-tutor' element={<AddTutor />} />
            <Route path='all-tutors' element={<AllTutors />} />
            <Route path='add-note' element={<AddNote />} />
            <Route path='add-solution' element={<AddSolution />} />
            <Route path='add-blog' element={<AddBlog />} />
            <Route path='all-questions' element={<AllQuestions />} />
            <Route path='add-result' element={<AddResultForm />} />
            <Route path='my-students' element={<MyStudents />} />

  
      </Route>
    </Routes>
  );
}

export default App;
