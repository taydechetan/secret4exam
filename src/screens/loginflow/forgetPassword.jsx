import React, { useState } from "react";
import "./ForgetPassword.css";
import ApiEndPoints from "../../networkcall/Apiendpoint";
import { apiCallNew } from "../../networkcall/apiservises";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailerror, setemailerror] = useState("");

  const handelsubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setemailerror("");

    if (email.trim() === "") {
      setemailerror("Please enter your Email");
    } else {
      const payload = {
        email: email,
      };
      try {
        const res = await apiCallNew(
          "post",
          payload,
          ApiEndPoints.ForgetPassword
        );
        if (res.status === 200) {
          console.log(res);
          toast(res.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error("Login failed! Please check your credentials");
        }
      } catch (error) {
        toast.error("Login failed! Please check your credentials");
      }
    }
  };

  return (
    <div className="forget-password-container" onSubmit={handelsubmit}>
      <h2 className="forget-password-heading">Forget Password ?</h2>
      <form className="forget-password-form">
        <input
          type="email"
          className="forget-password-input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="forget-password-error text-danger">{emailerror}</p>
        <button className="forget-password-button">
          Send Password Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
