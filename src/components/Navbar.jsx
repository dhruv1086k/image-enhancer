import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [active, setActive] = useState("home");
  console.log(active);

  const navLinks = [
    { id: "home", label: "home" },
    { id: "feature", label: "features" },
    { id: "testimonial", label: "testimonial" },
    { id: "use", label: "use" },
  ];

  return (
    <div className="w-full h-[15vh] flex justify-between px-32 font-[chillax] max-xl:px-10">
      <div className="w-1/5 flex items-center">
        <img src={assets.logo} alt="" className="h-2/4 w-auto" />
      </div>
      <ul className="w-3/5 flex justify-center items-center gap-14 max-xl:gap-9">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href="#"
              onClick={() => setActive(link.id)}
              className={`${
                active === link.id && "rounded-md bg-[#C6FB50]"
              } px-5 py-1 transition-all duration-500 ease-in-out`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-1/5 flex justify-end items-center">
        <button className="bg-[#161616] text-primary px-8 py-2 rounded-md cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
