import React, { useState } from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import { FAQsAnsQues } from "./FAQsAnsQues";

export const WardrobeFAQsSection = () => {
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

  const faqData = [
    {
      srno: 1,
      ques: "What distinguishes modern wardrobe design from traditional options?",
      ans: "Modern wardrobe design stands out with its sleek lines, innovative features, and minimalist approach, offering a contemporary alternative to traditional, bulkier wardrobes.",
    },
    {
      srno: 2,
      ques: "Are modern wardrobes customizable to fit different room sizes?",
      ans: "Yes, modern wardrobes often come with customization options, allowing homeowners to adapt the wardrobe’s layout to fit varying room sizes and storage needs.",
    },
    {
      srno: 3,
      ques: "How can I seamlessly integrate a modern wardrobe with my existing home decor?",
      ans: "Achieving a seamless integration involves considering color schemes, materials, and design themes. Choose a modern wardrobe interior design that complements these elements for a harmonious look.",
    },
    {
      srno: 4,
      ques: "Can I incorporate sustainable practices in the manufacturing of modern wardrobes?",
      ans: "Absolutely. Many modern wardrobe manufacturers are adopting sustainable practices, using eco-friendly materials and production methods to reduce the environmental impact.",
    },
    {
      srno: 5,
      ques: "What lighting options are best for showcasing the feature of a modern wardrobe?",
      ans: "Integrated LED lights, sensor-controlled lighting, and strategically placed spotlights are ideal for highlighting the features of a modern wardrobe and creating an inviting ambiance.",
    },
    {
      srno: 6,
      ques: "Are there misconceptions about modern wardrobe design that need to be addressed?",
      ans: "Yes, common misconceptions include the idea that modern wardrobes lack storage space or that they only suit contemporary interiors. This section dispels such myths.",
    },
    {
      srno: 7,
      ques: "Can modular wardrobe design cater to specific storage need in large homes?",
      ans: "Absolutely. The versatility of modular wardrobe design allows for customization, making it an ideal solution for addressing specific storage needs in larger homes.",
    },
    {
      srno: 8,
      ques: "How do I choose the right materials for a modern wardrobe?",
      ans: "Consider factors such as durability, aesthetics, and sustainability when choosing materials for a modern wardrobe. This section guides on making an informed decision.",
    },
    {
      srno: 9,
      ques: "Are modern wardrobes suitable for small living spaces?",
      ans: "Yes, modern wardrobes are designed with space efficiency in mind. Sleek designs and clever storage solutions make them suitable for small living spaces.",
    },
    {
      srno: 10,
      ques: "What rare the drawbacks of opting for a modern wardribe design?",
      ans: "While modern wardrobes offer sleek aesthetics and innovative features, potential drawbacks include higher costs and the need for professional installation. This section explores both sides for a balanced perspective.",
    },
  ];
  return (
    <div className=" flex flex-col justify-center items-center py-8 px-5 lg:px-32">
      <h1 className=" text-3xl md:text-4xl font-semibold font-Lato">FAQs</h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className="flex flex-col gap-5 my-5 w-full">
        {faqData.map((data, index) => (
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
