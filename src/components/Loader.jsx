import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
