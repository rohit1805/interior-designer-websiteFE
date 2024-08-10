import React, { useState } from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import KitechenWardrobeCard from "./KitechenWardrobeCard";

import kitchen_image_1 from "../assets/applying_ergonomics/kitchen_1.svg";
import kitchen_image_2 from "../assets/applying_ergonomics/kitchen_2.svg";
import kitchen_image_3 from "../assets/applying_ergonomics/kitchen_3.svg";
import kitchen_image_4 from "../assets/applying_ergonomics/kitchen_4.svg";
import KitchenPlanningStorage from "./KitchenPlanningStorage";

export default function KitchenStepSection() {
  const [section, setSection] = useState(1);

  const kitchenCardData = [
    {
      image: kitchen_image_1,
      title: "Giving your wall unit the right depth",
      desc: "Ideally the depth of the wall unit should not be more than 300 mm otherwise you may end up banging your head on it everytime.",
    },
    {
      image: kitchen_image_3,
      title: "Giving your countertop the right height",
      desc: "It is very important for the countertop to have the right height for the person to be comfortable while cooking. There should be a right amount of gap between the worktop and the  elbow which is around 10-15 cm.",
    },
    {
      image: kitchen_image_2,
      title: "Choose lift-ups over hinged shutters",
      desc: "Lift-ups are more convenient and manageable than the hinged shutters. Hinged shutters are often cumbersome and require constant closing and opening. Also, more often than not, there’s a possibility of you bumping into it, if let open. Whereas. Lift ups are easy to use as they move up and out of the way and can be left open while cooking. It makes it easier to view or remove items from lift ups while cooking.",
    },

    {
      image: kitchen_image_4,
      title: "Choose drawers over cupboards",
      desc: "Removing things from cupboards can be quite a task and tedious at times. Also, stretching to reach for things that may be kept into the cupboards may cause back problems or other health problems. Hence, choosing drawers over cupboards can prove to be beneficial any day. The full extension option that the drawer offers makes it more convenient and makes pulling anything out, or reaching to the back of the drawer, easy and painless.",
    },
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 my-10 mx-4">
        <h1 className=" text-4xl  font-semibold font-Lato text-center my-2">
          Our Process for Modular Kitchen
        </h1>
        <HeartDesignDivider color={"orange-500"} />

        <div className="flex flex-col md:flex-row justify-between mt-5 items-center mx-10 w-full h-max md:h-28 gap-1">
          <button
            onClick={() => setSection(1)}
            className={` flex flex-row justify-around   font-Lato  items-center hover:bg-orange-500 hover:text-white  border border-neutal-500  w-full h-full gap-2 ${
              section === 1 ? " bg-orange-500 text-white" : " text-neutral-400"
            } `}
          >
            <h1 className="text-4xl font-semibold w-3/12">01</h1>{" "}
            <p className="text-2xl font-semibold w-7/12">
              Assembling <br /> Needs
            </p>
          </button>
          <button
            onClick={() => setSection(2)}
            className={` flex flex-row justify-around   font-Lato  items-center hover:bg-orange-500 hover:text-white  border border-neutal-500  w-full h-full gap-2 ${
              section === 2 ? " bg-orange-500 text-white" : " text-neutral-400"
            } `}
          >
            <h1 className="text-4xl font-semibold w-3/12">02</h1>{" "}
            <p className="text-2xl font-semibold w-7/12">Applying Ergonomics</p>
          </button>
          <button
            onClick={() => setSection(3)}
            className={` flex flex-row justify-around   font-Lato  items-center hover:bg-orange-500 hover:text-white  border border-neutal-500  w-full h-full gap-2 ${
              section === 3 ? " bg-orange-500 text-white" : " text-neutral-400"
            } `}
          >
            <h1 className="text-4xl font-semibold w-3/12">03</h1>{" "}
            <p className="text-2xl font-semibold w-7/12">
              Zoning & <br /> Workflow
            </p>
          </button>
          <button
            onClick={() => setSection(4)}
            className={` flex flex-row justify-around   font-Lato  items-center hover:bg-orange-500 hover:text-white  border border-neutal-500  w-full h-full gap-2 ${
              section === 4 ? " bg-orange-500 text-white" : " text-neutral-400"
            } `}
          >
            <h1 className="text-4xl font-semibold w-3/12">04</h1>{" "}
            <p className="text-2xl font-semibold w-7/12">
              Planning <br /> Storage
            </p>
          </button>
          <button
            onClick={() => setSection(5)}
            className={` flex flex-row justify-around   font-Lato  items-center hover:bg-orange-500 hover:text-white  border border-neutal-500  w-full h-full gap-2 ${
              section === 5 ? " bg-orange-500 text-white" : " text-neutral-400"
            } `}
          >
            <h1 className="text-4xl font-semibold w-3/12">05</h1>{" "}
            <p className="text-2xl font-semibold w-7/12">
              Coordinating Elements
            </p>
          </button>
        </div>
      </div>

      <div>
        {section === 1 ? (
          <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
            <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
              01
            </h1>
            <h1 className=" text-3xl font-semibold font-Lato ">
              Assembling Needs
            </h1>
            <HeartDesignDivider color={"orange-500"} />
            <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
              A kitchen should be such that very effortlessly molds into your
              needs and requirements. A place that should enhance the joy of
              cooking for you and your family. For this, it is important for us
              to know exactly what you want and expect from your new kitchen and
              us. At Kitchen decor, we ensure this by studying a detailed
              questionnaire that shall be filled by you. This gathered
              information caters to all the minutest doubts and questions that
              we may have. Also, it propels you to think deeper and decide on
              what exactly you want from us. This step facilitates a smoother
              and more accurate working process further and allows us to build
              you the best modern kitchen design that suits your needs.
            </p>
          </div>
        ) : section === 2 ? (
          <div className="flex flex-col justify-center items-center gap-2  px-5 py-5 sm:px-14 md:px-32 xl:px-64">
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
              products are crafted in a way that ensures to optimise movements
              and avoid any unnatural postures that may cause health problems.
              So now no more unnecessary bending, stretching or bumping. Our
              designs facilitate the principle of comfort, ease and are user
              friendly.
              <br />
              The application of ergonomics for designing a space for you will
              transform your overall experience with a particular space. From
              the depth of the wall unit to organizing storage spaces in your
              kitchen, Kitchen decor carefully plans everything to give you a
              painless and trouble free experience.
            </p>

            <div className=" mt-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3 ">
                {kitchenCardData.map((data, i) => (
                  <KitechenWardrobeCard
                    key={i}
                    imageUrl={data.image}
                    title={data.title}
                    desc={data.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : section === 3 ? (
          <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64 ">
            <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
              03
            </h1>
            <h1 className=" text-3xl font-semibold font-Lato ">
              Zoning & Workflow
            </h1>
            <HeartDesignDivider color={"orange-500"} />
            <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
              To make your life easier and the cooking process hassle-free, we
              introduce to you the 5 Zone Design Principles. Using this process,
              we divide your kitchen into 5 essential zones to simplify your
              sequence of workflow and make it swift and smooth. It’s time that
              your luxury modern kitchen gets smarter too. <br />
              <span className="text-black font-semibold">The 5 zones are:</span>
              <br /> <br />
              <span className="text-black font-semibold">
                Consumable zone:{" "}
              </span>
              Includes area and appliances for your food, refrigerator, grain
              cabinets, drawers, etc. <br /> <br />
              <span className="text-black font-semibold">
                Non-consumable zone:
              </span>
              Includes your colanders, crockery, utensils, glasses, etc.
              <br /> <br />
              <span className="text-black font-semibold">Cleaning zone: </span>
              Includes your sink and dishwasher. The garbage unit is also placed
              here. <br /> <br />
              <span className="text-black font-semibold">
                Preparation zone:{" "}
              </span>
              Your cooking preparation happens here, it includes chopping and
              mixing implements <br /> <br />
              <span className="text-black font-semibold">Cooking zone: </span>
              Includes your stove, and hob, or may also include the oven,
              microwave, or the entire cooking range. <br /> <br />
              <span className="text-black font-semibold">
                Benefits of using 5 Zone Design Principle
              </span>{" "}
              <br /> <br />
              Each of the zones has storage for food and essential tools
              allocated to avoid misplacement. This saves time because you don’t
              have to keep searching for things scattered around the kitchen.
              <br /> <br />
              Moreover, zones are arranged in a specific sequence according to
              the order of the tasks to be performed usually. This makes your
              kitchen workflow easy and tidy.
              <br /> <br />
              For this plan to be executed properly, modern kitchen design
              experts at Kitchen décor study your kitchen space properly and
              then come up with designs that suit best it.
            </p>
          </div>
        ) : section === 4 ? (
          <div className="flex flex-col justify-center items-center gap-2 px-5  sm:px-14 md:px-32 xl:px-64 ">
            <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
              04
            </h1>
            <h1 className=" text-3xl font-semibold font-Lato ">
              Planning Storage
            </h1>
            <HeartDesignDivider color={"orange-500"} />
            <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
              We have enough space for you and your happiness. Indian kitchens
              especially require huge storage to bear all the diverse
              ingredients required to make our rich cuisine. Modular Kitchens by
              Kitchen decor offers you large storage that is properly designed.
              Everything in your kitchen will have its proper place allotted by
              our kitchen so that you never forget what has been kept where.
              Also, this will allow you to experience a kitchen that is
              spacious, luxurious, and well-organized. We promise you that with
              Kitchen decor, you will never run out of space.
            </p>
            <div className="mt-5">
              <KitchenPlanningStorage />
            </div>
          </div>
        ) : section === 5 ? (
          <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
            <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
              05
            </h1>
            <h1 className=" text-3xl font-semibold font-Lato ">
              Coordinating Elements
            </h1>
            <HeartDesignDivider color={"orange-500"} />
            <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
              To give you a modern kitchen that is pleasing to the eyes as well,
              we are perfectly color-coordinated. Our creative kitchen interior
              designer rightly creates a combination of wall, countertop,
              shutter doors, flooring, lighting, and other modular kitchen
              furniture designs in a way that all complement each other very
              well. Ensuring a perfect balance of all the elements we offer you
              a kitchen that has perfectly coordinated colors, style, textures,
              and finishes.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Step - 1 */}
      {/* <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
        <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
          01
        </h1>
        <h1 className=" text-3xl font-semibold font-Lato ">Assembling Needs</h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
          A kitchen should be such that very effortlessly molds into your needs
          and requirements. A place that should enhance the joy of cooking for
          you and your family. For this, it is important for us to know exactly
          what you want and expect from your new kitchen and us. At Kitchen
          decor, we ensure this by studying a detailed questionnaire that shall
          be filled by you. This gathered information caters to all the minutest
          doubts and questions that we may have. Also, it propels you to think
          deeper and decide on what exactly you want from us. This step
          facilitates a smoother and more accurate working process further and
          allows us to build you the best modern kitchen design that suits your
          needs.
        </p>
      </div> */}

      {/* step - 2 */}
      {/* <div className="flex flex-col justify-center items-center gap-2 py-12 bg-neutral-100 px-5  sm:px-14 md:px-32 xl:px-64">
        <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
          02
        </h1>
        <h1 className=" text-3xl font-semibold font-Lato ">
          Applying Ergonomics
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
          A perfect designed space is the one that is efficient and sparks
          comfort in every corner. Our design team ensures that all our products
          are crafted in a way that ensures to optimise movements and avoid any
          unnatural postures that may cause health problems. So now no more
          unnecessary bending, stretching or bumping. Our designs facilitate the
          principle of comfort, ease and are user friendly.
          <br />
          The application of ergonomics for designing a space for you will
          transform your overall experience with a particular space. From the
          depth of the wall unit to organizing storage spaces in your kitchen,
          Kitchen decor carefully plans everything to give you a painless and
          trouble free experience.
        </p>

        <div className=" mt-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3 ">
            {kitchenCardData.map((data, i) => (
              <KitechenWardrobeCard
                key={i}
                imageUrl={data.image}
                title={data.title}
                desc={data.desc}
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* Step - 3 */}
      {/* <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64 ">
        <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
          03
        </h1>
        <h1 className=" text-3xl font-semibold font-Lato ">
          Zoning & Workflow
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
          To make your life easier and the cooking process hassle-free, we
          introduce to you the 5 Zone Design Principles. Using this process, we
          divide your kitchen into 5 essential zones to simplify your sequence
          of workflow and make it swift and smooth. It’s time that your luxury
          modern kitchen gets smarter too. <br />
          <span className="text-black font-semibold">The 5 zones are:</span>
          <br /> <br />
          <span className="text-black font-semibold">Consumable zone: </span>
          Includes area and appliances for your food, refrigerator, grain
          cabinets, drawers, etc. <br /> <br />
          <span className="text-black font-semibold">Non-consumable zone:</span>
          Includes your colanders, crockery, utensils, glasses, etc.
          <br /> <br />
          <span className="text-black font-semibold">Cleaning zone: </span>
          Includes your sink and dishwasher. The garbage unit is also placed
          here. <br /> <br />
          <span className="text-black font-semibold">Preparation zone: </span>
          Your cooking preparation happens here, it includes chopping and mixing
          implements <br /> <br />
          <span className="text-black font-semibold">Cooking zone: </span>
          Includes your stove, and hob, or may also include the oven, microwave,
          or the entire cooking range. <br /> <br />
          <span className="text-black font-semibold">
            Benefits of using 5 Zone Design Principle
          </span>{" "}
          <br /> <br />
          Each of the zones has storage for food and essential tools allocated
          to avoid misplacement. This saves time because you don’t have to keep
          searching for things scattered around the kitchen.
          <br /> <br />
          Moreover, zones are arranged in a specific sequence according to the
          order of the tasks to be performed usually. This makes your kitchen
          workflow easy and tidy.
          <br /> <br />
          For this plan to be executed properly, modern kitchen design experts
          at Kitchen décor study your kitchen space properly and then come up
          with designs that suit best it.
        </p>
      </div> */}

      {/* STEP-4 */}
      {/* <div className="flex flex-col justify-center items-center gap-2 py-12 px-5  sm:px-14 md:px-32 xl:px-64 bg-neutral-100 ">
        <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
          04
        </h1>
        <h1 className=" text-3xl font-semibold font-Lato ">Planning Storage</h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
          We have enough space for you and your happiness. Indian kitchens
          especially require huge storage to bear all the diverse ingredients
          required to make our rich cuisine. Modular Kitchens by Kitchen decor
          offers you large storage that is properly designed. Everything in your
          kitchen will have its proper place allotted by our kitchen so that you
          never forget what has been kept where. Also, this will allow you to
          experience a kitchen that is spacious, luxurious, and well-organized.
          We promise you that with Kitchen decor, you will never run out of
          space.
        </p>
        <div className="mt-5">
          <KitchenPlanningStorage />
        </div>
      </div> */}

      {/* STEP-5 */}
      {/* <div className="flex flex-col justify-center items-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
        <h1 className="border-2 rounded-2xl border-neutral-200 text-neutral-300 font-semibold text-4xl font-serif px-6 py-5">
          05
        </h1>
        <h1 className=" text-3xl font-semibold font-Lato ">
          Coordinating Elements
        </h1>
        <HeartDesignDivider color={"orange-500"} />
        <p className=" mt-5 text-neutral-700 leading-snug md:text-lg">
          To give you a modern kitchen that is pleasing to the eyes as well, we
          are perfectly color-coordinated. Our creative kitchen interior
          designer rightly creates a combination of wall, countertop, shutter
          doors, flooring, lighting, and other modular kitchen furniture designs
          in a way that all complement each other very well. Ensuring a perfect
          balance of all the elements we offer you a kitchen that has perfectly
          coordinated colors, style, textures, and finishes.
        </p>
      </div> */}
    </div>
  );
}
