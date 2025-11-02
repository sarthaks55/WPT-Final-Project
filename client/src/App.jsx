import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigationbar } from "./Components/NavigationBar";
import { Dashboard } from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import { CoursesList } from "./Components/CoursesList";
import { AddCourses } from "./Components/AddCourses";
import { UpdateCourseForm } from "./Components/UpdateCoursebyID";


function App() {

  return (
    <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-courses" element={<AddCourses/>}/>
        <Route path="/courses" element={<CoursesList/>} />
        <Route path="/courses/:id" element={<UpdateCourseForm/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
