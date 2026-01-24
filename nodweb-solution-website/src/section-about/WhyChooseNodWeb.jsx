import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Briefcase, LifeBuoy } from "lucide-react";

const reasons = [
  { title: "Modern Stack", description: "Latest technologies", icon: <Cpu /> },
  { title: "High Performance", description: "Fast and scalable systems", icon: <Zap /> },
  { title: "Business Focus", description: "Not just design, real results", icon: <Briefcase /> },
  { title: "Reliable Support", description: "We stand with our clients", icon: <LifeBuoy /> },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function WhyChooseNodWeb() {
  return (
    <section className="w-full bg-[#0e1322] text-amber-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          WHY CHOOSE NODWEB
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          We deliver solutions that combine modern technologies, high performance, and long-term business value.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex justify-center items-center text-blue-600 text-3xl sm:text-4xl md:text-5xl hover:bg-blue-600/10 transition-all duration-300">
              {reason.icon}
            </div>

            <h3 className="text-sm sm:text-base md:text-lg font-semibold">{reason.title}</h3>

            <p className="text-gray-300 text-xs sm:text-sm md:text-sm mt-1 leading-snug max-w-30 md:max-w-35">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WhyChooseNodWeb;
