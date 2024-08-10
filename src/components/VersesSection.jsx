import React from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import { VercesLine } from "./VercesLine";

export const VersesSection = () => {
  const versesData = [
    {
      left: "Perfect and precise dimensions with neat and perfect edges.",
      right: "Rough corners and imperfect dimensions.",
    },
    {
      left: "Factory manufactured standard quality products.",
      right: "Carpenter manufactured average quality products.",
    },
    {
      left: "Technologically advanced with German machinery.",
      right: "Local procedures with high dependence on human skills.",
    },
    {
      left: "We deliver “Ready to Fit” product ensuring no clutter and is all set for use.",
      right:
        "Work done on-site creating more noise and clutter on an everyday basis.",
    },
    {
      left: "Movable and allows dismantling with the help of our technicians",
      right: "Fixed furniture hence doesn’t allow moving.",
    },
    {
      left: "Pasting and lamination work done using high-tech machines.",
      right: "Lack of resources, has to work without any tools and technology.",
    },
    {
      left: "Wide range of options available to choose from.",
      right: "Limited options to choose from.",
    },
    {
      left: "Prompt delivery and installations.",
      right: "Unreliable delivery date.",
    },
    {
      left: "Doesn’t require your constant presence or attention.",
      right: "Requires your presence for supervision.",
    },
    {
      left: "Fixed budget, no last moment cost additions.",
      right: "Varying budget with no fixed deal.",
    },
    {
      left: "There is no concern about wastage.",
      right: "Causes a lot of leftover waste which is difficult to dispose of.",
    },
    {
      left: "5 Years Warranty.",
      right: "No fixed warranty.",
    },
    {
      left: "Dedicated After Sales Service for maintenance.",
      right: "No After Sales Team.",
    },
    {
      left: "Custom made, personalized and ergonomically designed kitchens to best suit your requirements.",
      right: "No planning or concepts used.",
    },
    {
      left: "Before hand visual representation of your kitchen design offered.",
      right:
        "No visual representation offered. Direct viewing of the final product.",
    },
  ];
  return (
    <div className="bg-neutral-100 flex flex-col justify-center items-center py-8 px-3 sm:px-10 md:px-32">
      <h1 className=" text-3xl md:text-4xl font-semibold font-Lato text-center">
        Why Modular Kitchen <br className="md:hidden" /> v/s{" "}
        <br className="md:hidden" /> Carpenter Made Kitchen
      </h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className="flex flex-col gap-5 py-8">
        {versesData.map((data, index) => (
          <VercesLine key={index} left={data.left} right={data.right} />
        ))}
      </div>
    </div>
  );
};
