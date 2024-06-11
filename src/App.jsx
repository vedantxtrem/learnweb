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
import EditProfile from "./Pages/User/EditProfile.jsx"
import Checkout from "./Pages/Payment/Checkout.jsx"
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess.jsx"
import CheckoutFailure from "./Pages/Payment/CheckoutFailure.jsx"
import Displaylectures from "./Pages/Dashboard/Displaylectures.jsx"
import Addlecture from "./Pages/Dashboard/Addlecture.jsx"
import AdminDashboard from "./Pages/Dashboard/AdminDashboard.jsx"

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
          <Route path="/course/addlecture" element={<Addlecture/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        </Route>

        <Route element={ <RequireAuth allowedRoles={["ADMIN","USER"]} />}>
          <Route path="/user/profile" element={<Profile/>}/>
          <Route path="/user/editprofile" element={<EditProfile/>}/>
        </Route>

        {/* Payments routes */}
        <Route path="/checkout" element={<Checkout />}/>
        <Route path='/checkout/success' element={<CheckoutSuccess />} />
        <Route path="/checkout/fail" element={<CheckoutFailure/>}/>

        <Route path="*" element={ <NotFound/>} />

        <Route path="/course/lecture" element={<Displaylectures/>}/>
        


        
        

      </Routes>
    </>
  )
}

export default App;
