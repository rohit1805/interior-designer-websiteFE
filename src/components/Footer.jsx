import React from "react";
import logo from "../assets/Logoedited.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black px-5 py-12 md:px-16 ">
      <div className="flex flex-col md:flex-row gap-8 md:justify-between md:mx-20  text-white ">
        <div className=" flex flex-col gap-1">
          <img src={logo} alt="" className="w-48" />

          <p className="text-white mt-3 leading-tight">
            Sanket Barmukh
            <br /> Near Rajshri Shahu Maharaj Ground, <br />
            Abhishek-2 Society, <br /> Shahunagar, <br />
            Pune - 411014
            <br />
            <br />
            <span className="font-semibold"> Mobile No. : </span>
            {import.meta.env.VITE_PHONE_NO}
            <br />
            <span className="font-semibold">Email : </span>
            {import.meta.env.VITE_EMAIL_ID}
          </p>
        </div>
        <div>
          <h1 className=" text-2xl font-semibold mb-1 md:mb-5">
            Our Offerings
          </h1>
          <ul className="flex flex-col md:gap-1">
            <li>Kitchens</li>
            <li>Wardrobes</li>
            <li>Beds</li>
            <li>TV units</li>
            <li>Other Furniture</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-2xl font-semibold mb-1 md:mb-5">Quick Links</h1>
          <ul className="flex flex-col md:gap-1">
            <li>About Us</li>
            <li>Customer testimonials</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-2xl font-semibold mb-1 md:mb-5">Follow Us</h1>
          <ul className="flex gap-4">
            <li>
              <FaFacebookSquare className="text-2xl " />
            </li>
            <li>
              <FaInstagram className="text-2xl" />
            </li>
            <li>
              <FaYoutube className="text-2xl" />
            </li>
            <li>
              <FaXTwitter className="text-2xl" />
            </li>
            <li>
              <FaLinkedin className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-neutral-300 my-6" />
      <p className="text-white">© 2024. All Rights Reserved</p>
    </div>
  );
}
