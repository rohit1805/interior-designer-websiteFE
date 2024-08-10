import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/wardrobe_page_banner.jpg";
import HeartDesignDivider from "../components/HeartDesignDivider";
import WardrobeStepSection from "../components/WardrobeStepSection";
import { WardrobeElements } from "../components/WardrobeElements";
import { WardrobeVersesSection } from "../components/WardrobeVersesSection";
import { WardrobeTypes } from "../components/WardrobeTypes";
import { WardrobeFAQsSection } from "../components/WardrobeFAQsSection";
import useScrollToTop from "../Hooks/useScrollToTop";

export const Wardrobe = () => {
  useScrollToTop();
  return (
    <div className="mt-[70px]">
      <Banner
        imageUrl={bannerImage}
        page={"Wardrobe"}
        title={"Elegant, Bespoke, Functional."}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col justify-center items-center text-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          {/* <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
      01
    </h1> */}
          <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
            Innovative Modular Wardrobe Designs, Greater impact!
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg text-center">
            Explore the perfect storage solution with our versatile modular
            wardrobe in Pune. Our modular and modern wardrobes are a true
            definition of efficiency and aesthetics. Keeping in mind popular
            needs and trends regarding storage and designing, we craft luxury
            wardrobe designs that serve as a perfect keeper of your valuable
            possessions. Our finest material and perfect modern wardrobe design
            can be easily witnessed in our work.
          </p>
        </div>
      </div>

      <WardrobeStepSection />
      <WardrobeElements />

      <WardrobeTypes />
      <WardrobeVersesSection />
      <WardrobeFAQsSection />
    </div>
  );
};
