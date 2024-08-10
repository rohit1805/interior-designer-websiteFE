import React from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import image2 from "../assets/wardrobe_types/Sliding-Wardrobe-png.png";
import image1 from "../assets/wardrobe_types/Walk-in-png.png";
import image3 from "../assets/wardrobe_types/swing-door.png";

export const WardrobeTypes = () => {
  const WardrobesTypesData = [
    {
      title: "Open (Walk-in) Wardrobe",
      desc: "Kitchen décor offers you a custom, eye-catching walk-in wardrobe. This type of modular wardrobe designs provides you with ample space and storage for all your belongings plus has an aesthetic and lavish look to them.",
      imageUrl: image1,
    },
    {
      title: "Sliding Wardrobe",
      desc: "These wardrobes bear sliding doors and ensure a swift opening and closing. They are compact yet hold huge storage capacity and take no space to open. Best suitable for smaller spaces, Sliding Wardrobes look classy and precise.",
      imageUrl: image2,
    },
    {
      title: "Swing Door Wardrobe",
      desc: "Swing Door Wardrobe comprises of traditional wardrobes customized with swing door wardrobe and sliding door wardrobe.",
      imageUrl: image3,
    },
  ];
  return (
    <div className=" w-full flex flex-col justify-center  items-center px-3 py-8">
      <h1 className=" text-2xl md:text-4xl font-semibold font-Lato text-center ">
        Types of Modular Wardrobes
      </h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className="flex flex-col justify-center items-center gap-10 py-4">
        {WardrobesTypesData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 border px-3  py-2 rounded-md w-11/12 md:w-8/12  bg-stone-100"
          >
            <h1 className="text-xl font-semibold">{data.title}</h1>
            <p className="text-neutral-600">{data.desc}</p>
            <img src={data.imageUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
