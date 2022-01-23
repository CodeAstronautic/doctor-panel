import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
const Signup = () => {
  const [error, setError] = useState("");
  const [hidden, sethidden] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    username: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    var data = {
      email: values.email,
      password: values.password,
      username: values.username,
    };
    if (hidden) {
      data["occupation"] = "doctor";
    }
    console.log("data", data);
    axios
      .post(`${process.env.REACT_APP_ENV}/api/register`, data)
      .then((data) => {
        localStorage.setItem("user_data", JSON.stringify(data?.data?.user));

        window.location.href = "/otp";
        console.log(data);
      })
      .catch((err) => {
        setError(err.response?.data);
      });
  };
  // console.log(error, "errorerror");
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div
      style={{ margin: "0 auto", width: "40%", padding: "36px 10px 10px 12px" }}
    >
      <h2 style={{ textAlign: "center" }}>
        {hidden ? "Sign up as Doctor" : "Sign up as Patient"}
      </h2>
      {error?.username &&
        error?.username.map((d) => {
          return <p style={{ color: "red" }}>{d}</p>;
        })}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="formBasicCheckbox"
        >
          <div>
            Already regsterd ? <a href="/signin">Login</a>
          </div>
          <div>
            <p
              className="text-primary cursor-pointer"
              onClick={() => sethidden(!hidden)}
            >
              {hidden ? "Sign up as Patient" : "Sign up as Doctor"}{" "}
            </p>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Signup;
