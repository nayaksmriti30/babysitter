import React from "react";
import { Container } from "react-bootstrap";

import Header from "../component/Header";
import Footer from "../component/Footer";

function Blog() {
  const ps = document.querySelectorAll("p");
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      entry.target.classList[
        entry.target.scrollHeight > entry.contentRect.height ? "add" : "remove"
      ]("truncated");
    }
  });

  ps.forEach((p) => {
    observer.observe(p);
  });
  return (
    <>
      <Header />
      <div>
      <div className="featured_img position-relative">
            <img src="../images/blog_banner.jpg" className="w-100" />
            <div className="page_heading">
              <Container>
                <h1>Blog</h1>
              </Container>
            </div> 
        </div>

        <div className="blog_main">
          <Container>
            <div className="blog">
              <img src="../images/blog1.jpg" className="w-100" />
              <div className="d-flex align-items-center  blog-date-time">
                <img src="../images/clock_icon.svg" />
                <span className="ms-1 me-3">5 Minutes</span>
                <img src="../images/cal_icon.svg" />
                <span className="ms-1">27 July 2022</span>
              </div>
              <h4>Where does it come from?</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor.
              </p>
              <p className="truncate">
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc. It has roots
                in a piece of classical Latin literature from 45 BC, making it
                over 2000 years old. Richard McClintock, a Latin professor...
                <a href="#">Read more</a>
              </p>
            </div>
            <div className="blog">
              <img src="../images/blog2.jpg" className="w-100" />
              <div className="d-flex align-items-center  blog-date-time">
                <img src="../images/clock_icon.svg" />
                <span className="ms-1 me-3">5 Minutes</span>
                <img src="../images/cal_icon.svg" />
                <span className="ms-1">27 July 2022</span>
              </div>
              <h4>Where does it come from?</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor.
              </p>
              <p className="truncate">
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc. It has roots
                in a piece of classical Latin literature from 45 BC, making it
                over 2000 years old. Richard McClintock, a Latin professor...
                <a href="#">Read more</a>
              </p>
            </div>
          </Container>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
