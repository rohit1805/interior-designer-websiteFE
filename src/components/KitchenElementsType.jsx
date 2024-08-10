import React from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import KitchenElementSlider from "./KitchenElementSlider";
import shutter1 from "../assets/Kitchen_element_type/shutter/elements-1.png";
import shutter2 from "../assets/Kitchen_element_type/shutter/Shutters-1.png";
import shutter3 from "../assets/Kitchen_element_type/shutter/Shutters-2.png";
import shutter4 from "../assets/Kitchen_element_type/shutter/Shutters-3.png";
import shutter5 from "../assets/Kitchen_element_type/shutter/Shutters-4.png";

import surface1 from "../assets/Kitchen_element_type/surface/elements-2.png";
import surface2 from "../assets/Kitchen_element_type/surface/surface-1.png";
import surface3 from "../assets/Kitchen_element_type/surface/surface-2.png";
import surface4 from "../assets/Kitchen_element_type/surface/surface-3.png";
import surface5 from "../assets/Kitchen_element_type/surface/surface-4.png";

import hardware1 from "../assets/Kitchen_element_type/hardware/elements-3.png";
import hardware2 from "../assets/Kitchen_element_type/hardware/hardware-1.png";
import hardware3 from "../assets/Kitchen_element_type/hardware/hardware-2.png";
import hardware4 from "../assets/Kitchen_element_type/hardware/hardware-3.png";

import appliances1 from "../assets/Kitchen_element_type/appliances/elements-4.png";
import appliances2 from "../assets/Kitchen_element_type/appliances/Appliances-1.png";
import appliances3 from "../assets/Kitchen_element_type/appliances/Appliances-2.png";
import appliances4 from "../assets/Kitchen_element_type/appliances/Appliances-3.png";
import appliances5 from "../assets/Kitchen_element_type/appliances/Appliances-4.png";

export const KitchenElementsType = () => {
  const shutterData = [
    { imageurl: shutter1 },
    { imageurl: shutter2 },
    { imageurl: shutter3 },
    { imageurl: shutter4 },
    { imageurl: shutter5 },
  ];
  const surfaceData = [
    { imageurl: surface1 },
    { imageurl: surface2 },
    { imageurl: surface3 },
    { imageurl: surface4 },
    { imageurl: surface5 },
  ];
  const hardwareData = [
    { imageurl: hardware1 },
    { imageurl: hardware2 },
    { imageurl: hardware3 },
    { imageurl: hardware4 },
  ];
  const appliancesData = [
    { imageurl: appliances1 },
    { imageurl: appliances2 },
    { imageurl: appliances3 },
    { imageurl: appliances4 },
    { imageurl: appliances5 },
  ];

  return (
    <div className=" bg-neutral-100 flex flex-col justify-center items-center py-8">
      <h1 className=" text-3xl md:text-4xl text-center font-semibold font-Lato ">
        Explore our Modular Kitchen Elements
      </h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className="grid grid-cols-1  lg:grid-cols-4 lg:mx-36 lg:gap-10 my-4">
        <KitchenElementSlider images={shutterData} type={"Shutters"} />
        <KitchenElementSlider images={surfaceData} type={"Surfaces"} />
        <KitchenElementSlider images={hardwareData} type={"Hardware"} />
        <KitchenElementSlider images={appliancesData} type={"Appliances"} />
      </div>
    </div>
  );
};
