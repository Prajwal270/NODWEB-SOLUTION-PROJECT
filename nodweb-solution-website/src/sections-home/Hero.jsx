import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative pt-22 pb-24 sm:pt-20 sm:pb-30 flex items-center justify-center overflow-hidden bg-[#05070F] text-white">
      {/* Background grid removed to avoid visible thin lines across sections */}

      {/* Glow */}
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 30, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 font-medium hover:scale-102 transition-all">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            Transforming Ideas Into Reality
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight my-5">
            Building Digital Solutions for the Future
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg font-medium">
            Web Development • Digital Marketing • IT Solutions
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="group flex items-center justify-center border border-blue-600 text-white px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 bg-blue-800/10 hover:bg-blue-600 hover:shadow-md active:scale-95">
            Contact Us
          </Link>

          <Link to="#" className="group flex items-center gap-1 justify-center border border-blue-600 bg-blue-600 text-white px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95">
            Get Started
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;
