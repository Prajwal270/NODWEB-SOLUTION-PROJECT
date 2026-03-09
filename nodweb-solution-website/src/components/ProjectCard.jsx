import React, { useRef, useState, useEffect } from "react";

function ProjectCard({ title, description, image, video, link = "#" }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [video]);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
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
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="block h-68 bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-700/30 transition-all duration-300 group flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl shadow-blue-700/10"
    >
      <div className="relative h-42.5 overflow-hidden shrink-0 bg-black">
        {video ? (
          <>
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gray-700/50 animate-pulse" />
            )}
            {isVisible && (
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={() => setVideoLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  videoLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </>
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
      </div>

      <div className="p-4 flex flex-col justify-center grow">
        <h3 className="text-lg font-semibold text-amber-100 mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;