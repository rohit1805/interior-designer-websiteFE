import React from "react";

import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/enquiry_page_banner.jpg";
import experienceLogo from "../assets/25-Years-Logo.png";
import { Link } from "react-router-dom";
import icon1 from "../assets/reason_to_choose_icons/warranty.png";
import icon2 from "../assets/reason_to_choose_icons/delivery-truck.png";
import icon3 from "../assets/reason_to_choose_icons/personalize.png";
import icon4 from "../assets/reason_to_choose_icons/calculation.png";
import useScrollToTop from "../Hooks/useScrollToTop";
import HeartDesignDivider from "../components/HeartDesignDivider";
import { VscCallOutgoing } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";

export const Enquiry = () => {
  // useScrollToTop();
  const reasonToChoose = [
    {
      icon: icon1,
      title: "5 Years Warranty",
      desc: "When we say it, we mean it!",
    },
    {
      icon: icon2,
      title: "Guaranteed Delivery in 6-8 Weeks",
      desc: "Assured time period of delivery",
    },
    {
      icon: icon3,
      title: "Personalised Designs",
      desc: "That are as unique as you !",
    },
    {
      icon: icon4,
      title: "No Hidden Costs",
      desc: "Our quotes don’t come with surprises",
    },
  ];
  return (
    <div className="mt-[75px]">
      <Banner
        imageUrl={bannerImage}
        page={"Enquiry"}
        title={"We Transform Space into ART!"}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-5 py-8 px-5  sm:px-14 md:px-20 xl:px-32 w-full bg-stone-600">
          <div className="lg:w-7/12 ">
            <p className=" text-2xl font-medium text-pretty text-white">
              Your home is a reflection of who you are. That’s why at Touch
              Wood, our clients are the inspiration for every home we design.
            </p>
          </div>
          <div className="md:w-5/12 flex flex-col md:flex-row items-center gap-2 lg:gap-10 justify-center">
            <Link to={"/quoteForm"}>
              <button className=" bg-black px-5 py-2 rounded-md font-medium hover:bg-white hover:text-black text-white border border-black ">
                GET A FREE QUOTE
              </button>
            </Link>
            <h1 className=" text-4xl font-Spicy_Rice text-orange-500">
              TouchWood.
            </h1>
          </div>
        </div>

        {/* why choose us */}
        <div className="flex flex-col justify-center items-center text-center gap-2 py-12 px-5  sm:px-14 md:px-12 xl:px-32 ">
          <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
            Reasons to Choose{" "}
            <span className="text-orange-500">Touch Wood!</span>
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  items-center justify-center gap-5 mt-2">
            {reasonToChoose.map((data, index) => (
              <div
                key={index}
                className="bg-stone-200 col-span-1 flex flex-col gap-5 justify-start items-center w-full md:w-56 lg:w-64 h-64 rounded-lg border border-stone-200"
              >
                <div className="py-5 bg-orange-200 w-full flex justify-center items-center">
                  <img src={data.icon} alt="" className="w-28 " />
                </div>
                <div className="flex flex-col w-10/12 md:w-11/12">
                  <h1 className="text-lg font-medium">{data.title}</h1>
                  <p className="text-sm text-neutral-800">{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-2 py-12 px-5  sm:px-14 md:px-12 xl:px-32 bg-stone-100">
          <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
            Get in Touch
            <span className="text-orange-500">with US!</span>
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <div className="flex flex-col  gap-3  mt-2">
            <div className="flex justify-center items-center gap-2">
              <VscCallOutgoing className=" text-2xl md:text-3xl" />
              <a
                href={`tel:${import.meta.env.VITE_PHONE_NO}`}
                className="text-2xl md:text-3xl font-medium"
              >
                {import.meta.env.VITE_PHONE_NO}
              </a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <AiOutlineMail className=" text-2xl md:text-3xl" />
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL_ID}`}
                className="text-2xl md:text-3xl font-medium"
              >
                {import.meta.env.VITE_EMAIL_ID}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
