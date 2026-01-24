import React from "react";
import {
  Zap,
  Lightbulb,
  Layers,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhyNodWebCard from "../components/WhyNodWebCard";

function WhyNodWeb() {
  const reasons = [
    {
      title: "Lightning Fast Speed",
      description: "Ultra-fast websites and apps that run smoothly everywhere.",
      icon: Zap,
    },
    {
      title: "Innovation Driven",
      description: "Modern tech and smart ideas for future-ready products.",
      icon: Lightbulb,
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business at every stage.",
      icon: Layers,
    },
    {
      title: "Client-Centric Approach",
      description: "We build exactly what your business truly needs.",
      icon: HeartHandshake,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-[#0e1322] py-15 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose NodWeb
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            We don’t just build websites — we build fast, scalable and smart
            digital solutions for your business.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <WhyNodWebCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center justify-center mt-12">
          <Link
            to="/contact"
            className="group flex items-center gap-1 justify-center bg-blue-800/10 border border-blue-600 text-white px-5 py-2 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95"
          >
            Start Your Project
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyNodWeb;
