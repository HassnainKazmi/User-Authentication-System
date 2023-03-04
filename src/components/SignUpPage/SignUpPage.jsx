/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./signUpPage.css";

const SignUpPage = () => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dobDayInputRef = useRef();
  const dobMonthInputRef = useRef();
  const dobYearInputRef = useRef();
  const genderInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userSignUpData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };

    // Send userSignupData to back-end and compare the entered data with the stored data in DB
  };

  return (
    <section id="signUpPage">
      <div className="container signupform__container">
        <div>
          <h1>Sign Up</h1>
          <p style={{ margin: "0rem 2rem 2rem 2rem" }}>It's quick and easy.</p>
        </div>
        <div className="form__content">
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
                  <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Last Name"
                    ref={firstNameInputRef}
                    required
                    autoComplete="off"
                  />
                  <label htmlFor="floatingInput">Last Name</label>
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
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="New Password"
                  ref={passwordInputRef}
                  required
                  autoComplete="off"
                />
                <label htmlFor="floatingInput">New Password</label>
              </div>
              <div
                className="mt-2"
                styles={{
                  textAlign: "left",
                }}
              >
                <span>Date of birth</span>
              </div>

              <div className="dob">
                <select class="form-select" aria-label="Default select example">
                  <option selected>--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                  <option selected>--</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                  <option selected>--</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                </select>
              </div>
              <div className="mt-2">
                <span>Gender</span>
              </div>
              <div className="gender">
                <div>
                  <label className="px-3 py-1">Female</label>
                  <input type="radio" />
                </div>
                <div>
                  <label className="px-2 py-1">Male</label>
                  <input type="radio" />
                </div>
                <div>
                  <label className="px-2 py-1">Custom</label>
                  <input type="radio" />
                </div>
              </div>
              <p className="my-4 tos">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
              <Link
                to="/User-Authentication-System/"
                style={{ color: "#fff", textDecoration: "none" }}
              >
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
