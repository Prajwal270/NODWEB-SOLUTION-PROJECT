import React from "react";
import logo from "../assets/nodweb_logo.webp";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0B0F19]">
      <img
        src={logo}
        alt="NodWeb Logo"
        className="h-24 w-24 sm:h-36 sm:w-36 animate-bounce mb-4 rounded-full"
      />
      <p className="text-white text-lg sm:text-xl animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
