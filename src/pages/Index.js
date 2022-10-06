 import { React, useState } from "react"; 
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap"; 


import Header  from "../component/Header";
import Footer from "../component/Footer";

import Slider from "react-slick";
 
const Index = () => {
 
 
  var happy_clients = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    initialSlide: 0,
    responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow:2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },

          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1.5,
              initialSlide: 1.5
            }
          },

          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          
        ]
  };

  return (
    <>
 <Header/>

{/* banner_part */}

<section className="banner_part">
    <Container>
        <Row className="align-items-center">
            <Col md={7}>
              <div className="section_head">
                 <h1>Hire Caregiver & Get <br/>Your Job Done<span className="title_border"><img src="../images/title_border.svg" /></span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="btn_row">
                    <Button href="/parents" className="custome_btn text-white">I'm a Parent</Button>
                    <Button href="/caregiver" variant="outline-primary" className="outline-custome_btn">I'm a Caregiver</Button>
                  </div>
              </div>
            </Col>


            <Col md={5}>
              <figure className="banner_pic"><span className="arrow_corner"><img src="../images/arrow.svg" /></span>
                  <img src="../images/banner1.jpg"/>     
              </figure>            
            </Col>
 
        </Row>

    <div className="banner_shape">
        <span className="banner-shapes"><img src="../images/banner-animation.svg"/></span>
        <span className="dots"><img src="../images/dots.png"/></span> 
    </div>


    </Container>
 </section>


{/* main-content-page */}

    <main className="bg-blue">
      <section className="feature_section">
        <Container>
            <Row>
                <Col lg={3} sm={6}>
                    <div className="feature_article">
                    <a href="#">
                        <figure><img src="../images/chat-support.svg" /></figure>
                        <figcaption>
                            <h4>Communicate Online</h4>
                            <p>We offer fast, in-app communication
                            that allows you to find a sitter,chat
                            whenever you need, and check in.</p>
                        </figcaption>
                        </a>
                    </div> 
                </Col>


                <Col lg={3} sm={6}>
                    <div className="feature_article">
                     <a href="#"> <figure><img src="../images/fill_search.svg" /></figure>
                        <figcaption>
                            <h4>Find Caregivers</h4>
                            <p>We offer fast, in-app communication
                            that allows you to find a sitter,chat
                            whenever you need, and check in.</p>
                        </figcaption>
                        </a>
                    </div> 
                </Col>

                <Col lg={3} sm={6}>
                    <div className="feature_article">
                    <a href="#"> <figure><img src="../images/fill-calendar.svg" /></figure>
                        <figcaption>
                            <h4>Convenient Scheduling</h4>
                            <p>We offer fast, in-app communication
                            that allows you to find a sitter,chat
                            whenever you need, and check in.</p>
                        </figcaption>
                        </a>
                    </div> 
                </Col>

                <Col lg={3} sm={6}>
                    <div className="feature_article">
                    <a href="#"> <figure><img src="../images/pay_success.svg" /></figure>
                        <figcaption>
                            <h4>No-Hassle Payments</h4>
                            <p>We offer fast, in-app communication
                            that allows you to find a sitter,chat
                            whenever you need, and check in.</p>
                        </figcaption>
                        </a>
                    </div> 
                </Col>

            </Row>
         </Container>
      </section>


{/* finding-caring */}

      <section className="finding_care">
          <Container>
              <div className="finding_care_row d-md-flex align-items-center">  
              <div className="finding_care_left-main">           
                    <div className="section_head">
                    <h2>Finding Trusted Care is available for All devices<span className="title_border"><img src="../images/title_bordersmall.svg" /></span></h2>
                    <p className="text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit<br/>Aenean commodo ligula eget dolor.  </p>
                   </div>
                      <div className="btn_row">
                        <h6 className="app-link-title">Get your App Today</h6>
                        <a href="#" className="app_link me-3"><img src="../images/apple-badge.svg"/></a>
                        <a href="#" className="app_link"><img src="../images/google-play.svg"/></a>
                      </div>
                      </div>  

                <figure className="care_device mb-0"><img src="../images/device.png"/></figure>
                 
              </div>
          <span className="dots"><img src="../images/dots.png"/></span> 
        
         </Container>
      </section>

    {/* solutions-for-every-need */}
    <section className="solutions-for-every-need">
        <Container>
          <div className="solutions-wrapper">
          <span className="dots middle_fix"><img src="../images/dots.png"/></span> 
           <Row>
              <Col md={8}>
                  <div className="solution_left">
                  <div className="section_head">
                    <h2>Solution for every need.<span className="title_border"><img src="../images/title_border.svg" /></span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                   </div> 
                   <div className="article-block">
                    <Row className="mt-md-5 mt-sm-3 mt-0">
                        <Col md={6}>
                          <div className="sm_article">
                            <h5>For Parents</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="sm_article">
                            <h5>For Parents</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                        </Col>  


                        <Col md={6}>
                        <figure className="care_love">
                           <img src="../images/care-love.svg" /> 
                        </figure>
                        </Col>   
                        </Row> 
                        </div>
                     <div className="mobile_device">
                      <img src="../images/mockup.png" />          
                    </div>
                  </div> 
              </Col> 
           </Row>

        

           </div>
         </Container>



    </section>


 {/* parent-feedback */}

      <section className="happy_clients">
          <Container>
            <Row>
                <Col md={5}>
                  <div className="section_head">
                    <small className="qout-icon"><img src="../images/qout.svg"/></small>
                    <h2 className="text-white">Happy Parents<span className="title_border"><img src="../images/md-white.svg" /></span></h2>
                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>     
                </Col> 
            </Row>
            
            <div className="happy_parents_slider">
            <Slider {...happy_clients}>
              <div className="item-main">
                <div className="parents_saying">
                    <p>Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.</p>

                  <div className="rating-date">
                    <div className="rating">
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/no-star.svg"/></span>  
                    </div>

                  <div className="message-date">July 2, 2022</div>                     
                  </div>
                  <span className="corner-shape"><img src="../images/corner-shape.svg" /></span>
                </div>
                <div className="parent-profile">
                    <figure><img src="../images/circle.png" /></figure>
                    <figcaption>
                      <strong>Simon Paul</strong>
                      <p>Fashion Designer</p>
                    </figcaption>
                </div> 
               </div> 

               <div className="item-main">
                <div className="parents_saying">
                    <p>Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.</p>

                  <div className="rating-date">
                    <div className="rating">
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/no-star.svg"/></span>  
                    </div>

                  <div className="message-date">July 2, 2022</div>                     
                  </div>
                  <span className="corner-shape"><img src="../images/corner-shape.svg" /></span>
                </div>
                <div className="parent-profile">
                    <figure><img src="../images/circle.png" /></figure>
                    <figcaption>
                      <strong>Simon Paul</strong>
                      <p>Fashion Designer</p>
                    </figcaption>
                </div> 
               </div> 

               <div className="item-main">
                <div className="parents_saying">
                    <p>Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.</p>

                  <div className="rating-date">
                    <div className="rating">
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/no-star.svg"/></span>  
                    </div>

                  <div className="message-date">July 2, 2022</div>                     
                  </div>
                  <span className="corner-shape"><img src="../images/corner-shape.svg" /></span>
                </div>
                <div className="parent-profile">
                    <figure><img src="../images/circle.png" /></figure>
                    <figcaption>
                      <strong>Simon Paul</strong>
                      <p>Fashion Designer</p>
                    </figcaption>
                </div> 
               </div> 
              
               <div className="item-main">
                <div className="parents_saying">
                    <p>Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.</p>

                  <div className="rating-date">
                    <div className="rating">
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/no-star.svg"/></span>  
                    </div>

                  <div className="message-date">July 2, 2022</div>                     
                  </div>
                  <span className="corner-shape"><img src="../images/corner-shape.svg" /></span>
                </div>
                <div className="parent-profile">
                    <figure><img src="../images/circle.png" /></figure>
                    <figcaption>
                      <strong>Simon Paul</strong>
                      <p>Fashion Designer</p>
                    </figcaption>
                </div> 
               </div> 

               <div className="item-main">
                <div className="parents_saying">
                    <p>Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.</p>

                  <div className="rating-date">
                    <div className="rating">
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/star.svg"/></span>
                      <span><img src="../images/no-star.svg"/></span>  
                    </div>

                  <div className="message-date">July 2, 2022</div>                     
                  </div>
                  <span className="corner-shape"><img src="../images/corner-shape.svg" /></span>
                </div>
                <div className="parent-profile">
                    <figure><img src="../images/circle.png" /></figure>
                    <figcaption>
                      <strong>Simon Paul</strong>
                      <p>Fashion Designer</p>
                    </figcaption>
                </div> 
               </div> 


           </Slider>
            </div>

          </Container>
      </section>
      
     </main>

     <Footer/>
  
     </>
  );
};
export default Index;
