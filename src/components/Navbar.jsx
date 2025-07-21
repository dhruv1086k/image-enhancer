import React, { useState } from "react";
import { assets } from "../assets/assets";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "feature", label: "Features" },
    { id: "testimonial", label: "Testimonial" },
    { id: "use", label: "Use" },
  ];

  const handleNavClick = (id) => {
    setActive(id);
    setOpenMenu(false); // Close mobile menu if open
  };

  return (
    <div className="w-full h-[15vh] max-md:h-[10vh] flex justify-between px-32 font-[chillax] max-xl:px-10 max-sm:px-3 fixed z-50 bg-white overflow-x-hidden">
      <div className="w-1/5 flex items-center max-lg:w-3/5 relative z-50">
        <a
          onClick={() => (navigate("/"), scrollTo(0, 0))}
          className="h-2/4 max-sm:h-3/5"
        >
          <img src={assets.logo} alt="" className="h-full w-auto" />
        </a>
      </div>

      {/* Fixed mobile menu */}
      {location.pathname === "/" && (
        <ul
          className={`w-3/5 flex justify-center items-center gap-14 max-xl:gap-9 max-lg:fixed max-lg:top-0 ${
            openMenu ? "max-lg:right-0" : "max-lg:-right-full"
          } max-lg:w-[280px] max-sm:w-[100vw] max-lg:h-full max-lg:flex-col max-lg:gap-16 transition-all duration-500 ease-linear max-lg:shadow-2xl max-lg:bg-white max-lg:rounded-tl-2xl max-lg:rounded-bl-2xl z-40`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                onClick={() => {
                  handleNavClick(link.id),
                    (window.location.hash = `#${link.id}`);
                }}
                className={`${
                  active === link.id && "rounded-md bg-[#C6FB50]"
                } px-5 py-1 transition-all duration-500 ease-in-out`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <button className="bg-[#161616] text-primary px-8 py-2 max-lg:px-5 max-lg:py-1 rounded-md cursor-pointer whitespace-nowrap lg:hidden">
            Get Started
          </button>
        </ul>
      )}

      <div className="w-1/5 relative z-50 flex justify-end items-center max-lg:gap-10 max-lg:w-2/5">
        <button className="bg-[#161616] text-primary px-8 py-2 max-lg:px-5 max-lg:py-1 rounded-md cursor-pointer whitespace-nowrap max-lg:hidden">
          Get Started
        </button>
        {location.pathname === "/" && (
          <div className="lg:hidden relative z-50">
            <div
              className={`transition-transform duration-300 ease-in-out ${
                openMenu ? "rotate-90 scale-110" : "rotate-0 scale-100"
              }`}
            >
              {openMenu ? (
                <IoClose
                  className="text-4xl max-sm:text-3xl cursor-pointer"
                  onClick={() => setOpenMenu((prev) => !prev)}
                />
              ) : (
                <IoMenu
                  className="text-4xl max-sm:text-3xl cursor-pointer"
                  onClick={() => setOpenMenu((prev) => !prev)}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
