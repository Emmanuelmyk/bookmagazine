import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Magazine", "Books", "About", "Subscribe"];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img
                src="/assets/rw.png"
                alt="Restored Woman"
                className="logo-img"
              />
            </a>
          </div>

          <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
