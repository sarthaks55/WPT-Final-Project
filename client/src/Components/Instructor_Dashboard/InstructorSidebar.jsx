
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../assets/css/sidebar.css";

export default function InstructorSidebar({ onClickItem }) {
  return (
    <Nav className="flex-column bg-light vh-100 p-3">
      <Nav.Link
        as={NavLink}
        to="account" 
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Account Details
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="instructorDetails/:id" 
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Additional Details
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="instructor/courses/:id" 
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        My Courses
      </Nav.Link>

      

      <Nav.Link
        as={NavLink}
        to="add-courses"
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Add Courses
      </Nav.Link>
    </Nav>
  );
}
