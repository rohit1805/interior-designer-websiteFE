import React from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  //   console.log("next arrow rendered");
  return (
    <div
      className="absolute right-1 lg:right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-black rounded-full p-2 z-10 cursor-pointer border border-stone-400 bg-white hover:bg-stone-100"
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
      className="absolute left-1 lg:left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-black rounded-full p-2 z-10 cursor-pointer border border-stone-400 bg-white hover:bg-stone-100"
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

export default function ImageSlider({ images, type }) {
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
    pauseOnHover: true,
    cssEase: "Linear",
  };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="">
          <img
            src={image.imageUrl}
            alt={`Slide ${index}`}
            className=" rounded-xl -z-10"
          />
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
