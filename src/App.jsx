import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import DesignPhilosophy from "./pages/DesignPhilosophy";
import Kitchen from "./pages/kitchen";
import { Wardrobe } from "./pages/Wardrobe";
import Beds from "./pages/Beds";
import { TVUnit } from "./pages/TVUnit";
import { OtherFurniture } from "./pages/OtherFurniture";
import { ArchitectsInteriorDesigner } from "./pages/ArchitectsInteriorDesigner";
import { AboutUs } from "./pages/AboutUs";
import { ScheduleVisit } from "./components/ScheduleVisit";
import { QuoteForm } from "./components/QuoteForm";
import { Enquiry } from "./pages/Enquiry";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/designPhilosophy" element={<DesignPhilosophy />} />
          <Route path="/kitchen" element={<Kitchen />} />
          {/* <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/bed" element={<Beds />} />
          <Route path="/tvunit" element={<TVUnit />} /> */}
          <Route path="/otherFurniture" element={<OtherFurniture />} />
          <Route
            path="/architectInteriorDesigner"
            element={<ArchitectsInteriorDesigner />}
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/scheduleVisit" element={<ScheduleVisit />} />
          <Route path="/quoteForm" element={<QuoteForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
