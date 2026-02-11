import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const WHATSAPP_NUMBER = "917841061453"; // international format without +
  const EMAIL_ADDRESS = "nodwebsolutionpvtltd@gmail.com";
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const mapRef = React.useRef(null);
  const [mapVisible, setMapVisible] = React.useState(false);
  const [accent, setAccent] = useState("#6366F1");
  const EXPERTISE_OPTIONS = [
    { value: "web", label: "Web Development", color: "#6366F1" },
    { value: "app", label: "App Development", color: "#06B6D4" },
    { value: "marketing", label: "Digital Marketing", color: "#10B981" },
    { value: "design", label: "UI / UX Design", color: "#A78BFA" },
    { value: "seo", label: "SEO & Branding", color: "#F59E0B" },
    { value: "support", label: "Maintenance & Support", color: "#0EA5A4" },
  ];
  const [selectedExpertise, setSelectedExpertise] = useState("");
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const expertiseRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!expertiseRef.current) return;
      if (!expertiseRef.current.contains(e.target)) setExpertiseOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  React.useEffect(() => {
    if (!mapRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setMapVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );
    obs.observe(mapRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      const form = e.target;
      const name = form.fullName.value || "";
      const email = form.email.value || "";
      const phone = form.phone.value || "";
      const expertise = form.expertise?.value || "";
      const message = form.message.value || "";

      // Prepare EmailJS template parameters
      const templateParams = {
        name: name,
        email: email,
        phone: phone || "Not provided",
        message: `Expertise: ${expertise}\n\n${message}`,
        time: new Date().toLocaleString(),
      };

      try {
        // Send email via EmailJS
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        );

        setSubmitStatus("success");
        form.reset();
        setSelectedExpertise("");

        // Auto-clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } catch (error) {
        console.error("EmailJS Error:", error);
        setSubmitStatus("error");

        // Fallback to WhatsApp
        const bodyText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nExpertise: ${expertise}\n\n${message}`;
        const encoded = encodeURIComponent(bodyText);
        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
          "_blank",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      WHATSAPP_NUMBER,
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY,
    ],
  );

  return (
    <main className="bg-[#05070F] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Connect with Our Team of Experts
          </h1>
          <p className="text-gray-300 mt-2 sm:mt-3 max-w-2xl text-sm sm:text-base">
            Contact our team of excellence-driven experts today to bring your
            project to life.
          </p>
        </motion.header>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2 items-start">
          {/* Left: contact info & CTA */}
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-full bg-indigo-800/30 flex items-center justify-center flex-shrink-0">
                  <Phone
                    className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-200"
                    strokeWidth={1.6}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm text-gray-300">Call us</div>
                  <div className="text-base sm:text-lg font-semibold break-all">+91 7841061453</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-full bg-indigo-800/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-200" strokeWidth={1.6} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm text-gray-300">Email</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold break-all">
                    nodwebsolutionpvtltd@gmail.com
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => (window.location.href = "/career")}
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm sm:text-base"
                >
                  Visit our Job Board
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-[rgba(255,255,255,0.02)]">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Have a project? Let's build it together
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Tell us about your project and we'll provide a free consultation, timeline, and plan to help you grow.
              </p>
              <button
                onClick={() => {
                  const contactForm = document.querySelector('form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm sm:text-base"
              >
                Tell Us About Your Project
              </button>
            </div>

            <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-[rgba(255,255,255,0.02)]">
              <h4 className="text-xs sm:text-sm text-gray-300 font-medium">Office Address</h4>
              <p className="mt-2 text-white text-sm sm:text-base">
                Wardaman Nagar, Friend Colony Road
                <br />
                Butibori, Nagpur — 441108
              </p>
              <div className="mt-4">
                <a
                  href="https://wa.me/917841061453?text=Hi%20NodWeb%20team"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 px-4 py-2.5 rounded text-white text-center transition text-sm sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.39 1.78.8 2.6a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.48-1.48a2 2 0 0 1 2.11-.45c.82.41 1.7.68 2.6.8A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div
              className="bg-gradient-to-br from-[#07264b] to-[#0b3a6a] p-4 sm:p-5 md:p-6 rounded-lg shadow-lg border"
              style={{ borderColor: accent }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Start a conversation — we usually reply within one business day.
                We keep your details private and secure.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block sm:col-span-1">
                    <span className="sr-only">Full Name</span>
                    <input
                      name="fullName"
                      placeholder="Full Name"
                      required
                      className="w-full px-3 py-2.5 sm:py-3 rounded bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out text-white placeholder-gray-400 text-sm sm:text-base"
                    />
                  </label>

                  <label className="block sm:col-span-1">
                    <span className="sr-only">Email Address</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-3 py-2.5 sm:py-3 rounded bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out text-white placeholder-gray-400 text-sm sm:text-base"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="sr-only">Phone Number</span>
                  <input
                    name="phone"
                    placeholder="Phone Number (optional)"
                    className="w-full px-3 py-2.5 sm:py-3 rounded bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-white placeholder-gray-400 text-sm sm:text-base"
                  />
                  <div className="text-xs text-gray-400 mt-1">
                    Optional — including country code helps us reply quickly.
                  </div>
                </label>

                <label className="block relative" ref={expertiseRef}>
                  <span className="sr-only">
                    What Expertise You're Interested In
                  </span>
                  <div
                    onClick={() => setExpertiseOpen((v) => !v)}
                    className="w-full px-3 py-2.5 sm:py-3 rounded bg-[rgba(255,255,255,0.02)] text-white border border-gray-600 focus:outline-none flex items-center justify-between cursor-pointer transition-all duration-200 ease-in-out hover:border-indigo-500 text-sm sm:text-base"
                  >
                    <span className="truncate pr-2">
                      {selectedExpertise
                        ? EXPERTISE_OPTIONS.find(
                            (x) => x.value === selectedExpertise,
                          )?.label
                        : "What Expertise You're Interested In"}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-300 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="hidden"
                    name="expertise"
                    value={selectedExpertise}
                  />

                  {expertiseOpen && (
                    <div className="absolute left-0 right-0 mt-1 bg-[#071129] border border-gray-700 rounded shadow-lg max-h-48 overflow-auto z-50">
                      {EXPERTISE_OPTIONS.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => {
                            setSelectedExpertise(opt.value);
                            setAccent(opt.color);
                            setExpertiseOpen(false);
                          }}
                          className="px-3 py-2 hover:bg-indigo-700 cursor-pointer text-white transition-all duration-200 ease-in-out text-sm sm:text-base"
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  )}
                </label>

                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    placeholder="Describe your project, timeline, budget, or paste a portfolio link"
                    rows="5"
                    className="w-full px-3 py-2.5 sm:py-3 rounded bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-white placeholder-gray-400 text-sm sm:text-base resize-none"
                  />
                  <div className="text-xs text-gray-400 mt-1">
                    Short summaries help us reply faster — links to designs or
                    portfolios are welcome.
                  </div>
                </label>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: `linear-gradient(90deg, ${accent}, #2563EB)`,
                    }}
                    className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium text-white transition transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? "Sending..." : "Start a conversation"}
                  </button>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-xs sm:text-sm text-gray-300 text-center sm:text-left hover:text-indigo-400 transition break-all"
                  >
                    Or email {EMAIL_ADDRESS}
                  </a>
                </div>

                {submitStatus === "success" && (
                  <div className="mt-3 p-3 bg-green-500/10 border border-green-500/20 rounded text-green-400 text-sm">
                    ✓ Message sent successfully! We'll respond within one
                    business day.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                    ⚠ Email service unavailable. Opening WhatsApp as backup...
                  </div>
                )}

                <div className="mt-3 text-xs text-gray-400">
                  🔒 We typically reply within one business day. Your details
                  will be kept private and never shared.
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Visit Our Office (stylish map card + overlay) */}
        <section className="mt-8 sm:mt-10 md:mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Visit Our Office</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              We're based in Butibori, Nagpur. Visits by appointment — remote
              collaboration is available worldwide.
            </p>

            <div
              ref={mapRef}
              className="relative rounded-lg sm:rounded-xl overflow-hidden border border-indigo-700/10 bg-gradient-to-br from-[#041229]/40 to-[#06203a]/40 shadow-lg"
            >
              {/* overlay card (glass-like) */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 p-2.5 sm:p-3 rounded-md bg-white/6 backdrop-blur-sm border border-white/6 max-w-[200px] sm:max-w-xs">
                <div className="text-xs sm:text-sm font-semibold">NodWeb Solution</div>
                <div className="text-[10px] sm:text-xs text-gray-300">Butibori, Nagpur</div>
                <div className="text-[10px] sm:text-xs text-gray-300 mt-1">
                  Mon–Fri: 10:00–18:00
                </div>
                <div className="text-[10px] sm:text-xs text-gray-300">
                  Remote-friendly • By appointment
                </div>
              </div>

              {/* simple branded marker (visual only) */}
              <div className="pointer-events-none absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500 flex items-center justify-center shadow-xl border-2 border-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="sm:w-[18px] sm:h-[18px]"
                    fill="none"
                  >
                    <path
                      d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z"
                      fill="#fff"
                      opacity="0.95"
                    />
                    <circle cx="12" cy="9" r="2.2" fill="#2563EB" />
                  </svg>
                </div>
              </div>

              {mapVisible ? (
                <iframe
                  title="office-map"
                  src="https://www.google.com/maps?q=Wardaman+Nagar+Friend+Colony+Road+Butibori+Nagpur+441108&output=embed"
                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#061a39] to-[#07284b] flex items-center justify-center text-gray-400 text-sm">
                  Map will load when visible
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default React.memo(Contact);
