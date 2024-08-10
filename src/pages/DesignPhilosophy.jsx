import { TbHeartHandshake } from "react-icons/tb";
import React, { useState } from "react";
import banner from "../assets/pages_banner/design_philosophy_banner.jpg";
import { Link } from "react-router-dom";
import HeartDesignDivider from "../components/HeartDesignDivider";
import kitchen_icon from "../assets/button_icons/kitchen.png";
import wardrobe_icon from "../assets/button_icons/wardrobe.png";
import kitchen_image_1 from "../assets/applying_ergonomics/kitchen_1.svg";
import kitchen_image_2 from "../assets/applying_ergonomics/kitchen_2.svg";
import kitchen_image_3 from "../assets/applying_ergonomics/kitchen_3.svg";
import kitchen_image_4 from "../assets/applying_ergonomics/kitchen_4.svg";
import wardrobe_image_1 from "../assets/applying_ergonomics/wardrobe_1.svg";
import wardrobe_image_2 from "../assets/applying_ergonomics/wardrobe_2.svg";
import zoning_image_1 from "../assets/zoning_workflow/Zoning-Workflow-1.jpg";
import zoning_image_2 from "../assets/zoning_workflow/Zoning-Workflow-2.png";
import zoning_image_2_1 from "../assets/zoning_workflow/Zoning-Workflow-2-1.png";
import KitechenWardrobeCard from "../components/KitechenWardrobeCard";
import KitchenPlanningStorage from "../components/KitchenPlanningStorage";
import WardrobePlanningStorage from "../components/WardrobePlanningStorage";
import coordinatingImage1 from "../assets/coordinating_elements_images/coordinating-elements-1.png";
import coordinatingImage2 from "../assets/coordinating_elements_images/coordinating-elements-2.png";
import coordinatingImage3 from "../assets/coordinating_elements_images/coordinating-elements-3.png";
import coordinatingImage4 from "../assets/coordinating_elements_images/coordinating-elements-4.png";
import coordinatingImage5 from "../assets/coordinating_elements_images/coordinating-elements-5.png";
import coordinatingImage6 from "../assets/coordinating_elements_images/coordinating-elements-6.png";
import coordinatingImage7 from "../assets/coordinating_elements_images/coordinating-elements-7.png";
import coordinatingImage8 from "../assets/coordinating_elements_images/coordinating-elements-8.png";
import Banner from "../components/Banner";
import useScrollToTop from "../Hooks/useScrollToTop";

export default function DesignPhilosophy() {
  const [applyingErgonomicsCategory, setApplyingErgonomicsCategory] =
    useState("kitchen");

  useScrollToTop();

  const kitchenCardData = [
    {
      image: kitchen_image_1,
      title: "Giving your wall unit the right depth",
      desc: "Ideally the depth of the wall unit should not be more than 300 mm otherwise you may end up banging your head on it everytime.",
    },
    {
      image: kitchen_image_2,
      title: "Choose lift-ups over hinged shutters",
      desc: "Lift-ups are more convenient and manageable than the hinged shutters. Hinged shutters are often cumbersome and require constant closing and opening. Also, more often than not, there’s a possibility of you bumping into it, if let open. Whereas. Lift ups are easy to use as they move up and out of the way and can be left open while cooking. It makes it easier to view or remove items from lift ups while cooking.",
    },
    {
      image: kitchen_image_3,
      title: "Giving your countertop the right height",
      desc: "It is very important for the countertop to have the right height for the person to be comfortable while cooking. There should be a right amount of gap between the worktop and the  elbow which is around 10-15 cm.",
    },
    {
      image: kitchen_image_4,
      title: "Choose drawers over cupboards",
      desc: "Removing things from cupboards can be quite a task and tedious at times. Also, stretching to reach for things that may be kept into the cupboards may cause back problems or other health problems. Hence, choosing drawers over cupboards can prove to be beneficial any day. The full extension option that the drawer offers makes it more convenient and makes pulling anything out, or reaching to the back of the drawer, easy and painless.",
    },
  ];

  const wrdrobeCardData = [
    {
      image: wardrobe_image_1,
      title: "Choose drawers over cupboards",
      desc: "It is often difficult to stretch and reach into the back of cupboards, and sometimes painful too…especially for your back. Choose drawers and a full extension option to make pulling anything out, or reaching to the back of the drawer, easy and painless.",
    },
    {
      image: wardrobe_image_2,
      title: "Optimize Wardrobe Heights for Ease of Use",
      desc: "Ensuring your wardrobe's dimensions are optimized for daily use can significantly enhance accessibility and convenience. Design separate sections for frequently used items and less frequently used or seasonal items. For instance, placing daily wear at a reachable height reduces the need for constant bending or stretching. This layout makes your wardrobe more ergonomic, catering to different user heights and maximizing space efficiency.",
    },
  ];

  return (
    <div className="mt-[70px]">
      {/* banner */}
      <div className="relative">
        <img src={banner} alt="" className=" brightness-50 " />
        <div className=" flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 text-white">
          <h4 className=" text-sm sm:text-lg md:text-2xl font-Lato font-semibold">
            TOUCH WOOD
          </h4>
          <div className=" flex justify-center items-center gap-2">
            <hr className="w-10 sm:w-16 md:w-24 border-b border-white" />
            <TbHeartHandshake className="text-xl sm:text-2xl md:text-4xl" />
            <hr className="w-10 sm:w-16 md:w-24 border-b border-white" />
          </div>
          <h1 className=" text-3xl sm:text-5xl md:text-7xl font-Lilita_One">
            Design Philosophy
          </h1>
          <div className="flex justify-center items-center gap-1 sm:pt-2 md:pt-4">
            <Link to={"/"}>
              <p className=" text-sm sm:text-lg md:text-2xl  font-semibold">
                Home
              </p>
            </Link>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-3 sm:size-4 md:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p className=" text-sm sm:text-lg md:text-2xl font-semibold">
              Design Philosophy
            </p>
          </div>
        </div>
      </div>
      {/* <Banner imageUrl={banner} title={"Design Philosophy"} /> */}
      <div className=" flex flex-col justify-center items-center ">
        {/* <div className="relative">
          <img src={banner} alt="" className=" brightness-50 " />
          <div className=" flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 text-white">
            <h4 className=" text-sm sm:text-lg md:text-2xl font-Lato font-semibold">
              TOUCH WOOD
            </h4>
            <div className=" flex justify-center items-center gap-2">
              <hr className="w-10 sm:w-16 md:w-24 border-b border-white" />
              <TbHeartHandshake className="text-xl sm:text-2xl md:text-4xl" />
              <hr className="w-10 sm:w-16 md:w-24 border-b border-white" />
            </div>
            <h1 className=" text-3xl sm:text-5xl md:text-7xl font-Lilita_One">
              Design Philosophy
            </h1>
            <div className="flex justify-center items-center gap-1 sm:pt-2 md:pt-4">
              <Link to={"/"}>
                <p className=" text-sm sm:text-lg md:text-2xl  font-semibold">
                  Home
                </p>
              </Link>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-3 sm:size-4 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className=" text-sm sm:text-lg md:text-2xl font-semibold">
                Design Philosophy
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center gap-1 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className=" text-4xl text-center font-semibold font-Lato ">
            Our Design Philosophy
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className="text-center mt-5 text-neutral-700 leading-snug md:text-lg">
            Plan your space more efficiently with Kitchen decor. Our main motto
            is to offer you a space that is finely designed, smartly planned,
            aesthetically pleasing, and at the same time catering to all your
            needs and requirements. At Kitchen decor, we ensure this with the
            help of our “Design Philosophy”. By executing the 5 main aspects of
            this philosophy, we understand you better, study your needs better,
            and are able to deliver a product that suits your expectations and
            requirements better. So, embrace a systematic and creative approach
            to designing spaces with Kitchen decor.
          </p>
        </div>

        {/* STEP-1 */}
        <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
            01
          </h1>
          <h1 className=" text-3xl font-semibold font-Lato ">
            Assembling Needs
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
            At Kitchen decor, YOU are our greatest inspiration. Hence, we try to
            understand you and your needs better. In order to offer you a
            product that is best suited to your needs, we provide you with a
            detailed questionnaire. This gathered information caters to all the
            minutest doubts and questions that we may have. Also, it propels you
            to think deeper and decide on what exactly you want from us. This
            step facilitates effective communication and sets a strong
            foundation for the further process of designing. <br />
            We want to enhance and improve the experience that you will have
            with our products. Hence, to ensure this we create a record of
            detailed information that will help us to plan your space better.
            The questions range from your design preferences to how much time
            will you be spending in that space, your purpose of using the space,
            your personal habits etc. This will enable us to mould the space
            that perfectly suits your needs and requirements. This step will
            narrow down your search and help us render you a joyful and
            stress-free user experience.
          </p>
        </div>

        {/* STEP-2 */}
        <div className="flex flex-col justify-center items-center gap-2 py-12 bg-neutral-100 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
            02
          </h1>
          <h1 className=" text-3xl font-semibold font-Lato ">
            Applying Ergonomics
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
            A perfect designed space is the one that is efficient and sparks
            comfort in every corner. Our design team ensures that all our
            products are crafted in a way that ensures to optimise movements and
            avoid any unnatural postures that may cause health problems. So now
            no more unnecessary bending, stretching or bumping. Our designs
            facilitate the principle of comfort, ease and are user friendly.
            <br />
            The application of ergonomics for designing a space for you will
            transform your overall experience with a particular space. From the
            depth of the wall unit to organizing storage spaces in your kitchen,
            Kitchen decor carefully plans everything to give you a painless and
            trouble free experience.
          </p>
          <div className="flex  md:gap-4 items-center justify-center my-5">
            <button
              onClick={() => setApplyingErgonomicsCategory("kitchen")}
              className={` flex gap-3 font-semibold justify-center items-center py-2 px-4 rounded-full  w-40 ${
                applyingErgonomicsCategory == "kitchen"
                  ? " bg-white border shadow-xl shadow-orange-200"
                  : ""
              }  `}
            >
              {" "}
              <img src={kitchen_icon} alt="" className="w-6" />
              Kitchen
            </button>
            <button
              onClick={() => setApplyingErgonomicsCategory("wardrobe")}
              className={` flex gap-3 font-semibold justify-center items-center py-2 px-4 rounded-full  w-40 ${
                applyingErgonomicsCategory == "wardrobe"
                  ? " bg-white border shadow-xl shadow-orange-200"
                  : ""
              }  `}
            >
              {" "}
              <img src={wardrobe_icon} alt="" className="w-6" />
              Wardrobe
            </button>
          </div>
          <div className=" mt-8">
            {applyingErgonomicsCategory == "kitchen" ? (
              <div className="flex flex-col gap-10 justify-center items-center">
                {" "}
                {kitchenCardData.map((data, i) => (
                  <KitechenWardrobeCard
                    key={i}
                    imageUrl={data.image}
                    title={data.title}
                    desc={data.desc}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-10 justify-center items-center">
                {wrdrobeCardData.map((data, i) => (
                  <KitechenWardrobeCard
                    key={i}
                    imageUrl={data.image}
                    title={data.title}
                    desc={data.desc}
                  />
                ))}
              </div>
            )}
            {/* {kitchenCardData.map((data, i) => (
            <KitechenWardrobeCard
              key={i}
              imageUrl={data.image}
              title={data.title}
              desc={data.desc}
            />
          ))} */}
            {/* {wrdrobeCardData.map((data, i) => (
            <KitechenWardrobeCard
              key={i}
              imageUrl={data.image}
              title={data.title}
              desc={data.desc}
            />
          ))} */}
          </div>
        </div>

        {/* STEP - 3 */}
        <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
            03
          </h1>
          <h1 className=" text-3xl font-semibold font-Lato ">
            Zoning And Workflow
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 leading-snug md:text-lg text-neutral-700">
            In order to make your space and life even more comfortable and
            convenient, Kitchen decor goes a step further and implements the
            concept of zoning. This method SAVES TIME, SHORTENS DISTANCE and
            ensures SMART STORAGE in every corner. It can save your time by
            almost 25%.
          </p>
          <div className="my-4 flex flex-col justify-center items-center gap-8 w-full">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-3 bg-neutral-100 border border-neutral-200 py-3 px-3 md:py-5 md:px-5 rounded-3xl">
              <div>
                <h1 className=" text-lg font-semibold">
                  5-Zone Design Principle for Kitchens
                </h1>
                <p className=" leading-tight md:text-lg text-neutral-700">
                  Using 5 zone design principle, Kitchen decor crafts kitchens
                  that are more efficient, functional and time saving.In this
                  process, your kitchen is divided into 5 zones including
                  Consumable zone, Non-consumable zone, Cleaning zone,
                  Preparation zone, and Cooking area. Each zone has storage
                  space which is task specific so that you don’t have to keep
                  moving to grab that essential ingredient, you may have
                  forgotten to add.
                </p>
              </div>
              <img
                src={zoning_image_1}
                alt=""
                className="rounded-xl md:w-5/12"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 bg-neutral-100 border border-neutral-200 py-3 px-3 md:py-5 md:px-5 rounded-3xl">
              <img src={zoning_image_2} alt="" className=" md:hidden" />
              <img
                src={zoning_image_2_1}
                alt=""
                className="hidden md:block rounded-3xl md:w-4/12"
              />
              <div>
                <h1 className=" text-lg font-semibold leading-tight">
                  3 Zone Design Philosophy for Wardrobes
                </h1>
                <p className=" leading-tight md:text-lg text-neutral-700">
                  The 3 zone design principle for wardrobes is here to make your
                  daily getting ready process easier and quicker. <br />
                  In this process, we divide your wardrobe into 3 zones:
                  <br />
                  <span className=" font-semibold">Daily Zone: </span> This part
                  of the wardrobe shall carry all your mostly used clothes and
                  necessities. This section will be placed in a way which is
                  easily accessible and avoids any bending or stretching on your
                  part. <br />{" "}
                  <span className=" font-semibold"> Frequent Zone: </span> This
                  zone will bear all the essentials necessities that you may use
                  on a daily basis. <br />
                  <span className=" font-semibold">Seasonal Zone: </span>
                  This section of the cupboard is the one that has the least
                  visits from you. It shall include all your party wears,
                  seasonal wears, accessories and things that you seldom use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STEP - 4 */}
        <div className="flex flex-col justify-center items-center gap-2 py-12 bg-neutral-100 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
            04
          </h1>
          <h1 className=" text-3xl font-semibold font-Lato ">
            Planning Storage
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 leading-snug md:text-lg text-neutral-700">
            A well organized space can make life way more easier and simpler. At
            Kitchen decor, we understand that storage is an essential part of
            any space and hence we take extra measures to provide you with a
            storage space that can bear all your needs and requirements. Be it
            planning your kitchen or designing your wardrobe, your personal
            information along with your requirements and other basic factors are
            taken into consideration. Our designers also come up with some
            unique storage ideas tailored just for you.
          </p>

          <div className="flex  md:gap-4 items-center justify-center my-5">
            <button
              onClick={() => setApplyingErgonomicsCategory("kitchen")}
              className={` flex gap-3 font-semibold justify-center items-center py-2 px-4 rounded-full  w-40 ${
                applyingErgonomicsCategory == "kitchen"
                  ? " bg-white border shadow-xl shadow-orange-200"
                  : ""
              }  `}
            >
              {" "}
              <img src={kitchen_icon} alt="" className="w-6" />
              Kitchen
            </button>
            <button
              onClick={() => setApplyingErgonomicsCategory("wardrobe")}
              className={` flex gap-3 font-semibold justify-center items-center py-2 px-4 rounded-full  w-40 ${
                applyingErgonomicsCategory == "wardrobe"
                  ? " bg-white border shadow-xl shadow-orange-200"
                  : ""
              }  `}
            >
              {" "}
              <img src={wardrobe_icon} alt="" className="w-6" />
              Wardrobe
            </button>
          </div>
          <div className=" mt-8">
            {applyingErgonomicsCategory == "kitchen" ? (
              <KitchenPlanningStorage />
            ) : (
              <WardrobePlanningStorage />
            )}
          </div>
        </div>

        {/* STEP - 5 */}
        <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
            05
          </h1>
          <h1 className=" text-3xl font-semibold font-Lato ">
            Co-ordinating Elements
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 leading-snug md:text-lg text-neutral-700">
            Apart from being functionally apt and efficient, a space has to look
            aesthetically pleasing and appealing. More often than not, your
            expectations of what a certain space would look doesn’t match the
            reality of how it comes out to be. Our designers bear detailed
            knowledge of colour palettes, textures and other elements of
            designs. They will be able to give insights on these matters and
            help you envision the results of how the space may look like in the
            end. Our team makes sure to coordinate all the elements while
            designing a space for you. This enables us to give you a better idea
            of how your space will look as a whole after finishing. Kitchen
            decor crafts you a beautiful space by carefully knitting all the
            factors and coordinating essential elements to render you a space
            adorned with aesthetics and beauty.
          </p>
          <div className=" ">
            {/* upper part */}
            <div className=" md:flex gap-5">
              {/* left side */}
              <div>
                <img src={coordinatingImage1} alt="" className="w-full mt-4" />
              </div>

              {/* right side */}
              <div>
                {/* upper */}
                <div className="md:flex gap-5">
                  <img
                    src={coordinatingImage2}
                    alt=""
                    className="w-full mt-4 md:w-7/12 md:h-min"
                  />
                  <img
                    src={coordinatingImage3}
                    alt=""
                    className="w-full mt-4  md:w-min md:h-80"
                  />
                </div>

                {/* lower  */}
                <div className="md:flex gap-5">
                  <img
                    src={coordinatingImage4}
                    alt=""
                    className="w-full mt-4 md:w-6/12 md:h-60"
                  />
                  <img
                    src={coordinatingImage5}
                    alt=""
                    className="w-full mt-4 md:w-6/12 md:h-60"
                  />
                </div>
              </div>
            </div>
            {/* lower part */}
            <div className="md:flex gap-5">
              <div className=" md:w-1/2">
                <img src={coordinatingImage6} alt="" className="w-full mt-4" />
              </div>
              <div className="md:flex md:w-1/2 gap-5">
                <img
                  src={coordinatingImage7}
                  alt=""
                  className="w-full mt-4 md:w-1/2"
                />
                <img
                  src={coordinatingImage8}
                  alt=""
                  className="w-full mt-4 md:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
