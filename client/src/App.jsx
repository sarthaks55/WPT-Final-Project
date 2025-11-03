import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navigationbar } from "./Components/NavigationBar";
import { Dashboard } from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import { CoursesList } from "./Components/CoursesList";
import { AddCourses } from "./Components/AddCourses";
import { UpdateCourseForm } from "./Components/UpdateCoursebyID";
import { Login } from "./Components/Login";
import { PrivateRoute } from "./Components/PrivateRoute";


function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <Navigationbar /> : null}
=      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-courses" element={<AddCourses/>}/>
          <Route path="/courses" element={<CoursesList/>} />
          <Route path="/courses/:id" element={<UpdateCourseForm/>} />
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App




