import { Route, Routes, useLocation } from "react-router-dom";
import { Navigationbar } from "./Components/NavigationBar";
import { ToastContainer } from "react-toastify";
import { CoursesList } from "./Components/CoursesList";
import { AddCourses } from "./Components/AddCourses";
import { UpdateCourseForm } from "./Components/UpdateCoursebyID";
import { Login } from "./Components/Login";
import { PrivateRoute } from "./Components/PrivateRoute";
import ContactPage from "./Components/ContactUs";
import { AboutUs } from "./Components/AboutUs";
import UDashboard from "./Components/UserDashboard";
import { AddUser } from "./Components/AddUser";
import { ListUser } from "./Components/ListUser";
import { UpdateUserForm } from "./Components/UpdateUserForm";
import { Register } from "./Components/Register";

import AccountDetails from "./Components/AccountDetails";
import EditAccountDetails from "./Components/EditAccountDetails";
import InstructorDashboard from "./Components/Instructor_Dashboard/InstructorDashboard"
import { CourseList } from "./Components/CourseCard";
import { CourseDetails } from "./Components/CourseDetails";
import AdminDashboard from "./Components/Admin_Dashboard/AdminDashboard";
import AdDashboard from "./Components/Admin_Dashboard/AdDashboard";
import UserList from "./Components/Admin_Dashboard/UserList";
import EditUser from "./Components/Admin_Dashboard/EditUser";
import AddCourse from "./Components/Admin_Dashboard/AddCourse";
import EditCourse from "./Components/Admin_Dashboard/EditCourse";
import InstructorList from "./Components/Admin_Dashboard/InstructorList";
import Feedbacks from "./Components/Admin_Dashboard/Feedbacks";

import CoursesLists from "./Components/Admin_Dashboard/CoursesLists";
import { UserCoursesList } from "./Components/MyClass";
import { InstructorCoursesList } from "./Components/Instructor_Dashboard/InstructorCourses";
import InstructorDetails from "./Components/Instructor_Dashboard/InstructorDetails";
import EditInstructorDetails from "./Components/Instructor_Dashboard/EditInstructorDetails";
import Home from "./pages/Home";
import { ScheduleByUserId } from "./Components/ScheduleByUserId";


function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" ? <Navigationbar /> : null}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courses" element={<CourseList/>} />
        <Route path="/courses/:id" element={<CourseDetails/>} />



        <Route element={<PrivateRoute />}>
          
          
          <Route path="/courses-list" element={<CourseList />} />
          <Route path="/courses/:id" element={<UpdateCourseForm />} />
          <Route path="/instructorDashboard" element={<InstructorDashboard />}>
            <Route index element={< AccountDetails />} />
            <Route path="account" element={< AccountDetails />} />
            <Route path="account/editDetails/:id" element={< EditAccountDetails />} />
            <Route path="instructorDetails/:id" element={< InstructorDetails />} />
            <Route path="editInstructorDetails/:id" element={< EditInstructorDetails />} />
            <Route path="instructor/courses/:id" element={<InstructorCoursesList/>}/> 
            <Route path="add-courses" element={<AddCourses />} />
          </Route>
          <Route path="/userdashboard" element={<UDashboard />} >
            <Route index element={< AccountDetails />} />
            <Route path="account" element={< AccountDetails />} />
            <Route path="account/editDetails/:id" element={< EditAccountDetails />} />
            <Route path="user-courses/:id" element={< UserCoursesList/>}/>
            <Route path="schedules/:id" element={< ScheduleByUserId/>}/>
          </Route>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user-list" element={<ListUser />} />
          <Route path="/edit-user/:id" element={<UpdateUserForm />} />

          <Route path="/adminDashboard" element={<AdminDashboard />} >
            <Route index element={<AdDashboard />} />
            <Route path="dashboard" element={<AdDashboard />} />

            {/* User Routes */}
            <Route path="users" element={<UserList/>} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="users/edit/:id" element={<EditUser />} />

            {/* Course Routes */}
            <Route path="courses" element={<CoursesLists />} />
            <Route path="courses/add" element={<AddCourse />} />
            <Route path="courses/edit/:id" element={<EditCourse />} />

            {/* Other Routes */}
            <Route path="instructors" element={<InstructorList />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App




