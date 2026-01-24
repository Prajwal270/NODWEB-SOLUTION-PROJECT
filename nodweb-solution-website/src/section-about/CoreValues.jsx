import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye, Zap, Users, Award, Users2 } from "lucide-react";

const values = [
  { title: "Quality First", description: "No compromise on standards", icon: <CheckCircle /> },
  { title: "Transparency", description: "Clear and honest communication", icon: <Eye /> },
  { title: "Innovation", description: "Always improving and evolving", icon: <Zap /> },
  { title: "Client First", description: "Your success is our priority", icon: <Users /> },
  { title: "Commitment", description: "We deliver what we promise", icon: <Award /> },
  { title: "Teamwork", description: "Stronger together, always", icon: <Users2 /> },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CoreValues() {
  return (
    <section className="w-full bg-[#0B0F19] text-amber-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          OUR CORE VALUES
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Our principles guide everything we do — quality, transparency, innovation, client focus, commitment, and teamwork.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-center items-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {values.map((val, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-linear-to-tr from-purple-600/30 to-pink-400/30 flex justify-center items-center text-blue-400 text-3xl sm:text-4xl md:text-5xl mb-3 shadow-lg hover:scale-105 transition-transform duration-300">
              {val.icon}
            </div>

            <h3 className="text-sm sm:text-base md:text-lg font-semibold">{val.title}</h3>

            <p className="text-gray-300 text-xs sm:text-sm md:text-sm mt-1 leading-snug max-w-30 md:max-w-35">
              {val.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CoreValues;
