import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import FindTutors from './pages/FindTutors/FindTutors'
import Courses from './pages/Courses/Courses'
import AskQuestions from './pages/AskQuestions/AskQuestions'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Solution from './pages/Solution/Solution'
import TutorProfile from './components/TutorProfile'
import Dash from './components/DashboardHome'
import DashboardLayout from './layouts/DashboardLayout'
import { useState } from 'react'
import DashboardHome from './components/DashboardHome'
import AddCourse from './pages/Admin/AddCourse'
import AddTutor from './pages/Admin/AddTutor'
import AllTutors from './pages/Admin/AllTutors'
import AddNote from './pages/Admin/AddNote'
import AllQuestions from './pages/Admin/AllQuestions'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);


  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/find-tutors" element={<FindTutors />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ask-question" element={<AskQuestions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/solution" element={<Solution></Solution>} />
        <Route path="/tutor/:id" element={<TutorProfile></TutorProfile>} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />} >
        <Route index element={<DashboardHome />} />
        <Route path='add-course' element={<AddCourse></AddCourse>} />
        <Route path='add-tutor' element={<AddTutor></AddTutor>} />
        <Route path='all-tutors' element={<AllTutors></AllTutors>} />
        <Route path='add-note' element={<AddNote></AddNote>} />
        <Route path='all-questions' element={<AllQuestions></AllQuestions>} />
        
        {/* <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>

    
  )
}

export default App
