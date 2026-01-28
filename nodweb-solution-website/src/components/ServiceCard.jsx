import React from "react";

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group h-full flex flex-col bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-blue-500/40 hover:shadow-blue-600/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition">
        <Icon className="text-blue-400" size={26} />
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed grow">
        {description}
      </p>

    </div>
  );
}

export default ServiceCard;