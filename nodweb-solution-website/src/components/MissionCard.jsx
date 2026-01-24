import React from "react";

function MissionCard({ title, description, icon }) {
  return (
    <div className="bg-blue-500/10 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md hover:shadow-lg shadow-blue-600/20 hover:border-blue-600/20 transition-all duration-300 flex flex-col h-full text-center">
      {icon && <div className="flex justify-center text-white text-4xl mb-4">{icon}</div>}

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>

      <p className="mt-auto text-gray-200 text-sm sm:text-base">{description}</p>
    </div>
  );
}

export default MissionCard;
