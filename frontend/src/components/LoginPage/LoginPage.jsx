import React from "react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./loginPage.css";
import Card from "react-bootstrap/Card";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [isCorrectLogin, setCorrectLogin] = useState(true);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userLoginData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const response = await axios.post(
        "https://my-user-authentication-system.vercel.app/api/auth",
        userLoginData
      );

      const jwt = response.data.token;

      if (response.status === 200) {
        localStorage.setItem("jwt", jwt);
        navigate("/User-Authentication-System/user");
        console.log("User signed in successfully.");
      } else if (response.status === 400) {
        console.log("Invalid email or password.");
      }
    } catch (error) {
      setCorrectLogin(false);
      console.error(error.message);
    }
  };

  return (
    <section id="loginPage">
      <div className="container loginform__container">
        <div className="login__logo">
          <h1>Social Media</h1>
          <h3>Recent Logins</h3>
          <p>Click your picture or add an account</p>
        </div>
        <div className="loginform__content">
          <Card className="my__card">
            <form onSubmit={submitHandler}>
              <div className="form-floating mb-3 ">
                <input
                  type="email"
                  className="form-control floatingEm"
                  id="floatingInput"
                  placeholder="Email"
                  ref={emailInputRef}
                  required
                  autoComplete="off"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div
                className="form-floating mb-3"
                style={{ display: "flex", height: "100%" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control floatingPW"
                  id="floatingPassword"
                  placeholder="Password"
                  ref={passwordInputRef}
                  required
                  autoComplete="off"
                  style={{
                    borderRight: "none",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }}
                />
                <label htmlFor="floatingPassword">Password</label>
                <button
                  style={{
                    background: "none",
                    border: "1px solid #ced4da",
                    fontSize: "1.2rem",
                    borderLeft: "none",
                    borderRadius: "0.375rem",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    padding: "0.85rem 0.75rem 0.85rem 0.5rem",
                  }}
                  type="button"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <button className="btn btn-primary mb-3">Log in</button>
              {isCorrectLogin ? (
                ""
              ) : (
                <p
                  className="my-0"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    fontStyle: "italic",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  Incorrect email or password!
                </p>
              )}
              <p>
                <Link to="" style={{ textDecoration: "none" }}>
                  Forgotten Password?
                </Link>
              </p>
              <hr style={{ borderTop: "0.1px solid #000" }}></hr>
              <Link
                to="/user-authentication-system/signup"
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
