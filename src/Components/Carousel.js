import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      centerMode:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
         <div>
            <img src="../images/fair.jpg" alt="fair"/>

        </div>
        <div>
            <img sr="../images/princess.jpg" alt="fair"/>
        </div>
        <div>
            <img src="../images/fair.jpg" alt="fair"/>

        </div>
        <div>
            <img sr="../images/princess.jpg" alt="fair"/>
        </div>
        </Slider>
      </div>
    );
  }
}