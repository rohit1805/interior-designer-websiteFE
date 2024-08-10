import React from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  //   console.log("next arrow rendered");
  return (
    <div
      className="absolute right-1 lg:right-1 top-1/2 transform -translate-y-1/2 bg-transparent text-neutral-300 rounded-full p-2 z-10 cursor-pointer"
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
          strokeWidth="3"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  //   console.log("prev arrow rendered");
  return (
    <div
      className="absolute left-1 lg:left-1 top-1/2 transform -translate-y-1/2 bg-transparent text-neutral-300 rounded-full p-2 z-10 cursor-pointer"
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
          strokeWidth="3"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>
  );
};

export default function KitchenElementSlider({ images, type }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "Linear",
  };
  return (
    <Slider {...settings}>
      {images &&
        images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.imageurl}
              alt={`Slide ${index}`}
              className=" lg:w-full lg:h-84 "
            />
            <div className=" text-white text-2xl font-semibold absolute bottom-3 left-3 z-50">
              Types of <br />
              {type}
            </div>
          </div>
        ))}
      {/* <div>
        <img src={images} alt="" className="w-10 h-20 z-20" />
      </div>
      <div>
        <img src={images} alt="" />
      </div>
      <div>
        <img src={images} alt="" />
      </div>
      <div>
        <img src={images} alt="" />
      </div>
      <div>
        <img src={images} alt="" />
      </div>
      <div>
        <img src={images} alt="" />
      </div> */}
    </Slider>
  );
}
