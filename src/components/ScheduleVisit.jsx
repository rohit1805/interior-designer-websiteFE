import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import HeartDesignDivider from "./HeartDesignDivider";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import useScrollToTop from "../Hooks/useScrollToTop";
import { Bounce, ToastContainer, toast } from "react-toastify";

import { BiLoaderAlt } from "react-icons/bi";

export const ScheduleVisit = () => {
  const [buttonStatus, setButtonStatus] = useState("Submit");
  useScrollToTop();

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    setButtonStatus("Submitting...");
    event.preventDefault();

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Schedule Visit Enquiry");
    formData.append("subject", "New Visit Message from your Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
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
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    // console.log(formData);

    // console.log(result);
    setButtonStatus("Submit");
  };

  return (
    <div className="mt-[75px] flex flex-col justify-center items-center gap-8 bg-neutral-100 py-14 w-full">
      <div>
        <h1 className=" text-3xl md:text-4xl font-semibold font-serif text-center ">
          Schedule A Visit
        </h1>
        <HeartDesignDivider color={"orange-500"} />
      </div>
      <form
        action=""
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={onSubmit}
        className="w-10/12 sm:w-8/12 lg:w-6/12 xl:w-4/12 flex flex-col items-center"
      >
        {/* Full Name input box */}
        <div className="bg-neutral-200 flex justify-start items-center py-3 px-4 gap-4 rounded-md mb-4 w-full">
          <FaUser />
          <input
            type="text"
            // {...register("Name", { required: true })}
            name="Name"
            required
            placeholder="Full Name"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Email id */}
        <div className="bg-neutral-200 flex justify-start items-center py-3 px-4 gap-4 rounded-md mb-4 w-full">
          <MdEmail />
          <input
            type="email"
            // {...register("Email Id", { required: true })}
            name="Email Id"
            required
            placeholder="Email"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Phone no */}
        <div className="bg-neutral-200 flex justify-start items-center py-3 px-4 gap-4 rounded-md mb-4 w-full">
          <FaPhone />
          <input
            type="text"
            // {...register("Phone No", { required: true })}
            name="Phone No"
            required
            placeholder="Phone Number"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* city input box */}
        <div className="bg-neutral-200 flex justify-start items-center py-3 px-4 gap-4 rounded-md mb-4 w-full">
          <FaCity />
          <input
            type="text"
            // {...register("City", { required: true })}
            name="City"
            required
            placeholder="City"
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Message text box */}
        <div className="bg-neutral-200 flex flex-col  justify-start items-start py-3 px-4 gap-1 rounded-md mb-4 w-full">
          <div className=" flex justify-start items-center gap-2 ">
            <RiMessage2Fill />
            <label htmlFor="">Message</label>
          </div>

          <textarea
            // {...register("Message", { required: false })}
            name="Message"
            id=""
            placeholder="Type your message here..."
            className="bg-transparent outline-none w-full "
          ></textarea>
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
