import React from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import img1 from "../assets/wardrobe_elements/accessories-Elements-1.png";
import img2 from "../assets/wardrobe_elements/accessories-Elements-3.png";
import img3 from "../assets/wardrobe_elements/accessories-Elements-4.png";

export const WardrobeElements = () => {
  return (
    <div className=" w-full bg-stone-100 flex flex-col justify-center  items-center px-3 py-8">
      <h1 className=" text-2xl md:text-4xl font-semibold font-Lato text-center ">
        Your Love of Cooking, Assisted with <br /> Modular Kitchen Design in
        Pune.
      </h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center  gap-5 md:gap-10 pt-5">
        <img src={img1} alt="" className="" />
        <img src={img2} alt="" className="" />
        <img src={img3} alt="" className="" />
      </div>
    </div>
  );
};
