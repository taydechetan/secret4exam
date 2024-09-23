import React from "react";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  return (
    <div className="forget-password-container">
      <h2 className="forget-password-heading">Forget Password ?</h2>
      <form className="forget-password-form">
        <input
          type="email"
          className="forget-password-input"
          placeholder="Email Address"
        />
        <button className="forget-password-button">
          Send Password Reset Link
        </button>
      </form>
    </div>
  );
};



export default ForgetPassword;
