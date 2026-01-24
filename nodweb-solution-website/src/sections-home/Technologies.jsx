import React from "react";
import { motion } from "framer-motion";

import html from "../assets/tech/html.svg";
import css from "../assets/tech/css.svg";
import js from "../assets/tech/javascript.svg";
import react from "../assets/tech/react.svg";
import node from "../assets/tech/node.svg";
import wordpress from "../assets/tech/wordpress.svg";
import googleads from "../assets/tech/googleadsense.svg";
import meta from "../assets/tech/meta.svg";
import seo from "../assets/tech/seo.svg";

function Technologies() {
  const technologies = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "React", logo: react },
    { name: "Node.js", logo: node },
    { name: "WordPress", logo: wordpress },
    { name: "Google Ads", logo: googleads },
    { name: "Meta Ads", logo: meta },
    { name: "SEO", logo: seo },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="w-full bg-[#0e1322] py-20 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Technologies We Use
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            We use modern, trusted and industry-proven technologies.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-center justify-center"
              title={tech.name}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 sm:h-12 md:h-14 opacity-70
           brightness-0 invert
           group-hover:opacity-100
           transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Technologies;
