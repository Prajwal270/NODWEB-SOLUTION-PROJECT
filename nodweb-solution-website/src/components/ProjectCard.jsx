import React, { useRef, useState, useEffect } from "react";

function ProjectCard({ title, description, image, youtubeId, link = "#" }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Lazy-load: only mount the iframe once the card enters the viewport
  useEffect(() => {
    if (!youtubeId) return;
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
  }, [youtubeId]);

  const embedUrl = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&playsinline=1&rel=0`
    : null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block h-68 bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-700/30 transition-all duration-300 group flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl shadow-blue-700/10"
    >
      <div className="relative h-40 overflow-hidden shrink-0 bg-black">
        {youtubeId ? (
          <>
            {/* Thumbnail shown until hovered (fast initial load, no iframe cost) */}
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              className={`absolute inset-0 w-full h-full object-cover scale-[1.36] transform group-hover:scale-[1.25] transition duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              style={{ transition: "opacity 0.3s" }}
            />

            {/* Iframe only mounts after card is visible in viewport */}
            {isVisible && (
              <iframe
                src={embedUrl}
                title={title}
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
                loading="lazy"
                className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  border: "none",
                  transform: "scale(1.05)",
                }}
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
