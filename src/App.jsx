import { Route, Routes } from 'react-router'
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

function App() {
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
        <Route path="/tutor-details" element={<TutorProfile></TutorProfile>} />
      </Route>
    </Routes>
  )
}

export default App
