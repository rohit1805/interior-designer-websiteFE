import React from "react";
import image1 from "../assets/wardrobe_planning_images/image-1.png";
import image2 from "../assets/wardrobe_planning_images/image-2.png";
import image3 from "../assets/wardrobe_planning_images/image-3.png";
import image4 from "../assets/wardrobe_planning_images/image-4.png";

export default function WardrobePlanningStorage() {
  // const wardrobePlanningData = [
  //     {
  //         image: 1,
  //         title:
  //     }
  // ]

  const PlanningCard = ({ image, title, desc }) => {
    return (
      <div>
        <img src={image} alt="" />
        <div className="flex justify-start items-center gap-3 mt-3">
          <hr className="w-16 border-b border-orange-500" />
          <h1 className="text-xl font-semibold"> {title}</h1>
        </div>
        <p className=" text-neutral-600 mt-2">{desc}</p>
      </div>
    );
  };

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  justify-center items-center gap-8">
      <div>
        <PlanningCard
          image={image1}
          title={"EXTRA STORAGE"}
          desc={
            "Our well designed wardrobes with extra storage ensure that you never run out of space to store your belongings. With smart designing such as simple enhancement of drawers and fine compartmentalisation of cupboard can double your storage without taking any more space. Here’s how:"
          }
        />
        <div className="flex ">
          <table className="min-w-full divide-y divide-gray-300">
            <tbody className=" divide-y divide-gray-200">
              <tr>
                <td className="py-4 pr-2 text-gray-700 font-medium">
                  Wider units
                </td>
                <td className="py-4 pl-4 pr-2 text-gray-600">
                  Join two drawers to make a wide one, and increase your space
                  by 15%.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-2 text-gray-700 font-medium">
                  Deeper drawers
                </td>
                <td className="py-4 pl-4 pr-2 text-gray-600">
                  Extend the drawers right to the back, to increase storage
                  space by 30%.
                </td>
              </tr>
              <tr>
                <td className="py-4 pr-2 text-gray-700 font-medium">
                  Higher sides
                </td>
                <td className="py-4 pl-4 pr-2 text-gray-600">
                  Raise the sides of each drawer to increase storage space by
                  55%.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <PlanningCard image={image2} title={"TROUSER BEARER"} desc={""} />
      <PlanningCard
        image={image3}
        title={"ORGANISED SHIRT HANGING BAR"}
        desc={""}
      />
      <PlanningCard image={image4} title={"FINE TIE HOLDER"} desc={""} />
    </div>
  );
}
