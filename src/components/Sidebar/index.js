import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
const Sidebar = () => {
  const [collapseMenu, setCollapseMenu] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.pathname = "/signin";
  };
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {/* <li className="nav-item">
          <a className="nav-link" href="/dashboard">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/calander">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Calander</span>
          </a>
        </li>{" "}
        <li className="nav-item">
          <a className="nav-link" href="/patient2">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Patient</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/main-profile">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/commision">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Commision</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={logout}>
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Log out</span>
          </a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Profile</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile2">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Profile2</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/profile3">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Profile3</span>
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/patients">
            <i className="icon-grid menu-icon"></i>
            <span className="menu-title">Patient List</span>
          </a>
        </li> */}
        {/* <li className="nav-item">
              {" "}
              <a
                onClick={() => setCollapseMenu(!collapseMenu)}
                href="#collapseExample"
                className="nav-link"
              >
                <i className="icon-layout menu-icon"></i>
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow"></i>
              </a>
              <span>
                <Collapse in={!collapseMenu}>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/buttons.html"
                        >
                          Buttons
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/dropdowns.html"
                        >
                          Dropdowns
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/typography.html"
                        >
                          Typography
                        </a>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </span>
            </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#form-elements"
            aria-expanded="false"
            aria-controls="form-elements"
          >
            <i className="icon-columns menu-icon"></i>
            <span className="menu-title">Form elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="../../pages/forms/basic_elements.html"
                >
                  Basic Elements
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#charts"
            aria-expanded="false"
            aria-controls="charts"
          >
            <i className="icon-bar-graph menu-icon"></i>
            <span className="menu-title">Charts</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="../../pages/charts/chartjs.html">
                  ChartJs
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i className="icon-grid-2 menu-icon"></i>
            <span className="menu-title">Tables</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="../../pages/tables/basic-table.html">
                  Basic table
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#icons"
            aria-expanded="false"
            aria-controls="icons"
          >
            <i className="icon-contract menu-icon"></i>
            <span className="menu-title">Icons</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="../../pages/icons/mdi.html">
                  Mdi icons
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="icon-head menu-icon"></i>
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="../../pages/samples/login.html">
                  {" "}
                  Login{" "}
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="../../pages/samples/register.html">
                  {" "}
                  Register{" "}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#error"
            aria-expanded="false"
            aria-controls="error"
          >
            <i className="icon-ban menu-icon"></i>
            <span className="menu-title">Error pages</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="error">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="../../pages/samples/error-404.html">
                  {" "}
                  404{" "}
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="../../pages/samples/error-500.html">
                  {" "}
                  500{" "}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="../../pages/documentation/documentation.html"
          >
            <i className="icon-paper menu-icon"></i>
            <span className="menu-title">Documentation</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
export default Sidebar;
