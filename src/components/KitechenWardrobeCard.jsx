import React from "react";

export default function KitechenWardrobeCard({ imageUrl, title, desc }) {
  return (
    <div className="flex flex-col px-4 py-6 md:px-16 md:py-12 w-full md:w-11/12 bg-white rounded-2xl justify-center items-center gap-3 border border-neutral-200">
      <img src={imageUrl} alt="" className="px-8 py-2 md:px-0 md:py-0" />
      <h1 className=" text-xl md:text-3xl font-semibold mt-4">{title}</h1>
      <p className=" md:text-lg leading-tight text-neutral-700">{desc}</p>
    </div>
  );
}
