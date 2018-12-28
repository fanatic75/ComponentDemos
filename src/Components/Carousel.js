import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      
      swipeToSlide: true,
      centerMode:true,
      adaptiveHeight: true,
      slidesToShow: 2,
      centerPadding: "60px",
      className: "center",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1,
          }
        }
      ]
    
     
      
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
         <div>
            <img src="../images/fair.jpg" width="100%"  alt="fair"/>

        </div>
        <div> 
            <img src="../images/princess.jpg" width="100%"  alt="fair"/>
        </div>
        <div>
            <img src="../images/fair.jpg" width="100%"  alt="fair"/>

        </div>
        <div>
            <img src="./images/princess.jpg" width="100%"  alt="fair"/>
        </div>
        </Slider>
      </div>
    );
  }
}