import Header from "../Header";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Home = () => {
  const [collapseMenu, setCollapseMenu] = useState(false);
  return (
    <div className="container-scroller">
      <Header />
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
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="row">
                  <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 className="font-weight-bold">Welcome Aamir</h3>
                    <h6 className="font-weight-normal mb-0">
                      All systems are running smoothly! You have{" "}
                      <span className="text-primary">3 unread alerts!</span>
                    </h6>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="justify-content-end d-flex">
                      <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                        <button
                          className="btn btn-sm btn-light bg-white dropdown-toggle"
                          type="button"
                          id="dropdownMenuDate2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuDate2"
                        >
                          <a className="dropdown-item" href="#">
                            January - March
                          </a>
                          <a className="dropdown-item" href="#">
                            March - June
                          </a>
                          <a className="dropdown-item" href="#">
                            June - August
                          </a>
                          <a className="dropdown-item" href="#">
                            August - November
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card tale-bg">
                  <div className="card-people mt-auto">
                    <img src="images/dashboard/people.svg" alt="people" />
                    <div className="weather-info">
                      <div className="d-flex">
                        <div>
                          <h2 className="mb-0 font-weight-normal">
                            <i className="icon-sun mr-2"></i>31<sup>C</sup>
                          </h2>
                        </div>
                        <div className="ml-2">
                          <h4 className="location font-weight-normal">Bangalore</h4>
                          <h6 className="font-weight-normal">India</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin transparent">
                <div className="row">
                  <div className="col-md-6 mb-4 stretch-card transparent">
                    <div className="card card-tale">
                      <div className="card-body">
                        <p className="mb-4">Today’s Bookings</p>
                        <p className="fs-30 mb-2">4006</p>
                        <p>10.00% (30 days)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 stretch-card transparent">
                    <div className="card card-dark-blue">
                      <div className="card-body">
                        <p className="mb-4">Total Bookings</p>
                        <p className="fs-30 mb-2">61344</p>
                        <p>22.00% (30 days)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                    <div className="card card-light-blue">
                      <div className="card-body">
                        <p className="mb-4">Number of Meetings</p>
                        <p className="fs-30 mb-2">34040</p>
                        <p>2.00% (30 days)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 stretch-card transparent">
                    <div className="card card-light-danger">
                      <div className="card-body">
                        <p className="mb-4">Number of Clients</p>
                        <p className="fs-30 mb-2">47033</p>
                        <p>0.22% (30 days)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Order Details</p>
                    <p className="font-weight-500">
                      The total number of sessions within the date range. It is
                      the period time a user is actively engaged with your
                      website, page or app, etc
                    </p>
                    <div className="d-flex flex-wrap mb-5">
                      <div className="mr-5 mt-3">
                        <p className="text-muted">Order value</p>
                        <h3 className="text-primary fs-30 font-weight-medium">
                          12.3k
                        </h3>
                      </div>
                      <div className="mr-5 mt-3">
                        <p className="text-muted">Orders</p>
                        <h3 className="text-primary fs-30 font-weight-medium">
                          14k
                        </h3>
                      </div>
                      <div className="mr-5 mt-3">
                        <p className="text-muted">Users</p>
                        <h3 className="text-primary fs-30 font-weight-medium">
                          71.56%
                        </h3>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted">Downloads</p>
                        <h3 className="text-primary fs-30 font-weight-medium">
                          34040
                        </h3>
                      </div>
                    </div>
                    <canvas id="order-chart"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="card-title">Sales Report</p>
                      <a href="#" className="text-info">
                        View all
                      </a>
                    </div>
                    <p className="font-weight-500">
                      The total number of sessions within the date range. It is
                      the period time a user is actively engaged with your
                      website, page or app, etc
                    </p>
                    <div
                      id="sales-legend"
                      className="chartjs-legend mt-4 mb-2"
                    ></div>
                    <canvas id="sales-chart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card position-relative">
                  <div className="card-body">
                    <div
                      id="detailedReports"
                      className="carousel slide detailed-report-carousel position-static pt-2"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                              <div className="ml-xl-4 mt-3">
                                <p className="card-title">Detailed Reports</p>
                                <h1 className="text-primary">$34040</h1>
                                <h3 className="font-weight-500 mb-xl-4 text-primary">
                                  North America
                                </h3>
                                <p className="mb-2 mb-xl-0">
                                  The total number of sessions within the date
                                  range. It is the period time a user is
                                  actively engaged with your website, page or
                                  app, etc
                                </p>
                              </div>
                            </div>
                            <div className="col-md-12 col-xl-9">
                              <div className="row">
                                <div className="col-md-6 border-right">
                                  <div className="table-responsive mb-3 mb-md-0 mt-3">
                                    <table className="table table-borderless report-table">
                                      <tr>
                                        <td className="text-muted">Illinois</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-primary"
                                              role="progressbar"
                                              style={{ width: "70%" }}
                                              aria-valuenow="70"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            713
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Washington</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-warning"
                                              role="progressbar"
                                              style={{ width: "30%" }}
                                              aria-valuenow="30"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            583
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Mississippi</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-danger"
                                              role="progressbar"
                                              style={{ width: "95%" }}
                                              aria-valuenow="95"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            924
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">California</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-info"
                                              role="progressbar"
                                              style={{ width: "60%" }}
                                              aria-valuenow="60"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            664
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Maryland</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-primary"
                                              role="progressbar"
                                              style={{ width: "40%" }}
                                              aria-valuenow="40"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            560
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Alaska</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-danger"
                                              role="progressbar"
                                              style={{ width: "75%" }}
                                              aria-valuenow="75"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            793
                                          </h5>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                  <canvas id="north-america-chart"></canvas>
                                  <div id="north-america-legend"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                              <div className="ml-xl-4 mt-3">
                                <p className="card-title">Detailed Reports</p>
                                <h1 className="text-primary">$34040</h1>
                                <h3 className="font-weight-500 mb-xl-4 text-primary">
                                  North America
                                </h3>
                                <p className="mb-2 mb-xl-0">
                                  The total number of sessions within the date
                                  range. It is the period time a user is
                                  actively engaged with your website, page or
                                  app, etc
                                </p>
                              </div>
                            </div>
                            <div className="col-md-12 col-xl-9">
                              <div className="row">
                                <div className="col-md-6 border-right">
                                  <div className="table-responsive mb-3 mb-md-0 mt-3">
                                    <table className="table table-borderless report-table">
                                      <tr>
                                        <td className="text-muted">Illinois</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-primary"
                                              role="progressbar"
                                              style={{ width: "70%" }}
                                              aria-valuenow="70"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            713
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Washington</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-warning"
                                              role="progressbar"
                                              style={{ width: "30%" }}
                                              aria-valuenow="30"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            583
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Mississippi</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-danger"
                                              role="progressbar"
                                              style={{ width: "95%" }}
                                              aria-valuenow="95"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            924
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">California</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-info"
                                              role="progressbar"
                                              style={{ width: "60%" }}
                                              aria-valuenow="60"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            664
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Maryland</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-primary"
                                              role="progressbar"
                                              style={{ width: "40%" }}
                                              aria-valuenow="40"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            560
                                          </h5>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="text-muted">Alaska</td>
                                        <td className="w-100 px-0">
                                          <div className="progress progress-md mx-4">
                                            <div
                                              className="progress-bar bg-danger"
                                              role="progressbar"
                                              style={{ width: "75%" }}
                                              aria-valuenow="75"
                                              aria-valuemin="0"
                                              aria-valuemax="100"
                                            ></div>
                                          </div>
                                        </td>
                                        <td>
                                          <h5 className="font-weight-bold mb-0">
                                            793
                                          </h5>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                  <canvas id="south-america-chart"></canvas>
                                  <div id="south-america-legend"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#detailedReports"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#detailedReports"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title mb-0">Top Products</p>
                    <div className="table-responsive">
                      <table className="table table-striped table-borderless">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Search Engine Marketing</td>
                            <td className="font-weight-bold">$362</td>
                            <td>21 Sep 2018</td>
                            <td className="font-weight-medium">
                              <div className="badge badge-success">Completed</div>
                            </td>
                          </tr>
                          <tr>
                            <td>Search Engine Optimization</td>
                            <td className="font-weight-bold">$116</td>
                            <td>13 Jun 2018</td>
                            <td className="font-weight-medium">
                              <div className="badge badge-success">Completed</div>
                            </td>
                          </tr>
                          <tr>
                            <td>Display Advertising</td>
                            <td className="font-weight-bold">$551</td>
                            <td>28 Sep 2018</td>
                            <td className="font-weight-medium">
                              <div className="badge badge-warning">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td>Pay Per Click Advertising</td>
                            <td className="font-weight-bold">$523</td>
                            <td>30 Jun 2018</td>
                            <td className="font-weight-medium">
                              <div className="badge badge-warning">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td>E-Mail Marketing</td>
                            <td className="font-weight-bold">$781</td>
                            <td>01 Nov 2018</td>
                            <td className="font-weight-medium">
                              <div className="badge badge-danger">Cancelled</div>
                            </td>
                          </tr>
                          <tr>
                            <td>Referral Marketing</td>
                            <td className="font-weight-bold">$283</td>
                            <td>20 Mar 2018</td>
                            <td className="font-weight-medium">
                              <div className="badge badge-warning">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td>Social media marketing</td>
                            <td className="font-weight-bold">$897</td>
                            <td>26 Oct 2018</td>
                            <td className="font-weight-medium">
                              <div className="badge badge-success">Completed</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">To Do Lists</h4>
                    <div className="list-wrapper pt-2">
                      <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                        <li>
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" />
                              Meeting with Urban Team
                            </label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li className="completed">
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" checked />
                              Duplicate a project for new customer
                            </label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li>
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" />
                              Project meeting with CEO
                            </label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li className="completed">
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" checked />
                              Follow up of team zilla
                            </label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                        <li>
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" />
                              Level up for Antony
                            </label>
                          </div>
                          <i className="remove ti-close"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="add-items d-flex mb-0 mt-2">
                      <input
                        type="text"
                        className="form-control todo-list-input"
                        placeholder="Add new task"
                      />
                      <button className="add btn btn-icon text-primary todo-list-add-btn bg-transparent">
                        <i className="icon-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title mb-0">Projects</p>
                    <div className="table-responsive">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th className="pl-0  pb-2 border-bottom">Places</th>
                            <th className="border-bottom pb-2">Orders</th>
                            <th className="border-bottom pb-2">Users</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="pl-0">Kentucky</td>
                            <td>
                              <p className="mb-0">
                                <span className="font-weight-bold mr-2">65</span>
                                (2.15%)
                              </p>
                            </td>
                            <td className="text-muted">65</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Ohio</td>
                            <td>
                              <p className="mb-0">
                                <span className="font-weight-bold mr-2">54</span>
                                (3.25%)
                              </p>
                            </td>
                            <td className="text-muted">51</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Nevada</td>
                            <td>
                              <p className="mb-0">
                                <span className="font-weight-bold mr-2">22</span>
                                (2.22%)
                              </p>
                            </td>
                            <td className="text-muted">32</td>
                          </tr>
                          <tr>
                            <td className="pl-0">North Carolina</td>
                            <td>
                              <p className="mb-0">
                                <span className="font-weight-bold mr-2">46</span>
                                (3.27%)
                              </p>
                            </td>
                            <td className="text-muted">15</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Montana</td>
                            <td>
                              <p className="mb-0">
                                <span className="font-weight-bold mr-2">17</span>
                                (1.25%)
                              </p>
                            </td>
                            <td className="text-muted">25</td>
                          </tr>
                          <tr>
                            <td className="pl-0">Nevada</td>
                            <td>
                              <p className="mb-0">
                                <span className="font-weight-bold mr-2">52</span>
                                (3.11%)
                              </p>
                            </td>
                            <td className="text-muted">71</td>
                          </tr>
                          <tr>
                            <td className="pl-0 pb-0">Louisiana</td>
                            <td className="pb-0">
                              <p className="mb-0">
                                <span className="font-weight-bold mr-2">25</span>
                                (1.32%)
                              </p>
                            </td>
                            <td className="pb-0">14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="row">
                  <div className="col-md-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-title">Charts</p>
                        <div className="charts-data">
                          <div className="mt-3">
                            <p className="mb-0">Data 1</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="progress progress-md flex-grow-1 mr-4">
                                <div
                                  className="progress-bar bg-inf0"
                                  role="progressbar"
                                  style={{ width: "95%" }}
                                  aria-valuenow="95"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <p className="mb-0">5k</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="mb-0">Data 2</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="progress progress-md flex-grow-1 mr-4">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "35%" }}
                                  aria-valuenow="35"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <p className="mb-0">1k</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="mb-0">Data 3</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="progress progress-md flex-grow-1 mr-4">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "48%" }}
                                  aria-valuenow="48"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <p className="mb-0">992</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="mb-0">Data 4</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="progress progress-md flex-grow-1 mr-4">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "25%" }}
                                  aria-valuenow="25"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <p className="mb-0">687</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 stretch-card grid-margin grid-margin-md-0">
                    <div className="card data-icon-card-primary">
                      <div className="card-body">
                        <p className="card-title text-white">Number of Meetings</p>
                        <div className="row">
                          <div className="col-8 text-white">
                            <h3>34040</h3>
                            <p className="text-white font-weight-500 mb-0">
                              The total number of sessions within the date
                              range.It is calculated as the sum .{" "}
                            </p>
                          </div>
                          <div className="col-4 background-icon"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Notifications</p>
                    <ul className="icon-data-list">
                      <li>
                        <div className="d-flex">
                          <img src="images/faces/face1.jpg" alt="user" />
                          <div>
                            <p className="text-info mb-1">Isabella Becker</p>
                            <p className="mb-0">
                              Sales dashboard have been created
                            </p>
                            <small>9:30 am</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <img src="images/faces/face2.jpg" alt="user" />
                          <div>
                            <p className="text-info mb-1">Adam Warren</p>
                            <p className="mb-0">You have done a great job #TW111</p>
                            <small>10:30 am</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <img src="images/faces/face3.jpg" alt="user" />
                          <div>
                            <p className="text-info mb-1">Leonard Thornton</p>
                            <p className="mb-0">
                              Sales dashboard have been created
                            </p>
                            <small>11:30 am</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <img src="images/faces/face4.jpg" alt="user" />
                          <div>
                            <p className="text-info mb-1">George Morrison</p>
                            <p className="mb-0">
                              Sales dashboard have been created
                            </p>
                            <small>8:50 am</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <img src="images/faces/face5.jpg" alt="user" />
                          <div>
                            <p className="text-info mb-1">Ryan Cortez</p>
                            <p className="mb-0">Herbs are fun and easy to grow.</p>
                            <small>9:00 am</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Advanced Table</p>
                    <div className="row">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table
                            id="example"
                            className="display expandable-table"
                            style={{ width: "100%" }}
                          >
                            <thead>
                              <tr>
                                <th>Quote#</th>
                                <th>Product</th>
                                <th>Business type</th>
                                <th>Policy holder</th>
                                <th>Premium</th>
                                <th>Status</th>
                                <th>Updated at</th>
                                <th></th>
                              </tr>
                            </thead>
                          </table>
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
    </div>
  );
};

export default Home;
