import { assets } from "../assets/assets";
import { CiLocationArrow1 } from "react-icons/ci";

const Features = () => {
  const Capabilities = [
    { id: 1, title: "AI Upscaling", bgColor: "#044C34", textColor: "white" },
    { id: 2, title: "Smart Contrast", bgColor: "#BFFFF0", textColor: "black" },
    {
      id: 3,
      title: "One-Click Enhance",
      bgColor: "#B76F27",
      textColor: "white",
    },
    { id: 4, title: "Denoising", bgColor: "#EABFFF", textColor: "black" },
    {
      id: 5,
      title: "Color Correction",
      bgColor: "#CE47A1",
      textColor: "white",
    },
    { id: 6, title: "AI Upscaling", bgColor: "#C6FB50", textColor: "black" },
    { id: 7, title: "Auto Sharpen", bgColor: "#EABFFF", textColor: "black" },
  ];

  return (
    <div id="feature">
      <div className="grid relative grid-cols-[0.5fr_1fr_1.5fr_repeat(2,1fr)] grid-rows-[1fr_1.5fr_0.5fr_1fr_1fr] max-lg:grid-cols-4 max-lg:grid-rows-6 max-md:grid-cols-1 max-md:grid-rows-4 w-full h-[80vh] mt-10 gap-6 z-30">
        <div
          className="bg-red-300 col-start-1 col-end-4 row-start-1 row-end-3 max-lg:col-start-1 max-lg:col-end-5 max-lg:row-start-1 max-lg:row-end-3 max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-2 rounded-3xl bg-cover bg-no-repeat bg-right text-white p-8 max-lg:p-5 max-md:p-3"
          style={{ backgroundImage: `url(${assets.bentoImg1})` }}
        >
          <h3 className="text-4xl max-md:text-2xl font-bold">
            Optimized for Any{" "}
            <span className="text-[#C6FB50]">
              Image, <br />
            </span>{" "}
            Any <span className="text-[#C6FB50]">Device</span>
          </h3>
          <p className="mt-5 max-md:mt-1 text-md max-md:text-sm w-9/12">
            We ensure every image you enhance looks perfect — whether it's
            viewed on mobile, desktop, or print.
          </p>
        </div>

        <div className="bg-[#056646] col-start-4 col-end-6 row-start-1 row-end-6 max-lg:col-start-1 max-lg:col-end-3 max-lg:row-start-3 max-lg:row-end-7 max-md:col-start-1 max-md:col-end-2 max-md:row-start-2 max-md:row-end-3 rounded-3xl p-10 relative overflow-hidden shadow-2xl max-xl:p-5 max-md:p-3">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-700/30 rounded-3xl animate-pulse"></div>

          <div
            className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-20 translate-x-20 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/8 to-transparent rounded-full translate-y-16 -translate-x-16 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-0 w-20 h-20 bg-gradient-to-r from-white/6 to-transparent rounded-full -translate-x-10 animate-bounce"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Glowing particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
          <div
            className="absolute top-40 right-16 w-1 h-1 bg-white/50 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                backgroundSize: "25px 25px",
              }}
            ></div>
          </div>

          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-inner"></div>

          <h1 className="text-5xl flex items-center justify-center h-1/5 max-md:h-2/5 relative z-10 font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-lg max-md:text-3xl">
            Capabilities
          </h1>

          <div className="h-4/5 flex flex-col items-center justify-evenly relative z-10 max-md:hidden">
            {/* Glowing icon with animation */}
            <div className="text-white/40 text-7xl animate-pulse filter drop-shadow-lg max-lg:hidden">
              <div className="relative">
                <div className="absolute inset-0 text-white/20 animate-ping">
                  ⚡
                </div>
                ⚡
              </div>
            </div>

            {Capabilities.map((item) => (
              <div
                className="px-6 py-1 text-xl max-lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 transform relative overflow-hidden group cursor-pointer whitespace-nowrap"
                style={{
                  backgroundColor: `${item.bgColor}`,
                  color: `${item.textColor}`,
                }}
                key={item.id}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 font-medium">{item.title}</span>
              </div>
            ))}

            <div className="flex space-x-3 mt-6 max-lg:hidden">
              <div className="w-3 h-3 bg-gradient-to-r from-white/50 to-white/20 rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-gradient-to-r from-white/40 to-white/10 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-3 h-3 bg-gradient-to-r from-white/30 to-white/5 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Floating stars */}
            <div
              className="absolute top-16 right-12 text-white/20 animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              ⭐
            </div>
            <div
              className="absolute bottom-20 left-8 text-white/15 animate-bounce"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            >
              ✨
            </div>
            <div
              className="absolute top-32 left-1/3 text-white/10 animate-bounce"
              style={{ animationDuration: "5s", animationDelay: "2s" }}
            >
              💫
            </div>
          </div>

          {/* Mobile marquee effect */}
          <div className="h-3/5 hidden max-md:flex items-center justify-center relative z-10">
            <div className="w-full overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set of capabilities */}
                {Capabilities.map((item) => (
                  <div
                    className="px-4 py-1 text-sm rounded-full shadow-xl mx-2 whitespace-nowrap inline-block"
                    style={{
                      backgroundColor: `${item.bgColor}`,
                      color: `${item.textColor}`,
                    }}
                    key={`first-${item.id}`}
                  >
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {Capabilities.map((item) => (
                  <div
                    className="px-4 py-1 text-sm rounded-full shadow-xl mx-2 whitespace-nowrap inline-block"
                    style={{
                      backgroundColor: `${item.bgColor}`,
                      color: `${item.textColor}`,
                    }}
                    key={`second-${item.id}`}
                  >
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#056646] col-start-1 col-end-3 row-start-3 row-end-6 max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-3 max-lg:row-end-5 max-md:col-start-1 max-md:col-end-2 max-md:row-start-3 max-md:row-end-4 rounded-3xl p-7 max-lg:p-5 max-md:p-3">
          <div className="w-full flex justify-between h-1/4 max-md:h-[30%]">
            <img
              src={`${assets.feedbackLogo}`}
              alt=""
              className="h-4/5 max-lg:h-full"
            />
            <img
              src={`${assets.bigQuote}`}
              alt=""
              className="h-2/5 max-xl:hidden"
            />
          </div>
          <div className="text-white mt-3 h-3/4 max-md:h-[70%]">
            <p className="text-sm">
              Image Zen helped us fix over 1,000 client photos in record time.
              The enhancements are crisp, the colors pop, and it's become an
              essential part of our workflow.
            </p>
          </div>
        </div>

        <div className="bg-[#C6FB50] col-start-3 col-end-4 row-start-3 row-end-6 max-lg:col-start-3 max-lg:col-end-5 max-lg:row-start-5 max-lg:row-end-7 max-md:col-start-1 max-md:col-end-2 max-md:row-start-4 max-md:row-end-5 rounded-3xl space-y-2 p-7 max-md:p-4 max-lg:relative">
          <div className="flex justify-end items-center h-1/5 max-lg:absolute max-lg:right-5 max-lg:top-5">
            <div className="p-3 rounded-lg bg-white">
              <CiLocationArrow1 className="text-xl" />
            </div>
          </div>
          <div className="h-4/5 pt-14 max-lg:pt-0 max-lg:space-y-2">
            <h1 className="text-7xl max-lg:text-5xl max-sm:text-4xl">5000+</h1>
            <p className="text-sm">
              Trusted by creators, photographers, and developers worldwide.
            </p>
            <button className="bg-[#161616] text-white max-sm:text-md px-3 py-1 rounded-lg cursor-pointer">
              Try Zen
            </button>
          </div>
        </div>
      </div>

      {/* Add custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Features;
