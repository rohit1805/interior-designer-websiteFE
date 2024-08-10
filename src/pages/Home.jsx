import React from "react";
import { HomeSlider } from "../components/HomeSlider";
import ExperienceSection from "../components/ExperienceSection";
import ExploreProductSection from "../components/ExploreProductSection";
import WhatsNewSection from "../components/WhatsNewSection";
import Footer from "../components/Footer";
import useScrollToTop from "../Hooks/useScrollToTop";

export default function Home() {
  useScrollToTop();
  return (
    <div className="-z-50 mt-[70px]">
      <HomeSlider />
      <ExploreProductSection />
      <ExperienceSection />
      <WhatsNewSection />
      {/* <Footer /> */}
    </div>
  );
}
