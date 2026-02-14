import React from "react";
import { motion } from "framer-motion";

function Blog() {
  return (
    <section className="w-full bg-[#0B0F19] text-amber-100 py-16 pt-25 px-4">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Our <span className="text-blue-500">Blog</span>
        </motion.h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Explore the latest trends, tips, and strategies in tech and
          development
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>
    </section>
  );
}

export default Blog;
