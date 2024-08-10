import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/architects_interior_designer_page_banner.jpg";
import HeartDesignDivider from "../components/HeartDesignDivider";
import benefitsImg from "../assets/architect_interior_designer/benefit-img.png";
import { FAQsection } from "../components/FAQsection";
import useScrollToTop from "../Hooks/useScrollToTop";

export const ArchitectsInteriorDesigner = () => {
  useScrollToTop();
  const faqData = [
    {
      srno: 1,
      ques: "What are interior designer?",
      ans: " Interior designers are professionals who specialize in creating functional and aesthetically pleasing interior spaces for homes, offices, and other commercial establishments.",
    },
    {
      srno: 2,
      ques: "What are the typical costs associated with hiring an interior designer in Pune?",
      ans: "The costs associated with hiring an interior designer in Pune can vary depending on the scope of the project, the designer’s experience and expertise, and the materials and furnishings required for the design.",
    },
    {
      srno: 3,
      ques: "What factors should I consider when choosing an interior designer in Pune?",
      ans: "When choosing an interior designer in Pune, consider factors such as their portfolio, design style, experience, communication skills, and ability to understand and meet your specific needs and preferences.",
    },
    {
      srno: 4,
      ques: "Can interior designers in Pune assist with both residential and commercial projects?",
      ans: "Yes, many interior designers in Pune are experienced in working on both residential and commercial projects, offering expertise in creating functional and visually appealing spaces for a variety of clients and purposes.",
    },
    {
      srno: 5,
      ques: "How can I find the best interior design company in Pune for my home?",
      ans: "Finding the best interior design company in Pune for your home can be an exciting process. At Kitchen décor, we make it easy for you! Our team of experienced professionals includes some of the industry’s top interior designers who have a proven track record of delivering exceptional results. With their expertise and passion for design, they will turn your dream home into a reality.",
    },
    {
      srno: 6,
      ques: "Can an interior designer accommodate my personal style and preferences?",
      ans: "Absolutely! Our interior designers not only bring their unique design perspective but also understand the importance of personalization. They take the time to listen to your ideas, preferences, and lifestyle, ensuring that the final design reflects your taste and personality. Whether you prefer a modern, contemporary, or traditional aesthetic, our interior designers will work closely with you to create a space that feels uniquely yours.",
    },
  ];
  return (
    <div className="mt-[70px]">
      <Banner
        imageUrl={bannerImage}
        page={"Architect and Home Interrior Designers"}
        title={"Transforming spaces into Art."}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col justify-center items-center text-center gap-2 my-8 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className=" text-2xl md:text-4xl font-semibold font-Lato text-center ">
            We are the Sculptor for the Artists in you!
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg text-center">
            Putting a great idea creatively into a design is rightly done by the
            architects and designers. However, these designs are given justice
            only when they are executed practically in the right way. At Kitchen
            decor, we bring your ideas and designs into reality and give a
            physical form to your brief. <br /> Your idea and brief are at the
            core of our overall design and hence we make sure to rightly follow
            it. At Kitchen decor, we carefully study your vision, understand it,
            and then work dedicatedly to fulfill it for you.. <br /> Our right
            set up and synchronized coordination ensures that your vision is
            executed in the finest manner.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start  gap-5 py-8 px-5  sm:px-14 md:px-20 xl:px-32 bg-neutral-100">
          <div className=" md:w-6/12">
            <img src={benefitsImg} alt="" />
          </div>
          <div className="flex flex-col md:w-6/12  ">
            <h1 className=" text-xl sm:text-2xl font-semibold font-Lato">
              Benefits of Architects and Interior Designers:
            </h1>
            <ul className="pl-4 md:text-lg text-neutral-600 ">
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> We have a
                dedicated team of designers who ensure to transform your vision
                into reality.
              </li>
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> Kitchen
                decor is your one-stop solution for Modular Kitchens, Wardrobes,
                TV units, Beds, Appliances, and other Accessories.
              </li>
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> We have a
                well-appointed After-sales team to ensure prompt maintenance
                service for customers.
              </li>
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> Kitchen
                decor offers Ergonomically Designed products, personalized and
                custom made according to individual needs and preferences.
              </li>
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> Our
                products showcase European precision as they are crafted using
                high-tech German machinery.
              </li>
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> A wide
                range of designs, patterns, materials, and solutions to offer
                your clients.
              </li>
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> A wide
                range of designs, patterns, materials, and solutions to offer
                your clients.
              </li>
              <li>
                {" "}
                <span className="text-black text-xl">&#x2022;</span> Our
                finished product matches your vision.
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ'S SECTION */}
        <FAQsection faqData={faqData} />
      </div>
    </div>
  );
};
