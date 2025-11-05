import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* Top navbar visible only on mobile */}
      <nav className="navbar navbar-dark bg-dark d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#adminSidebar"
            aria-controls="adminSidebar"  
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mb-0 h1">Admin</span>
        </div>
      </nav>

      {/* Offcanvas sidebar for small screens, static for large screens */}
      <div
        className="offcanvas-md offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="adminSidebar"
        aria-labelledby="adminSidebarLabel"
      >
        <div className="offcanvas-header d-flex d-md-none">
          <h5 className="offcanvas-title" id="adminSidebarLabel">
            Admin Dashboard
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column p-3 p-md-0 pt-md-3">
          <h5 className="pb-3 border-bottom text-center d-none d-md-block">
            Admin Dashboard
          </h5>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <NavLink to="dashboard" end className="nav-link text-white">
                <i className="bi bi-speedometer2 me-2"></i> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="users" className="nav-link text-white">
                <i className="bi bi-people me-2"></i> User List
              </NavLink>
            </li>
            <li>
              <NavLink to="courses" className="nav-link text-white">
                <i className="bi bi-journal-text me-2"></i> Courses List
              </NavLink>
            </li>
            <li>
              <NavLink to="instructors" className="nav-link text-white">
                <i className="bi bi-person-badge me-2"></i> Instructor List
              </NavLink>
            </li>
            <li>
              <NavLink to="feedbacks" className="nav-link text-white">
                <i className="bi bi-chat-dots me-2"></i> Feedbacks
              </NavLink>
            </li>
            <li>
              <NavLink to="logout" className="nav-link text-white">
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
