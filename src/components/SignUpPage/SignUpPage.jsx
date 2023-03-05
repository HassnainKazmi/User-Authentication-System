/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./signUpPage.css";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("false");
  const [date, setDate] = useState("");

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dateInputRef = useRef();

  const handlePasswordChange = (event) => {
    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/;
    const input = event.target.value;

    setPassword(input);
    setIsValid(pattern.test(input));
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const userSignUpData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      date: enteredDate,
    };

    console.log(userSignUpData);

    // Send userSignupData to back-end and compare the entered data with the stored data in DB
  };

  return (
    <section id="signUpPage">
      <div className="container signupform__container">
        <div className="signup__logo">
          <h1>Sign Up</h1>
          <span>It's quick and easy.</span>
        </div>
        <div className="signupform__content">
          <Card className="my__card">
            <form action="" onSubmit={submitHandler}>
              <div className="user__fullname">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="First Name"
                    ref={firstNameInputRef}
                    required
                    autoComplete="off"
                  />
                  <label htmlFor="floatingInput" className="labels">
                    First Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="First Name"
                    ref={lastNameInputRef}
                    required
                    autoComplete="off"
                  />
                  <label htmlFor="floatingInput" className="labels">
                    Last Name
                  </label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Email"
                  ref={emailInputRef}
                  required
                  autoComplete="off"
                />
                <label htmlFor="floatingInput" className="labels">
                  Email
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="New Password"
                  onInput={handlePasswordChange}
                  ref={passwordInputRef}
                  required
                  autoComplete="off"
                />
                <label htmlFor="floatingInput" className="labels">
                  New Password
                </label>
              </div>
              {isValid ? (
                ""
              ) : (
                <p
                  className="my-2"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    fontStyle: "italic",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  Password must be at least 8 characters long and contain at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character.
                </p>
              )}
              <p className="my-1 dob__heading">Date of birth</p>
              <div className="dob">
                <input
                  type="date"
                  onChange={handleDateChange}
                  ref={dateInputRef}
                  className="labels"
                />
              </div>
              <p className="my-1 gender__heading">Gender</p>
              <div className="gender">
                <div>
                  <label className="px-2 py-1" htmlFor="female">
                    Female
                  </label>
                  <input type="radio" id="female" name="gender" />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="male">
                    Male
                  </label>
                  <input type="radio" id="male" name="gender" />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="custom">
                    Custom
                  </label>
                  <input type="radio" id="custom" name="gender" />
                </div>
              </div>
              <div className="genderTM">
                <div>
                  <label className="px-2 py-1" htmlFor="f">
                    F
                  </label>
                  <input type="radio" id="f" name="gender" />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="m">
                    M
                  </label>
                  <input type="radio" id="m" name="gender" />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="c">
                    C
                  </label>
                  <input type="radio" id="c" name="gender" />
                </div>
              </div>
              <p className="my-4 tos">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
              <Link to="/User-Authentication-System/">
                <button className="btn btn-success">Sign Up</button>
              </Link>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
