import React from "react";
import image1 from "../assets/kitchen_plannig_images/Planning-Storage-1.png";
import image2 from "../assets/kitchen_plannig_images/Planning-Storage-2.png";
import image3 from "../assets/kitchen_plannig_images/Planning-Storage-3.png";
import image4 from "../assets/kitchen_plannig_images/Planning-Storage-4.png";
import image5 from "../assets/kitchen_plannig_images/Planning-Storage-5.png";
import image6 from "../assets/kitchen_plannig_images/Planning-Storage-6.png";
import image7 from "../assets/kitchen_plannig_images/Planning-Storage-7.png";

export default function KitchenPlanningStorage() {
  const kitchenPlanningData = [
    {
      image: image1,
      title: "CLEVER STORAGE",
      desc: "Using 5 zone design principle, Kitchen decor crafts kitchens that are more efficient, functional and time saving.In this process, your kitchen is divided into 5 zones including Consumable zone, Non-consumable zone, Cleaning zone, Preparation zone, and Cooking area.",
    },
    {
      image: image2,
      title: "SMART CORNERS",
      desc: "This diagonal deep corner drawer is a clever design to use available space and to store the most vital items required for cooking.",
    },
    {
      image: image3,
      title: "CLING FILM DISPENSER",
      desc: "Using 5 zone design principle, Kitchen decor crafts kitchens that are more efficient, functional and time saving.In this process, your kitchen is divided into 5 zones including Consumable zone, Non-consumable zone, Cleaning zone, Preparation zone, and Cooking area.",
    },
    {
      image: image4,
      title: "LID HOLDERS",
      desc: "Thanks to these flexible cross-dividers, you can store the appropriate lids right next to your pots and pans.",
    },
    {
      image: image5,
      title: "NICE AND CLEAN",
      desc: "These U-shaped pull outs fit neatly around the sink, making use of all wasted space. This provides ample space for sponges and liquids, keeping them within easy reach.",
    },
    {
      image: image6,
      title: "PLATE HOLDERS",
      desc: "Round or square, these plate-holders can hold a 0number of plates without sliding around in the drawer. What’s more, you can lift the holder and carry it to the table at mealtimes.",
    },
    {
      image: image7,
      title: "CUTLERY ORGANISER",
      desc: "A neat cutlery drawer, with dividers, to make sure your spoons don’t jostle your forks; and you can quickly find the sauté spoon before the seasoning burns!",
    },
  ];

  const PlanningCard = ({ image, title, desc }) => {
    return (
      <div>
        <img src={image} alt="" />
        <div className="flex justify-start items-center gap-3 mt-2">
          <hr className="w-16 border-b border-orange-500" />
          <h1 className="text-xl font-semibold"> {title}</h1>
        </div>
        <p className=" text-neutral-600">{desc}</p>
      </div>
    );
  };

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8">
      {kitchenPlanningData.map((data, i) => (
        <PlanningCard
          key={i}
          image={data.image}
          title={data.title}
          desc={data.desc}
        />
      ))}
    </div>
  );
}
