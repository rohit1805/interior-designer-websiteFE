import React from "react";
import { Link } from "react-router-dom";
import { TbHeartHandshake } from "react-icons/tb";
export default function Banner({ imageUrl, title, page }) {
  return (
    <div className="relative">
      <img src={imageUrl} alt="" className=" brightness-50 " />
      <div className=" flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 text-white">
        <h4 className=" text-sm sm:text-lg md:text-2xl font-Lato font-semibold">
          {page}
        </h4>
        <div className=" flex justify-center items-center gap-2">
          <hr className="w-10 sm:w-16 md:w-24 border-b border-white" />
          <TbHeartHandshake className="text-xl sm:text-2xl md:text-4xl" />
          <hr className="w-10 sm:w-16 md:w-24 border-b border-white" />
        </div>
        <h1 className=" text-xl sm:text-5xl md:text-7xl font-Lilita_One text-center">
          {title}
        </h1>
        <div className="flex justify-center items-center gap-1 sm:pt-2 md:pt-4">
          <Link to={"/"}>
            <p className=" text-sm sm:text-lg md:text-2xl  font-semibold">
              Home
            </p>
          </Link>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-3 sm:size-4 md:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <p className=" text-sm sm:text-lg md:text-2xl font-semibold">
            {page}
          </p>
        </div>
      </div>
    </div>
  );
}
