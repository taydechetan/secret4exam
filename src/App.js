import React from "react";
import "./App.css";
import Publicrouter from "./router/publicrouter";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <ToastContainer />
      <Publicrouter />
    </div>

  );
}


