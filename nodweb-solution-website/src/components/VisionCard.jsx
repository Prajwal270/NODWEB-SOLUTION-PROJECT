import React from "react";

function VisionCard({ title, description, icon }) {
  return (
    <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-lg shadow-lg hover:scale-101 hover:shadow-2xl shadow-blue-600/10 transition-transform duration-300 flex flex-col h-full text-center">
      {icon && (
        <div className="flex justify-center items-center text-white text-5xl mb-5">
          {icon}
        </div>
      )}

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="mt-auto text-gray-200 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default VisionCard;
