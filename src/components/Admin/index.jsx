import Buttons from "./Button";
import "./admin.css";
import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
         to="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              SB Admin <sup>2</sup>
            </div>
          </Link>
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />
          <Buttons links="/doashboard/tintuc" names="Tin tức" />
          <Buttons links="/doashboard/loaitin" names="Loại tin" />
          <Buttons links="/doashboard/theloai" names="Thể loại" />

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>

            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
