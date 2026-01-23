import React from "react";

function ProcessStepCard({ icon: Icon, title, description, step }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="absolute -top-8 text-7xl font-bold text-white/5 select-none">
        {step}
      </div>

      <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        <Icon className="h-7 w-7" />
      </div>

      {/* Card */}
      <div className="w-full rounded-xl border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-blue-700/20 hover:cursor-pointer transition-all duration-150">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default ProcessStepCard;
