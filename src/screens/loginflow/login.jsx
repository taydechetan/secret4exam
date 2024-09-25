import React, { useEffect, useState } from "react";
import "./login.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { GoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { apiCallNew } from "../../networkcall/apiservises";
import ApiEndPoints from "../../networkcall/Apiendpoint";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleSuccess = (response) => {
    console.log("Login Success:", response);
    toast.success("Login successful!");
  };

  const handleError = (error) => {
    console.log("Login Error:", error);
    toast.error("Login failed!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    if (username.trim() === "") {
      setUsernameError("Please enter your Email.");
    }

    if (password.trim() === "") {
      setPasswordError("Please enter your Password.");
    }

    if (username.trim() && password.trim()) {
      const payload = {
        email: username,
        password: password,
      };

      try {
        const res = await apiCallNew("post", payload, ApiEndPoints.Login);
        if (res.status === 200) {
          console.log(res);
          toast(res.message);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("Login failed! Please check your credentials.");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

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

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setUser(response);
      handleSuccess(response);
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const handleLogin = () => {
    login();
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Form
            className="border p-4 shadow-sm rounded"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center mb-4">Login</h3>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={!!usernameError}
              />
              {usernameError && (
                <Form.Text className="text-danger">{usernameError}</Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!passwordError}
              />
              {passwordError && (
                <Form.Text className="text-danger">{passwordError}</Form.Text>
              )}
            </Form.Group>

            <Form.Group
              controlId="formRemember"
              className="mt-3 d-flex justify-content-between align-items-center"
            >
              <Form.Check type="checkbox" label=" Remember Me" />
              <a
                href="/ForgetPassword"
                style={{ color: "#44bd79", textDecoration: "none" }}
              >
                Forgot Password?
              </a>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="bloginn w-100 mt-4"
              style={{ backgroundColor: "#782a8c", borderColor: "#782a8c" }}
            >
              Login
            </Button>

            <div className="text-center mt-3">
              Not registered?{" "}
              <a
                href="/signup"
                style={{ color: "#44bd79", textDecoration: "none" }}
              >
                Create an account
              </a>
            </div>

            <div className="divider mt-3">
              <hr />
              <span className="ms-2 mx-2">Or Continue with</span>
              <hr />
            </div>

            <div className="d-flex justify-content-center mt-2">
              <p
                className="gbutton text-center"
                onClick={handleLogin}
                style={{ cursor: "pointer", margin: "10px auto" }}
              >
                <FcGoogle size={30} />
              </p>
            </div>
          </Form>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
