import React, { Component } from "react";
import "../Banner_slider/Banner_slider.css";
import Slider from "react-slick";

import banner_image from "../../assets/img/slider-img.png";

function Banner_slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <section className="slider_section">
      <div className="slider_container">
        <div className="carousel slide">
          <div className="carousel-inner">
            <Slider {...settings}>
              <div className="carousel-items ">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>
                          Welcome To Our <br />
                          Gift Shop
                        </h1>
                        <p>
                          Sequi perspiciatis nulla reiciendis, rem, tenetur
                          impedit, eveniet non necessitatibus error distinctio
                          mollitia suscipit. Nostrum fugit doloribus consequatur
                          distinctio esse, possimus maiores aliquid repellat
                          beatae cum, perspiciatis enim, accusantium
                          perferendis.
                        </p>
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                    <div className="col-md-5 ">
                      <div className="img-box">
                        <img src={banner_image} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-items ">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>
                          Welcome To Our <br />
                          Gift Shop
                        </h1>
                        <p>
                          Sequi perspiciatis nulla reiciendis, rem, tenetur
                          impedit, eveniet non necessitatibus error distinctio
                          mollitia suscipit. Nostrum fugit doloribus consequatur
                          distinctio esse, possimus maiores aliquid repellat
                          beatae cum, perspiciatis enim, accusantium
                          perferendis.
                        </p>
                        <a href="">Contact Us</a>
                      </div>
                    </div>
                    <div className="col-md-5 ">
                      <div className="img-box">
                        <img src={banner_image} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner_slider;
