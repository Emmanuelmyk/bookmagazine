import React, { useState, useEffect } from "react";
import "./Header.css";
import logoImage from "../assets/rw.png"; // Import the image properly

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Magazine", "Books", "About", "Subscribe"];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a
              href="#"
              className="logo-link"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src={logoImage} // Use the imported image variable
                alt="Restored Woman"
                className="logo-img"
              />
            </a>
          </div>

          <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="nav-link"
                    style={{ animationDelay: `${index * 0.1}s` }}
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
            <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
            <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
