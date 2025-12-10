import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about">
      {/* ROW 1 – About Us */}
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>

          <p className="about-description">
            The Restored Woman Magazine & Bookstore is a transformational
            platform created to empower, uplift, and inspire women across the
            world. Built on a foundation of faith, strength, and purpose, we
            provide women with the tools, stories, resources, and spiritual
            nourishment needed to walk in restoration and destiny.
          </p>
        </div>

        <div className="about-image">
          {/* <img src="/images/about.jpg" alt="About Us" className="about-img" /> */}
        </div>
      </div>

      {/* ROW 2 – Our Mission */}
      <div className="about-container reverse">
        <div className="about-image">
          {/* <img
            src="/images/mission.jpg"
            alt="Our Mission"
            className="about-img"
          /> */}
        </div>

        <div className="about-content right">
          <h2 className="about-title">Our Mission</h2>

          <p className="about-description">
            Our mission is to guide women back to wholeness—emotionally,
            spiritually, and mentally—through faith-centered content, books,
            teachings, and community.
          </p>

          <p className="about-description">
            We exist to restore confidence, ignite purpose, and help every woman
            rediscover her identity in God so she can live boldly, healed, and
            empowered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
