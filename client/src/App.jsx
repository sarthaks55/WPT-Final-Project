import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navigationbar } from "./Components/NavigationBar";
import { Dashboard } from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import { CoursesList } from "./Components/CoursesList";
import { AddCourses } from "./Components/AddCourses";
import { UpdateCourseForm } from "./Components/UpdateCoursebyID";
import ContactPage from "./Components/ContactUs";

function App() {

  return (
    <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-courses" element={<AddCourses/>}/>
        <Route path="/courses" element={<CoursesList/>} />
        <Route path="/courses/:id" element={<UpdateCourseForm/>} />
        <Route path="/contactus" element={<ContactPage/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App




