import React, { useRef } from "react";

function ProjectCard({ title, description, image, video, link = "#" }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="block h-68 bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-700/30 transition-all duration-300 group flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl shadow-blue-700/10"
    >
      {/* Media :- if video not present then automatically shift to image*/}
      <div className="relative h-42.5 overflow-hidden shrink-0 bg-black">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        )}

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
      </div>

      <div className="p-4 flex flex-col justify-center grow">
        <h3 className="text-lg font-semibold text-amber-100 mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
