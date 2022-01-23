import React, { useState } from "react";
const DoctorProfile = () => {
  const [tabs, setTabs] = useState(0);
  console.log(tabs, "tab");
  return (
    <div className="container-scroller">
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo mr-5" href="index.html">
            <img src="images/logo.png" className="mr-2" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src="images/logo2.png" alt="logo2" />
          </a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="icon-menu"></span>
          </button>
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <div
                  className="input-group-prepend hover-cursor"
                  id="navbar-search-icon"
                >
                  <span className="input-group-text" id="search">
                    <i className="icon-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="navbar-search-input"
                  placeholder="Search now"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item dropdown">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="icon-bell mx-0"></i>
                <span className="count"></span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">
                  Notifications
                </p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="ti-info-alt mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">
                      Application Error
                    </h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="ti-settings mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">Settings</h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="ti-user mx-0"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/doctorProfile"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src="images/faces/face28.jpg" alt="profile" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                {/* <a className="dropdown-item">
                  <i className="ti-settings text-primary"></i>
                  Settings
                </a> */}
                <a className="dropdown-item">
                  <i className="ti-power-off text-primary"></i>
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item nav-settings d-none d-lg-flex">
              <a className="nav-link" href="#">
                <i className="icon-ellipsis"></i>
              </a>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="icon-menu"></span>
          </button>
        </div>
      </nav>
      <div className="container-fluid page-body-wrapper">
        <div className="theme-setting-wrapper">
          <div id="settings-trigger">
            <i className="ti-settings"></i>
          </div>
          <div id="theme-settings" className="settings-panel">
            <i className="settings-close ti-close"></i>
            <p className="settings-heading">SIDEBAR SKINS</p>
            <div className="sidebar-bg-options selected" id="sidebar-light-theme">
              <div className="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div className="sidebar-bg-options" id="sidebar-dark-theme">
              <div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark
            </div>
            <p className="settings-heading mt-2">HEADER SKINS</p>
            <div className="color-tiles mx-0 px-4">
              <div className="tiles success"></div>
              <div className="tiles warning"></div>
              <div className="tiles danger"></div>
              <div className="tiles info"></div>
              <div className="tiles dark"></div>
              <div className="tiles default"></div>
            </div>
          </div>
        </div>
        <div id="right-sidebar" className="settings-panel">
          <i className="settings-close ti-close"></i>
          <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="todo-tab"
                data-toggle="tab"
                href="#todo-section"
                role="tab"
                aria-controls="todo-section"
                aria-expanded="true"
              >
                TO DO LIST
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="chats-tab"
                data-toggle="tab"
                href="#chats-section"
                role="tab"
                aria-controls="chats-section"
              >
                CHATS
              </a>
            </li>
          </ul>
          <div className="tab-content" id="setting-content">
            <div
              className="tab-pane fade show active scroll-wrapper"
              id="todo-section"
              role="tabpanel"
              aria-labelledby="todo-section"
            >
              <div className="add-items d-flex px-3 mb-0">
                <form className="form w-100">
                  <div className="form-group d-flex">
                    <input
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="Add To-do"
                    />
                    <button
                      type="submit"
                      className="add btn btn-primary todo-list-add-btn"
                      id="add-task"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div className="list-wrapper px-3">
                <ul className="d-flex flex-column-reverse todo-list">
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Team review meeting at 3.00 PM
                      </label>
                    </div>
                    <i className="remove ti-close"></i>
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Prepare for presentation
                      </label>
                    </div>
                    <i className="remove ti-close"></i>
                  </li>
                  <li>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" />
                        Resolve all the low priority tickets due today
                      </label>
                    </div>
                    <i className="remove ti-close"></i>
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" checked />
                        Schedule meeting for next week
                      </label>
                    </div>
                    <i className="remove ti-close"></i>
                  </li>
                  <li className="completed">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="checkbox" type="checkbox" checked />
                        Project review
                      </label>
                    </div>
                    <i className="remove ti-close"></i>
                  </li>
                </ul>
              </div>
              <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">
                Events
              </h4>
              <div className="events pt-4 px-3">
                <div className="wrapper d-flex mb-2">
                  <i className="ti-control-record text-primary mr-2"></i>
                  <span>Feb 11 2018</span>
                </div>
                <p className="mb-0 font-weight-thin text-gray">
                  Creating component page build a js
                </p>
                <p className="text-gray mb-0">The total number of sessions</p>
              </div>
              <div className="events pt-4 px-3">
                <div className="wrapper d-flex mb-2">
                  <i className="ti-control-record text-primary mr-2"></i>
                  <span>Feb 7 2018</span>
                </div>
                <p className="mb-0 font-weight-thin text-gray">
                  Meeting with Alisa
                </p>
                <p className="text-gray mb-0 ">Call Sarah Graves</p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="chats-section"
              role="tabpanel"
              aria-labelledby="chats-section"
            >
              <div className="d-flex align-items-center justify-content-between border-bottom">
                <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                  Friends
                </p>
                <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">
                  See All
                </small>
              </div>
              <ul className="chat-list">
                <li className="list active">
                  <div className="profile">
                    <img src="images/faces/face1.jpg" alt="image" />
                    <span className="online"></span>
                  </div>
                  <div className="info">
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">19 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face2.jpg" alt="image" />
                    <span className="offline"></span>
                  </div>
                  <div className="info">
                    <div className="wrapper d-flex">
                      <p>Catherine</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div className="badge badge-success badge-pill my-auto mx-2">
                    4
                  </div>
                  <small className="text-muted my-auto">23 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face3.jpg" alt="image" />
                    <span className="online"></span>
                  </div>
                  <div className="info">
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">14 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face4.jpg" alt="image" />
                    <span className="offline"></span>
                  </div>
                  <div className="info">
                    <p>James Richardson</p>
                    <p>Away</p>
                  </div>
                  <small className="text-muted my-auto">2 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face5.jpg" alt="image" />
                    <span className="online"></span>
                  </div>
                  <div className="info">
                    <p>Madeline Kennedy</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">5 min</small>
                </li>
                <li className="list">
                  <div className="profile">
                    <img src="images/faces/face6.jpg" alt="image" />
                    <span className="online"></span>
                  </div>
                  <div className="info">
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small className="text-muted my-auto">47 min</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <i className="icon-layout menu-icon"></i>
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/ui-features/buttons.html">
                      Buttons
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/ui-features/dropdowns.html">
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
                    <a className="nav-link" href="pages/forms/basic_elements.html">
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
                    <a className="nav-link" href="pages/charts/chartjs.html">
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
                    <a className="nav-link" href="pages/tables/basic-table.html">
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
                    <a className="nav-link" href="pages/icons/mdi.html">
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
                    <a className="nav-link" href="pages/samples/login.html">
                      {" "}
                      Login{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/register.html">
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
                    <a className="nav-link" href="pages/samples/error-404.html">
                      {" "}
                      404{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/error-500.html">
                      {" "}
                      500{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/documentation/documentation.html">
                <i className="icon-paper menu-icon"></i>
                <span className="menu-title">Documentation</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="col-sm-11">
                        <div className="profile-head">
                          <div className="row">
                            <div className="col-md- col-sm-4 col-xs-12 dct_pic">
                              <img
                                src="images/doctor.jpg"
                                className="img-responsive"
                              />
                            </div>

                            <div className="col-md-7 col-sm-5 col-xs-12">
                              <h5>Vijayan Karuppaiah</h5>

                              <ul>
                                <li>
                                  <i className="fa fa-briefcase rt_tx"></i> 9 years
                                </li>
                                <li>
                                  <i className="fa fa-map-marker rt_tx"></i> India
                                </li>
                                <li>
                                  <i className="fa fa-home rt_tx"></i> Chamiers
                                  Towers (East Wing), 5<sup>th</sup> Floor, No:
                                  37,
                                </li>
                                <li>
                                  <i className="fa fa-mobile rt_tx"></i>{" "}
                                  <a href="#" title="call">
                                    (+91) 9840550049
                                  </a>
                                </li>
                                <li>
                                  <i className="fa fa-envelope-o rt_tx"></i>
                                  <a href="#" title="mail">
                                    vijayan@rsicms.com
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div data-spy="scroll" className="tabbable-panel">
                          <div className="tabbable-line">
                            <div className="mnu_tb">
                              <ul className="nav nav-tabs ">
                                <li className="active" onClick={() => setTabs(0)}>
                                  <a data-toggle="tab">Personal Info </a>
                                </li>
                                <li onClick={() => setTabs(1)}>
                                  <a data-toggle="tab">Education</a>
                                </li>
                                <li onClick={() => setTabs(2)}>
                                  <a href="#tab_default_3" data-toggle="tab">
                                    Work Experience
                                  </a>
                                </li>
                                <li onClick={() => setTabs(3)}>
                                  <a href="#tab_default_4" data-toggle="tab">
                                    Contact Details
                                  </a>
                                </li>
                                <li onClick={() => setTabs(4)}>
                                  <a href="#tab_default_5" data-toggle="tab">
                                    Address Details
                                  </a>
                                </li>
                                <li onClick={() => setTabs(5)}>
                                  <a href="#tab_default_6" data-toggle="tab">
                                    verification
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="tab-content">
                              {tabs == 0 && (
                                <div className="tab-pane active">
                                  <div className="well well-sm">
                                    <h4>PERSONAL DATA</h4>
                                  </div>

                                  <table className="table bio-table">
                                    <tbody>
                                      <tr>
                                        <td>Firstname</td>
                                        <td>: Vijayan</td>
                                      </tr>
                                      <tr>
                                        <td>Lastname</td>
                                        <td>: Karuppaiah</td>
                                      </tr>
                                      <tr>
                                        <td>Date of Birthday</td>
                                        <td>: 6 March 1980</td>
                                      </tr>
                                      <tr>
                                        <td>Gender</td>
                                        <td>: Male</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}

                              {tabs == 1 && (
                                <div className="tab-pane">
                                  <div className="well well-sm">
                                    <h4>EDUCATIONAL BACKGROUND</h4>
                                  </div>

                                  <table className="table bio-table">
                                    <tbody>
                                      <tr>
                                        <td>Elementary School</td>
                                        <td>: </td>
                                        <td>Year Graduated</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>High School</td>
                                        <td>: </td>
                                        <td>Year Graduated</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Under Graduate</td>
                                        <td>: </td>
                                        <td>Year Graduated</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Post Graduate</td>
                                        <td>: </td>
                                        <td>Year Graduated</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Master of Philosophy (MPhil)</td>
                                        <td>: </td>
                                        <td>Year Graduated </td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Doctor of Philosophy (PhD)</td>
                                        <td>: </td>
                                        <td>Year Graduated</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Bachelor of Engineering (B.Eng)
                                          <br />
                                          Bachelor of Technology (B.Tech)
                                        </td>
                                        <td>: </td>
                                        <td>Year Graduated</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Master of Engineering (M.Eng)
                                          <br />
                                          Master of Technology (M.Tech)
                                        </td>
                                        <td>: </td>
                                        <td>Year Graduated</td>
                                        <td>: </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}

                              {tabs == 2 && (
                                <div className="tab-pane" id="tab_default_3">
                                  <div className="well well-sm">
                                    <h4>EMPLOYMENT RECORD</h4>
                                  </div>

                                  <table className="table bio-table">
                                    <tbody>
                                      <tr>
                                        <td>Date</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Position</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Principle Activites</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Employer</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Type of Activites</td>
                                        <td>: </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <br />

                                  <table className="table bio-table">
                                    <tbody>
                                      <tr>
                                        <td>Date</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Position</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Principle Activites</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Employer</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Type of Activites</td>
                                        <td>: </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <br />

                                  <table className="table bio-table">
                                    <tbody>
                                      <tr>
                                        <td>Date</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Position</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Principle Activites</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Employer</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Type of Activites</td>
                                        <td>: </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}

                              {tabs == 3 && (
                                <div className="tab-pane" id="tab_default_4">
                                  <div className="well well-sm">
                                    <h4>OFFICIAL AND PERSONAL CONTACTS</h4>
                                  </div>

                                  <table className="table bio-table">
                                    <tbody>
                                      <tr>
                                        <td>Office Telephone Number</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Office Mobile Phone</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Official Email Address</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Personal Mobile Phone</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Personal Email Address </td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Home Phone</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Facebook Account</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Twitter Account</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>Skype Account</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>LinkedIn Account</td>
                                        <td>: </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}
                              {tabs == 4 && (
                                <div className="tab-pane" id="tab_default_5">
                                  <div className="well well-sm">
                                    <h4>ADDRESS DETAILS</h4>
                                  </div>

                                  <table className="table bio-table">
                                    <thead>
                                      <tr>
                                        <th colspan="2">
                                          Present Residential Address
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>   Line 1</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   Line 2</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   City</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   State</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   Country</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   Pin code</td>
                                        <td>: </td>
                                      </tr>
                                    </tbody>
                                  </table>

                                  <br />

                                  <table className="table bio-table">
                                    <thead>
                                      <tr>
                                        <th colspan="2">
                                          Permanent Residential Address
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                             Plot No / Door No / Part No / Block
                                          No
                                        </td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   Street Name</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   City</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   State</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   Country</td>
                                        <td>: </td>
                                      </tr>
                                      <tr>
                                        <td>   Pin code</td>
                                        <td>: </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}
                              {tabs == 5 && (
                                <div className="tab-pane" id="tab_default_6">
                                  <div className="well well-sm">
                                    <h4>Verification</h4>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-4 col-md-offset-4">
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-rounded btn-fw"
                                      >
                                        Aproove
                                      </button>

                                      <button
                                        type="button"
                                        className="btn btn-danger btn-rounded btn-fw"
                                      >
                                        Reject
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                  Copyright © 2021. GiantCell Asia{" "}
                  <a href="#" target="_blank"></a> reserved.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorProfile;
