
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/sidebar.css";

export default function Sidebar({ onClickItem }) {
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
        to="user-courses/:id" 
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        My Classes / Bookings
      </Nav.Link>

      <Nav.Link
        as={NavLink}
        to="schedules/:id"
        onClick={onClickItem}
        className="sidebar-link text-decoration-none d-flex align-items-center gap-2"
      >
        Schedule
      </Nav.Link>
    </Nav>
  );
}
