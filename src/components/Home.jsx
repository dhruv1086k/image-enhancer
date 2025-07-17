import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { FaArrowDown } from "react-icons/fa";
import { assets } from "../assets/assets";
import { LuSendHorizontal } from "react-icons/lu";

const Home = () => {
  return (
    <div className="w-full h-[75vh] max-sm:h-[90vh] px-32 max-xl:px-10 max-sm:px-3 font-[chillax]">
      <div className="text-center w-full space-y-6 bg-gradient-to-b from-[#C6FB50] to-white rounded-2xl py-16">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-[#161616] text-white text-md max-sm:text-sm px-6 py-2 rounded-xl font-medium">
          <PiStarFourFill className="text-[#C6FB50]" />
          Free to Try – No Sign-Up Needed
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-[2.6rem] font-medium leading-tight font-[voyage] text-[#161616] px-2">
          Enhance Your Images with <br />{" "}
          <span className="font-[voyage]">Zen-Like Precision</span>
        </h1>

        {/* Subheading */}
        <div className="flex w-full justify-center">
          <p className="text-gray-700 text-md max-md:text-md max-sm:text-sm w-2/5 max-md:w-3/5 max-sm:w-4/5">
            Transform blurry, dull, or low-quality images into crisp, vibrant{" "}
            visuals — all with the power of AI.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-[#161616] text-white px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition cursor-pointer">
            Try Image Zen Now
          </button>
          <button className="text-[#161616] flex items-center justify-center gap-2 text-sm font-medium cursor-pointer">
            View Before & After
            <LuSendHorizontal />
          </button>
        </div>

        {/* Scroll Icon */}
        <div className="mt-16 w-full flex justify-center items-center">
          <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center animate-bounce">
            <FaArrowDown className="text-gray-600" />
          </div>
        </div>
      </div>
      <div className="w-full h-[30vh] relative -top-42">
        <img
          src={assets.dotPattern}
          alt=""
          className="w-full h-full object-cover bg-repeat object-top"
        />
      </div>
    </div>
  );
};

export default Home;
