import React from "react";
import whatsapp from "../assets/icons/whatsapp.svg";

function FloatingWhatsapp() {
  const phoneNumber = "917841061453";
  const message =
    "Hello! I visited your website and I am interested in your IT solutions. Could you please share more details about your services?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <img
        src={whatsapp}
        alt=""
        className="brightness-0 invert h-8 w-8 transition-all rounded"
      />
    </a>
  );
}

export default FloatingWhatsapp;
