import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Business() {
  return (
    <div className="business">
      <Header />
      <div>
        <div className="featured_img position-relative">
            <img src="../images/Business_bg.jpg" className="w-100" />
            <div className="page_heading">
              <Container>
                <h1>Business</h1>
              </Container>
            </div> 
        </div>
        <div className="contrary">
          <Container>
            <div className="section_head text-center">
              <h2>
                Contrary to popular belief <br />
                Lorem Ipsum
                <span className="title_border">
                  <img src="../images/title_border.svg" />
                </span>
              </h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,{" "}
              </p>

              <p>
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>

              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1 914 translation by H. Rackham.
              </p>
            </div>
          </Container>
        </div>
        <div className="section_head business_main">
          <Container>
            <h2 className="text-center">
              Finding Trusted Care <br />
              for Business
              <span className="title_border">
                <img src="../images/title_border.svg" />
              </span>
            </h2>
            <div className="business_form">
              <Row className="gx-3">
                <Col sm={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                </Col>

                <Col sm={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail1"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter address" />
                  </Form.Group>
                </Col>

                <Col sm={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail2"
                  >
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Mobile Number" />
                  </Form.Group>
                </Col>

                <Col sm={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail3"
                  >
                    <Form.Label>Who Referred You</Form.Label>
                    <Form.Control type="text" placeholder="Referrence" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail4"
                  >
                    <Form.Label>Name of Business</Form.Label>
                    <Form.Control type="text" placeholder="Lorem lipsum" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail5"
                  >
                    <Form.Label>Number of Employees</Form.Label>
                    <Form.Control type="number" placeholder="786" />
                  </Form.Group>
                </Col>
                <div className="btn_lg">
                  <Button
                    variant="primary"
                    type="submit"
                    className="custome_btn"
                  >
                    Submit
                  </Button>
                </div>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Business;
