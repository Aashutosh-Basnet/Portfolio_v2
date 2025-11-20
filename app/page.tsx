"use client";

import React, { useRef, useEffect, useState } from "react";
import Hero from "./components/main";
import About from "./components/about";
import CardStack from "./components/CardStack";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";

const Page = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // Scroll handling logic can be added here if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-smooth pt-20">
      <Navbar />
      <Hero />
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <CardStack />
      <div id="skills" ref={skillsRef}>
        <TechStack />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Page;
