import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <div className="w-full px-32 max-xl:px-10 max-sm:px-3 font-[chillax]">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
