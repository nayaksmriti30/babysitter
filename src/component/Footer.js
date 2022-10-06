import React from 'react'
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap"; 

const Footer = () => {
  return (
    <>
        <div className="footer">
        <Container>
          <Row className="align-items-center">
            <Col md={3} className="text-center mb-md-0 mb-4 footer_logo">
              <a href='#' className='float-md-start'><img src="../images/logo.svg" /></a>
            </Col>
            <Col md={6} className="mb-md-0 mb-4">
              <ul className="d-flex text-center justify-content-sm-between justify-content-around opt_blog p-0 m-0">
                <li>
                  <a href="/business">Business</a>
                </li>
                <li>
                  <a href="/subscription">Subscription</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/faq">Faq</a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <ul className="social d-flex justify-content-center">
                <li>
                  <a href="#">
                    <img src="../images/twitter.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../images/linkdin.svg" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../images/facebook.svg" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright text-center">
        <Container>
          <span>
            © Copyright 2022 - Finding Trusted Care. All Rights Reserved.
          </span>
        </Container>
      </div>
     
     
     </>
  )
}

export default Footer