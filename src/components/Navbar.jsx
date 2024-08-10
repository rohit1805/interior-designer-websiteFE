import clsx from "clsx";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/Logoedited.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export default function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);
  const [productsPopup, setProductsPopup] = useState(false);
  const [ourProductDropdown, setOurProductDropdown] = useState(false);

  const navLinks = [
    { label: "Design Philosoply", to: "/designPhilosophy" },
    { label: "Our Products", to: "" },
    {
      label: "For Architects/ Interior Designers",
      to: "/architectInteriorDesigner",
    },
    { label: "About Us", to: "/aboutUs" },
    { label: "Enquiry", to: "/enquiry" },
  ];

  const our_products = [
    { product: "Kitchen", to: "/kitchen" },
    { product: "Wardrobe", to: "/wardrobe" },
    { product: "Beds", to: "/bed" },
    { product: "TV Units", to: "/tvunit" },
    { product: "Other Furniture", to: "/otherFurniture" },
  ];

  const handleNavLinkClick = (label, to) => {
    if (label !== "Our Products") {
      setSideMenu(false); // Close side menu for other links
    }
  };
  return (
    <nav
      className=" fixed top-0 right-0 left-0 z-50 bg-white flex justify-between px-5 lg:px-12 items-center py-3 md:py-3 
     shadow-md"
    >
      {/* logo */}
      <Link
        to={"/"}
        className=" text-4xl font-mono leading-8 flex flex-col justify-center items-center"
      >
        {/* <img src={logo} alt="Brand Logo" className="w-48 h-min" /> */}
        <h1 className=" font-Spicy_Rice text-orange-500">TouchWood.</h1>
        <p className="text-sm font-bold font-serif ">Luxury within Reach</p>
      </Link>

      <div className=" relative hidden items-center gap-7 lg:flex">
        {navLinks.map((data, i) => (
          <div key={i} className="relative group">
            <Link
              to={data.to}
              className="font-medium text-lg py-5 border-b-4 border-white hover:border-black"
            >
              {data.label}
            </Link>
            {data.label === "Our Products" && (
              <div className=" absolute bg-white rounded-lg hidden group-hover:flex flex-col gap-1 py-2 px-2 right-[-28px] top-[50px] w-40 z-50 ">
                {our_products.map((data, i) => (
                  <Link
                    key={i}
                    to={data.to}
                    className=" hover:font-bold hover:bg-orange-500 hover:text-white py-1 px-2"
                  >
                    {data.product}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link to={"/scheduleVisit"}>
          <button className=" bg-orange-500 rounded-md hover:bg-orange-600 py-3 px-3 font-bold text-white">
            SCHEDULE A VISIT
          </button>
        </Link>
      </div>

      {/* menu */}
      <FiMenu
        onClick={() => setSideMenu(!sideMenu)}
        className="text-3xl cursor-pointer lg:hidden"
      />

      {/* sidebar mobile view */}

      {sideMenu == true ? (
        <div
          onClick={() => setSideMenu(!sideMenu)}
          className=" fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all z-50"
        >
          <section
            className=" bg-white flex flex-col absolute right-0 top-0 h-screen p-8 gap-8  w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <IoClose
              onClick={() => setSideMenu(!sideMenu)}
              className="text-3xl cursor-pointer "
            />
            {/* {navLinks.map((data, i) => (
              <Link key={i} to={data.to} className=" font-medium text-lg">
                <div
                  onClick={() => {
                    if (data.label === "Our Products") {
                      setOurProductDropdown(!ourProductDropdown);
                    }
                  }}
                  className="flex justify-between items-center"
                >
                  <p>{data.label}</p>
                  {data.label === "Our Products" ? (
                    ourProductDropdown ? (
                      <IoMdArrowDropup className="text-3xl" />
                    ) : (
                      <IoMdArrowDropdown className="text-3xl" />
                    )
                  ) : (
                    ""
                  )}
                </div>
                {ourProductDropdown && data.label === "Our Products" ? (
                  <div className=" flex flex-col pl-2">
                    {our_products.map((data, i) => (
                      <Link
                        key={i}
                        to={data.to}
                        className=" hover:font-bold hover:bg-orange-500 hover:text-white py-1 px-2"
                      >
                        {data.product}
                      </Link>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </Link>
            ))} */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            {navLinks.map((data, i) => (
              <div key={i}>
                {data.label === "Our Products" ? (
                  <div
                    onClick={() => {
                      setOurProductDropdown(!ourProductDropdown);
                    }}
                    className="font-medium text-lg flex justify-between items-center cursor-pointer"
                  >
                    <span>{data.label}</span>
                    {ourProductDropdown ? (
                      <IoMdArrowDropup className="text-3xl" />
                    ) : (
                      <IoMdArrowDropdown className="text-3xl" />
                    )}
                  </div>
                ) : (
                  <Link
                    to={data.to}
                    className="font-medium text-lg"
                    onClick={() => handleNavLinkClick(data.label, data.to)}
                  >
                    {data.label}
                  </Link>
                )}
                {ourProductDropdown && data.label === "Our Products" && (
                  <div className="flex flex-col pl-2 mt-2">
                    {our_products.map((product, j) => (
                      <Link
                        key={j}
                        to={product.to}
                        className="hover:font-bold hover:bg-orange-500 hover:text-white py-1 px-2"
                        onClick={() => {
                          setSideMenu(false);
                          setOurProductDropdown(false);
                        }}
                      >
                        {product.product}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to={"/scheduleVisit"}>
              <button
                onClick={() => setSideMenu(false)}
                className=" bg-orange-500 hover:bg-orange-600 rounded-md py-3 px-3 font-bold text-white"
              >
                SCHEDULE A VISIT
              </button>
            </Link>
          </section>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
