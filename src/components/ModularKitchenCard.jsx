import React from "react";

export const ModularKitchenCard = ({ image, title }) => {
  return (
    <div className="border text-neutral-500 hover:bg-neutral-100 hover:text-black border-neutral-200 hover:border-neutral-400 rounded-md text-lg font-semibold flex flex-col justify-center items-center gap-8 p-7">
      <img src={image} alt="" className="h-36" />
      <h1 className="">{title}</h1>
    </div>
  );
};
