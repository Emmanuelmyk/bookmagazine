import React, { useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);

  const footerLinks = [
    {
      title: "Navigation",
      links: ["Home", "Magazine", "Books", "Blog", "About"],
    },

    {
      title: "Contact",
      links: ["Email: mediamcmagazine@gmail.com", "Phone: +1 (470) 659-1338"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Restored Woman</h3>
            <p className="footer-tagline">
              Celebrating diverse voices and perspectives through literature and
              storytelling.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.001 3.2c-7.03 0-12.8 5.77-12.8 12.8 0 2.257.59 4.45 1.715 6.39L3.2 28.8l6.594-1.69A12.73 12.73 0 0016 28.8c7.03 0 12.8-5.77 12.8-12.8s-5.77-12.8-12.8-12.8zm0 23.04a10.18 10.18 0 01-5.19-1.42l-.37-.22-3.91.999 1.04-3.82-.24-.39A10.14 10.14 0 015.76 16c0-5.65 4.59-10.24 10.24-10.24 5.65 0 10.24 4.59 10.24 10.24 0 5.65-4.59 10.24-10.24 10.24zm5.62-7.67c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.2.29-.81 1.02-.99 1.23-.18.2-.36.22-.67.07-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.54-.07-.16-.71-1.7-.97-2.33-.26-.63-.53-.54-.71-.55h-.61c-.2 0-.52.07-.79.38-.27.31-1.04 1.02-1.04 2.48 0 1.45 1.07 2.85 1.23 3.05.16.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.37z" />
                </svg>
              </a>

              <a href="#" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div
              key={i}
              className="footer-column"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, j) => (
                  <li
                    key={j}
                    style={{ animationDelay: `${i * 0.1 + j * 0.05}s` }}
                  >
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span>{link}</span>
                      <svg
                        className="link-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2025 Restored Woman. All rights reserved.</p>
          <p className="powered-by">
            Powered by <span className="ebass-highlight">Ebass Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
