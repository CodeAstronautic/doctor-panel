import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Form } from "react-bootstrap";

const OTP = () => {
  const [number, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [static1, setstatic] = useState("");
  const [resData, setresData] = useState({});
  const [next, setnext] = useState(false);

  const getOtp = async () => {
    await axios
      .get(`${process.env.REACT_APP_ENV}/verify/${number}`)
      .then((res) => {
        console.log("Dara", res);
        //  toast.success("OTP send Sucessfull!!");
        setstatic(res?.data?.OTP);
        setnext(true);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const sendNumber = async() => {
    if (number == "") {
      toast.error("Please enter mobile number");
    } else {
      // axios
      //   .post(`${process.env.REACT_APP_ENV}/api/signup-otp`, {
      //     mobile: number,
      //     occupation: "doctor",
      //   })
      //   .then(async (data) => {
      //     setresData(data?.data);

          await getOtp();
        //   toast.success("OTP send Sucessfull!!");
        // })
        // .catch((err) => {
        //   console.log(err.response.data);
        // });
    }
  };

  const handleOtp = () => {
    if (otp == "") {
      toast.error("Please enter OTP");
    } else {
      axios
        .post(`${process.env.REACT_APP_ENV}/verify/${number}`, {
          otp: otp,
          occupation: 'doctor'
        })
        .then((data) => {
          localStorage.setItem("user_data", JSON.stringify(data?.data));

          toast.success("OTP verify Sucessfull!!");
          window.location.pathname = "/";
        })
        .catch((err) => {
          toast.error("OTP Not Verify");
          console.log(err.response.data);
        });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="number_mn" style={{ height: "100vh" }}>
        <div
          className="container d-flex justify-content-center align-items-center h-100"
          style={{ height: "100%" }}
        >
          <div className="row w-50">
            <div className="col-md-12">
              <div className="container new-login-area">
                {!next && (
                  <div id="sign-in" className="login-setup-section bbb">
                    <h4 className="request-otp-header text-center mb-4 pb-3 font-weight-bold">
                      Please verify your Mobile Number
                    </h4>
                    <div className="form-group login-label">
                      <label
                        for="inputnumber"
                        className="text-primary font-weight-bold"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        className="form-control input-edit mb-4"
                        placeholder="Enter mobile number"
                        id="number"
                        value={number}
                        onChange={(e) => setnumber(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <button
                        type="button"
                        className="btn btn-sucess bbt mb-2 d-flex justify-content-center text-white mt-2 mb-4"
                        id="request-otp"
                        onClick={sendNumber}
                      >
                        Get OTP
                      </button>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      Already have an account ? <a href="/signin">login</a>{" "}
                    </Form.Group>
                  </div>
                )}
                {next && (
                  <div id="verify-otp" className="login-setup-section bbb mt-5">
                    <i
                      className="fa fa-chevron-left bbt2"
                      aria-hidden="true"
                      onClick={() => setnext(false)}
                    ></i>

                    <h4 className="request-otp-header text-center mb-4 pb-3 font-weight-bold">
                      Verify OTP
                    </h4>
                    <div className="form-group login-label">
                      <label
                        for="inputnumber"
                        className="text-primary font-weight-bold"
                      >
                        One Time Password - {static1}
                      </label>
                      <input
                        type="number"
                        className="form-control input-edit mb-4"
                        placeholder="Enter OTP"
                        id="number"
                        value={otp}
                        onChange={(e) => setotp(e.target.value)}
                      />
                      {/* <label className="pull-right resend-otp curser-pointer">
                        Resend otp
                      </label> */}
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <button
                        type="button"
                        className="btn btn-sucess bbt mb-2 d-flex justify-content-center text-white mt-2 mb-4"
                        onClick={handleOtp}
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
