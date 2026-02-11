import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/nodweb_logo.webp";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect route
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Detect scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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

  const getLinkClass = ({ isActive }) =>
    `relative block font-semibold transition-colors duration-300
   ${isActive ? "text-blue-500" : "text-gray-300 hover:text-white"}
   after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-blue-500
   after:w-full after:scale-x-0 after:origin-left
   after:transition-transform after:duration-300
   hover:after:scale-x-100`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-gray-300 transition-all duration-300
      ${
        isHome
          ? scrolled
            ? "bg-[#0B0F19]/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
          : "bg-[#0B0F19] shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center gap-1">
              <img
                src={logo}
                alt=""
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
              <div className="shrink-0 font-semibold text-xl sm:text-2xl md:text-32xl tracking-wide text-white gilda-display-regular">
                Nod<span className="font-light">Web</span>
              </div>
            </div>
          </a>

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
          </div>

          <Link
            to="/services"
            className="group hidden md:flex items-center gap-1 justify-center bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium
                   transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95 hover:cursor-pointer"
          >
            Get Started
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

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
            <div className="flex flex-col gap-2 items-center bg-[#0B0F19] shadow-lg rounded-xl w-[90vw] border border-blue-600/20 max-w-sm p-6 space-y-3 text-center relative">
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
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="group w-full flex items-center gap-1 justify-center bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium
                   transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
