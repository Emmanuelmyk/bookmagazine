import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background image for mobile/tablet */}
      <div className="hero-background">
        <img src="/assets/womanbg.png" alt="" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              The Restored Woman
              <br />
              <span className="highlight">Magazine & Book Store</span>
            </h1>
            <p className="hero-description">
              Where Every Woman's Journey Finds Its Voice.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Explore Collection
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src="/assets/womanbg.png"
                alt="Collection"
                className="hero-img"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
