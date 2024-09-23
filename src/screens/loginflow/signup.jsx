import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./SignUp.css";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");
  const [emailname, setEmailname] = useState("");
  const [password, setPassword] = useState("");
  const [conformpass, setConformpass] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [conformError, setConformError] = useState("");

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setUser(response);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleLogin = () => {
    login();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (username.trim() === "") {
      setUsernameError("Please enter your Name.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (emailname.trim() === "") {
      setEmailError("Please enter your Email.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPassError("Please enter your Password.");
      isValid = false;
    } else {
      setPassError("");
    }

    if (conformpass.trim() === "") {
      setConformError("Please confirm your Password.");
      isValid = false;
    } else if (conformpass !== password) {
      setConformError("Passwords do not match.");
      isValid = false;
    } else {
      setConformError("");
    }

    if (isValid) {
      console.log("Form submitted with", { username, emailname, password });
    }
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-title">Register</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label className="form-group">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter a name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="error">{usernameError}</p>}
        </label>

        <label className="form-group">
          <p>Email address</p>
          <input
            type="email"
            placeholder="eg: foo@bar.com"
            value={emailname}
            onChange={(e) => setEmailname(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </label>

        <label className="form-group">
          <p>Enter a password</p>
          <input
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passError && <p className="error">{passError}</p>}
        </label>

        <label className="form-group">
          <p>Confirm password</p>
          <input
            type="password"
            placeholder="Confirm password"
            value={conformpass}
            onChange={(e) => setConformpass(e.target.value)}
          />
          {conformError && <p className="error">{conformError}</p>}
        </label>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Create Account
          </button>
          <Link to="/Login" className="login-link">
            Already have an account?
          </Link>
        </div>

        <div className="divider">
          <hr />
          <span className="divider-text">Or Continue with</span>
          <hr />
        </div>

        <p
          className="gbutton text-center m-10px auto"
          onClick={handleLogin}
          style={{ margin: "10px auto" }}
        >
          <FcGoogle />
        </p>
      </form>
    </div>
  );
}

export default App;
