import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/about_us_page_banner.jpg";
import experienceLogo from "../assets/25-Years-Logo.png";
import HeartDesignDivider from "../components/HeartDesignDivider";
import ImageSlider from "../components/ImageSlider";
export const AboutUs = () => {
  return (
    <div className="mt-[75px]">
      <Banner
        imageUrl={bannerImage}
        page={"About Us"}
        title={"Creating a legacy of smart designs."}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 my-12 px-5  sm:px-14 md:px-20 xl:px-32 w-full">
          <img
            src={experienceLogo}
            alt="experienceLogo"
            className="w-5/12 md:w-4/12"
          />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg text-center md:w-7/12">
            The Inception of Kitchen décor took place in 1999 with the goal of
            providing personalized Indian Kitchens using European precision.{" "}
            <br /> <br /> Kitchen décor has become a leading name in the modular
            kitchen industry, with the experience and knowledge it has acquired
            and pioneering innovative home solutions way ahead of their time. We
            have played a leading role in the development of modular kitchen
            sector through constantly improving its technology-based aspects,
            never forgetting to maintain the aesthetics. Kitchen décor today, is
            synonymous to elegant convenience, highest precision and trustworthy
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};
