import React from "react";
import VisionCard from "../components/VisionCard";
import { Clock, Globe, Star, BarChart2 } from "lucide-react"; // Example icons
import { motion } from "framer-motion";

function OurVision() {
  const cards = [
    {
      title: "Future Ready",
      description: "Building for tomorrow",
      icon: <Clock />,
    },
    {
      title: "Global Impact",
      description: "Solutions without boundaries",
      icon: <Globe />,
    },
    {
      title: "Digital Leadership",
      description: "Leading through innovation",
      icon: <Star />,
    },
    {
      title: "Long-Term Value",
      description: "Growth that lasts",
      icon: <BarChart2 />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#0e1322] text-amber-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-6">
          OUR VISION
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Our vision is to create solutions that prepare businesses for the future, make a global
          impact, lead through digital innovation, and deliver growth that lasts.
        </p>

        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <VisionCard
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurVision;
