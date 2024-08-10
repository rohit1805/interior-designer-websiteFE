import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero_1 from "../assets/Hero_Slider/hero_slider_1.jpg";
import Hero_2 from "../assets/Hero_Slider/hero_slider_2.jpg";
import Hero_3 from "../assets/Hero_Slider/hero_slider_3.jpg";
import Hero_4 from "../assets/Hero_Slider/hero_slider_4.jpg";

import { Link } from "react-router-dom";

const NextArrow = (props) => {
  const { onClick } = props;
  console.log("next arrow rendered");
  return (
    <div
      className="absolute right-1 lg:right-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className=" w-4 h-4 lg:w-8 lg:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  console.log("prev arrow rendered");
  return (
    <div
      className="absolute left-1 lg:left-5 top-1/2 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className=" w-4 h-4 lg:w-8 lg:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>
  );
};

export function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "Linear",
  };

  return (
    <div className="relative -mb-4">
      <Slider {...settings} className=" overflow-hidden relative -z-10 lg:z-0 ">
        <div>
          <img src={Hero_1} alt="Slide 2" className=" w-full brightness-75" />
          <div className="flex flex-col ml-16 top-24 lg:mt-60 lg:ml-48  gap-5 absolute lg:top-40 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-auto">
            <h1 className=" text-2xl lg:text-8xl font-semibold font-serif text-white leading-5">
              A <span className=" font-Playwrite">Reflection</span> of you,
              <br />
              Crafted by us!
            </h1>
            <div className=" hidden lg:flex gap-3">
              <Link to={"/"}>
                <button className="text-md font-medium  text-white bg-black px-5 py-3">
                  EXPLORE DESIGNS
                </button>
              </Link>
              <button className="text-md text-black font-medium  bg-white border border-white px-3 py-2">
                {/* SHOP WOMEN'S */}
                BOOK A VISIT
              </button>
            </div>
          </div>
        </div>

        <div>
          <img src={Hero_2} alt="Slide 2" className=" w-full brightness-75" />
          <div className="flex flex-col ml-16 top-24 lg:mt-48 lg:ml-16  gap-5 absolute lg:top-32 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-auto">
            <h1 className="text-2xl lg:text-7xl font-semibold font-serif text-white">
              <span className=" font-Playwrite">Luxary</span> &
              <br />
              <span className=" font-Playwrite">&nbsp; Modular</span>
              <br /> Kitchen design.
            </h1>

            <div className=" hidden lg:flex gap-3 ">
              <Link to={"/"}>
                <button className="text-md font-medium  text-white bg-black px-5 py-3">
                  EXPLORE DESIGNS
                </button>
              </Link>
              <button className="text-md text-black font-medium  bg-white border border-white px-3 py-2">
                {/* SHOP WOMEN'S */}
                BOOK A VISIT
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Hero_3} alt="Slide 2" className=" w-full brightness-75" />
          <div className="flex flex-col ml- top-24 lg:mt-52 lg:ml-32  gap-5 absolute lg:top-32 left-1/2 lg:left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-auto">
            <h1 className="text-2xl lg:text-7xl font-semibold font-serif text-white text-center lg:text-left">
              Adorned with <br />{" "}
              <span className=" font-Playwrite font-bold">Aesthetics,</span>
              <br /> <span>Equipped with Efficiency.</span>
            </h1>

            <div className=" hidden lg:flex gap-3 ">
              <Link to={"/"}>
                <button className="text-md font-medium  text-white bg-black px-5 py-3">
                  EXPLORE DESIGNS
                </button>
              </Link>
              <button className="text-md text-black font-medium  bg-white border border-white px-3 py-2">
                {/* SHOP WOMEN'S */}
                BOOK A VISIT
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Hero_4} alt="Slide 2" className=" w-full brightness-75" />
          <div className="flex flex-col ml-16 top-24 lg:mt-52 lg:ml-28  gap-5 absolute lg:top-40 left-1/2 lg:left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-auto">
            <h1 className="text-2xl lg:text-7xl font-semibold font-serif text-white  w-80 lg:w-auto">
              Elegant, Bespoke, Functional.
            </h1>

            <div className=" hidden lg:flex gap-3 ">
              <Link to={"/"}>
                <button className="text-md font-medium  text-white bg-black px-5 py-3">
                  EXPLORE DESIGNS
                </button>
              </Link>
              <button className="text-md text-black font-medium  bg-white border border-white px-3 py-2">
                {/* SHOP WOMEN'S */}
                BOOK A VISIT
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
