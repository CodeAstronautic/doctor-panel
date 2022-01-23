import { Form, Button } from "react-bootstrap";
// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// const SignIn = () => {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     var data = {
//       username: values.username,
//       password: values.password,
//     };
//     axios
//       .post(`${process.env.REACT_APP_ENV}/api/xlogin`, data)
//       .then((data) => {
//         console.log("data", data);
//         localStorage.setItem("user_data", JSON.stringify(data?.data));
//         console.log(data);
//         window.location.href = "/";
//       })
//       .catch((err) => {
//         console.log(err.response.data);
//       });
//   };
//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };
//   return (
//     <div
//       style={{ margin: "0 auto", width: "40%", padding: "36px 10px 10px 12px" }}
//     >
//       <h2 style={{ textAlign: "center" }}>SignIn</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username"
//             name="username"
//             value={values.username}
//             onChange={handleChange}
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={values.password}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           Already login ? <a href="/signup">Register</a>
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };
// export default SignIn;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

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
        // toast.error("You have entered an invalid mobile number");
        console.log(err.response.data);
      });
  };

  const sendNumber =async () => {
    if (number == "") {
      toast.error("Please enter mobile number");
    } else {
      // axios
      //   .post(`${process.env.REACT_APP_ENV}/api/login-otp`, {
      //     mobile: number,
      //   })
      //   .then(async (data) => {
      //     setresData(data?.data);
          await getOtp();
        //   toast.success("OTP send Sucessfull!!");
        // })
        // .catch((err) => {
        //   toast.error("You have entered an invalid mobile number");

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
          occupation: "doctor",
        })
        .then((data) => {
          toast.success("OTP verify Sucessfull!!");
          localStorage.setItem("user_data", JSON.stringify(data?.data));
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
          <div className="row w-65">
            <div className="col-md-12">
              <div className="container new-login-area">
                {!next && (
                  <div id="sign-in" className="login-setup-section bbb">
                    <h4 className="request-otp-header text-center mb-4 pb-3 font-weight-bold">
                      Verify your Mobile Number
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
                      Create new Account ? <a href="/otp">Register</a>{" "}
                    </Form.Group>
                  </div>
                )}
                {next && (
                  <div id="verify-otp" className="login-setup-section bbb mt-5">
                    <i className="fa fa-chevron-left bbt2" aria-hidden="true" onClick={()=> setnext(false)}></i>
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
