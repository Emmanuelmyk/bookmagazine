import React, { useEffect, useRef } from "react";
import "./Stories.css";

const Stories = () => {
  const storiesRef = useRef([]);

  const stories = [
    {
      title: "Wear Your Restoration",
      description:
        "A powerful exploration of identity and cultural heritage. This book offers insights into personal transformation and the journey toward authentic self-expression.",
      image: "/assets/cover2.png",
    },
    {
      title: "Cultural Narratives",
      description:
        "Dive deep into stories that celebrate diversity and showcase the rich tapestry of global cultures. Each page brings new perspectives and understanding.",
      image: "/assets/cover3.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("story-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    storiesRef.current.forEach((story) => {
      if (story) observer.observe(story);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stories">
      <div className="container">
        <div className="stories-header">
          <h2 className="section-title">Featured Stories</h2>
          <div className="section-divider"></div>
        </div>

        {stories.map((story, index) => (
          <div
            key={index}
            ref={(el) => (storiesRef.current[index] = el)}
            className={`story-card ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="story-content">
              <div className="story-number">0{index + 1}</div>
              <h3 className="story-title">{story.title}</h3>
              <p className="story-description">{story.description}</p>
              <button className="btn btn-outline">
                <span>Discover More</span>
                <svg
                  className="btn-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="story-image">
              <div className="image-frame">
                <div className="image-bg-shape"></div>
                <img src={story.image} alt={story.title} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;
