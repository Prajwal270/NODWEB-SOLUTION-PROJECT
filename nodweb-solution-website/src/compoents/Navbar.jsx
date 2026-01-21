import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  // Tailwind class helper for active links
  const getLinkClass = ({ isActive }) =>
    `relative block font-semibold
     ${isActive ? "text-blue-500" : "text-gray-300 hover:text-blue-600"}
     after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-blue-500
     after:w-0 after:transition-all after:duration-300
     hover:after:w-full`;

  return (
    <nav className="bg-[#0B0F19]/90 shadow-md sticky top-0 z-50 text-gray-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 font-bold text-xl">NodWeb</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={getLinkClass}>
              Services
            </NavLink>
            <NavLink to="/career" className={getLinkClass}>
              Career
            </NavLink>
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Card */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden fixed inset-0 flex justify-center items-start pt-20 z-40"
          >
            <div className="bg-[#0B0F19]/95 backdrop-blur-lg shadow-lg rounded-xl w-[90vw] max-w-sm p-6 space-y-3 text-center relative">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClass}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClass}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClass}
              >
                Services
              </NavLink>
              <NavLink
                to="/career"
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClass}
              >
                Career
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClass}
              >
                Contact
              </NavLink>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
