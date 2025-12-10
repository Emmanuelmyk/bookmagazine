import React from "react";
import "./Stories.css";
import bookCoverImg from "../assets/cover2.png";

function Stories() {
  return (
    <section className="stories-section">
      {/* FIRST BLOCK — Image Right */}
      <div className="story-container">
        <div className="story-text">
          <h3 className="story-title">Wear Your Restoration</h3>
          <p className="story-description">
            This book dives deep into powerful ideas that shape our world today.
            Gain insights, explore fresh perspectives, and expand your thinking
            with this captivating read.
          </p>
          <button className="btn btn-accent">Buy Now</button>
        </div>

        <div className="story-image">
          <img src={bookCoverImg} alt="Book Cover" />
        </div>
      </div>

      {/* SECOND BLOCK — Image Left */}
      <div className="story-container reverse">
        <div className="story-text">
          <h3 className="story-title">Wear Your Restoration</h3>
          <p className="story-description">
            This book dives deep into powerful ideas that shape our world today.
            Gain insights, explore fresh perspectives, and expand your thinking
            with this captivating read.
          </p>
          <button className="btn btn-accent">Buy Now</button>
        </div>

        <div className="story-image">
          <img src={bookCoverImg} alt="Book Cover" />
        </div>
      </div>
    </section>
  );
}

export default Stories;
