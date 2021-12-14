import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      pauseOnHover: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      border: false,
      slidesToShow: 4,
      adaptiveHeight: true,
      arrows: false,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="featured-carousel">
        <Slider {...settings}>
        <div className="item   shadow-lg font-semibold  cursor-pointer ">
            <div className="bg-gray-100 h-52 md:h-56 lg:h-56 rounded-lg text-xs md:text-sm lg:text-sm ">
            <img src="reyna.jpg" alt="" className="rounded-t-lg h-24 lg:h-28 w-full"/>
            <div className=" flex justify-center text-center mt-3">
                <h1>World <br/>Championship<br/> 2021</h1>
            </div>
            

            <div className="flex justify-center text-center text-sm font-light mt-3 pb-4">
                <h1>5th Oct - 29th Oct 2021</h1>
            </div>
            </div>
        </div>
        <div className="item   shadow-lg font-semibold   cursor-pointer ">
            <div className="bg-gray-100 h-52 md:h-56 lg:h-56 rounded-lg text-xs md:text-sm lg:text-sm">
            <img src="reyna.jpg" alt="" className="rounded-t-lg h-24 lg:h-28 w-full"/>
            <div className=" flex justify-center text-center mt-3">
            <h1>World <br/>Championship<br/> 2021</h1>
            </div>

            <div className="flex justify-center text-center text-sm font-light mt-3 pb-4">
                <h1>5th Oct - 29th Oct 2021</h1>
            </div>
            </div>
        </div>
        <div className="item  shadow-lg font-semibold   cursor-pointer ">
            <div className="bg-gray-100 h-52 md:h-56 lg:h-56 rounded-lg text-xs md:text-sm lg:text-sm">
            <img src="reyna.jpg" alt="" className="rounded-t-lg h-24 lg:h-28 w-full"/>
            <div className=" flex justify-center text-center mt-3">
            <h1>World <br/>Championship<br/> 2021</h1>
            </div>

            <div className="flex justify-center text-center text-sm font-light mt-3 pb-4">
                <h1>5th Oct - 29th Oct 2021</h1>
            </div>
            </div>
        </div>
        <div className="item  shadow-lg font-semibold   cursor-pointer ">
            <div className="bg-gray-100 h-52 md:h-56 lg:h-56 rounded-lg text-xs md:text-sm lg:text-sm">
            <img src="reyna.jpg" alt="" className="rounded-t-lg h-24 lg:h-28 w-full"/>
            <div className=" flex justify-center text-center mt-3">
            <h1>World <br/>Championship<br/> 2021</h1>
            </div>
            

            <div className="flex justify-center text-center text-sm font-light mt-3 pb-4">
                <h1>5th Oct - 29th Oct 2021</h1>
            </div>
            </div>
        </div>
        <div className="item  shadow-lg font-semibold  cursor-pointer ">
            <div className="bg-gray-100 h-52 md:h-56 lg:h-56 rounded-lg text-xs md:text-sm lg:text-sm">
            <img src="reyna.jpg" alt="" className="rounded-t-lg h-24 lg:h-28 w-full"/>
            <div className=" flex justify-center text-center mt-3">
            <h1>World <br/>Championship<br/> 2021</h1>
            </div>

            <div className="flex justify-center text-center text-sm font-light mt-3 pb-4">
                <h1>5th Oct - 29th Oct 2021</h1>
            </div>
            </div>
        </div>
        </Slider>
      </div>
    );
  }
}