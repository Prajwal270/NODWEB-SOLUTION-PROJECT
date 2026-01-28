import React from "react";
import ServiceCard from "../components/ServiceCard";
import {
  Code,
  Smartphone,
  Megaphone,
  PenTool,
  Search,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ServicesOverview() {
  const services = [
    {
      title: "Web Development",
      slug: "web-development",
      description: "Modern, fast, and responsive websites using latest technologies.",
      icon: Code,
    },
    {
      title: "App Development",
      slug: "app-development",
      description: "Android and iOS apps with smooth performance and great UI.",
      icon: Smartphone,
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Grow your business using smart digital marketing strategies.",
      icon: Megaphone,
    },
    {
      title: "UI / UX Design",
      slug: "ui-ux-design",
      description: "Clean, modern and user-friendly interface designs.",
      icon: PenTool,
    },
    {
      title: "SEO & Branding",
      slug: "seo-branding",
      description: "Improve your visibility and build a strong online brand.",
      icon: Search,
    },
    {
      title: "Maintenance & Support",
      slug: "maintenance-support",
      description: "Keep your website fast, secure, and always running smoothly.",
      icon: Wrench,
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
    <section className="w-full bg-[#0B0F19] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            We provide complete digital solutions to help your business grow
            online.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA btn */}
        <div className="flex items-center justify-center mt-10">
          <Link
            to="/services"
            className="group flex items-center gap-1 justify-center bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95 hover:cursor-pointer"
          >
            Explore Services
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
