import React from "react";
import "./App.css"
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Svg1 from "./components/Svg1";
import Section2 from "./components/Section2"
import Section3 from "./components/Section3";
import Svg2 from "./components/Svg2";

import MenuSection from "./components/MenuSection";
import Svg3 from "./components/Svg3";
import DealSection from "./components/DealSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Svg1 />
      <Section2 />
      <Section3/>
      <Svg2/>
      <MenuSection />
      <Svg3/>
      <DealSection />
      <AboutSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
