import React from "react";
import { TbHeartHandshake } from "react-icons/tb";
export default function HeartDesignDivider({ color }) {
  return (
    <div className=" flex justify-center items-center gap-2">
      <hr className={`w-10 sm:w-16 md:w-24 border-b border-orange-500`} />
      <TbHeartHandshake
        className={`text-xl sm:text-2xl md:text-4xl text-${color}`}
      />
      <hr className={`w-10 sm:w-16 md:w-24 border-b border-orange-500`} />
    </div>
  );
}
