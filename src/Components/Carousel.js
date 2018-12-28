import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      className: "center",

      centerMode: true,
      centerPadding: "60px",
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
     
      responsive: [
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "60px",
            speed: 1000,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "60px",
             speed: 1000,
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
         <div>
            <img src="../images/fair.jpg" width="100%" height="20%" alt="fair"/>

        </div>
        <div> 
            <img src="../images/princess.jpg" width="100%" height="20%" alt="fair"/>
        </div>
        <div>
            <img src="../images/fair.jpg" width="100%" height="20%" alt="fair"/>

        </div>
        <div>
            <img src="./images/princess.jpg" width="100%" height="20%" alt="fair"/>
        </div>
        </Slider>
      </div>
    );
  }
}