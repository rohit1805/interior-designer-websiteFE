import React from "react";
import HeartDesignDivider from "./HeartDesignDivider";
import { VercesLine } from "./VercesLine";

export const WardrobeVersesSection = () => {
  const versesData = [
    {
      left: "Ergonomically designed to cater to your needs and requirements.",
      right: "Basic design, no concept, and often not user-friendly.",
    },
    {
      left: "Designed by our in-house team of design experts.",
      right: "Manufactured by local carpenters with no uniqueness in designs.",
    },
    {
      left: "Easy to move around your space.",
      right: "Not possible to move around.",
    },
    {
      left: "Designed by the latest technology and German machinery.",
      right:
        "Lack of resources and has to work without any advanced tools or the latest technology.",
    },
    {
      left: "Takes very little time to assemble, no disturbance, or noise to the surroundings.",
      right:
        "Time taken by carpenters is limitless and creates a lot of nuisance.",
    },
    {
      left: "A cleaner and organized look.",
      right: "Raw and disorganized look. Lacks proper finishing.",
    },
    {
      left: "A separate shelf to hold your accessories or other belongings is customized as per your requirements.",
      right: "Very standard model without any special compartments or shelves.",
    },
    {
      left: "Wide range of options in terms of vibrant colors, unique designs and patterns.",
      right:
        "Limited options to choose from as no variations in designs or patterns.",
    },
  ];
  return (
    <div className="bg-neutral-100 flex flex-col justify-center items-center gap-2 py-8 md:px-32">
      <h1 className=" text-2xl md:text-4xl font-semibold font-Lato text-center">
        Why Modular Wardrobes <br className="sm:hidden" /> v/s{" "}
        <br className="sm:hidden" /> Carpenter Made Wardrobes
      </h1>
      <HeartDesignDivider color={"orange-500"} />
      <div className="flex flex-col gap-5 px-2 py-8">
        {versesData.map((data, index) => (
          <VercesLine key={index} left={data.left} right={data.right} />
        ))}
      </div>
    </div>
  );
};
