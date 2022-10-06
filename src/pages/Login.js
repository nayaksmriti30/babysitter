import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import Header from "../component/Header";
import Footer from "../component/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <section className="login-sec d-flex align-items-center">
        <Container>
          <Form className="login-form">
            <div
              className="login-heading
            "
            >
              <h2>SIGN IN </h2>
            </div>

            <div className="form-wrapper">
              <div className="login-head">
                <h2>SIGN IN</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
              </div>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="d-flex align-items-center justify-content-between py-4  ">
                <Form.Group
                  controlId="formBasicCheckbox"
                  className="remember-me"
                >
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>

                <div>
                  <a href="#" className="forget-pass">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <Button
                variant="primary"
                type="submit"
                className="custome_btn text-uppercase w-100"
              >
                Login
              </Button>

              <div className="redirect-login text-center">
                <span>
                  Don't have an Account? <a href="/updateprofile">Sign up</a>
                </span>
              </div>
            </div>
          </Form>
        </Container>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
