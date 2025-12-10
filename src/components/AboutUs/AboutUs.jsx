import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="container">
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

            <p className="about-description">
              We believe every woman deserves a space where she can discover her
              true identity, heal from past wounds, and step boldly into her
              purpose.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/assets/about-us.jpg"
              alt="About The Restored Woman"
              className="about-img"
              onError={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)";
                e.target.alt = "";
              }}
            />
          </div>
        </div>

        {/* ROW 2 – Our Mission */}
        <div className="about-container reverse">
          <div className="about-image">
            <img
              src="/assets/mission.jpg"
              alt="Our Mission"
              className="about-img"
              onError={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)";
                e.target.alt = "";
              }}
            />
          </div>

          <div className="about-content right">
            <h2 className="about-title">Our Mission</h2>

            <p className="about-description">
              Our mission is to guide women back to wholeness—emotionally,
              spiritually, and mentally—through faith-centered content, books,
              teachings, and community.
            </p>

            <p className="about-description">
              We exist to restore confidence, ignite purpose, and help every
              woman rediscover her identity in God so she can live boldly,
              healed, and empowered.
            </p>

            <p className="about-description">
              Through our magazine, bookstore, and community initiatives, we
              create spaces for women to connect, grow, and thrive together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
