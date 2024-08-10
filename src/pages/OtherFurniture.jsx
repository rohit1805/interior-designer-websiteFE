import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/OtherFurniture_page_banner.jpg";
import HeartDesignDivider from "../components/HeartDesignDivider";
import ImageSlider from "../components/ImageSlider";

import shoeRack1 from "../assets/other_furniture/shoe_rack/Shoe-Racks-nw-1.jpg";
import shoeRack2 from "../assets/other_furniture/shoe_rack/Shoe-Racks-nw-2.jpg";

import barTable1 from "../assets/other_furniture/bar_table/bar-1.jpg";
import barTable2 from "../assets/other_furniture/bar_table/bar-2.jpg";
import barTable3 from "../assets/other_furniture/bar_table/bar-3.jpg";

import console1 from "../assets/other_furniture/console_unit/Wardrobe-Console-1.jpg";
import console2 from "../assets/other_furniture/console_unit/Wardrobe-Console-2.jpg";
import console3 from "../assets/other_furniture/console_unit/Wardrobe-Console-3.jpg";
import console4 from "../assets/other_furniture/console_unit/Wardrobe-Console-4.jpg";

import dressing1 from "../assets/other_furniture/dressing_unit/Dressing-units-1.jpg";
import dressing2 from "../assets/other_furniture/dressing_unit/Dressing-units-2.jpg";
import dressing3 from "../assets/other_furniture/dressing_unit/Dressing-units-3.jpg";

import storage1 from "../assets/other_furniture/storage_unit/Extra-Storage-units-1.jpg";
import storage2 from "../assets/other_furniture/storage_unit/Extra-Storage-units-2.jpg";
import storage3 from "../assets/other_furniture/storage_unit/Extra-Storage-units-3.jpg";
import storage4 from "../assets/other_furniture/storage_unit/Extra-Storage-units-4.jpg";

import library1 from "../assets/other_furniture/home_library/Home-Library-1.jpg";
import library2 from "../assets/other_furniture/home_library/Home-Library-2.jpg";
import library3 from "../assets/other_furniture/home_library/Home-Library-3.jpg";
import useScrollToTop from "../Hooks/useScrollToTop";

export const OtherFurniture = () => {
  useScrollToTop();
  const shoeRackImages = [{ imageUrl: shoeRack1 }, { imageUrl: shoeRack2 }];
  const barTableImages = [
    { imageUrl: barTable1 },
    { imageUrl: barTable2 },
    { imageUrl: barTable3 },
  ];
  const consoleUnitImages = [
    { imageUrl: console1 },
    { imageUrl: console2 },
    { imageUrl: console3 },
    { imageUrl: console4 },
  ];
  const dressingUnitImages = [
    { imageUrl: dressing1 },
    { imageUrl: dressing2 },
    { imageUrl: dressing3 },
  ];
  const storageUnitImages = [
    { imageUrl: storage1 },
    { imageUrl: storage2 },
    { imageUrl: storage3 },
    { imageUrl: storage4 },
  ];
  const libraryUnitImages = [
    { imageUrl: library1 },
    { imageUrl: library2 },
    { imageUrl: library3 },
  ];

  return (
    <div className="mt-[70px]">
      <Banner
        imageUrl={bannerImage}
        page={"Other Furniture"}
        title={"Transforming spaces into Art."}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col justify-center items-center text-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className=" text-2xl md:text-4xl font-semibold font-Lato text-center ">
            Top Luxurious Modular Furniture Manufacturer in Pune.
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg text-center">
            Kitchen décor is the leading modular furniture manufacturer in Pune,
            crafts other essential furniture that a stylish and modern home
            demands. We offer all the home decor and essential furniture
            interior that shall add some element to your home and give it an
            altogether authentic look. Be it primary furniture like luxury
            modular kitchens or modern wardrobes or secondary like shoe racks or
            bar tables, Kitchen décor has an eye for the details.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-2 py-10 px-5  sm:px-14 md:px-20 xl:px-44 bg-neutral-100 ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Shoe Racks
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mb-3 text-neutral-700 leading-snug md:text-lg text-center">
          Our shoe racks are bespoke, functional, and vogue. We provide
          customized shoe rack cabinets that perfectly cater to one’s demands,
          needs, and personal tastes. Our shoe racks always offer extra space
          for your pair of shoes. Explore a wide range of designs and patterns
          at Kitchen décor, leading furniture company in Pune.
        </p>
        <div className="w-full">
          <ImageSlider images={shoeRackImages} type={"Master"} />
        </div>
      </div>

      {/* BAR TABLE */}
      <div className="flex flex-col justify-center items-center text-center gap-2 py-10 px-5  sm:px-14 md:px-20 xl:px-44  ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Bar Table
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mb-3 text-neutral-700 leading-snug md:text-lg text-center">
          Do you enjoy having a drink at home and would rather fancy having your
          very own bar table? Kitchen decor crafts you a stylish and compact bar
          table to hold all your favourite and imported bottles. We offer
          customized designs, styles, and sizes depending on one’s needs. A
          perfect piece to add aesthetics to your home as well as a perfect
          holder of your collection..
        </p>
        <div className="w-full">
          <ImageSlider images={barTableImages} type={"Master"} />
        </div>
      </div>

      {/*Console unit*/}
      <div className="flex flex-col justify-center items-center text-center gap-2 py-10 px-5  sm:px-14 md:px-20 xl:px-44  bg-neutral-100 ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Console unit
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mb-3 text-neutral-700 leading-snug md:text-lg text-center">
          Adorn your home with our stylish, classy, and elegant Console unit.
          Minimally designed and with a modern outlook, our console tables give
          an aesthetic touch to your walk-in wardrobe and is a perfect holder of
          your precious accessories.
        </p>
        <div className="w-full">
          <ImageSlider images={consoleUnitImages} type={"Master"} />
        </div>
      </div>

      {/*Dressing units*/}
      <div className="flex flex-col justify-center items-center text-center gap-2 py-10 px-5  sm:px-14 md:px-20 xl:px-44   ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Dressing units
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mb-3 text-neutral-700 leading-snug md:text-lg text-center">
          Let your dressing unit be as elegant as you. Choose from a wide range
          of patterns, designs, and sizes at Kitchen decor.
        </p>
        <div className="w-full">
          <ImageSlider images={dressingUnitImages} type={"Master"} />
        </div>
      </div>

      {/*Storage units*/}
      <div className="flex flex-col justify-center items-center text-center gap-2 py-10 px-5  sm:px-14 md:px-20 xl:px-44  bg-neutral-100 ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Storage units
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mb-3 text-neutral-700 leading-snug md:text-lg text-center">
          A multi-functional storage piece ensures that you have enough space
          for everything in your home. Be it an extra pair of clothing, a couple
          of books, or a few extra utensils in the kitchen, our multifunctional
          storage unit will offer to keep it properly. Explore an array of
          designs and patterns of storage units according to your needs and
          requirements at Kitchen décor is your go to modular home furniture
          manufacturers in Pune.
        </p>
        <div className="w-full">
          <ImageSlider images={storageUnitImages} type={"Master"} />
        </div>
      </div>

      {/*Home Library*/}
      <div className="flex flex-col justify-center items-center text-center gap-2 py-10 px-5  sm:px-14 md:px-20 xl:px-44 ">
        <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
          Home Library
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mb-3 text-neutral-700 leading-snug md:text-lg text-center">
          Kitchen decor offers you your own personalized home library. A stylish
          and voguish holder for your precious collection of books.
        </p>
        <div className="w-full">
          <ImageSlider images={libraryUnitImages} type={"Master"} />
        </div>
      </div>

      {/* <FAQsection faqData={faqData} /> */}
    </div>
  );
};
