import React from "react";

function WhoWeAreCard({ title, description, icon }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:scale-102 hover:border-blue-600/50 transition-transform duration-300 text-center flex flex-col h-full">
      {icon && <div className="flex justify-center text-blue-400 text-3xl mb-4">{icon}</div>}

      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h3>

      <p className="mt-auto text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
}

export default WhoWeAreCard;
