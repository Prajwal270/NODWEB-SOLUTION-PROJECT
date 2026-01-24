import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

import vid1 from "../assets/Video-998.mp4"

function OurProjects() {
  const projects = [
    {
      title: "DocSense AI",
      description: "Chat with PDFs using AI",
      link: "#",
    //   video: "/videos/docsense-preview.mp4",     add video link in future
    video: vid1,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "HelpDesk Pro",
      description: "Ticket management system",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping website",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Company Portfolio",
      description: "Modern business website",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "FinTrack Dashboard",
      description: "Business analytics and finance tracking",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI Chat Platform",
      description: "Customer support chatbot system",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Learning Management System",
      description: "Online courses and student management",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Task Management App",
      description: "Team productivity and task tracking",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
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
          OUR PROJECTS
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Here are some of our recent projects showcasing our skills in web
          development, AI solutions, and scalable digital products.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurProjects;
