

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../assets/css/sidebar.css";
import { removeToken } from "../../services/TokenService";
import { removeRoleID, removeUserID, removeUsername } from "../../services/RoleNameService";

export default function Sidebar({ onClickItem }) {

   const handleLogout =  () => {
          removeToken();
          removeRoleID();
          removeUsername();
          removeUserID();
          
      }
  return (
    <Nav className="flex-column bg-light vh-100 p-3">
      <Nav.Link
        as={NavLink}
        to="Dashboard" 
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Dashboard
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="users" 
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        User List
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="courses"
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Courses List
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="instructors" 
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Instructor List
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="feedbacks"
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Feedbacks
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="/"
        onClick={handleLogout}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Logout
      </Nav.Link>



    </Nav>
  );
}

