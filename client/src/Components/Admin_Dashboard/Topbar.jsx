import React from "react";

const Topbar = () => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4 py-2 d-flex justify-content-between align-items-center">
      {/* Search Bar */}
      <form className="d-flex w-50">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>

      {/* Icons */}  
      <div className="d-flex align-items-center">
        <i className="bi bi-bell fs-5 me-4"></i>
        <i className="bi bi-person-circle fs-4"></i>
      </div>
    </nav>
  );
};

export default Topbar;
