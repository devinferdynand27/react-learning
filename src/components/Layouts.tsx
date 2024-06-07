import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar></Sidebar>
        <div className="layout-page">
          <Navbar></Navbar>
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
