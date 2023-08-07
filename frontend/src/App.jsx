import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/User-Authentication-System/" element={<LoginPage />} />
        <Route
          path="/User-Authentication-System/signup"
          element={<SignUpPage />}
        />
        <Route
          path="/User-Authentication-System/user"
          element={<UserProfile />}
        />
      </Routes>
    </div>
  );
};

export default App;
