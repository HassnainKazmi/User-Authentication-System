/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRef } from "react";
import "./loginPage.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userLoginData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    // Send userLoginInData to back-end and compare the entered data with the stored data in DB
  };

  return (
    <section id="loginPage">
      <div className="container loginform__container">
        <div className="logo">
          <h1>Social Media</h1>
          <h3>Recent Logins</h3>
          <span>Click your picture or add an account</span>
        </div>
        <div className="form__content">
          <Card className="my__card">
            <form action="" onSubmit={submitHandler}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={emailInputRef}
                  required
                  autoComplete="off"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  ref={passwordInputRef}
                  required
                  autoComplete="off"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="btn btn-primary mb-3">Log in</button>
              <p>
                <Link style={{ textDecoration: "none" }}>
                  Forgotten Password?
                </Link>
              </p>
              <hr style={{ borderTop: "0.1px solid #000" }}></hr>
              <Link
                to="/User-Authentication-System/signup"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <button className="btn btn-success">Create Account</button>
              </Link>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
