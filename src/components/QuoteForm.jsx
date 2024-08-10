import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeartDesignDivider from "./HeartDesignDivider";
import { BiLoaderAlt } from "react-icons/bi";
import useScrollToTop from "../Hooks/useScrollToTop";

export const QuoteForm = () => {
  const [buttonStatus, setButtonStatus] = useState("Submit");
  useScrollToTop();

  const onSubmit = async (event) => {
    setButtonStatus("Submitting...");
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Quotation Enquiry");
    formData.append("subject", "New Quotation Enquiry from client.");

    const requirements = [];
    formData.getAll("requirement").forEach((item) => requirements.push(item));

    // Add the array to the FormData
    formData.set("requirement", requirements.join(", "));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      event.target.reset();
    } else {
      toast.error(`Error: ${data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }

    setButtonStatus("Submit");
  };

  return (
    <div className="mt-[75px] flex flex-col justify-center items-center gap-8 bg-neutral-100 py-14 w-full">
      <div>
        <h1 className=" text-3xl md:text-4xl font-semibold font-serif text-center px-2">
          Get a{" "}
          <span className="text-red-600">
            <b>FREE</b>
          </span>{" "}
          Consultation
        </h1>
        <HeartDesignDivider color={"orange-500"} />
      </div>
      <form
        onSubmit={onSubmit}
        className="w-10/12 sm:w-8/12 lg:w-6/12 xl:w-4/12 flex flex-col items-center"
      >
        <div className="mb-4 w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name here..."
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email ID
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email ID"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Contact No
          </label>
          <input
            type="text"
            name="contact"
            required
            placeholder="Contact No"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            required
            placeholder="City"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-sm font-medium text-gray-700">
            Requirement
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                id="bed"
                name="requirement"
                value="Bed"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="bed" className="ml-2 block text-sm text-gray-900">
                Bed
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="wardrobe"
                name="requirement"
                value="Wardrobe"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="wardrobe"
                className="ml-2 block text-sm text-gray-900"
              >
                Wardrobe
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="office-furniture"
                name="requirement"
                value="Office Furniture"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="office-furniture"
                className="ml-2 block text-sm text-gray-900"
              >
                Office Furniture
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="other-furniture"
                name="requirement"
                value="Other Furniture"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="other-furniture"
                className="ml-2 block text-sm text-gray-900"
              >
                Other Furniture
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="modular-kitchen"
                name="requirement"
                value="Modular Kitchen"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="modular-kitchen"
                className="ml-2 block text-sm text-gray-900"
              >
                Modular Kitchen
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="full-home-modular"
                name="requirement"
                value="Full Home Modular Furniture"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="full-home-modular"
                className="ml-2 block text-sm text-gray-900"
              >
                Full Home Modular Furniture
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700"
          >
            Budget
          </label>
          <select
            name="budget"
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">--Please choose an option--</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="submit"
          className={` flex justify-center items-center gap-3 bg-stone-950 hover:bg-stone-800 text-white px-5 py-3 rounded-full font-medium w-8/12 md:w-6/12 mt-4  `}
        >
          <BiLoaderAlt
            className={` text-2xl  ${
              buttonStatus === "Submitting..." ? " animate-spin" : " hidden"
            }`}
          />

          {buttonStatus}
        </button>
      </form>
    </div>
  );
};
