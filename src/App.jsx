import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/User-Authentication-System/" element={<LoginPage />} />
        <Route
          path="/User-Authentication-System/signup"
          element={<SignUpPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
