import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Tabs } from "antd";
import logo from "../../images/logo.png";

const { TabPane } = Tabs;
const Patient2 = () => {
  const [patientsList, setpatientsList] = useState([]);
  const [details, setdetails] = useState({});
  console.log(patientsList, "doctorsList");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ENV}/api/patients-list`)
      .then((data) => {
        setpatientsList(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   const logout = () => {
     localStorage.clear();
     window.location.pathname = "/signin";
   };
  return (
    <div className="container-scroller">
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a className="navbar-brand brand-logo mr-5" href="../../index.html">
            <img
              src={logo}
              className="mr-2"
              alt="logo"
              style={{ width: "200px", height: "1%" }}
            />
          </a>
          <a className="navbar-brand brand-logo-mini" href="../../index.html">
            <img src="../../images/logo-mini.svg" alt="logo" />
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
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img
                  src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
                  alt="profile"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                {/* <a className="dropdown-item">
                  <i className="ti-settings text-primary"></i>
                  Settings
                </a> */}
                <a className="dropdown-item" onClick={logout}>
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
                    <img src="../../images/faces/face1.jpg" alt="image" />
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
                    <img src="../../images/faces/face2.jpg" alt="image" />
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
                    <img src="../../images/faces/face3.jpg" alt="image" />
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
                    <img src="../../images/faces/face4.jpg" alt="image" />
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
                    <img src="../../images/faces/face5.jpg" alt="image" />
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
                    <img src="../../images/faces/face6.jpg" alt="image" />
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
        <Sidebar />

        <div className="patients_mn">
          <section id="tabs">
            <nav className="pat_nm mx-3">
              <h5 className="mt-3 text-center">Patients</h5>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Today" key="1">
                  {/* <div
                    className="tab-content py-3 px-3 px-sm-0 bdn_nn"
                    id="nav-tabContent"
                  > */}
                  <div
                    className="tab-pane fade active show"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="due_mn">
                      <h6 style={{ fontSize: "13px" }}>DUE</h6>
                    </div>

                    <div className="due_mn2 active2">
                      <a href="#">
                        <h5 style={{ fontSize: "13px", color: "white" }}>
                          04:15 <span>rom</span>
                        </h5>

                        <h5 style={{ fontSize: "13px", color: "white" }}>
                          PM<span> Visit reason not specified</span>
                        </h5>
                      </a>
                    </div>

                    <div className="due_mn">
                      <h6 style={{ fontSize: "13px" }}>MET</h6>
                    </div>

                    <div className="due_mn2">
                      <a href="#">
                        <h5 style={{ fontSize: "13px", color: "white" }}>
                          10:15 <span>rom</span>
                        </h5>

                        <h5 style={{ fontSize: "13px", color: "white" }}>
                          PM<span> Visit reason not specified</span>
                        </h5>
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="lis_nm">
                      <ul>
                        <li>
                          {" "}
                          <a className="active2" href="#">
                            Ayush
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Gaurav</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Suman</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Vikash</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="lis_nm">
                      <ul>
                        <li>
                          {" "}
                          <a href="#">Ayush</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Gaurav</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Suman</a>
                        </li>
                        <li>
                          {" "}
                          <a className="active2" href="#">
                            Vikash
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#">Vijay</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* {patientsList.map((v, i) => {
                    if (i < 4) {
                      return (
                        <p className="box" onClick={() => setdetails(v)}>
                          {v.name}
                        </p>
                      );
                    }
                  })} */}
                </TabPane>
                <TabPane tab="Recent" key="2">
                  {patientsList.map((v, i) => {
                    if (i < 10) {
                      return (
                        <p className="box" onClick={() => setdetails(v)}>
                          {v.name}
                        </p>
                      );
                    }
                  })}
                </TabPane>
                <TabPane tab="  All" key="3">
                  {patientsList.map((v) => {
                    return (
                      <p className="box" onClick={() => setdetails(v)}>
                        {v.name}
                      </p>
                    );
                  })}
                </TabPane>
              </Tabs>
            </nav>
          </section>
        </div>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="col-sm-12">
              <div className="wizard-container">
                <div
                  className="card wizard-card h-100"
                  data-color="orange"
                  id="wizardProfile"
                >
                  {details?.name ? (
                    <form action="" method="" novalidate="novalidate">
                      <div className="container bootstrap snippets bootdey">
                        <div className="panel-body inf-content">
                          <div className="row p-2 box2 m-2">
                            <div className="col-md-2 p-2">
                              <img
                                alt=""
                                style={{ width: "80%", borderRadius: "50%" }}
                                title=""
                                className="img-circle img-thumbnail isTooltip"
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                data-original-title="Usuario"
                              />
                            </div>
                            <div className="col-md-10 pt-3">
                              <div className="table-responsive">
                                <table className="table table-user-information">
                                  <tbody>
                                    <tr>
                                      <td className="tdd_pdg td1">
                                        <strong>Name</strong>
                                      </td>
                                      <td className="text-primary pri_pd td1">
                                        {details?.name}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="tdd_pdg td1">
                                        <strong>Mobile no</strong>
                                      </td>
                                      <td className="text-primary pri_pd td1">
                                        {details?.mobile}
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="tdd_pdg td1">
                                        <strong>Email</strong>
                                      </td>
                                      <td className="text-primary pri_pd td1">
                                        {details?.email}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="dec_dte m-4 d-flex">
                        <div
                          className="dec1 p-2 text-center"
                          style={{ border: "1px solid lightgray" }}
                        >
                          <h5>22</h5>
                          <h6>DEC'21</h6>
                        </div>

                        <div
                          className="dec_dte2 p-2 w-100 d-flex justify-content-md-around"
                          style={{ border: "1px solid lightgray" }}
                        >
                          <div>
                            <p>Appointment with Suman P</p>

                            <span>04:15 pm for 15 minutes</span>
                          </div>

                          <div className="dropdown dup_rt">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Add Records
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Vital Signs
                              </a>
                              <a className="dropdown-item" href="#">
                                Clinical Notes
                              </a>
                              <a className="dropdown-item" href="#">
                                Prescriptions
                              </a>
                              <a className="dropdown-item" href="#">
                                Fils
                              </a>
                              <a className="dropdown-item" href="#">
                                Lab Orders
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <form action="" method="" novalidate="novalidate">
                      <div className="container bootstrap snippets bootdey">
                        <div className="panel-body inf-content">
                          <div className="row p-2 box2 m-2">
                            <div className="col-md-2 p-2">
                              <img
                                alt=""
                                style={{ width: "80%", borderRadius: "50%" }}
                                title=""
                                className="img-circle img-thumbnail isTooltip"
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                data-original-title="Usuario"
                              />
                            </div>
                            <div className="col-md-10 pt-3">
                              <div className="table-responsive">
                                <table className="table table-user-information">
                                  <tbody>
                                    <tr>
                                      <td className="tdd_pdg td1">
                                        <strong>Name</strong>
                                      </td>
                                      <td className="text-primary pri_pd td1">
                                        {patientsList[0]?.name}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="tdd_pdg td1">
                                        <strong>Mobile no</strong>
                                      </td>
                                      <td className="text-primary pri_pd td1">
                                        {patientsList[0]?.mobile}
                                      </td>
                                    </tr>

                                    <tr>
                                      <td className="tdd_pdg td1">
                                        <strong>Email</strong>
                                      </td>
                                      <td className="text-primary pri_pd td1">
                                        {patientsList[0]?.email}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="dec_dte m-4 d-flex">
                        <div
                          className="dec1 p-2 text-center"
                          style={{ border: "1px solid lightgray" }}
                        >
                          <h5>22</h5>
                          <h6>DEC'21</h6>
                        </div>

                        <div
                          className="dec_dte2 p-2 w-100 d-flex justify-content-md-around"
                          style={{ border: "1px solid lightgray" }}
                        >
                          <div>
                            <p>Appointment with Suman P</p>

                            <span>04:15 pm for 15 minutes</span>
                          </div>

                          <div className="dropdown dup_rt">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Add Records
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a className="dropdown-item" href="#">
                                Vital Signs
                              </a>
                              <a className="dropdown-item" href="#">
                                Clinical Notes
                              </a>
                              <a className="dropdown-item" href="#">
                                Prescriptions
                              </a>
                              <a className="dropdown-item" href="#">
                                Fils
                              </a>
                              <a className="dropdown-item" href="#">
                                Lab Orders
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
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
  );
};

export default Patient2;
