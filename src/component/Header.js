import React from "react";
import { Navbar, Container, Nav, Dropdown, Col, Button } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar expand="md" className="border-bottom">
        <Container>
          <Navbar.Brand href="/">
            <img src="../images/logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/business">Business</Nav.Link>
              <Nav.Link href="/subscription">Subscription</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/faq">Faq</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Button href="/signin" className="custome_btn text-white">Sign In</Button> */}
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center">
            <img src="../images/user_icon.svg" className="mx-2 "/>
              User
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
