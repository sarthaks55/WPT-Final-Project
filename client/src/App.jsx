import { Route, Routes, useLocation } from "react-router-dom";
import { Navigationbar } from "./Components/NavigationBar";
import { ToastContainer } from "react-toastify";
import { CoursesList } from "./Components/CoursesList";
import { AddCourses } from "./Components/AddCourses";
import { UpdateCourseForm } from "./Components/UpdateCoursebyID";
import { Login } from "./Components/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import ContactPage from "./Components/ContactUs";
import { AboutUs } from "./AboutUs";
import UDashboard from "./Components/UserDashboard";
import { AddUser } from "./Components/AddUser";
import { ListUser } from "./Components/ListUser";
import { UpdateUserForm } from "./Components/UpdateUserForm";
import { Register } from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import AccountDetails from "./Components/AccountDetails";
import EditAccountDetails from "./Components/EditAccountDetails";
import InstructorDashboard from "./Components/Instructor_Dashboard/InstructorDashboard"
import { CourseList } from "./Components/CourseList";
import { CourseDetails } from "./Components/CourseDetails";
import { NavBar } from "./Components/Home/NavBar";
import Home from "./pages/Home";



function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <Navigationbar /> : null}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courses" element={<CourseList/>} />
        <Route path="/courses/:id" element={<CourseDetails/>} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-courses" element={<AddCourses />} />
          <Route path="/courses-list" element={<CoursesList />} />
          <Route path="/courses/:id" element={<UpdateCourseForm />} />
          <Route path="/instructorDashboard" element={<InstructorDashboard />}>
            <Route index element={< AccountDetails />} />
            <Route path="account" element={< AccountDetails />} />
            <Route path="editDetails/:id" element={< EditAccountDetails />} />
            <Route path="courses" element={<CoursesList />} />
            <Route path="add-courses" element={<AddCourses />} />
          </Route>
          <Route path="/userdashboard" element={<UDashboard />} >
            <Route index element={< AccountDetails />} />
            <Route path="account" element={< AccountDetails />} />
            <Route path="editDetails/:id" element={< EditAccountDetails />} />
          </Route>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user-list" element={<ListUser />} />
          <Route path="/edit-user/:id" element={<UpdateUserForm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App




