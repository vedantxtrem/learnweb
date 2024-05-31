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
import CourseDescription from "./Pages/Course/CourseDescription.jsx"
import RequireAuth from "./components/Auth/RequireAuth.jsx"
import CreateCourse from "./Pages/Course/CreateCourse.jsx"
import Profile from "./Pages/User/Profile.jsx"

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
        <Route path="/course/description" element={ <CourseDescription/>} courses/>


        <Route element={ <RequireAuth allowedRoles={["ADMIN"]} />}>

          <Route path="/course/create" element={<CreateCourse/>}/>

        </Route>

        <Route element={ <RequireAuth allowedRoles={["ADMIN","USER"]} />}>
          <Route path="/user/profile" element={<Profile/>}/>
        </Route>

        <Route path="*" element={ <NotFound/>} />

        
      </Routes>
    </>
  )
}

export default App
