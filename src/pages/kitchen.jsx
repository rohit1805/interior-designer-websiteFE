import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../assets/pages_banner/kitchen_page_banner.jpg";
import HeartDesignDivider from "../components/HeartDesignDivider";
import KitchenStepSection from "../components/KitchenStepSection";
import { KitchenElementsType } from "../components/KitchenElementsType";
import { VersesSection } from "../components/VersesSection";
import { ModularKitchenTypesSection } from "../components/ModularKitchenTypesSection";
import { FAQsection } from "../components/FAQsection";
import useScrollToTop from "../Hooks/useScrollToTop";

export default function kitchen() {
  useScrollToTop();
  const faqData = [
    {
      srno: 1,
      ques: "What is a luxury modular kitchen?",
      ans: "A luxury modular kitchen is a high-end kitchen design that utilizes pre-fabricated modules or units to create a customized and stylish cooking space with premium features and materials.",
    },
    {
      srno: 2,
      ques: "Are modular kitchens suitable for small spaces?",
      ans: "Yes, modular kitchens are highly suitable for small spaces. They are designed to maximize space utilization and can be customized to fit the available area.",
    },
    {
      srno: 3,
      ques: "How is a luxury modular kitchen different from a traditional kitchen?",
      ans: "A luxury modular kitchen is different from a traditional kitchen in that it is pre-fabricated and designed to fit specific dimensions and requirements. It offers a sleek, contemporary look and often includes advanced features and functionality.",
    },
    {
      srno: 4,
      ques: "What are the popular materials used in luxury modular kitchens?",
      ans: "Popular materials used in luxury modular kitchens include high-quality wood, stainless steel, granite, marble, quartz, and premium laminates. These materials are chosen for their durability, aesthetics, and ease of maintenance.",
    },
    {
      srno: 5,
      ques: "What should I consider when choosing a modular kitchen design?",
      ans: "When choosing a modular kitchen design, consider factors such as your cooking habits, storage needs, available space, and overall aesthetic preferences to ensure that the design meets your requirements.",
    },
    {
      srno: 6,
      ques: "What are the latest trends in luxury modular kitchens?",
      ans: "Some of the latest trends in luxury modular kitchens include smart kitchen technology, minimalist designs, hidden storage solutions, integrated appliances, and eco-friendly materials.",
    },
    {
      srno: 7,
      ques: "Are modular kitchens cost-effective?",
      ans: "While the initial cost of installing a modular kitchen price per sq ft may be higher than traditional kitchens, the long-term benefits, such as durability, functionality, and ease of maintenance, make it a cost-effective choice.",
    },
    {
      srno: 8,
      ques: "Can I upgrade my existing kitchen to a luxury modular kitchen?",
      ans: "Yes, it is possible to upgrade an existing kitchen to a luxury modular kitchen. Professional designers and installers can assess the space and provide customized solutions to transform a standard kitchen into a luxurious and efficient modular kitchen in Pune.",
    },
    {
      srno: 9,
      ques: "Does the modular kitchen cost include installation?",
      ans: "Certainly! Our modular kitchen cost in Pune includes the entire process, from design to installation. Our skilled professionals ensure that the installation is seamless, giving you peace of mind throughout the project. You can trust Kitchen Decor to provide a comprehensive and cost-effective solution for your modular kitchen needs in Pune.",
    },
    {
      srno: 10,
      ques: "Why Choose kitchen decor for luxury modern kitchen designs is Pune?",
      ans: "With over 25 years of experience and 18,000+ happy customers, Kitchen décor offers you the freedom to co-create your perfect modular kitchen with our expert interior designers. Our feedback process allows you to be at the helm of the design, and we take pride in customizing designs to match your preferences. Our extensive modular kitchen catalog, combined with our interior design experts, makes Kitchen décor the leader in modular kitchen design in Pune.",
    },
  ];
  return (
    <div className="mt-[70px]">
      <Banner
        imageUrl={bannerImage}
        page={"Kitchen"}
        title={"Transforming spaces into ART."}
      />
      <div>
        {/* main section  */}
        <div className="flex flex-col justify-center items-center text-center gap-2 my-12 px-5  sm:px-14 md:px-32 xl:px-64">
          <h1 className=" text-3xl md:text-4xl font-semibold font-Lato ">
            Your Love of Cooking, Assisted with Modular Kitchen Design in Pune.
          </h1>
          <HeartDesignDivider color={"orange-500"} />
          <p className=" mt-5 text-neutral-700 leading-snug md:text-lg text-center">
            <span className=" font-semibold">Touch Wood</span> offers smart &
            luxury kitchen design solutions to bring to life a kitchen that
            reflects your taste and needs in the most perfect sense. Holding a
            legacy of more than 25+ years and rendering countless modular
            kitchens to various happy families, we can proudly say that we know
            kitchens and hence bring the best to you. Crafting a modern modular
            kitchen design that is not just aesthetically pleasing but also
            functionally advanced, is our forte. Our modular kitchens exhibit
            the finest quality and innovative designs marked with European
            precision. Our vision is to offer you a kitchen that enhances the
            joy of cooking for you and your family. We manage to do this with
            the valuable experience and knowledge that we’ve achieved in these
            25+ years of building trustworthy modular kitchens in Pune.
          </p>
        </div>
      </div>

      <KitchenStepSection />

      <KitchenElementsType />

      <VersesSection />

      <ModularKitchenTypesSection />

      <FAQsection faqData={faqData} />
    </div>
  );
}
