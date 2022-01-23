import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Steps, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";
import logo from "../../images/logo.png";


const Profile2 = () => {
  const [step1Data, setstep1Data] = useState({});
  const [step1Error, setstep1Error] = useState({});
  const [step2Data, setstep2Data] = useState({});
  const [step2Error, setstep2Error] = useState({});
  const [step3Data, setstep3Data] = useState({});
  const [step3Error, setstep3Error] = useState({});
  const [current, setCurrent] = React.useState(0);
  const [userData, setuserData] = useState({});
const [step1, setstep1] = useState(false)
const [step2, setstep2] = useState(false)
const [step3, setstep3] = useState(false)
  const [images, setImage] = useState([]);
  const [imageso, setImageo] = useState([]);
  const [images2, setImage2] = useState([]);
  const [imageso2, setImageo2] = useState([]);
  const [images3, setImage3] = useState([]);
  const [imageso3, setImageo3] = useState([]);
  const [data, setdata] = useState({});
  const [loader, setloader] = useState(false)

  console.log("current", current);
  const navigate = useNavigate();
  console.log("data",data);

  const getProfile = () => {
    let data = JSON.parse(localStorage.getItem("user_data"));
    axios
      .post(
        `http://brtechgeeks.pythonanywhere.com/api/profile-details/${data.user_id}`
        // `http://brtechgeeks.pythonanywhere.com/api/profile-details/20`
      )
      .then((res) => {
        console.log("res", res);
        setuserData(res?.data?.data?.profile_detail);
        if (res?.data?.data?.profile_detail?.section_flag[1] == false) {
          if (res?.data?.data?.profile_detail?.flag_count == 4)
            setCurrent(0);
          if (res?.data?.data?.profile_detail?.flag_count == 5) setCurrent(1);
          if (res?.data?.data?.profile_detail?.flag_count == 6) setCurrent(2);
        }
        setdata(res?.data?.data);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  const { Step } = Steps;
  const next1 = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleStep1 = (e) => {
    setstep1(true)
    const { value, name } = e.target;
    setstep1Data({
      ...step1Data,
      [name]: value,
    });
  };

  const step1Validation = () => {
    let errors = {};
    let formIsValid = true;

    if (images.length == 0) {
      formIsValid = false;
      errors["image"] = "Proof is requried";
    }
    if (!step1Data?.membershipRadios) {
      formIsValid = false;
      errors["proof"] = "Document type is requried";
    }
    setstep1Error(errors);

    return formIsValid;
  };

  const handleStep2 = (e) => {
    setstep2(true)
    const { value, name } = e.target;
    setstep2Data({
      ...step2Data,
      [name]: value,
    });
  };

  const step2Validation = () => {
    let errors = {};
    let formIsValid = true;

    if (images2.length == 0) {
      formIsValid = false;
      errors["image"] = "Proof is requried";
    }
    if (!step2Data?.membershipRadios) {
      formIsValid = false;
      errors["proof"] = "Document type is requried";
    }

    setstep2Error(errors);

    return formIsValid;
  };

  const handleStep3 = (e) => {
    setstep3(true)
    const { value, name } = e.target;
    setstep3Data({
      ...step3Data,
      [name]: value,
    });
  };

  const step3Validation = () => {
    
    let errors = {};
    let formIsValid = true;

    if (images3.length == 0) {
      formIsValid = false;
      errors["image"] = "Proof is requried";
    }
    if (!step3Data?.membershipRadios) {
      formIsValid = false;
      errors["proof"] = "Document type is requried";
    }
    setstep3Error(errors);

    return formIsValid;
  };
  const verify = async () => {
    let data = JSON.parse(localStorage.getItem("user_data"));
    await axios
      .post(`http://brtechgeeks.pythonanywhere.com/api/profile-flag-update`, {
        user_id: data?.user_id,
        section_flag: 2,
      })
      .then((res) => {
        // setCurrent(current + 1);
        // getProfile();

        console.log("res", res);
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  const next = async () => {
    console.log("99");
      if (current == 0 && step1Validation()) {
        setloader(true)
        let data = JSON.parse(localStorage.getItem("user_data"));

        console.log("pp");
        // if (images[i].fileURL) {
        const formData = new FormData();
        formData.append("file", images);
        formData.append("user_id", data?.user_id);
        formData.append("name", step1Data?.membershipRadios);

        await axios({
          method: "post",
          url: `${process.env.REACT_APP_ENV}/api/profile-identityproof-update`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((res) => {
            console.log("222222222222222222222222");
            setCurrent(current + 1);
            getProfile();
setloader(false)
            console.log("res", res);
          })
          .catch((e) => {
            setloader(false)
            console.log("e", e);
          });
      }
      console.log("images2", images2);
      if (current == 1 && step2Validation()) {
        setloader(true)
        let data = JSON.parse(localStorage.getItem("user_data"));
        const formData = new FormData();
        formData.append("file", images2);
        formData.append("user_id", data?.user_id);
        formData.append("name", step2Data?.membershipRadios);

        await axios({
          method: "post",
          url: `${process.env.REACT_APP_ENV}/api/profile-medicalproof-update`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((res) => {
            console.log("step 2 next click");
            setCurrent(current + 1);
            getProfile();
            setloader(false)

            console.log("res", res);
          })
          .catch((e) => {
            setloader(false)
            console.log("e", e);
          });
      }
      if (current == 2 && step3Validation()) {
        setloader(true)
        let data = JSON.parse(localStorage.getItem("user_data"));
        const formData = new FormData();
        formData.append("file", images3);
        formData.append("user_id", data?.user_id);
        formData.append("name", step3Data?.membershipRadios);

        await axios({
          method: "post",
          url: `${process.env.REACT_APP_ENV}/api/profile-establishment-update`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(async (res) => {
            await verify();
            console.log("step 3 next click");
            message.success("Processing complete!");
            localStorage.setItem("step2", true);

            getProfile();
            toast.success("KYC Step2 Completed Sucessfull!!");
            navigate("/");
setloader(false)
            console.log("res", res);
          })
          .catch((e) => {
            setloader(false)
            console.log("e", e);
          });
      }

  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleProfile = async (e) => {
    let file = e.target.files[0];
    let fileURL = URL.createObjectURL(file);
    file.fileURL = fileURL;
    setImageo([file]);
    // const file1 = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log("base64", base64);
    setImage(base64);
  };

  console.log("images", images);

  const handleProfile2 = async (e) => {
    let file = e.target.files[0];
    let fileURL = URL.createObjectURL(file);
    file.fileURL = fileURL;
    setImageo2([file]);
    const base64 = await convertBase64(file);
    console.log("base64", base64);
    setImage2(base64);
  };

  const handleProfile3 = async (e) => {
    let file = e.target.files[0];
    let fileURL = URL.createObjectURL(file);
    file.fileURL = fileURL;
    setImageo3([file]);
    const base64 = await convertBase64(file);
    console.log("base64", base64);
    setImage3(base64);
  };

  //   console.log("images", images);
  //   console.log("images2", images2);
  //   console.log("images3", images3);

  const removeStep1 = () => {
    setImage([])
    setImageo([])
  }

   const removeStep2 = () => {
     setImage2([]);
     setImageo2([]);
  };
  
   const removeStep3 = () => {
     setImage3([]);
     setImageo3([]);
   };

  const steps = [
    {
      title: "",
      icon: (
        <div className="icon-circle">
          <i className="ti-user"></i>
        </div>
      ),
      content: (
        <div className="tab-pane active" id="about">
          <h3 className="info-text">Identity Proof</h3>

          <div className="profile_mn2">
            <div className="row">
              <div className="col-md-6 col-sm-offset-2 ">
                <div className="position-relative">
                  {!imageso[0]?.fileURL ? (
                    ""
                  ) : imageso[0]?.fileURL ? (
                    <img
                      id="ImgPreview"
                      src={imageso[0]?.fileURL}
                      className="preview1 mt-2"
                      height={180}
                      width={180}
                    />
                  ) : (
                    <img
                      id="ImgPreview"
                      src={`https://brtechgeeks.pythonanywhere.com/media/${data?.identity_proof_detail?.file}`}
                      className="preview1 mt-2"
                      height={180}
                      width={180}
                    />
                  )}
                  {images.length > 0 && imageso.length> 0 &&<div className="close1" onClick={removeStep1}>
                    x
                  </div>}
                </div>
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step1Error.image}
                </p>
                {step1 && (
                  <form id="myform">
                    <div className="yes">
                      <span className="btn_upload">
                        <input
                          type="file"
                          id="imag"
                          title=""
                          className="input-img"
                          accept="image/gif, image/jpeg, image/png"
                          onChange={handleProfile}
                        />
                        Upload
                      </span>

                      <input
                        type="button"
                        id="removeImage1"
                        value="x"
                        className="btn-rmv1"
                      />
                    </div>
                  </form>
                )}
              </div>

              <div className="col-md-6">
                <p>
                  Please upload your identity proof to ensure that the ownership
                  of your profile remains with only you.
                </p>
                <p>Acceptable documents</p>
                {/* <ul>
                  <li>Aadhar Card</li>
                  <li>Driving License</li>
                  <li>Voter Card</li>
                  <li>Any other Govt. ID</li>
                </ul> */}
                <div className="d-flex">
                  <div className="form-check inlin">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Aadhar Card"
                        onChange={handleStep1}
                      />
                      Aadhar Card
                      <i className="input-helper"></i>
                    </label>
                  </div>{" "}
                  <div className="form-check inlin" style={{ marginLeft: "-22px" }}>
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Driving License"
                        onChange={handleStep1}
                      />
                      Driving License
                      <i className="input-helper"></i>
                    </label>
                  </div>{" "}
                </div>
                <div className="d-flex">
                  {" "}
                  <div className="form-check inlin mr-5">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Voter Card"
                        onChange={handleStep1}
                      />
                      Voter Card
                      <i className="input-helper"></i>
                    </label>
                  </div>{" "}
                  <div className="form-check inlin">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Any other Govt. ID"
                        onChange={handleStep1}
                      />
                      Any other Govt. ID
                      <i className="input-helper"></i>
                    </label>
                  </div>
                </div>
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step1Error.proof}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "",
      icon: (
        <div className="icon-circle">
          <i className="ti-id-badge"></i>
        </div>
      ),
      content: (
        <div className="tab-pane active" id="information">
          <h5 className="info-text">Medical Registration Proof</h5>
          <div className="profile_mn2">
            <div className="row">
              <div className="col-md-6 col-sm-offset-2">
                <div className="position-relative">
                  {!imageso2[0]?.fileURL ? (
                    ""
                  ) : imageso2[0]?.fileURL ? (
                    <img
                      id="ImgPreview"
                      src={imageso2[0]?.fileURL}
                      className="preview1 mt-2"
                      height={180}
                      width={180}
                    />
                  ) : (
                    <img
                      id="ImgPreview"
                      src={
                        // images[0]?.fileURL
                        `https://brtechgeeks.pythonanywhere.com/media/` +
                        data?.registration_detail?.file
                      }
                      className="preview1 mt-2"
                      height={180}
                      width={180}
                    />
                  )}
                  {/* <div className="close1" onClick={removeStep2}> */}
                  {images2.length > 0 && imageso2.length > 0 && <div className="close1" onClick={removeStep2}>
                    x
                  </div>}
                </div>
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step2Error.image}
                </p>
                {step2 && (
                  <div className="yes">
                    <span className="btn_upload">
                      <input
                        type="file"
                        id="imag_new1"
                        title=""
                        className="input-img"
                        accept="image/gif, image/jpeg, image/png"
                        onChange={handleProfile2}
                      />
                      Upload
                    </span>
                    <img id="ImgPreview_n1" src="" className="preview1_nn" />
                    <input
                      type="button"
                      id="removeImage1_n2"
                      value="x"
                      className="btn-rmv1"
                    />
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <p>
                  Please upload your medical registration proof. Only licensed
                  and genuine doctors are listed on Practo.
                </p>
                <p>Acceptable documents</p>
                <div className="d-flex">
                  {" "}
                  <div className="form-check inlin">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Aadhar Card"
                        onChange={handleStep2}
                      />
                      Aadhar Card
                      <i className="input-helper"></i>
                    </label>
                  </div>{" "}
                  <div className="form-check inlin" style={{ marginLeft: "-11px" }}>
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Driving License"
                        onChange={handleStep2}
                      />
                      Driving License
                      <i className="input-helper"></i>
                    </label>
                  </div>{" "}
                </div>
                <div className="d-flex">
                  {" "}
                  <div className="form-check inlin">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Voter Card"
                        onChange={handleStep2}
                      />
                      Voter Card
                      <i className="input-helper"></i>
                    </label>
                  </div>{" "}
                  <div className="form-check inlin">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="membershipRadios"
                        id="membershipRadios1"
                        value="Any other Govt. ID"
                        onChange={handleStep2}
                      />
                      Any other Govt. ID
                      <i className="input-helper"></i>
                    </label>
                  </div>
                </div>
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step2Error.proof}
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "",
      icon: (
        <div className="icon-circle">
          <i className="ti-book"></i>
        </div>
      ),
      content: (
        <div className="tab-pane active" id="address">
          <h5 className="info-text">Establishment Proof</h5>
          <div className="profile_mn2">
            <div className="row">
              <div className="col-md-6">
                {/* <div className="prof_mn"> */}
                <h4>I am</h4>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios2"
                      value=""
                      // checked=""
                    />
                    the owner of establishment
                    <i className="input-helper"></i>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios1"
                      value=""
                    />
                    have rented at other establishment
                    <i className="input-helper"></i>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios1"
                      value=""
                    />
                    a consultant doctor
                    <i className="input-helper"></i>
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios1"
                      value=""
                    />
                    practicing at home
                    <i className="input-helper"></i>
                  </label>
                </div>
                {/* </div>
              <div className="col-md-6"> */}
                <h4>Accepted proofs (Any one)</h4>
                <div className="form-check inlin">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="membershipRadios"
                      id="membershipRadios1"
                      value="Clinic Registration Proof"
                      onChange={handleStep3}
                    />
                    Clinic Registration Proof <i className="input-helper"></i>
                  </label>
                </div>{" "}
                <br />
                <div className="form-check inlin">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="membershipRadios"
                      id="membershipRadios1"
                      value="Waste Disposal Proof"
                      onChange={handleStep3}
                    />
                    Waste Disposal Proof
                    <i className="input-helper"></i>
                  </label>
                </div>{" "}
                <br />
                <div className="form-check inlin">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="membershipRadios"
                      id="membershipRadios1"
                      value="Tax reciept"
                      onChange={handleStep3}
                    />
                    Tax reciept
                    <i className="input-helper"></i>
                  </label>
                </div>{" "}
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step3Error.proof}
                </p>
              </div>
              <div className="col-md-6">
                <div className="position-relative">
                  {!imageso3[0]?.fileURL ? (
                    ""
                  ) : imageso3[0]?.fileURL ? (
                    <img
                      id="ImgPreview"
                      src={imageso3[0]?.fileURL}
                      className="preview1 mt-2"
                      height={200}
                      width={200}
                    />
                  ) : (
                    <img
                      id="ImgPreview"
                      src={
                        // images[0]?.fileURL
                        `https://brtechgeeks.pythonanywhere.com/media/` +
                        data?.establishment_detail?.file
                      }
                      className="preview1 mt-2"
                      height={200}
                      width={200}
                    />
                  )}
                  {/* <div className="close1" onClick={removeStep3}>
                    x
                  </div> */}
                  {images3.length > 0 && imageso3.length > 0 && <div className="close1" onClick={removeStep3}>
                    x
                  </div>}

                </div>
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step3Error.image}
                </p>
                {step3 && (
                  <div className="yes">
                    <span className="btn_upload">
                      <input
                        type="file"
                        id="imag_new33"
                        title=""
                        className="input-img"
                        accept="image/gif, image/jpeg, image/png"
                        onChange={handleProfile3}
                      />
                      Upload
                    </span>
                    <img id="ImgPreview_n33" src="" className="preview1_nn33" />
                    <input
                      type="button"
                      id="removeImage1_n33"
                      value="x"
                      className="btn-rmv1"
                    />
                  </div>
                )}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

   const logout = () => {
     localStorage.clear();
     window.location.pathname = "/signin";
   };
  return (
    <LoadingOverlay active={loader} spinner>
      <div className="container-scroller">
        <ToastContainer />
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
                      <h6 className="preview-subject font-weight-normal">
                        Settings
                      </h6>
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
                <div className="img-ss rounded-circle bg-dark border mr-3"></div>
                Dark
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
            <ul
              className="nav nav-tabs border-top"
              id="setting-panel"
              role="tablist"
            >
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

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="col-sm-12">
                <div className="wizard-container">
                  <div
                    className="card wizard-card"
                    data-color="orange"
                    id="wizardProfile"
                  >
                    <form action="" method="" novalidate="novalidate">
                      <Steps current={current}>
                        {steps.map((item) => (
                          <Step
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                          />
                        ))}
                      </Steps>
                      <div className="steps-content tab-content">
                        {steps[current].content}
                      </div>
                      <div className="steps-action ml-4 mr-4 text-end mb-4">
                        {current > 0 && (
                          <Button
                            style={{ margin: "0 8px" }}
                            onClick={() => prev()}
                            className="status"
                          >
                            Previous
                          </Button>
                        )}
                        {current < steps.length - 1 && (
                          <Button
                            type="primary"
                            onClick={() => next()}
                            className="status"
                          >
                            Next
                          </Button>
                        )}
                        {current === steps.length - 1 && (
                          <Button
                            type="primary"
                            onClick={() => next()}
                            className="status"
                          >
                            Done
                          </Button>
                        )}
                      </div>
                    </form>
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
    </LoadingOverlay>
  );
};

export default Profile2;
