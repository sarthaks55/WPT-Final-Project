import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigationbar } from "./Components/NavigationBar";
import { Dashboard } from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import { CoursesList } from "./Components/CoursesList";


function App() {

  return (
    <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/courses-list" element={<CoursesList/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
