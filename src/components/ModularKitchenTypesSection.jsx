import React from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import { ModularKitchenCard } from "./ModularKitchenCard";

import image1 from "../assets/modular_kitchen_types/L-shaped-kitchen.svg";
import image2 from "../assets/modular_kitchen_types/u-shaped-kitchen.svg";
import image3 from "../assets/modular_kitchen_types/c-shaped-kitchen.svg";
import image4 from "../assets/modular_kitchen_types/G-shaped-kitchen.svg";
import image5 from "../assets/modular_kitchen_types/parallel-kitchen.svg";
import image6 from "../assets/modular_kitchen_types/peninsula-kitchen.svg";
import image7 from "../assets/modular_kitchen_types/straight-kitchen.svg";
import image8 from "../assets/modular_kitchen_types/island-kitchen.svg";

export const ModularKitchenTypesSection = () => {
  const cardData = [
    {
      image: image1,
      title: "L-SHAPED KITCHEN",
    },
    {
      image: image2,
      title: "U-SHAPED KITCHEN",
    },
    {
      image: image3,
      title: "C-SHAPED KITCHEN",
    },
    {
      image: image4,
      title: "G-SHAPED KITCHEN",
    },
    {
      image: image5,
      title: "PARALLEL KITCHEN",
    },
    {
      image: image6,
      title: "PENINSULA KITCHEN",
    },
    {
      image: image7,
      title: "STRAIGHT KITCHEN",
    },
    {
      image: image8,
      title: "ISLAND KITCHEN",
    },
  ];

  return (
    <div className=" flex flex-col justify-center items-center py-8 px-5 md:px-10 lg:px-32">
      <h1 className=" text-3xl md:text-4xl font-semibold font-Lato">
        Types of Modular Kitchen
      </h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-10">
        {cardData.map((data, index) => (
          <ModularKitchenCard
            key={index}
            image={data.image}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};
