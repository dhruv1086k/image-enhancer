import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { assets } from "../assets/assets";

export function Testimonials() {
  const items = [
    {
      title: "Ananya R.",
      image: "TestiImg1",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      text: "Image Zen is like magic. I dropped a dull image in, and it came out vibrant, sharp, and portfolio-ready!",
    },
    {
      title: "Ravi Mehta",
      image: "TestiImg2",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      text: "Product images look so much more professional now. Sales actually went up after I started using Image Zen.",
    },
    {
      title: "Sneha Kapoor",
      image: "TestiImg3",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      text: "Saved me hours in Photoshop. The AI enhancements are subtle yet powerful — just what I need for my previews.",
    },
    {
      title: "Arjun S.",
      image: "TestiImg4",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      text: "I integrated Image Zen into my design workflow. It’s fast, clean, and the results are seriously impressive.",
    },
    {
      title: "Fatima M.",
      image: "TestiImg5",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      text: "I fixed dozens of old vacation photos with just one click. My followers thought I used a DSLR!",
    },
    {
      title: "Yash Thakur",
      image: "TestiImg6",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      text: "Image Zen makes our campaign creatives stand out. Sharper visuals = better engagement.",
    },
  ];
  return (
    <DraggableCardContainer className="relative mt-24 flex min-h-[70vh] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-lg -translate-y-3/4 text-center text-4xl font-black  md:text-7xl font-[bitterRose] outlined-text">
        If growth had a face, this would be it - transformative, real, and
        unforgettable.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={assets[item.image]}
            alt={item.title}
            className="pointer-events-none relative z-10 h-40 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
          <p className="text-white">{item.text}</p>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
