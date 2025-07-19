import React from "react";
import { assets } from "../assets/assets";
import { PiStarFourFill } from "react-icons/pi";

const Use = () => {
  return (
    <div>
      <div className="min-h-[60vh] md:h-auto relative w-full bg-[#C6FB50] my-6 md:my-12 rounded-2xl md:rounded-4xl overflow-hidden">
        {/* Background decorative images */}
        <img
          src={assets.squareImg1}
          alt=""
          className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 z-10"
        />
        <img
          src={assets.squareImg2}
          alt=""
          className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 lg:w-40 z-10"
        />

        {/* Main content */}
        <div className="flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16 relative z-20 h-full">
          {/* Header badge */}
          <div className="bg-white text-black flex justify-center items-center px-4 sm:px-5 py-2 gap-2 sm:gap-4 rounded-2xl md:rounded-4xl mb-6 sm:mb-8 md:mb-10">
            <PiStarFourFill className="text-[#C6FB50] text-sm sm:text-base" />
            <span className="text-sm sm:text-base font-medium">
              How to use?
            </span>
          </div>

          {/* Process flow - Mobile: Vertical, Tablet+: Horizontal */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-4">
              <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-auto border border-black rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden group cursor-pointer">
                <img src={assets.useImg1} alt="" className="w-full h-auto" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <span className="text-white text-sm sm:text-base md:text-lg font-medium text-center px-2">
                    Upload Image
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={assets.arrowOrange}
                alt=""
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-36 lg:h-auto rotate-90 lg:rotate-0"
              />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-2 sm:gap-4">
              <div className="relative w-48 sm:w-56 md:w-72 lg:w-96 h-auto rounded-2xl md:rounded-4xl overflow-hidden group cursor-pointer">
                <img src={assets.useImg2} alt="" className="w-full h-auto" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                >
                  <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center px-4">
                    <span className="text-4xl text-[#C6FB50]">IMAGE ZEN</span>{" "}
                    <br />
                    AI Processing
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={assets.arrowBlue}
                alt=""
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-36 lg:h-auto rotate-90 lg:rotate-0"
              />
            </div>

            {/* Step 3 - Multiple results */}
            <div className="flex flex-row lg:flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto max-w-md lg:max-w-none">
              <div className="flex flex-col gap-2 sm:gap-3 w-1/3 lg:w-[100px] xl:w-[120px] 2xl:w-[150px]">
                <div className="relative w-full h-auto aspect-square border border-black rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={assets.useImg3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <span className="text-white text-xs sm:text-sm font-medium text-center px-1">
                      Image Enhancer
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 w-1/3 lg:w-[100px] xl:w-[120px] 2xl:w-[150px]">
                <div className="relative w-full h-auto aspect-square border border-black rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={assets.useImg4}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <span className="text-white text-xs sm:text-sm font-medium text-center px-1">
                      Image Background Remover
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 w-1/3 lg:w-[100px] xl:w-[120px] 2xl:w-[150px]">
                <div className="relative w-full h-auto aspect-square border border-black rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={assets.useImg5}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <span className="text-white text-xs sm:text-sm font-medium text-center px-1">
                      AI Image Retouch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
