import React from "react";
import { useRef } from "react";
import "./loginPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };
  };

  return (
    <section id="loginPage">
      <div className="container form__container">
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
              <div className="form-floating">
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
              <Button className="mt-3">Log in</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
