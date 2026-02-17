import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  LinkedinIcon,
  Twitter,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import threads from "../assets/icons/threads.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import twitter from "../assets/icons/twitter-x.svg";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <section className="w-full bg-[#0B0F19] pt-16 pb-8 text-gray-400 border-t border-gray-500/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + Description */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 md:w-1/3"
          >
            <a href="/">
              <div className="flex items-center gap-2">
                <img
                  src="/images/logos/nodweb_favicon.png"
                  alt="NodWeb Solution Logo - Digital Agency Nagpur"
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full"
                />
                <div className="shrink-0 font-semibold text-xl sm:text-2xl md:text-3xl tracking-wide text-white gilda-display-regular">
                  Nod<span className="font-light">Web</span>
                </div>
              </div>
            </a>
            <p className="text-gray-400 text-sm md:text-base">
              Building secure, compliant, and intelligent digital solutions that
              scale with you.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between md:w-2/3 gap-6 font-medium"
          >
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="hover:text-white transition">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white transition">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold mb-3">What We Offer</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 text-white">
              <h3 className="text-white font-semibold mb-3">Connect</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-1 text-sm font-medium">
                  <a
                    href="mailto:nodwebsolutionpvtltd@gmail.com"
                    target="_blank"
                    className="flex items-center gap-1 hover:underline hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    nodwebsolutionpvtltd@gmail.com
                  </a>
                </li>

                <div className="flex items-center justify-between">
                  <a
                    href="https://www.linkedin.com/company/nexxal-solution-pvt-ltd/"
                    target="_blank"
                  >
                    <LinkedinIcon className="h-10 w-10 hover:bg-gray-300/20 transition-all p-2 rounded" />
                  </a>
                  <a href="https://x.com/nodwebsolution" target="_blank">
                  <img
                      src={twitter}
                      alt=""
                      className="brightness-0 invert h-10 w-10 hover:bg-blue-700/20 transition-all p-2 rounded"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/nodwebsolutionpvt.ltd/"
                    target="_blank"
                  >
                    <Instagram className="h-10 w-10 hover:bg-gray-300/20 transition-all p-2 rounded" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61586899956719"
                    target="_blank"
                  >
                    <Facebook className="h-10 w-10 hover:bg-gray-300/20 transition-all p-2 rounded" />
                  </a>
                  <a
                    href="https://wa.me/917841061453?text=Hello!%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20IT%20solutions.%20Could%20you%20please%20share%20more%20details%20about%20your%20services?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={whatsapp}
                      alt=""
                      className="brightness-0 invert h-10 w-10 hover:bg-blue-700/20 transition-all p-2 rounded"
                    />
                  </a>

                  <a
                    href="https://www.threads.com/@nodwebsolutionpvt.ltd"
                    target="_blank"
                  >
                    <img
                      src={threads}
                      alt=""
                      className="brightness-0 invert h-10 w-10 hover:bg-blue-700/20 transition-all p-2 rounded"
                    />
                  </a>
                </div>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} NodWeb. All rights reserved.{" "}
          <span className="mx-2">·</span> Terms <span className="mx-2">·</span>{" "}
          Privacy
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
