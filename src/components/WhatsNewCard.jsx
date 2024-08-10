import React, { useState } from "react";

export default function WhatsNewCard({ imgurl, title, desc }) {
  const [isExpand, setIsExpand] = useState(false);
  const toggelText = () => {
    setIsExpand(!isExpand);
  };
  return (
    <div className=" flex flex-col justify-center items-center pt-8 pb-3 px-4 w-76 bg-stone-100 border border-stone-200 h-min rounded-lg md:px-8 hover:shadow-xl">
      <img src={imgurl} alt="" />
      <h1 className="font-semibold mt-5 text-xl">{title}</h1>
      <p class={` text-balance  ${!isExpand ? "line-clamp-4" : ""}`}>{desc}</p>
      <button onClick={toggelText} className=" text-orange-500 font-medium">
        {isExpand ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
