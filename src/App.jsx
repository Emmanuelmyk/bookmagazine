import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FeatureRelease from "./components/featureRelease";
import Stories from "./components/Stories";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FeatureRelease />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}

export default App;
