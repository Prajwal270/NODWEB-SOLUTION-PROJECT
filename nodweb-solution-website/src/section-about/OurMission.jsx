import React from "react";
import MissionCard from "../components/MissionCard";
import { TrendingUp, Shield, Zap, ZapOff } from "lucide-react"; // Example icons
import { motion } from "framer-motion";

function OurMission() {
  const cards = [
    {
      title: "Empower Businesses",
      description: "Technology that helps you grow",
      icon: <TrendingUp />,
    },
    {
      title: "Reliable Systems",
      description: "Secure and stable solutions",
      icon: <Shield />,
    },
    {
      title: "High Performance",
      description: "Fast and optimized products",
      icon: <Zap />,
    },
    {
      title: "Smart Execution",
      description: "Ideas turned into reality",
      icon: <ZapOff />,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#0B0F19] text-amber-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-6">
         OUR MISSION
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Our mission is to deliver technology solutions that empower businesses, ensure
          reliability, and drive innovation with high performance and smart execution.
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MissionCard
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

export default OurMission;
