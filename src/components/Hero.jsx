import React from "react";
import "./Hero.css";
import heroImage from "../assets/black kids.png"; // Update path as needed

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Multicultural <br /> Magazine & Book Store
            </h1>
            <p className="hero-description">
              Discover diverse stories, cultures, and perspectives through our
              magazine issues and books.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                <span>Read Now</span>
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img
                src={heroImage}
                alt="Diverse collection of books and magazines"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
