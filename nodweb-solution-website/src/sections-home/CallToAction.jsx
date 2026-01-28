import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-[#0B0F19]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to grow your business with NodWeb Solution?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Let’s build something amazing together. Contact NodWeb today and get a
          free consultation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link className="group flex items-center gap-1 justify-center border border-blue-600 bg-blue-600 text-white px-6 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95">
            Get Started
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="border border-blue-600 text-white hover:bg-blue-600 hover:text-white font-medium px-6 py-2 rounded-lg flex items-center justify-center transition-all duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
