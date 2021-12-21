import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // className: "center",
      // dots: true,
      infinite: true,
      centerPadding: "0px",
      speed: 2000,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyload: 'progressive',
      centerMode:true,
      arrows: false,
      // adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,

          }
          
        }
        
        
      ]
    };
    return (
      <div className="w-full carousel h-full mx-auto -mb-20 pt-1 ">
        <Slider {...settings}>
          <div className="flex items-center justify-center pr-5 ">
            <img src="banner3 (1) (1).jpg" className="header-images  w-full h-40 sm:h-56 md:h-60 lg:h-full"/>
          </div>
          <div className="flex items-center justify-center pr-5">
            <img src="masthead (6).png" className="header-images  w-full h-40 sm:h-56 md:h-60 lg:h-full"/>
          </div>
          <div className="flex items-center justify-center pr-5">
            <img src="viper.jpg" className="header-images w-full h-40 sm:h-56 md:h-60 lg:h-full"/>
          </div>
          {/* <div className="flex items-center pr-5">
            <img src="banner.png" className="header-images w-full h-40 sm:h-56 md:h-60 lg:h-full"/>
          </div> */}
        </Slider>
      </div>
    );
  }
}