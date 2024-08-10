import React from "react";
import { TbHeartHandshake } from "react-icons/tb";
import { MdGroups } from "react-icons/md";
import { PiTargetBold } from "react-icons/pi";
import legacy_icon_1 from "../assets/legacy_icons/legacy-icon-1.png";
import legacy_icon_2 from "../assets/legacy_icons/legacy-icon-2.png";
import legacy_icon_3 from "../assets/legacy_icons/legacy-icon-3.png";
import legacy_icon_4 from "../assets/legacy_icons/legacy-icon-4.png";

export default function ExperienceSection() {
  return (
    <div className=" flex flex-col justify-center items-center gap-2 py-12 md:py-16 bg-black ">
      <h1 className=" text-2xl lg:text-4xl font-semibold  font-Lato text-white">
        OUR LEGACY AT TOUCH WOOD
      </h1>
      <div className=" flex justify-center items-center gap-2 my-3">
        <hr className="w-20  border-b border-orange-500" />
        <TbHeartHandshake className="text-4xl text-orange-500" />
        <hr className="w-20 border-b border-orange-500" />
      </div>
      <ul className=" flex flex-col md:flex-row justify-center items-center gap-5 md:gap-12 my-3">
        <li className=" flex flex-col justify-center items-center py-3 px-5 rounded-md w-60 h-auto  ">
          <img src={legacy_icon_1} alt="" />
          <h3 className=" mt-4 text-xl font-bold text-white">10+ years</h3>
          <p className=" text-white">Of Design Excellence</p>
        </li>
        <li className=" flex flex-col justify-center items-center py-3 px-5 rounded-md w-60 h-auto ">
          <img src={legacy_icon_2} alt="" />
          <h3 className=" mt-4 text-xl font-bold text-white">5000+</h3>
          <p className=" text-white">Happy Customers</p>
        </li>
        <li className=" flex flex-col justify-center items-center py-3 px-5 rounded-md w-60 h-auto ">
          <img src={legacy_icon_3} alt="" />
          <h3 className=" mt-4 text-xl font-bold text-white">10000+ Sp.Ft</h3>
          <p className=" text-white">Area on display</p>
        </li>
        <li className=" flex flex-col justify-center items-center py-3 px-5 rounded-md w-60 h-auto ">
          <img src={legacy_icon_4} alt="" />
          <h3 className=" mt-4 text-xl font-bold text-white">3000 Sp.Ft</h3>
          <p className=" text-white">Manufacturing Unit set up</p>
        </li>
      </ul>
    </div>
  );
}
