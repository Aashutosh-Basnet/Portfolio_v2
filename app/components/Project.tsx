"use client";

import React, { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Image from "next/image";
import AnimatedTitle from "./ui/AnimatedTitle";
import Link from "next/link";

// ------------------ BENTO TILT ------------------
interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
  projectId?: string;
  githubUrl?: string;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({
  children,
  className = "",
}) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// ------------------ BENTO CARD ------------------
export const BentoCard: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  isComingSoon,
  githubUrl,
  projectId,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const isVideo = src.endsWith(".mp4") || src.includes("video");

  return (
    <div className="relative size-full overflow-hidden rounded-lg bg-gray-700">
      {/* Media */}
      <div className="absolute inset-0">
        {isVideo ? (
          <video
            src={src}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={src}
            alt={typeof title === "string" ? title : "Project image"}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-4 md:p-6">
        <div className="space-y-3">
          {isComingSoon && (
            <div className="inline-flex items-center gap-2">
              <div className="rounded-full bg-black/80 px-3 py-1 text-xs uppercase tracking-wide text-gray-200">
                Web App
              </div>
            </div>
          )}

          <h3 className="text-xl md:text-2xl font-semibold text-white bento-title special-font">
            {title}
          </h3>

          {description && (
            <p className="text-sm md:text-base text-white max-w-md">
              {description}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="mt-4 flex justify-end">
          <Link
            href={projectId ? `/project/${projectId}` : githubUrl ?? "#"}
            target={githubUrl ? "_blank" : undefined}
            rel={githubUrl ? "noreferrer" : undefined}
          >
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoverOpacity(1)}
              onMouseLeave={() => setHoverOpacity(0)}
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs md:text-sm uppercase text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white/90"
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.12), transparent)`,
                }}
              />
              <TiLocationArrow className="relative z-10" />
              <p className="relative z-10">{projectId ? "View Project" : "Github"}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ------------------ FEATURES SECTION ------------------
const Features: React.FC = () => (
  <section className="bg-gray-900 py-16 md:py-24 lg:py-32 w-full">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-12 md:mb-16 lg:mb-20 text-white">
        <AnimatedTitle title="Checkout My projects" containerClass="mb-6" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <BentoTilt className="h-[400px] md:h-[500px] md:row-span-2">
          <BentoCard
            src="/images/skillswap.jpg"
            title={
              <>
                Skill<b>S</b>wap
              </>
            }
            description="A Peer2Peer skill sharing platform for sharing skills with other users."
            isComingSoon
            githubUrl="#"
            projectId="skillswap"
          />
        </BentoTilt>

        <BentoTilt className="h-[350px] md:h-[450px]">
          <BentoCard
            src="/images/fish.jpeg"
            title={
              <>
                Do<b>cK</b>Fresh
              </>
            }
            description="DockFresh is a fish & seafood e-commerce platform built with a NestJS backend and a React/Next.js frontend. "
            isComingSoon
            githubUrl="#"
            projectId="dockfresh"
          />
        </BentoTilt>

        <BentoTilt className="h-[300px] md:h-[250px]">
          <BentoCard
            src="/images/chatbot.jpeg"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
            githubUrl="#"
            projectId="ndrs"
          />
        </BentoTilt>

        <BentoTilt className="h-[300px] md:h-[250px]">
          <div className="flex size-full flex-col justify-between rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 p-6">
            <h1 className="bento-title special-font text-xl md:text-2xl lg:text-3xl text-white">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>
            <TiLocationArrow className="self-end text-3xl md:text-4xl text-white/80" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
