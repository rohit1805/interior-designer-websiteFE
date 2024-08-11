import React from "react";
import prodct_1 from "../assets/explore_product_images/explore_product_1.jpg";
import prodct_2 from "../assets/explore_product_images/explore_product_2.jpg";
import prodct_3 from "../assets/explore_product_images/explore_product_3.jpg";
import prodct_4 from "../assets/explore_product_images/explore_product_4.jpg";
import prodct_5 from "../assets/explore_product_images/explore_product_5.jpg";
import { TbHeartHandshake } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ExploreProductSection() {
  return (
    <div className=" flex flex-col justify-center gap-2 items-center py-12 md:py-16 ">
      {/* <h1 className=" capitalize text-lg font-medium text-stone-600">
        DISCOVER
      </h1> */}
      <h1 className=" text-2xl lg:text-4xl font-semibold font-Lato">
        EXPLORE OUR PRODUCTS
      </h1>
      <div className=" flex justify-center items-center gap-2 mb-2">
        <hr className="w-20  border-b border-orange-500" />
        <TbHeartHandshake className="text-4xl text-orange-500" />
        <hr className="w-20 border-b border-orange-500" />
      </div>
      <div className="flex flex-col gap-5 md:flex-row ">
        {/* first four categories */}
        <div className="grid grid-cols-1  gap-5 mx-5 md:mx-auto md:ml-14 justify-center md:w-8/12">
          {/* <Link to={"/bed"}>
            <div className="relative overflow-hidden">
              <img
                src={prodct_1}
                alt=""
                className=" rounded shadow-lg hover:scale-105 transition-all"
              />
              <div className=" absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-b">
                <h1 className=" absolute bottom-1 font-medium text-white text-lg">
                  BEDROOM
                </h1>
              </div>
            </div>
          </Link> */}

          {/* <Link to={"/wardrobe"}>
            <div className="relative overflow-hidden">
              <img
                src={prodct_2}
                alt=""
                className="rounded shadow-lg  hover:scale-105 transition-all"
              />
              <div className=" absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-b">
                <h1 className=" absolute bottom-1 font-medium text-white text-lg">
                  WARDROBE
                </h1>
              </div>
            </div>
          </Link> */}

          {/* <Link to={"/tvunit"}>
            <div className="relative overflow-hidden">
              <img
                src={prodct_3}
                alt=""
                className="rounded shadow-lg w-full  hover:scale-105 transition-all"
              />
              <div className=" absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-b">
                <h1 className=" absolute bottom-1 font-medium text-white text-lg">
                  TV UNIT
                </h1>
              </div>
            </div>
          </Link> */}

          <Link to={"/kitchen"}>
            <div className="relative overflow-hidden">
              <img
                src={prodct_4}
                alt=""
                className="rounded shadow-lg  hover:scale-105 transition-all"
              />
              <div className=" absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-b">
                <h1 className=" absolute bottom-1 font-medium text-white text-lg">
                  KITCHEN
                </h1>
              </div>
            </div>
          </Link>
        </div>
        {/* other category product */}
        <div className="relative overflow-hidden mx-5 md:mx-auto md:mr-12  md:w-3/12">
          <Link to={"/otherFurniture"}>
            <img
              src={prodct_5}
              alt=""
              className="rounded shadow-lg  hover:scale-105 transition-all md:w-96"
            />
            <div className=" absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-b">
              <h1 className=" absolute bottom-1 font-medium text-white text-lg">
                OTHER
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
