"use client";

import React from "react";
import AnimatedTitle from "./ui/AnimatedTitle";
import { BentoTilt, BentoCard } from "../components/ui/BentoCard";

const Features: React.FC = () => (
  <section className="bg-gray-900 py-16 md:py-24 lg:py-32 w-full">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      
      {/* Header */}
      <div className="mb-12 md:mb-16 lg:mb-20 text-white">
        <AnimatedTitle title="Checkout My Projects" containerClass="mb-6" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">

        <BentoTilt className="h-[400px] md:h-[500px] md:row-span-2">
          <BentoCard
            src="/images/skillswap.jpg"
            title={<>Skill<b>S</b>wap</>}
            description="A Peer2Peer skill sharing platform for sharing skills."
            isComingSoon={false}   // Shows WEB APP
            githubUrl="#"
            projectId="skillswap"
          />
        </BentoTilt>

        <BentoTilt className="h-[350px] md:h-[450px]">
          <BentoCard
            src="/images/fish.jpeg"
            title={<>Do<b>cK</b>Fresh</>}
            description="DockFresh is a seafood e-commerce platform built with NestJS + Next.js."
            isComingSoon={false}   // Shows WEB APP
            githubUrl="#"
            projectId="dockfresh"
          />
        </BentoTilt>

        <BentoTilt className="h-[300px] md:h-[250px]">
          <BentoCard
            src="/images/chatbot.jpeg"
            title={<>RAG-based Chatbot</>}
            description="A RAG-based system capable of answering open-domain questions."
            isComingSoon={true}    // Shows COMING SOON
            githubUrl="#"
            projectId="ndrs"
          />
        </BentoTilt>

      </div>
    </div>
  </section>
);

export default Features;
