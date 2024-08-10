import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/bedroom_page_banner.jpg";
import HeartDesignDivider from "../components/HeartDesignDivider";
import { FAQsection } from "../components/FAQsection";

import master1 from "../assets/bedroom/Master_bedroom/Master-Bedroom-1.jpg";
import master2 from "../assets/bedroom/Master_bedroom/Master-Bedroom-2.jpg";
import master3 from "../assets/bedroom/Master_bedroom/Master-Bedroom-3.jpg";
import master4 from "../assets/bedroom/Master_bedroom/Master-Bedroom-4.jpg";
import master5 from "../assets/bedroom/Master_bedroom/Master-Bedroom-5.jpg";

import children1 from "../assets/bedroom/Children_bedroom/children-bed-1.jpg";
import children2 from "../assets/bedroom/Children_bedroom/children-bed-2.jpg";
import children3 from "../assets/bedroom/Children_bedroom/children-bed-3.jpg";
import children4 from "../assets/bedroom/Children_bedroom/children-bed-4.jpg";
import children5 from "../assets/bedroom/Children_bedroom/children-bed-5.png";
import children6 from "../assets/bedroom/Children_bedroom/children-bed-6.png";
import children7 from "../assets/bedroom/Children_bedroom/children-bed-7.png";

import ImageSlider from "../components/ImageSlider";
import useScrollToTop from "../Hooks/useScrollToTop";

export default function Beds() {
  useScrollToTop();
  const masterBedroomImages = [
    { imageUrl: master1 },
    { imageUrl: master2 },
    { imageUrl: master3 },
    { imageUrl: master4 },
    { imageUrl: master5 },
  ];

  const childrenBedroomImages = [
    { imageUrl: children1 },
    { imageUrl: children2 },
    { imageUrl: children3 },
    { imageUrl: children4 },
    { imageUrl: children5 },
    { imageUrl: children6 },
    { imageUrl: children7 },
  ];

  const faqData = [
    {
      srno: 1,
      ques: "What is modular bed design?",
      ans: "Modular bed design refers to a type of bed that can be customized and adapted to fit different spaces and needs. It typically consists of individual modules that can be combined and rearranged to create various configurations.",
    },
    {
      srno: 2,
      ques: "What are the advantages of modular bedroom furniture?",
      ans: "Modular bedroom furniture offers flexibility and versatility, allowing you to customize your space according to your preferences. It also provides efficient use of space and can easily adapt to changing needs.",
    },
    {
      srno: 3,
      ques: "How does odular be furniture differ from traditional bed furniture?",
      ans: "Modular bed furniture offers a more adaptable and customizable option compared to traditional bed furniture. It allows for easy reconfiguration and can be tailored to fit specific requirements.",
    },
    {
      srno: 4,
      ques: "What are some popular features of modern bedroom furniture design?",
      ans: "Modern bedroom furniture design often incorporates sleek, minimalist aesthetics, innovative storage solutions, and multifunctional elements to maximize space and functionality.",
    },
    {
      srno: 5,
      ques: "Can modular bedroom furnitures be disassembled and reassembled easily?",
      ans: "Yes, one of the key benefits of modular bedroom furniture is its ease of disassembly and reassembly, making it convenient for moving or reconfiguring the layout of the bedroom.",
    },
    {
      srno: 6,
      ques: "Is modular bed design suitable for small spaces?",
      ans: "Yes, modular bed design is well-suited for small spaces as it allows for efficient use of space and can be customized to fit the available area.",
    },
    {
      srno: 7,
      ques: "How can I customize my modular bedroom furniture?",
      ans: "Modular bedroom furniture can be customized through the selection of different modules, finishes, and accessories to create a personalized and functional design.",
    },
    {
      srno: 8,
      ques: "Are there specific design styles that well with modular bedroom furniture?",
      ans: "Modular bedroom furniture is versatile and can complement various design styles, including contemporary, minimalist, and Scandinavian, among others.",
    },
    {
      srno: 9,
      ques: "What should I consider when choosing modular bedroom furniture?",
      ans: "Consider factors such as the size and layout of your bedroom, your storage needs, and the overall aesthetic you want to achieve when selecting modular bedroom furniture.",
    },
    {
      srno: 10,
      ques: "Where can I find high-quality modular bedroom furniture?",
      ans: "At Kitchen décor, offers the best quality modular bedroom furniture. Kitchen décor is a specialist furniture designer and manufacturer specializing in Modern and Modular bedroom furniture.",
    },
  ];

  return (
    <div className="mt-[70px]">
      <Banner
        imageUrl={bannerImage}
        page={"Bedroom"}
        title={"A Reflection of you, Crafted by us!"}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col justify-center items-center text-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className=" text-2xl md:text-4xl font-semibold font-Lato text-center ">
            Experience Ultimate Comfort With Modular & Modern Bedroom Furniture
            Design
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg text-center">
            We design modern bedroom furniture to make beds so comforting that
            sleepless nights are an alien concept to the ones who use our beds.
            Excellently designed, perfectly sized, and aesthetically pleasing,
            our beds make you feel tempted to lay on them any time of the day.{" "}
            <br /> Kitchen décor offers you modern and modular bed designs that
            are adorned with class, comfort, and opulence. We design beds that
            are finely curated based on your needs and requirements. Explore a
            wide range of comfortable and well-crafted modular bed designs in
            different sizes, patterns, and styles at Kitchen décor in Pune.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-2 py-12 px-5  sm:px-14 md:px-20 xl:px-44 bg-neutral-100 ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Master Bedroom
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <div className="w-full">
          <ImageSlider images={masterBedroomImages} type={"Master"} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-2 py-12 px-5  sm:px-14 md:px-20 xl:px-44  ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Children's Bedroom
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <div className="w-full">
          <ImageSlider images={childrenBedroomImages} type={"Master"} />
        </div>
      </div>

      <FAQsection faqData={faqData} />
    </div>
  );
}
