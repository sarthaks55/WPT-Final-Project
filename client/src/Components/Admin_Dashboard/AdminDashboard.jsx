import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 p-0 bg-dark text-white min-vh-100">
          <Sidebar />
        </div>  

        {/* Main Area */}
        <div className="col-md-9 col-lg-10 p-0 bg-light min-vh-100">

            <Outlet/>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
