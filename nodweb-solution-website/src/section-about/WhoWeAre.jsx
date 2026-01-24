import React from "react";
import WhoWeAreCard from "../components/WhoWeAreCard";
import { Laptop, Users, CheckCircle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

function WhoWeAre() {
  const cards = [
    {
      title: "Tech Company",
      description: "Digital-first solution builders",
      icon: <Laptop />,
    },
    {
      title: "Expert Team",
      description: "Developers, designers, and problem solvers",
      icon: <Users />,
    },
    {
      title: "Quality Focused",
      description: "Performance, security, and scalability",
      icon: <CheckCircle />,
    },
    {
      title: "Innovation Driven",
      description: "We build what’s next",
      icon: <Lightbulb />,
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
    <section className="w-full bg-[#0e1322] text-amber-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-6">
          WHO WE ARE
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We are a team of passionate professionals delivering modern digital solutions that
          drive results and innovation for businesses of all sizes.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <WhoWeAreCard
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

export default WhoWeAre;
