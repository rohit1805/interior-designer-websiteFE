import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/wardrobe_page_banner.jpg";
import HeartDesignDivider from "../components/HeartDesignDivider";
import ImageSlider from "../components/ImageSlider";

import wallMount1 from "../assets/tv_unit/wall_mount/Wall-Mounting-Unit-1.jpg";
import wallMount2 from "../assets/tv_unit/wall_mount/Wall-Mounting-Unit-2.jpg";
import wallMount3 from "../assets/tv_unit/wall_mount/Wall-Mounting-Unit-3.jpg";
import wallMount4 from "../assets/tv_unit/wall_mount/Wall-Mounting-Unit-4.jpg";
import wallMount5 from "../assets/tv_unit/wall_mount/Wall-Mounting-Unit-5.jpg";

import base1 from "../assets/tv_unit/base/Base-unit-1.jpg";
import base2 from "../assets/tv_unit/base/Base-unit-2.jpg";
import useScrollToTop from "../Hooks/useScrollToTop";

export const TVUnit = () => {
  useScrollToTop();
  const wallMountImages = [
    { imageUrl: wallMount1 },
    { imageUrl: wallMount2 },
    { imageUrl: wallMount3 },
    { imageUrl: wallMount4 },
    { imageUrl: wallMount5 },
  ];

  const baseUnitImages = [{ imageUrl: base1 }, { imageUrl: base2 }];
  return (
    <div className="mt-[70px]">
      <Banner
        imageUrl={bannerImage}
        page={"TV Unit"}
        title={"Adorned with Aesthetics, Equipped with Efficiency."}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col justify-center items-center text-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className=" text-2xl md:text-4xl font-semibold font-Lato text-center ">
            Transform Your Space with Modular TV Unit Designs
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg text-center">
            TV Unit designs that showcase minimalism and simplicity and let your
            fancy LED screen be the hero. Modern, chic, and adequate, our TV
            units give a contemporary outlook to your living room. <br /> Choose
            from an array of design options offered to you at Kitchen decor.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-2 py-12 px-5  sm:px-14 md:px-20 xl:px-44 bg-neutral-100 ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Wall Mounting Unit
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <div className="w-full">
          <ImageSlider images={wallMountImages} type={"Master"} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-2 py-12 px-5  sm:px-14 md:px-20 xl:px-44  ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Base Unit
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <div className="w-full">
          <ImageSlider images={baseUnitImages} type={"Master"} />
        </div>
      </div>

      {/* <FAQsection faqData={faqData} /> */}
    </div>
  );
};
