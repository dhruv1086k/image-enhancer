import React from "react";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import { assets } from "../assets/assets";

const Showcase = () => {
  const images = [
    assets.showcaseImg1,
    assets.showcaseImg2,
    assets.showcaseImg3,
    assets.showcaseImg4,
    assets.showcaseImg5,
    assets.showcaseImg6,
    assets.showcaseImg7,
    assets.showcaseImg8,
    assets.showcaseImg9,
    assets.showcaseImg10,
    assets.showcaseImg11,
    assets.showcaseImg12,
    assets.showcaseImg13,
    assets.showcaseImg14,
    assets.showcaseImg15,
    assets.showcaseImg16,
    assets.showcaseImg17,
    assets.showcaseImg18,
    assets.showcaseImg19,
    assets.showcaseImg20,
    assets.showcaseImg21,
    assets.showcaseImg22,
    assets.showcaseImg23,
    assets.showcaseImg24,
    assets.showcaseImg25,
  ];

  return (
    <div className="w-full pt-32 max-md:pt-22 max-sm:pt-24 px-32 max-xl:px-10 max-sm:px-3 font-[chillax]">
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Showcase;
