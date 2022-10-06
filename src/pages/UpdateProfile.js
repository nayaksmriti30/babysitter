import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import Header from "../component/Header";
import Footer from "../component/Footer";

const UpdateProfile = () => {
  return (
    <div>
      <Header />
      <section className="update-profile-sec py-5 radio-btn">
        <Container>
          <div className="login-sec">
            <Form className="">
              <div className="profile-upload">
                <Form.Group
                  className="mb-md-4 mb-2"
                  controlId="formBasicEmail1"
                >
                  <figure>
                    <img
                      src="../images/profile-img.jpg"
                      alt=""
                      className="user-img"
                    />
                    <Form.Control type="file"></Form.Control>
                    <span>
                      <img src="../images/camera-icon.svg" alt="" />{" "}
                    </span>
                  </figure>
                </Form.Group>
              </div>

              <Row className="gx-3">
                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail2"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail3"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter address" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail4"
                  >
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Mobile Number" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2 custom-radio"
                    controlId="formBasicEmail5"
                  >
                    <Form.Label>Gender</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-md-4 mb-2">
                        <Form.Check
                          inline
                          label="Male"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="Both"
                          name="group1"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail6"
                  >
                    <Form.Label>Preferred Contact Type</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail7"
                  >
                    <Form.Label>RBT Credentials Date</Form.Label>
                    <Form.Control type="date" placeholder="Mobile Number" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail8"
                  >
                    <Form.Label>Education Level</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control"
                    >
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2 custom-radio"
                    controlId="formBasicEmail9"
                  >
                    <Form.Label>Military Experience</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-md-4 mb-2">
                        <Form.Check
                          inline
                          label="Yes"
                          name="m1"
                          type={type}
                          id={`inline-${type}-4`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="m1"
                          type={type}
                          id={`inline-${type}-5`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail10"
                  >
                    <Form.Label>Minimum Hourly Rate</Form.Label>
                    <Form.Control type="number" placeholder="$10" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2 custom-radio"
                    controlId="formBasicEmail11"
                  >
                    <Form.Label>Personal Transportation</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-md-4 mb-2">
                        <Form.Check
                          inline
                          label="Yes"
                          name="m2"
                          type={type}
                          id={`inline-${type}-6`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="m2"
                          type={type}
                          id={`inline-${type}-7`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2 custom-radio"
                    controlId="formBasicEmail12"
                  >
                    <Form.Label>CPR Certified</Form.Label>

                    <div className="d-flex align-items-center crp-certified-sec">
                      <div>
                        {["radio"].map((type) => (
                          <div key={`inline-${type}`}>
                            <Form.Check
                              inline
                              label="Yes"
                              name="m3"
                              type={type}
                              id={`inline-${type}-8`}
                            />
                            <Form.Check
                              inline
                              label="No"
                              name="m3"
                              type={type}
                              id={`inline-${type}-9`}
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <Form.Control type="date"></Form.Control>
                      </div>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail13"
                  >
                    <Form.Label>Other Certification</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Other Certification"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2 custom-radio"
                    controlId="formBasicEmail14"
                  >
                    <Form.Label>Handle How Many Child</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-md-4 mb-2">
                        <Form.Check
                          inline
                          label="Single"
                          name="m5"
                          type={type}
                          id={`inline-${type}-10`}
                        />
                        <Form.Check
                          inline
                          label="Multiple"
                          name="m5"
                          type={type}
                          id={`inline-${type}-11`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2 custom-radio"
                    controlId="formBasicEmail15"
                  >
                    <Form.Label>
                      Are you willing to care for additional dependents, and
                      addition to special needs loved?
                    </Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-md-4 mb-2">
                        <Form.Check
                          inline
                          label="Yes"
                          name="m2"
                          type={type}
                          id={`inline-${type}-12`}
                        />
                        <Form.Check
                          inline
                          label="No"
                          name="m2"
                          type={type}
                          id={`inline-${type}-13`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail16"
                  >
                    <Form.Label>Select</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control"
                    >
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail17"
                  >
                    <Form.Label>Will to provide service to age</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control"
                    >
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail18"
                  >
                    <Form.Label>Task willing to perform</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control"
                    >
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Graduation">Graduation</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail19"
                  >
                    <Form.Label>Write your comment...</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      placeholder="Write your comment..."
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-md-4 mb-2">
                    <Form.Label>Upload Background Check</Form.Label>

                    <div className="position-relative doc-list ">
                      <Form.Control type="file" />
                      <span class="text-pending">Upload</span>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-md-4 mb-2">
                    <Form.Label>Upload Driver License</Form.Label>
                    <div className="position-relative doc-list ">
                      <Form.Control type="file" />
                      <span class="text-pending">Upload</span>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail22"
                  >
                    <Form.Label>Location</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        placeholder="Write your comment..."
                        value="711-2880 Nulla St, Town Hall 96522."
                      />
                      <Button className="position-absolute end-0 top-0  border-0 search-icon bottom-0 me-2">
                        <img src="../images/search-icon.svg" alt="" />
                      </Button>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-md-4 mb-2"
                    controlId="formBasicEmail23"
                  >
                    <Form.Label>Radius to provide service (kms)</Form.Label>
                    <span className="ranger">10-40</span>
                    <Form.Range />
                  </Form.Group>
                </Col>

                <div className="btn_lg">
                  <Button type="submit" className="custome_btn">
                    Update Profile
                  </Button>
                </div>
              </Row>
            </Form>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default UpdateProfile;
