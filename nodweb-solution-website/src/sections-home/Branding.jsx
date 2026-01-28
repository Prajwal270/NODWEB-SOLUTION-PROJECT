import React from "react";

export default function Branding() {
  return (
    <section className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between bg-[#0B0F19] text-amber-100 px-6 md:px-20 py-15 md:py-0">
      <div className="text-center md:text-left md:max-w-lg space-y-6 sm:w-1/2 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold gilda-display-regular">NODWEB</h1>

        <p className="text-gray-400 text-base sm:text-lg">
          Build your skills with modern technology and create modern web
          solutions with ease.
        </p>

        <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition cursor-pointer">
          Get Started
        </button>
      </div>

      <div className="w-full md:w-1/2 max-w-md mb-10 md:mb-0">
        <iframe
          src="https://lottie.host/embed/a9c8831a-4f7b-4322-a373-ae97c5d37ce7/zFFbG0AJ74.lottie"
          className="w-full h-64 sm:h-94 md:h-150"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
