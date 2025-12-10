import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: ["Home", "Magazine", "Books", "Blog", "About"],
    },
    {
      title: "Resources",
      links: ["FAQs", "Shipping", "Returns", "Privacy Policy", "Terms"],
    },
    {
      title: "Connect",
      links: ["Instagram", "Twitter", "Facebook", "LinkedIn", "YouTube"],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Restored Woman</h3>
            <p className="footer-tagline">
              Celebrating diverse voices and perspectives through literature and
              storytelling.
            </p>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2024 Restored Woman. All rights reserved.</p>
          <p>Powered by Ebass Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
