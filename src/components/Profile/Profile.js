import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Steps, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";
import logo from "../../images/logo.png";



const PatientList = () => {
  const [step1Data, setstep1Data] = useState({ membershipRadios : "male"});
  const [step1Error, setstep1Error] = useState({});
  const [step2Data, setstep2Data] = useState({});
  const [step2Error, setstep2Error] = useState({});
  const [step3Data, setstep3Data] = useState({});
  const [step3Error, setstep3Error] = useState({});
  const [step4Data, setstep4Data] = useState({});
  const [step4Error, setstep4Error] = useState({});
  const [step5Data, setstep5Data] = useState({});
  const [step5Error, setstep5Error] = useState({});
  const [current, setCurrent] = React.useState(0);
  const [userData, setuserData] = useState({});
  const [spe, setspe] = useState([]);
  const [loader, setloader] = useState(false)
  const [api, setapi] = useState({})

  console.log("current", current);
  const navigate = useNavigate();
  const getProfile =async () => {
    let data = JSON.parse(localStorage.getItem("user_data"));
  await  axios
      .post(
        `http://brtechgeeks.pythonanywhere.com/api/profile-details/${data.user_id}`
        // `http://brtechgeeks.pythonanywhere.com/api/profile-details/20`
      )
      .then((res) => {
        console.log("res", res);
        setuserData(res?.data?.data?.profile_detail);
        if (res?.data?.data?.profile_detail?.section_flag[0] == false) {
          if (res?.data?.data?.profile_detail?.flag_count <= 4 && current !== 3)
          setCurrent(res?.data?.data?.profile_detail?.flag_count);
          
        }
        let step1 = {
          name: res?.data?.data?.profile_detail?.name,
          mobile: res?.data?.data?.profile_detail?.mobile,
          membershipRadios: res?.data?.data?.profile_detail?.sex,
          dob: res?.data?.data?.profile_detail?.dob,
          city: res?.data?.data?.profile_detail?.address,
          specialization: res?.data?.data?.profile_detail?.specialties,
        };
        setstep1Data(step1);
        let step2 = {
          registrationCouncil: res?.data?.data?.council_detail?.description,
          registrationNumber: res?.data?.data?.council_detail?.registration_no,
          registrationYear: res?.data?.data?.council_detail?.registration_year,
        };
        setstep2Data(step2);
      });
  };
  useEffect(() => {
     getProfile();
    axios
      .get("http://brtechgeeks.pythonanywhere.com/api/get-specialty")
      .then((res) => {
        console.log("Reeee", res);
        setspe(res?.data);
      });
  }, []);

  const { Step } = Steps;
  const next1 = () => {
    // setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  }; 

  const handleStep1 = (e) => {
    const { value, name } = e.target;
    setstep1Data({
      ...step1Data,
      [name]: value,
    });
  };

  const step1Validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!step1Data.name) {
      formIsValid = false;
      errors["name"] = "Name is requried";
    }

    if (!step1Data.city) {
      formIsValid = false;
      errors["city"] = "City is Requried";
    }
    if (!step1Data.specialization) {
      formIsValid = false;
      errors["specialization"] = "Specialization is Requried";
    }
    if (!step1Data.membershipRadios) {
      formIsValid = false;
      errors["gender"] = "Gender is Requried";
    }
    setstep1Error(errors);

    return formIsValid;
  };

  const handleStep2 = (e) => {
    const { value, name } = e.target;
    setstep2Data({
      ...step2Data,
      [name]: value,
    });
  };

  const step2Validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!step2Data.registrationNumber) {
      formIsValid = false;
      errors["registrationNumber"] = "Registration Number is requried";
    }

    if (!step2Data.registrationCouncil) {
      formIsValid = false;
      errors["registrationCouncil"] = "Registration Council is Requried";
    }
    if (!step2Data.registrationYear) {
      formIsValid = false;
      errors["registrationYear"] = "Registration Year is Requried";
    }

    setstep2Error(errors);

    return formIsValid;
  };

  const handleStep3 = (e) => {
    const { value, name } = e.target;
    setstep3Data({
      ...step3Data,
      [name]: value,
    });
  };

  const step3Validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!step3Data.degree) {
      formIsValid = false;
      errors["degree"] = "Degree is requried";
    }

    if (!step3Data.institute) {
      formIsValid = false;
      errors["institute"] = "Institute is Requried";
    }
    if (!step3Data.yearofcompletion) {
      formIsValid = false;
      errors["yearofcompletion"] = "Year of completion is Requried";
    }
    if (!step3Data.yearofexperience) {
      formIsValid = false;
      errors["yearofexperience"] = "Year of experience is Requried";
    }

    setstep3Error(errors);

    return formIsValid;
  };

  const handleStep4 = (e) => {
    const { value, name } = e.target;
    setstep4Data({
      ...step4Data,
      [name]: value,
    });
  };

  const step4Validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!step4Data.practice) {
      formIsValid = false;
      errors["practice"] = "Select any one";
    }

    setstep4Error(errors);

    return formIsValid;
  };

  const handleStep5 = (e) => {
    const { value, name } = e.target;
    setstep5Data({
      ...step5Data,
      [name]: value,
    });
  };

  const step5Validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!step5Data.name) {
      formIsValid = false;
      errors["name"] = "Name is requried";
    }

    if (!step5Data.city) {
      formIsValid = false;
      errors["city"] = "City is Requried";
    }
    if (!step5Data.locality) {
      formIsValid = false;
      errors["locality"] = "Locality is Requried";
    }

    setstep5Error(errors);

    return formIsValid;
  };

  console.log("step4Error", step5Error);

  const verify = async () => {
    let data = JSON.parse(localStorage.getItem("user_data"));
    await axios
      .post(`http://brtechgeeks.pythonanywhere.com/api/profile-flag-update`, {
        user_id: data?.user_id,
        section_flag: 1,
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

  console.log("step1Data", step1Data);
  const next = () => {
    console.log("99");
    if (current == 0 && step1Validation()) {
      setloader(true)
      let data = JSON.parse(localStorage.getItem("user_data"));

      console.log("pp");
      axios
        .post(`${process.env.REACT_APP_ENV}/api/profile-update`, {
          user_id: data?.user_id,
          name: step1Data?.name,
          mobile: "123",
          sex: step1Data?.membershipRadios,
          // dob: null,
          address: step1Data?.city,
          specialties: step1Data?.specialization,
          // language:
        })
        .then((res) => {
          setCurrent(current + 1);
          getProfile();
          setloader(false);

          console.log("res", res);
        })
        .catch((e) => {
          setloader(false);
          console.log("e", e);
        });
    }
    if (current == 1 && step2Validation()) {
      setloader(true)
      let data = JSON.parse(localStorage.getItem("user_data"));
      axios
        .post(`${process.env.REACT_APP_ENV}/api/profile-council-update`, {
          user_id: data?.user_id,
          name: step2Data?.registrationCouncil,
          registration_no: step2Data?.registrationNumber,
          registration_year: step2Data?.registrationYear,
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
      axios
        .post(`${process.env.REACT_APP_ENV}/api/profile-education-update`, {
          user_id: data?.user_id,
          name: step3Data?.degree,
          univercity: step3Data?.institute,
          college: step3Data?.institute,
          passing_year: step3Data?.yearofcompletion,
          description: "",
        })
        .then((res) => {
          console.log("step 3 next click");
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
    if (current === 3 && step4Validation()) {
      setloader(true)
      console.log("step 4 next click");
      setCurrent(current + 1);
      getProfile();
      setloader(false)
    }
    if (current == 4 && step5Validation()) {
      setloader(true)
      let data = JSON.parse(localStorage.getItem("user_data"));
      axios
        .post(`${process.env.REACT_APP_ENV}/api/profile-clinic-update`, {
          user_id: data?.user_id,
          name: step5Data?.establishmentName,
          city: step5Data?.city,
          address: step5Data?.locality,
        })
        .then(async (res) => {
          await verify();
          console.log("step 5 next click");
          message.success("Processing complete!");
          localStorage.setItem("step1", true);
          getProfile();
          toast.success("KYC Step1 Completed Sucessfull!!");
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
  console.log("step4Data", step5Data);

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
          <h3 className="info-text">Profile</h3>
          <div className="profile_mn2">
            <h4>
              Hello Dr. {userData?.name}! Lets build your dedicated profile.
            </h4>
            <span>Section A:Profile details</span>
            <div className="row">
              <div className="col-md-6">
                {/* <div className="profile_frm"> */}

                {/* <div className="input_mn"> */}
                <span className="input_nm">Name</span>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text fomm2">Dr./Mr./Ms.</div>
                  </div>
                  <input
                    type="text"
                    className="form-control fomm1"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Ayush"
                    value={step1Data.name}
                    name="name"
                    onChange={handleStep1}
                  />
                </div>
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step1Error.name}
                </p>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleFormControlSelect2">Specialization</label>
                  <select
                    className="form-control fomm1"
                    id="exampleFormControlSelect2"
                    value={step1Data.specialization}
                    name="specialization"
                    onChange={handleStep1}
                  >
                    {console.log(spe?.treatmentdata,"spespe")}
                    <option>Select Specialization</option>
                    {spe?.treatmentdata?.length && spe?.treatmentdata?.map((v) => {
                      return <option value={v.name}>{v.name}</option>;
                    })}
                  </select>
                  <p
                    className="errorClass"
                    style={{
                      textAlign: "start",
                      fontSize: "13px",
                      color: "red",
                    }}
                  >
                    {step1Error.specialization}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group m-0 p-0">
                  <label className="input_nm m-0 p-0">Gender</label>
                  <div className="d-flex">
                    <div className="form-check inlin">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="membershipRadios"
                          id="membershipRadios1"
                          value="male"
                          onChange={handleStep1}
                          checked={
                            step1Data.membershipRadios === "male" && true
                          }
                        />
                        Male
                        <i className="input-helper"></i>
                      </label>
                    </div>
                    <div className="form-check inlin">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="membershipRadios"
                          id="membershipRadios1"
                          value="female"
                          onChange={handleStep1}
                          checked={
                            step1Data.membershipRadios === "female" && true
                          }
                        />
                        Female
                        <i className="input-helper"></i>
                      </label>
                    </div>

                    <div className="form-check inlin">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="membershipRadios"
                          id="membershipRadios1"
                          value="other"
                          onChange={handleStep1}
                          checked={
                            step1Data.membershipRadios === "other" && true
                          }
                        />
                        Other
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
                    {step1Error.gender}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleFormControlSelect2">City</label>
                  <select
                    className="form-control fomm1 valid"
                    id="exampleFormControlSelect2"
                    aria-invalid="false"
                    value={step1Data.city}
                    name="city"
                    onChange={handleStep1}
                  >
                    <option>Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="4">Surat</option>
                    <option value="5">Mumbai</option>
                  </select>
                  <p
                    className="errorClass"
                    style={{
                      textAlign: "start",
                      fontSize: "13px",
                      color: "red",
                    }}
                  >
                    {step1Error.city}
                  </p>
                </div>
                {/* </div> */}
                {/* </div> */}
              </div>
              <div className="col-md-6"></div>
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
          <h5 className="info-text">Medical Registration</h5>
          <div className="profile_mn2">
            <div className="row">
              <div className="col-md-6">
                <div className="profile_frm">
                  <div className="input_mn">
                    <span className="input_nm">Registration Number</span>
                    <div className="form-group ">
                      <input
                        type="text"
                        className="form-control fomm1"
                        placeholder="CC12345678"
                        value={step2Data.registrationNumber}
                        name="registrationNumber"
                        onChange={handleStep2}
                      />
                    </div>
                    <p
                      className="errorClass"
                      style={{
                        textAlign: "start",
                        fontSize: "13px",
                        color: "red",
                      }}
                    >
                      {step2Error.registrationNumber}
                    </p>
                    <div className="form-group">
                      <label for="exampleFormControlSelect2">
                        Registration Council
                      </label>
                      <select
                        className="form-control fomm1"
                        id="exampleFormControlSelect2"
                        value={step2Data.registrationCouncil}
                        name="registrationCouncil"
                        onChange={handleStep2}
                      >
                        <option>Select council</option>
                        <option>Delhi Medical Council</option>
                        <option>Noida Medical Council</option>
                        <option>Surat Medical Council</option>
                        <option>Goa Medical Council</option>
                        <option>Panjab Medical Council</option>
                      </select>
                      <p
                        className="errorClass"
                        style={{
                          textAlign: "start",
                          fontSize: "13px",
                          color: "red",
                        }}
                      >
                        {step2Error.registrationCouncil}
                      </p>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect2">
                        Registration Year
                      </label>
                      <select
                        className="form-control fomm1 valid"
                        id="exampleFormControlSelect2"
                        aria-invalid="false"
                        value={step2Data.registrationYear}
                        name="registrationYear"
                        onChange={handleStep2}
                      >
                        <option>Select Year</option>
                        <option>2021</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                      </select>
                      <p
                        className="errorClass"
                        style={{
                          textAlign: "start",
                          fontSize: "13px",
                          color: "red",
                        }}
                      >
                        {step2Error.registrationYear}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
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
          <h5 className="info-text">Education Qualification</h5>
          <div className="profile_mn2">
            <div className="row">
              <div className="col-md-6">
                {/* <div className="profile_frm"> */}
                {/* <div className="input_mn"> */}
                <div className="form-group">
                  <label for="exampleFormControlSelect2">Degree</label>
                  <select
                    className="form-control fomm1"
                    id="exampleFormControlSelect2"
                    value={step3Data.degree}
                    name="degree"
                    onChange={handleStep3}
                  >
                    <option>Select Degree</option>
                    <option>MBS(H)</option>
                    <option>MBBS</option>
                    <option>MD</option>
                  </select>
                  <p
                    className="errorClass"
                    style={{
                      textAlign: "start",
                      fontSize: "13px",
                      color: "red",
                    }}
                  >
                    {step3Error.degree}
                  </p>
                </div>
              </div>{" "}
              <div className="col-md-6">
                <div className="form-group">
                  <label for="exampleFormControlSelect2">
                    College/Institute
                  </label>
                  <select
                    className="form-control fomm1 valid"
                    id="exampleFormControlSelect2"
                    aria-invalid="false"
                    value={step3Data.institute}
                    name="institute"
                    onChange={handleStep3}
                  >
                    <option>Select Institute</option>
                    <option>ISBM DELHI</option>
                    <option>IIT Bombay</option>
                    <option>SVNIT</option>
                    <option>Uka Tarsadiya Univercity</option>
                    <option>VNSGU</option>
                  </select>
                  <p
                    className="errorClass"
                    style={{
                      textAlign: "start",
                      fontSize: "13px",
                      color: "red",
                    }}
                  >
                    {step3Error.institute}
                  </p>
                </div>
              </div>{" "}
              <div className="col-md-6">
                <br />
                <br />
                <div className="form-group">
                  <label for="exampleFormControlSelect2">
                    Year of completion
                  </label>
                  <select
                    className="form-control fomm1 valid"
                    id="exampleFormControlSelect2"
                    aria-invalid="false"
                    value={step3Data.yearofcompletion}
                    name="yearofcompletion"
                    onChange={handleStep3}
                  >
                    <option>Select Year</option>
                    <option>2020</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                  </select>
                  <p
                    className="errorClass"
                    style={{
                      textAlign: "start",
                      fontSize: "13px",
                      color: "red",
                    }}
                  >
                    {step3Error.yearofcompletion}
                  </p>
                </div>
              </div>{" "}
              <div className="col-md-6">
                <br />
                <br />

                <span className="input_nm">Year of experience</span>
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control fomm1"
                    placeholder="2"
                    value={step3Data.yearofexperience}
                    name="yearofexperience"
                    onChange={handleStep3}
                  />
                </div>
                <p
                  className="errorClass"
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  {step3Error.yearofexperience}
                </p>
                {/* </div> */}
                {/* </div> */}
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "",
      icon: (
        <div className="icon-circle">
          <i className="fa fa-plug ti-book"></i>
        </div>
      ),
      content: (
        <div className="tab-pane active" id="address2">
          <h5 className="info-text">Connect a practice</h5>
          <div className="profile_mn2">
            <div className="row">
              <div className="col-md-6">
                <div className="profile_frm">
                  <span className="spn_tx2">
                    Please select any one of the following:
                  </span>
                  <div className="ck_bdr">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="practice"
                          id="practice1"
                          value="I own a establishment"
                          onChange={handleStep4}
                        />
                        I own a establishment
                        <i className="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div className="ck_bdr">
                    <div className="form-check ">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="practice"
                          id="practice1"
                          value="I visit a establishment"
                          onChange={handleStep4}
                        />
                        I visit a establishment
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
                    {step4Error.practice}
                  </p>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "",
      icon: (
        <div className="icon-circle">
          <i className="fa fa-hospital-o ti-book"></i>
        </div>
      ),
      content: (
        <div className="tab-pane active" id="address3">
          <h5 className="info-text">Establishment basic details</h5>
          <div className="profile_mn2">
            <div className="row">
              <div className="col-md-6">
                <div className="profile_frm">
                  <div className="input_mn">
                    <div className="form-group">
                      <label for="exampleFormControlSelect2">
                        Establishment name
                      </label>
                      <select
                        className="form-control fomm1 valid"
                        id="exampleFormControlSelect2"
                        aria-invalid="false"
                        value={step5Data.name}
                        name="name"
                        onChange={handleStep5}
                      >
                        <option>Select Name</option>
                        <option>MD Hospital</option>
                        <option>New Hospital</option>
                        <option>Kiran Hospital</option>
                        <option>Bhalani Hospital</option>
                        <option>Gov. Hospital</option>
                      </select>
                      <p
                        className="errorClass"
                        style={{
                          textAlign: "start",
                          fontSize: "13px",
                          color: "red",
                        }}
                      >
                        {step5Error.name}
                      </p>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect2">City</label>
                      <select
                        className="form-control fomm1 valid"
                        id="exampleFormControlSelect2"
                        aria-invalid="false"
                        value={step5Data.city}
                        name="city"
                        onChange={handleStep5}
                      >
                        <option>Select City</option>
                        <option>Delhi</option>
                        <option>Noida</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p
                        className="errorClass"
                        style={{
                          textAlign: "start",
                          fontSize: "13px",
                          color: "red",
                        }}
                      >
                        {step5Error.city}
                      </p>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect2">Locality</label>
                      <select
                        className="form-control fomm1 valid"
                        id="exampleFormControlSelect2"
                        aria-invalid="false"
                        value={step5Data.locality}
                        name="locality"
                        onChange={handleStep5}
                      >
                        <option>Select Locality</option>
                        <option>Noida</option>
                        <option>Delhi</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <p
                        className="errorClass"
                        style={{
                          textAlign: "start",
                          fontSize: "13px",
                          color: "red",
                        }}
                      >
                        {step5Error.locality}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
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
                        {steps[current]?.content}
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

export default PatientList;
