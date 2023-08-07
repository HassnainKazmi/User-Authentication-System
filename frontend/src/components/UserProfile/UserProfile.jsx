import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./userProfile.css";
import axios from "axios";

const UserProfile = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
  }, []);

  const handleClick = async () => {
    const jwt = localStorage.getItem("jwt");
    try {
      const response = await axios.post(
        "https://my-user-authentication-system-uas.vercel.app/api/auth/user/details",
        {
          jwt: jwt,
        }
      );
      setUserDetails(response.data.user);
      setShowDetails(!showDetails);

      if (response.status === 200) {
        console.log("Valid token.");
      } else if (response.status === 400) {
        console.log("Invalid token.");
      } else if (response.status === 401) {
        console.log("Access denied. No token provided.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem("jwt");
    navigate("/User-Authentication-System/");
    try {
      const response = await axios.post(
        "https://my-user-authentication-system-uas.vercel.app/api/auth/logout"
      );
      if (response.status === 200) {
        console.log("Token removed successfully.");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <section className="logOut">
        {token ? (
          <button className="button-17 logOut" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          ""
        )}
      </section>
      <section className="details__container">
        <div className="container">
          {token ? (
            <button className="button-17" onClick={handleClick}>
              {showDetails ? "Hide details" : "Show details"}
            </button>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
              }}
            >
              <p
                style={{
                  color: "black",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                Page Not Found!
              </p>
            </div>
          )}
        </div>
        {showDetails && userDetails && (
          <div>
            <p>
              Full Name: {userDetails.firstName} {userDetails.lastName}
            </p>
            <p>Date of birth: {userDetails.dob}</p>
            <p>Gender: {userDetails.gender} </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default UserProfile;
