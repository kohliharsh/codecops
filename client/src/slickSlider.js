import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slidercss.css";
export class Slickslider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div class='container'>
          <div className='row title' style={{ marginBottom: "20px" }}>
            <div class='col-sm-12 btn btn-info'>
              Slick Carousel In React Application
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className='wdt'>
            <img className='img' src={"assets/logo.png"} className='img' />
          </div>
          <div className='wdt'>
            <img
              style={{ height: "40px" }}
              src={"img/logo.png"}
              className='img'
            />
          </div>
          <div className='wdt'>
            <img className='img' src={"img/logo.png"} className='img' />
          </div>
          <div className='wdt'>
            <img className='img' src={"img/logo.png"} className='img' />
          </div>
          <div className='wdt'>
            <img className='img' src={"img/logo.png"} className='img' />
          </div>
          <div className='wdt'>
            <img className='img' src={"img/logo.png"} className='img' />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slickslider;
