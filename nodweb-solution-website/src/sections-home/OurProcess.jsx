import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, PenTool, ShieldCheck, Rocket } from "lucide-react";
import ProcessStepCard from "../components/ProcessStepCard";

function OurProcess() {
  const steps = [
    {
      title: "Requirement Analysis",
      description: "We understand your goals and project needs clearly.",
      icon: ClipboardList,
      step: "01",
    },
    {
      title: "Design & Development",
      description: "We design and build using modern technologies.",
      icon: PenTool,
      step: "02",
    },
    {
      title: "Testing & Optimization",
      description: "We test and optimize for speed and quality.",
      icon: ShieldCheck,
      step: "03",
    },
    {
      title: "Launch & Support",
      description: "We launch and provide ongoing support.",
      icon: Rocket,
      step: "04",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#0B0F19] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            A simple and structured way to deliver high-quality digital products.
          </p>
        </div>

        <motion.div
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <ProcessStepCard {...item} />

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 -right-6 text-white/20 text-3xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default OurProcess;
