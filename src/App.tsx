import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Technology from "./components/Technology";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [modelUrl, setModelUrl] = useState<string>("/mew.glb");

  return (
    <div style={{ background: "#07010f", minHeight: "100vh" }}>
      <Navbar />
      <Hero modelUrl={modelUrl} onModelLoad={setModelUrl} />
      <Stats />
      <Services />
      <About />
      <Technology />
      <CTA />
      <Footer />
    </div>
  );
}