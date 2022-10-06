import { React, useState } from "react"; 
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap"; 


import Header  from "../component/Header";
import Footer from "../component/Footer";

import Slider from "react-slick";
 
const Parents = () => {


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
    responsive: [
        {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      }
      
    ]
  };
 
  return (
    <>
 <Header/>

{/* banner_part */}

<section className="banner_part parent_caregiver after_none">
    <Container>
        <div className="parent_caregiver_row align-items-center">
 
            <div className="parent_caregiver_img">
              <figure className="banner_pic"><span className="arrow_corner"><img src="../images/arrow.svg" /></span>
                  <img src="../images/parents.jpg"/>     
              </figure>            
            </div>


           <div className="parent_caregiver_caption">
              <div className="section_head">
                 <h1>Hire Caregiver & Get <br/>Your Job Done<span className="title_border"><img src="../images/title_border.svg" /></span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="btn_row">
                    <a href="#" className="app_link me-2"><img src="../images/app_store.svg"/> </a>
                    <a href="#" className="app_link"><img src="../images/googleplay.svg"/></a>
                  </div>
              </div>
            </div>
 
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


    {/* best-packages */}

    <section className="choose_the_best_pack bg-white">
        <Container>    
            <div className="section_head text-center">
                <h2>Choose The Best Package For <br/>
                Your Application<span className="title_border w-medium"><img src="../images/title_border.svg" /></span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry.</p> 
            </div>

            <Row>
                <Col md={6}>
                    <div className="package_list mb-3">
                        <div className="package_head">
                            <img src="../images/standard.svg" alt=""/> 
                            <h3>Standard Membership</h3>
                            <div className="pack_value">
                                <strong><sup>$</sup>50<small>/Monthly</small></strong>
                            </div>
                        </div>

                     <div className="pageage_feature-wrapper">
                        <div className="pageage_feature">
                            <ul>
                                <li><img src="../images/tick.svg"/>Lorem Ipsum is simply dummy.</li>
                                <li><img src="../images/tick.svg"/>Lorem Ipsum is simply dummy.</li>
                                <li><img src="../images/tick.svg"/>Lorem Ipsum is simply dummy.</li>            
                            </ul>       
                        </div>  
                        <a href="#" className="btn custome_btn text-white">Join Membership</a>
                       </div>
                    </div>
                 </Col> 

                 <Col md={6}>
                    <div className="package_list mb-3">
                        <div className="package_head">
                          <img src="../images/premium.svg" alt=""/> 
                            <h3>Standard Membership</h3>
                            <div className="pack_value">
                                <strong><sup>$</sup>50<small>/Monthly</small></strong>
                            </div>
                        </div>

                     <div className="pageage_feature-wrapper">
                        <div className="pageage_feature">
                            <ul>
                                <li><img src="../images/tick.svg"/>Lorem Ipsum is simply dummy.</li>
                                <li><img src="../images/tick.svg"/>Lorem Ipsum is simply dummy.</li>
                                <li><img src="../images/tick.svg"/>Lorem Ipsum is simply dummy.</li>            
                            </ul>       
                        </div>  
                        <a href="#" className="btn custome_btn text-white">Join Membership</a>
                       </div>
                    </div>
                 </Col> 
             </Row>            
    </Container>
 </section>


{/* vedio-spotight */}
    <section className="vedio-spotlight bg-white">
        <Container>
          <div className="section_head text-center mb-3">
                <h2>Video Spotlight<span className="title_border w-medium"><img src="../images/title_border.svg" /></span></h2>
            </div>

            <div className="vedio_fream pt-3">
                <span className="shape_right"><img src="../images/vedio_shape_right.svg"/></span>
                <span className="shape_left"><img src="../images/vedio_shape_left.svg"/></span>
              <video width="100%" height="" controls>
                <source src="../vedio/mov_bbb.mp4" type="video/mp4"/>
                <source src="../vedio/mov_bbb.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
              </video> 

            </div>
              
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
                        <figure className="text-center"> <img src="../images/work1.svg"/></figure> 
                        <div class="sm_article text-center pt-3">
                            <h5>For Parents</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div> 
                    </div> 
                </Col>

                <Col md={4}>
                    <div className="work_process"> 
                        <figure className="text-center"> <img src="../images/work2.svg"/></figure> 
                        <div class="sm_article text-center pt-3">
                            <h5>For Parents</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div> 
                    </div> 
                </Col>

                <Col md={4}>
                    <div className="work_process"> 
                        <figure className="text-center"> <img src="../images/work3.svg"/></figure> 
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

{/* vedio-spotight-for-parents */}
    <section className="vedio-spotlight-parents bg-white">
        <Container fluid>
            <div className="section_head text-center">
                <h2>Video Spotlight For Parents<span className="title_border w-medium"><img src="../images/title_border.svg" /></span></h2> 
            </div>


     <Slider {...spotlight_vedio}>
          <div className="spotlight_vedio_item">
            <div className="vedio_container">
              <video width="100%" height="" controls>
                <source src="../vedio/mov_bbb.mp4" type="video/mp4"/>
                <source src="../vedio/mov_bbb.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
              </video> 
            </div> 
           </div>

           <div className="spotlight_vedio_item">
            <div className="vedio_container">
              <video width="100%" height="" controls>
                <source src="../vedio/mov_bbb.mp4" type="video/mp4"/>
                <source src="../vedio/mov_bbb.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
              </video> 
            </div> 
           </div>

           <div className="spotlight_vedio_item">
            <div className="vedio_container">
              <video width="100%" height="" controls>
                <source src="../vedio/mov_bbb.mp4" type="video/mp4"/>
                <source src="../vedio/mov_bbb.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
              </video> 
            </div> 
           </div>

         </Slider>

         <div className="text-center">
            <a href="#" className="btn custome_btn btn-primary mt-md-4 mt-3">View more on our youtube channel</a>
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
export default Parents;
