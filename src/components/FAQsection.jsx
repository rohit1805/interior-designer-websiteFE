import React, { useState } from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import { FAQsAnsQues } from "./FAQsAnsQues";

export const FAQsection = ({ faqData }) => {
  const [expand, setExpand] = useState(0);

  const handleExpand = (srno) => {
    if (expand === srno) {
      setExpand(0);
    } else {
      setExpand(srno);
    }
    console.log("expand value: ", expand);
    console.log("srno value: ", srno);
  };

  return (
    <div className=" flex flex-col justify-center items-center py-8 px-5 lg:px-32">
      <h1 className=" text-3xl md:text-4xl font-semibold font-Lato">FAQs</h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className="flex flex-col gap-5 my-5 w-full">
        {faqData &&
          faqData.map((data, index) => (
            <FAQsAnsQues
              key={index}
              srno={data.srno}
              ques={data.ques}
              ans={data.ans}
              expand={expand}
              handleExpand={handleExpand}
            />
          ))}
      </div>
    </div>
  );
};
