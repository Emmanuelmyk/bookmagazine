import React from "react";
import "./FeatureRelease.css";
import bookCoverImg from "../assets/cover1.png"; // <-- Import image

function FeatureRelease() {
  return (
    <section className="magazine-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">FEATURED RELEASE</h2>
        </div>

        <div className="magazine-content">
          <div className="magazine-card">
            {/* LEFT SIDE — BOOK COVER */}
            <div className="book-cover">
              <img
                src={bookCoverImg} // <-- Use imported image
                alt="Book Cover"
                className="book-cover-img"
              />
            </div>

            {/* RIGHT SIDE — BOOK DETAILS */}
            <div className="book-details">
              <h3 className="book-title">The Restored Woman</h3>

              <p className="book-description">
                This book dives deep into powerful ideas that shape our world
                today. Gain insights, explore fresh perspectives, and expand
                your thinking with this captivating read.
              </p>

              <button className="btn btn-accent book-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureRelease;
