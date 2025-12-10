import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Stories from "./components/Stories/Stories";
import Footer from "./components/Footer/Footer";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Featured />
        <Stories />
      </main>
      <Footer />
    </div>
  );
};

export default App;
