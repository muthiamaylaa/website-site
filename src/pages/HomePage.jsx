import React from "react";
import NavBar from "../component/navbar";
import HeroSection from "../component/hero-section";
import AboutSection from "../component/about-section";
import StatSection from "../component/stat-section";
import Timeline from "../component/timeline";
import Footer from "../component/footer";


export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatSection />
      <Timeline />
      <Footer />
    </div>
  );
}
