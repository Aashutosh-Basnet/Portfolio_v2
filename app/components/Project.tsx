"use client";

import React from "react";
import AnimatedTitle from "./ui/AnimatedTitle";
import { BentoTilt, BentoCard } from "../components/ui/BentoCard";

const Features: React.FC = () => (
  <section className="bg-white py-16 md:py-24 lg:py-32 w-full">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      {/* Header */}
      <div className="mb-12 md:mb-16 lg:mb-20 text-black">
        <AnimatedTitle title="Checkout My Projects" containerClass="mb-6" />
      </div>

      {/* Masonry layout using CSS columns */}
      <div className="columns-1 md:columns-2 gap-4 md:gap-6">
        {/* SkillSwap (taller card maybe) */}
        <div className="mb-4 md:mb-6 break-inside-avoid">
          <BentoTilt className="h-full md:h-[400px]">
            <BentoCard
              src="/images/skillswap.jpg"
              title={
                <>
                  Skill<b>S</b>wap
                </>
              }
              description="A Peer2Peer skill sharing platform for sharing skills."
              isComingSoon={false}
              githubUrl="#"
              projectId="skillswap"
            />
          </BentoTilt>
        </div>

        {/* RAG Chatbot */}
        <div className="mb-4 md:mb-6 break-inside-avoid">
          <BentoTilt className="h-full md:h-[350px]">
            <BentoCard
              src="/images/chatbot.jpeg"
              title={<>RAG-based Chatbot</>}
              description="A RAG-based system capable of answering open-domain questions."
              isComingSoon={false}
              githubUrl="#"
              projectId="rag"
            />
          </BentoTilt>
        </div>

        {/* DockFresh */}
        <div className="mb-4 md:mb-6 break-inside-avoid">
          <BentoTilt className="h-full md:h-[520px]">
            <BentoCard
              src="/images/fish.jpeg"
              title={
                <>
                  Do<b>cK</b>Fresh
                </>
              }
              description="DockFresh is a seafood e-commerce platform built with NestJS + Next.js."
              isComingSoon={false}
              githubUrl="#"
              projectId="dockfresh"
            />
          </BentoTilt>
        </div>

        {/* Livestream – image card will naturally fill width of card */}
        <div className="mb-4 md:mb-6 break-inside-avoid">
          <BentoTilt className="h-full md:h-[350px]">
            <BentoCard
              src="/images/livestream.jpg"
              title={<>Live Streaming Platform</>}
              description="A live streaming platform for crypto marketing."
              isComingSoon={true}
              githubUrl="#"
              projectId="livestream"
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
