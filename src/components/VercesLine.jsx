import React from "react";

export const VercesLine = ({ left, right }) => {
  console.log("verses Line");
  return (
    <div className="flex flex-col lg:flex-row justify-center w-80  sm:w-full bg-white py-2 px-2 rounded-lg lg:rounded-full border border-stone-200">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="w-[300px] lg:w-[500px] text-center lg:text-right text-neutral-600 lg:pl-5">
          {left}
        </div>
        <div className=" bg-orange-500 flex justify-center items-center text-white font-bold h-10 w-10 rounded-full shadow-lg shadow-stone-500 text-lg">
          VS
        </div>
        <div className="w-[300px] lg:w-[500px] text-center lg:text-left  text-neutral-600 lg:pr-5">
          {right}
        </div>
      </div>
    </div>
  );
};
