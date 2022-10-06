import { React, useState } from "react"; 
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap"; 


import Header  from "../component/Header";
import Footer from "../component/Footer";

import Slider from "react-slick";
 
const Caregiver = () => {


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
 
  const spotlight_vedio = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    dots: false,
    centerMode:true,
  };
 
  return (
    <>
 <Header/>

{/* banner_part */}

<section className="banner_part parent_caregiver after_none">
    <Container>
        <div className="parent_caregiver_row align-items-center care_giver_mobile_direction">

        <div className="parent_caregiver_caption ps-0 pe-lg-5 pe-md-3 pe-0">
              <div className="section_head">
                 <h1>Hire Caregiver & Get <br/>Your Job Done<span className="title_border"><img src="../images/title_border.svg" /></span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="btn_row">
                    <a href="#" className="app_link me-2"><img src="../images/app_store.svg"/> </a>
                    <a href="#" className="app_link"><img src="../images/googleplay.svg"/></a>
                  </div>
              </div>
            </div>
 
            <div className="parent_caregiver_img img-box-right ps-0">
              <figure className="banner_pic"><span className="arrow_corner right_fix"><img src="../images/arrow.svg" /></span>
                  <img src="../images/banner3.jpg"/>     
              </figure>            
            </div>
 
 
        </div>
    </Container>
 </section>


{/* main-content-page */}

    <main className="bg-blue">
      <section className="feature_section pb-md-5 pb-3">
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




   
      <section className="variations finding-var-sec position-relative find-sec">
          <Container>
            <Row className="finding_care_row p-md-4 p-3 pt-md-4 pt-5  align-items-center">
              <Col lg={4}>
                <div>
                  <figure className="mb-0 position-relative z-index-2 text-md-left text-center">
                    <img src="../images/cargiver.png" alt="" />
                  </figure>
                </div>
              </Col>
              <Col lg={8}>
                <div className="outer">
                  <div className="section_head mw-100">
                    <h3>
                      There are many <br />
                      variations
                      <span className="title_border">
                        <img src="../images/litttle-border.svg" />
                      </span>
                    </h3>
                  </div>
                  <div className="cargiver-find-sec">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a years old. Richard
                      McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in Lorem Ipsum comes
                      from sections
                    </p>
                    <p>
                      1.10.32 and 1.10.33 of "de Finibus Bonorum et written in
                      45 BC. This book is a treatise on the theory of ethics,
                      very popular during the dolor sit amet..", comes from a
                      line in section 1.10.32.
                    </p>
                    <a
                      href="#"
                      className="custome_btn btn text-white mt-3 lg-btn"
                    >
                      Sign up Now
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      

      <section className="trusted-sec bg-white">
        <Container>
          <div className="section_head text-center">
            <h2>
              How Finding Trusted Care Works For Caregiver
              <span className="title_border">
                <img src="../images/title_border.svg" />
              </span>
            </h2>
          </div>
          <Row>
            <Col md={5}>
              <figure className="mb-0">
                <img src="../images/trusted-back.png" alt="" />
              </figure>
            </Col>

            <Col md={6}>
              <div className="trusted-outer">
                <div className="steper-counter">
                  <div className="step-number">
                    <h2>
                      <span>Step</span>1
                    </h2>
                  </div>
                  <div className="step-desc">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>

                <div className="steper-counter">
                  <div className="step-number">
                    <h2>
                      <span>Step</span>2
                    </h2>
                  </div>
                  <div className="step-desc">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>

                <div className="steper-counter">
                  <div className="step-number">
                    <h2>
                      <span>Step</span>3
                    </h2>
                  </div>
                  <div className="step-desc">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>

                <div className="steper-counter">
                  <div className="step-number">
                    <h2>
                      <span>Step</span>4
                    </h2>
                  </div>
                  <div className="step-desc">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      {/* how_it_work */}
 
<section className="how_it_work bg-white">
    <Container>
        <div className="section_head text-center">
            <h2>How it Works<span className="title_border w-medium"><img src="../images/title_border.svg" /></span></h2>      
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/>industry.</p>       
        </div>

        <div className="work_proccess">
           <Row>
                <Col md={4}>
                    <div className="work_process"> 
                        <figure className="text-center"> <img src="../images/caregiver1.svg"/></figure> 
                        <div class="sm_article text-center pt-3">
                            <h5>For Parents</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div> 
                    </div> 
                </Col>

                <Col md={4}>
                    <div className="work_process"> 
                        <figure className="text-center"> <img src="../images/caregiver2.svg"/></figure> 
                        <div class="sm_article text-center pt-3">
                            <h5>For Parents</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div> 
                    </div> 
                </Col>

                <Col md={4}>
                    <div className="work_process"> 
                        <figure className="text-center"> <img src="../images/caregiver3.svg"/></figure> 
                        <div class="sm_article text-center pt-3">
                            <h5>For Parents</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div> 
                    </div> 
                </Col> 
            </Row>
         </div>
 
    </Container>
 </section>

 
    
    {/* solutions-for-every-need */}
    <section className="solutions-for-every-need">
        <Container>
          <div className="solutions-wrapper">
           <Row>
              <Col md={8}>
                  <div className="solution_left">
                  <div className="section_head">
                    <h2>Solution for every need.<span className="title_border"><img src="../images/title_border.svg" /></span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div> 
                    <div className="article-block">
                    <Row className="mt-md-5 mt-3">
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
export default Caregiver;
