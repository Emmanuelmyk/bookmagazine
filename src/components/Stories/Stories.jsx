import React from "react";
import "./Stories.css";

const Stories = () => {
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

  return (
    <section className="stories">
      <div className="container">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`story-card ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="story-content">
              <h3 className="story-title">{story.title}</h3>
              <p className="story-description">{story.description}</p>
              <button className="btn btn-outline">Discover More</button>
            </div>
            <div className="story-image">
              <div className="image-frame">
                <img src={story.image} alt={story.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;
