import React from "react";

function WhyNodWebCard({ icon: Icon, title, description }) {
  return (
    <div
      className="group h-full flex flex-col bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-blue-600/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className="mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg 
                   bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition"
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>

      <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default WhyNodWebCard;
