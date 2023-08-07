import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./signUpPage.css";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEmailTaken, setIsEmailTaken] = useState(false);
  const navigate = useNavigate();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dateInputRef = useRef();
  const femaleInputRef = useRef(null);
  const maleInputRef = useRef(null);
  const customInputRef = useRef(null);
  const TMfemaleInputRef = useRef(null);
  const TMmaleInputRef = useRef(null);
  const TMcustomInputRef = useRef(null);

  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (pattern.test(password)) {
      setIsValid(true);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const selectedGender = femaleInputRef.current.checked
      ? femaleInputRef.current.value
      : maleInputRef.current.checked
      ? maleInputRef.current.value
      : customInputRef.current.checked
      ? customInputRef.current.value
      : TMfemaleInputRef.current.checked
      ? TMfemaleInputRef.current.value
      : TMmaleInputRef.current.checked
      ? TMmaleInputRef.current.value
      : TMcustomInputRef.current.checked
      ? TMcustomInputRef.current.value
      : null;

    const userSignUpData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
      dob: enteredDate,
      gender: selectedGender,
    };

    try {
      const response = await axios.post(
        "https://my-user-authentication-system-uas.vercel.app/api/user",
        userSignUpData
      );
      if (response.status === 200) {
        console.log("User signed up successfully.");
        navigate("/User-Authentication-System/");
      } else if (response.status === 400) {
        console.log("User already registered.");
        setIsEmailTaken(true);
      }
    } catch (error) {
      console.error(error.message);
    }
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
                    className="form-control floatingInput"
                    id="firstNameLabel"
                    placeholder="First Name"
                    ref={firstNameInputRef}
                    required
                    autoComplete="off"
                    minLength="3"
                    maxLength="255"
                  />
                  <label htmlFor="firstNameLabel" className="labels">
                    First Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control floatingInput"
                    id="lastNameLabel"
                    placeholder="First Name"
                    ref={lastNameInputRef}
                    required
                    autoComplete="off"
                    minLength="3"
                    maxLength="255"
                  />
                  <label htmlFor="lastNameLabel" className="labels">
                    Last Name
                  </label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control floatingInput"
                  id="emailLabel"
                  placeholder="Email"
                  ref={emailInputRef}
                  required
                  autoComplete="off"
                />
                <label htmlFor="emailLabel" className="labels">
                  Email
                </label>
              </div>
              {isEmailTaken && (
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
                  Email taken
                </p>
              )}
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control floatingInput"
                  id="passwordLabel"
                  placeholder="New Password"
                  ref={passwordInputRef}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="off"
                />
                <label htmlFor="passwordLabel" className="labels">
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
                  ref={dateInputRef}
                  className="labels"
                  required
                />
              </div>
              <p className="my-1 gender__heading">Gender</p>
              <div className="gender">
                <div>
                  <label className="px-2 py-1" htmlFor="female">
                    Female
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    ref={femaleInputRef}
                    required
                  />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="male">
                    Male
                  </label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    ref={maleInputRef}
                    required
                  />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="custom">
                    Custom
                  </label>
                  <input
                    type="radio"
                    id="custom"
                    name="gender"
                    value="custom"
                    ref={customInputRef}
                    required
                  />
                </div>
              </div>
              <div className="genderTM">
                <div>
                  <label className="px-2 py-1" htmlFor="f">
                    F
                  </label>
                  <input
                    type="radio"
                    id="f"
                    name="gender"
                    value="female"
                    ref={TMfemaleInputRef}
                    required
                  />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="m">
                    M
                  </label>
                  <input
                    type="radio"
                    id="m"
                    name="gender"
                    value="male"
                    ref={TMmaleInputRef}
                    required
                  />
                </div>
                <div>
                  <label className="px-2 py-1" htmlFor="c">
                    C
                  </label>
                  <input
                    type="radio"
                    id="c"
                    name="gender"
                    value="custom"
                    ref={TMcustomInputRef}
                    required
                  />
                </div>
              </div>
              <p className="my-3 tos">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
              <button className="btn btn-success">Sign Up</button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
