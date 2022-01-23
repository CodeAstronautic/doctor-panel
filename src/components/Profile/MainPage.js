import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import verify from "../../images/verify.jpg";
import rejected from "../../images/rejected.jpg";
import Sidebar from "../Sidebar";
const MainPage = () => {
  const [completed1, setcompleted1] = useState(false);
  const [completed2, setcompleted2] = useState(false);
  const [completed3, setcompleted3] = useState(false);
  const [profile, setprofile] = useState({})

  console.log("completed1", completed1);
  console.log("completed2", completed2);
  console.log("completed3", completed3);
  // const history = useHistory();
  const navigate = useNavigate();
  // useEffect(() => {

  //   if (localStorage.getItem("step1"))
  //     setcompleted1(localStorage.getItem("step1"));
  //   if (localStorage.getItem("step2"))
  //     setcompleted2(localStorage.getItem("step2"));
  //   if (localStorage.getItem("step3"))
  //     setcompleted3(localStorage.getItem("step3"));
  // }, []);

  const getProfile =async () => {
    if (localStorage.getItem("user_data")) {
      let data = JSON.parse(localStorage.getItem("user_data"));
      console.log("data", data);
    await  axios
        .post(
          `http://brtechgeeks.pythonanywhere.com/api/profile-details/${data.user_id}`
          // `http://brtechgeeks.pythonanywhere.com/api/profile-details/20`
        )
        .then((res) => {
          console.log("res", res);
          data = { ...data, name: res?.data?.data?.profile_detail?.name };
          console.log("ddta", data);
          setcompleted1(res?.data?.data?.profile_detail?.section_flag[0]);
          setcompleted2(res?.data?.data?.profile_detail?.section_flag[1]);
          setcompleted3(res?.data?.data?.profile_detail?.section_flag[2]);
          setprofile(res?.data?.data?.profile_detail);
          localStorage.setItem("user_data", JSON.stringify(data));
        
        });
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
 const logout = () => {
   localStorage.clear();
   window.location.pathname = "/signin";
 };
  return (
    <div class="container-scroller">
      <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="navbar-brand brand-logo mr-5" href="../../index.html">
            <img
              src={logo}
              class="mr-2"
              alt="logo"
              style={{ width: "200px", height: "1%" }}
            />
          </a>
          <a class="navbar-brand brand-logo-mini" href="../../index.html">
            <img src="../../images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button
            class="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span class="icon-menu"></span>
          </button>
          <ul class="navbar-nav mr-lg-2">
            <li class="nav-item nav-search d-none d-lg-block">
              <div class="input-group">
                <div
                  class="input-group-prepend hover-cursor"
                  id="navbar-search-icon"
                >
                  <span class="input-group-text" id="search">
                    <i class="icon-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="navbar-search-input"
                  placeholder="Search now"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item dropdown">
              <a
                class="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i class="icon-bell mx-0"></i>
                <span class="count"></span>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <p class="mb-0 font-weight-normal float-left dropdown-header">
                  Notifications
                </p>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-success">
                      <i class="ti-info-alt mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">
                      Application Error
                    </h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-warning">
                      <i class="ti-settings mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">Settings</h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="ti-user mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">
                      New user registration
                    </h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item nav-profile dropdown">
              <a
                class="nav-link dropdown-toggle"
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
                class="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                {/* <a class="dropdown-item">
                  <i class="ti-settings text-primary"></i>
                  Settings
                </a> */}
                <a class="dropdown-item" onClick={logout}>
                  <i class="ti-power-off text-primary"></i>
                  Logout
                </a>
              </div>
            </li>
            <li class="nav-item nav-settings d-none d-lg-flex">
              <a class="nav-link" href="#">
                <i class="icon-ellipsis"></i>
              </a>
            </li>
          </ul>
          <button
            class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span class="icon-menu"></span>
          </button>
        </div>
      </nav>
      <div class="container-fluid page-body-wrapper">
        <div class="theme-setting-wrapper">
          <div id="settings-trigger">
            <i class="ti-settings"></i>
          </div>
          <div id="theme-settings" class="settings-panel">
            <i class="settings-close ti-close"></i>
            <p class="settings-heading">SIDEBAR SKINS</p>
            <div class="sidebar-bg-options selected" id="sidebar-light-theme">
              <div class="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div class="sidebar-bg-options" id="sidebar-dark-theme">
              <div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark
            </div>
            <p class="settings-heading mt-2">HEADER SKINS</p>
            <div class="color-tiles mx-0 px-4">
              <div class="tiles success"></div>
              <div class="tiles warning"></div>
              <div class="tiles danger"></div>
              <div class="tiles info"></div>
              <div class="tiles dark"></div>
              <div class="tiles default"></div>
            </div>
          </div>
        </div>
        <div id="right-sidebar" class="settings-panel">
          <i class="settings-close ti-close"></i>
          <ul class="nav nav-tabs border-top" id="setting-panel" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
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
            <li class="nav-item">
              <a
                class="nav-link"
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
          <div class="tab-content" id="setting-content">
            <div
              class="tab-pane fade show active scroll-wrapper"
              id="todo-section"
              role="tabpanel"
              aria-labelledby="todo-section"
            >
              <div class="add-items d-flex px-3 mb-0">
                <form class="form w-100">
                  <div class="form-group d-flex">
                    <input
                      type="text"
                      class="form-control todo-list-input"
                      placeholder="Add To-do"
                    />
                    <button
                      type="submit"
                      class="add btn btn-primary todo-list-add-btn"
                      id="add-task"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div class="list-wrapper px-3">
                <ul class="d-flex flex-column-reverse todo-list">
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Team review meeting at 3.00 PM
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Prepare for presentation
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Resolve all the low priority tickets due today
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li class="completed">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" checked />
                        Schedule meeting for next week
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                  <li class="completed">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" checked />
                        Project review
                      </label>
                    </div>
                    <i class="remove ti-close"></i>
                  </li>
                </ul>
              </div>
              <h4 class="px-3 text-muted mt-5 font-weight-light mb-0">
                Events
              </h4>
              <div class="events pt-4 px-3">
                <div class="wrapper d-flex mb-2">
                  <i class="ti-control-record text-primary mr-2"></i>
                  <span>Feb 11 2018</span>
                </div>
                <p class="mb-0 font-weight-thin text-gray">
                  Creating component page build a js
                </p>
                <p class="text-gray mb-0">The total number of sessions</p>
              </div>
              <div class="events pt-4 px-3">
                <div class="wrapper d-flex mb-2">
                  <i class="ti-control-record text-primary mr-2"></i>
                  <span>Feb 7 2018</span>
                </div>
                <p class="mb-0 font-weight-thin text-gray">
                  Meeting with Alisa
                </p>
                <p class="text-gray mb-0 ">Call Sarah Graves</p>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="chats-section"
              role="tabpanel"
              aria-labelledby="chats-section"
            >
              <div class="d-flex align-items-center justify-content-between border-bottom">
                <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                  Friends
                </p>
                <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">
                  See All
                </small>
              </div>
              <ul class="chat-list">
                <li class="list active">
                  <div class="profile">
                    <img src="../../images/faces/face1.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">19 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face2.jpg" alt="image" />
                    <span class="offline"></span>
                  </div>
                  <div class="info">
                    <div class="wrapper d-flex">
                      <p>Catherine</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div class="badge badge-success badge-pill my-auto mx-2">
                    4
                  </div>
                  <small class="text-muted my-auto">23 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face3.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">14 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face4.jpg" alt="image" />
                    <span class="offline"></span>
                  </div>
                  <div class="info">
                    <p>James Richardson</p>
                    <p>Away</p>
                  </div>
                  <small class="text-muted my-auto">2 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face5.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Madeline Kennedy</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">5 min</small>
                </li>
                <li class="list">
                  <div class="profile">
                    <img src="../../images/faces/face6.jpg" alt="image" />
                    <span class="online"></span>
                  </div>
                  <div class="info">
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small class="text-muted my-auto">47 min</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Sidebar />

        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-lg-12 grid-margin stretch-card">
                <div class="row">
                  <div class="col-md-12">
                    <div class="profile_tx2">
                      <h2>Profile</h2>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="profile_mntx">
                          <ul>
                            {completed3 ? (
                              <li>
                                <h3>
                                  <i class="fa fa-exclamation-triangle yloclr"></i>
                                  Profile is under verification!
                                </h3>
                                <p>
                                  As our team is facing heavy surge in requests
                                  due to covid-19, kindly give us 7 working days
                                  to verify the information which you have
                                  provided.
                                </p>
                              </li>
                            ) : (
                              <li>
                                <h3>Great Progress!</h3>
                                <p>
                                  Your profile is just few steps away from going
                                  live.
                                </p>
                              </li>
                            )}
                            <li>
                              <span>Section A: Profile details</span>
                              <p>
                                Doctor’s basic details, medical registration,
                                education qualification, establishment details
                                etc.
                              </p>

                              {completed1 ? (
                                <div
                                  class="cursor-pointer"
                                  onClick={() => navigate("/profile")}
                                >
                                  <i
                                    class="fa fa-fw rtclr"
                                    aria-hidden="true"
                                    title="Copy to use check-circle"
                                  >
                                    
                                  </i>

                                  <span
                                    data-qa-id="section-1-change"
                                    class="
                                    onboarding-link
                                    u-cushion--xsm-left
                                    u-bold
                                  "
                                  >
                                    Change
                                  </span>
                                </div>
                              ) : (
                                <button
                                  data-qa-id="section-1-change"
                                  class="
                                    onboarding-link
                                    u-cushion--xsm-left
                                    u-bold
                                    text-blue
                                    bbtn
                                  "
                                  onClick={() => navigate("/profile")}
                                >
                                  Click to complete
                                </button>
                              )}
                            </li>

                            <li>
                              <span>Section B: Profile verification</span>
                              <p>
                                Doctor identity proof, registration proof,
                                establishment ownership proof etc.
                              </p>

                              {completed2 ? (
                                <div
                                  class="cursor-pointer"
                                  onClick={() => navigate("/profile2")}
                                >
                                  <i
                                    class="fa fa-fw rtclr"
                                    aria-hidden="true"
                                    title="Copy to use check-circle"
                                  >
                                    
                                  </i>

                                  <span
                                    data-qa-id="section-1-change"
                                    class="
                                    onboarding-link
                                    u-cushion--xsm-left
                                    u-bold
                                  "
                                  >
                                    Change
                                  </span>
                                </div>
                              ) : completed1 ? (
                                <button
                                  data-qa-id="section-1-change"
                                  class="
                                    onboarding-link
                                    u-cushion--xsm-left
                                    u-bold
                                  
                                    bbtn
                                  "
                                  onClick={() => navigate("/profile2")}
                                  disabled={!completed1}
                                >
                                  Click to complete
                                </button>
                              ) : (
                                ""
                              )}
                            </li>

                            <li>
                              <span>Step C: Start getting patients</span>
                              <p>Location, Timings, Fees</p>

                              {completed3 ? (
                                <div
                                  class="cursor-pointer"
                                  onClick={() => navigate("/profile3")}
                                >
                                  <i
                                    class="fa fa-fw rtclr"
                                    aria-hidden="true"
                                    title="Copy to use check-circle"
                                  >
                                    
                                  </i>

                                  <span
                                    data-qa-id="section-1-change"
                                    class="
                                    onboarding-link
                                    u-cushion--xsm-left
                                    u-bold
                                  "
                                  >
                                    Change
                                  </span>
                                </div>
                              ) : completed2 ? (
                                <button
                                  data-qa-id="section-1-change"
                                  class="
                                    onboarding-link
                                    u-cushion--xsm-left
                                    u-bold
                                  
                                    bbtn
                                  "
                                  onClick={() => navigate("/profile3")}
                                  disabled={!completed1 && !completed3}
                                >
                                  Click to complete
                                </button>
                              ) : (
                                ""
                              )}

                              {/* <a href="#">Contiune</a> */}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-md-6 profile_pic d-flex justify-content-center align-items-center">
                        {profile?.verification === 1 ? (
                          <div className="text-center">
                            <img
                              src={verify}
                              style={{ height: "100px", width: "100px" }}
                            />
                            <p className="text-center">
                              Your Profile Verify Sucessfull
                            </p>
                          </div>
                        ) : profile?.verification === 2 ? (
                          <div className="text-center">
                            <img
                              src={rejected}
                              style={{ height: "100px", width: "100px" }}
                            />
                            <p className="text-center">
                              Your Profile is Rejected
                            </p>
                          </div>
                        ) : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
