import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MagazineSection from "./components/MagazineSection";
import BooksSection from "./components/BooksSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <MagazineSection />
        {/* <BooksSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
