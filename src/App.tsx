import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <main>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />

      {/* About */}
      <Mission />

      {/* About */}
      <Services />

      {/* Tetemonials */}
      <Reviews />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
