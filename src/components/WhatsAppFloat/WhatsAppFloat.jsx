// src/components/WhatsAppFloat/WhatsAppFloat.jsx
import React, { useState, useEffect } from "react";
import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for smooth entry
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const whatsappNumber = "14706591338"; // Format: country code + number (no spaces/symbols)
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about The Restored Woman Magazine & Bookstore."
    );

    // Open WhatsApp (works on both mobile and desktop)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      className={`whatsapp-float ${isVisible ? "visible" : ""}`}
      onClick={handleClick}
      aria-label="Message us on WhatsApp"
    >
      <div className="whatsapp-pulse"></div>
      <svg className="whatsapp-icon" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.001 3.2c-7.03 0-12.8 5.77-12.8 12.8 0 2.257.59 4.45 1.715 6.39L3.2 28.8l6.594-1.69A12.73 12.73 0 0016 28.8c7.03 0 12.8-5.77 12.8-12.8s-5.77-12.8-12.8-12.8zm0 23.04a10.18 10.18 0 01-5.19-1.42l-.37-.22-3.91.999 1.04-3.82-.24-.39A10.14 10.14 0 015.76 16c0-5.65 4.59-10.24 10.24-10.24 5.65 0 10.24 4.59 10.24 10.24 0 5.65-4.59 10.24-10.24 10.24zm5.62-7.67c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.2.29-.81 1.02-.99 1.23-.18.2-.36.22-.67.07-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.54-.07-.16-.71-1.7-.97-2.33-.26-.63-.53-.54-.71-.55h-.61c-.2 0-.52.07-.79.38-.27.31-1.04 1.02-1.04 2.48 0 1.45 1.07 2.85 1.23 3.05.16.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.37z" />
      </svg>
      <div className="whatsapp-tooltip">Message Us</div>
    </button>
  );
};

export default WhatsAppFloat;
