import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export const FAQsAnsQues = ({ srno, ques, ans, expand, handleExpand }) => {
  console.log("expand value:" + expand);
  return (
    <div className="w-full">
      <div
        onClick={() => handleExpand(srno)}
        className={`flex justify-between items-center gap-2 bg-neutral-100  hover:bg-orange-500 transition-all hover:text-white px-5 py-3 font-medium w-full ${
          expand === srno ? "bg-orange-500 text-white" : ""
        }`}
      >
        <div className=" flex items-center gap-2">
          <p>{srno}.</p>
          <p>{ques}</p>
        </div>
        <div>{expand === srno ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      {expand == srno ? (
        <div className=" transition-all py-3 px-5 text-neutral-500">{ans}</div>
      ) : (
        ""
      )}
    </div>
  );
};
