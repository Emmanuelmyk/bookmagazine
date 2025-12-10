import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      title: "Quick Links",
      links: ["Home", "Magazine", "Books", "Blog", "About"],
    },
    {
      title: "Resources",
      links: [
        "FAQs",
        "Shipping Info",
        "Returns",
        "Privacy Policy",
        "Terms of Service",
      ],
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
            <h3 className="footer-logo">MC MAGAZINE</h3>
            <p className="footer-description">
              A magazine and book store dedicated to sharing diverse stories and
              cultures.
            </p>
            <div className="social-links">
              {["ig", "tw", "fb", "in", "yt"].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="social-link"
                  aria-label={platform}
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="social-icon">{platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-grid">
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex} className="footer-column">
                <h4 className="column-title">{column.title}</h4>
                <ul className="column-links">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="footer-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} MC Magazine. All rights reserved.
          </p>
          <div className="footer-extra">
            <span>Made with ♥ for cultural diversity</span>
            <span className="divider">•</span>
            <span>ISSN 1234-5678</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
