import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Stories from "./components/Stories/Stories";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  const dotRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePosition, setMobilePosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Desktop: Mouse follower
    const handleMouseMove = (e) => {
      if (dotRef.current && !isMobile) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.opacity = "1";
      }
    };

    // Mobile: Random floating movement
    let mobileInterval;
    if (isMobile && dotRef.current) {
      dotRef.current.style.opacity = "1";
      // Set initial position
      setMobilePosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });

      // Update position every 3 seconds
      mobileInterval = setInterval(() => {
        setMobilePosition({
          x: Math.random() * (window.innerWidth - 60) + 30,
          y: Math.random() * (window.innerHeight - 60) + 30,
        });
      }, 3000);
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mobileInterval) clearInterval(mobileInterval);
    };
  }, [isMobile]);

  return (
    <div className="app">
      {/* Symmetric Dot Pattern Background */}
      <div className="dot-pattern"></div>

      {/* Floating Dot */}
      <div
        ref={dotRef}
        className="floating-dot"
        style={
          isMobile
            ? {
                left: `${mobilePosition.x}px`,
                top: `${mobilePosition.y}px`,
                transition: "left 3s ease-in-out, top 3s ease-in-out",
                transform: "translate(-50%, -50%)",
              }
            : {
                transform: "translate(-50%, -50%)",
              }
        }
      ></div>

      <Header />
      <main>
        <Hero />
        <Featured />
        <AboutUs />
        <Stories />
      </main>
      <Footer />
    </div>
  );
};

export default App;
