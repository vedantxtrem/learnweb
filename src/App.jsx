import { Route, Routes } from "react-router-dom"
import HomeLayout from "./Layouts/HomeLayout.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./Pages/HomePage.jsx"
import Aboutus from "./Pages/Aboutus.jsx"
import NotFound from "./Pages/NotFound.jsx"
import Signup from "./Pages/Signup.jsx"
import Login from "./Pages/Login.jsx"
import CourseList from "./Pages/Course/CourseList.jsx"
import Contact from "./Pages/Contact.jsx"
import Dennied from "./Pages/Dennied.jsx"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <Aboutus/>} />
        <Route path="/Signup" element={ <Signup/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/denied" element={ <Dennied/>} />



        <Route path="/courses" element={ <CourseList/>} courses/>


        <Route path="*" element={ <NotFound/>} />

        
      </Routes>
    </>
  )
}

export default App
