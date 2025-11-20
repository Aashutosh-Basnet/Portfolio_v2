"use client";

import React from "react";
import Link from "next/link";
import { PiSealCheckFill } from "react-icons/pi";
import { ArrowRight, BarChart3, MoveUpRight } from "lucide-react";
import { dmSerifText, anaheim } from "../fonts";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fancy-text min-h-screen bg-black pt-20 p-4 md:p-6 lg:p-8">
      <style>
        {`
          @keyframes bubble {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
          }
          
          .bubble-effect {
            animation: bubble 2s ease-in-out infinite;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto">
        
        {/* Main Header Section */}
        <div className="m-4 md:m-6 lg:m-8 mt-8 md:mt-10 lg:mt-10">
          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8">

            {/* Left Column */}
            <div className={`flex-1 ${dmSerifText.className}`}>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
                FULL-STACK
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                DEVELOPER
              </h2>
              <div className="w-full bg-gray-700 h-[1px] my-4 md:my-5"></div>
              <div className="font-underdog flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-300">
                <div>
                  <span className="font-semibold">FOCUSED ON SCALABLE</span>
                  <br />
                  <span className="font-semibold">AND USER-CENTRIC SOLUTIONS</span>
                </div>
              </div>
            </div>

            {/* Right Column - About Me Card */}
            <div className="w-full lg:w-[35vw] h-64 md:h-80 lg:h-[30vh]">
              <div
                className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl md:rounded-3xl p-4 md:p-6 text-white relative overflow-hidden"
                style={{
                  backgroundImage: `
                    url('./images/main.png'),
                    linear-gradient(to bottom right, rgba(168, 85, 247, 1), rgba(79, 70, 229, 1))
                  `,
                  backgroundPosition: 'bottom',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}
              >
                <div className="absolute top-3 md:top-4 right-3 md:right-4 flex gap-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white/30 rounded-full"></div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 md:mb-6 gap-4">
                  <div className="flex-1">
                    <p className="text-white/80 text-xs md:text-sm mb-1 md:mb-2">HELLO, I&apos;M</p>
                    <p className="text-white text-lg md:text-xl font-bold">Aashutosh Basnet</p>
                    <p className="text-white/80 text-xs md:text-sm">Full-Stack Developer</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <button 
                    onClick={scrollToContact}
                    className="bg-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all text-sm md:text-base cursor-pointer"
                  >
                    Contact Me
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Cards Grid */}
        <div className="font-roboto-mono flex flex-col justify-between gap-6 md:gap-8 mb-6 md:my-12 lg:my-20">

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Projects Card - Changed to Yellow */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl md:rounded-3xl p-4 md:p-6 text-white relative min-w-0 md:min-w-[300px]">
              
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">FEATURED</h3>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">PROJECTS</h3>
                </div>
                <Link href="/project">
                  <MoveUpRight size={32} className="md:hidden lg:block bg-white text-black p-2 rounded-full my-5 cursor-pointer hover:bg-gray-100 transition-colors" />
                </Link>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                {[
                  "Skillswap – Peer2Peer skill sharing platform",
                  "DockFresh - fish e commerce",
                ].map((project) => (
                  <div className="flex items-center gap-2 md:gap-3" key={project}>
                    <PiSealCheckFill className="text-white flex-shrink-0" size={18} />
                    <span className="text-white text-sm md:text-base">{project}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Count and Services - flex row on small, individual cards on large */}
            <div className="flex gap-3 md:gap-8 md:contents">
              {/* Experience Count */}
              <div className="bg-gradient-to-br from-green-400 to-lime-500 rounded-2xl md:rounded-3xl p-3 md:p-6 text-white flex-1 md:flex-none md:min-w-[200px]">
                <h3 className="text-xs md:text-sm font-semibold mb-1 md:mb-2 text-white/80">DELIVERED</h3>
                <h3 className="text-xs md:text-sm font-semibold mb-2 md:mb-4 text-white/80">PROJECTS</h3>
                
                <div className="text-center mt-2 md:mt-8">
                  <div className="text-2xl md:text-5xl font-bold mb-1 md:mb-2">5+</div>
                </div>
              </div>

              {/* Services / Strengths */}
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl md:rounded-2xl p-3 md:p-6 text-white flex-1 md:flex-none md:min-w-[200px]">
                <div className="flex items-center justify-center mb-1 md:mb-4">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <BarChart3 size={14} className="md:hidden" />
                    <BarChart3 size={24} className="hidden md:block" />
                  </div>
                </div>
                <h3 className="text-center font-semibold text-xs md:text-sm">SCALABLE</h3>
                <h3 className="text-center font-semibold text-xs md:text-sm">FULL-STACK SYSTEMS</h3>
              </div>
              <div className="hidden text-center md:flex items-center justify-center px-4 md:px-8">
                <p className={`${anaheim.className} text-lg md:text-xl leading-relaxed text-gray-300 font-light italic max-w-3xl`}>
                  A passionate Computer Science student exploring the dynamic fields of software engineering and data science. Enthusiastic about building innovative software solutions and deriving insights from data to solve real-world problems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;