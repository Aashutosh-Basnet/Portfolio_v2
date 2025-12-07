"use client";

import React, { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

// ------------------ BENTO TILT ------------------
export interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
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
export interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
  projectId?: string;
  githubUrl?: string;
}

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

  const href = projectId ? `/project/${projectId}` : githubUrl ?? "#";
  const isExternal = !projectId && !!githubUrl; // only external when no projectId

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
          {/* Fixed Badge */}
          {isComingSoon !== undefined && (
            <div className="inline-flex items-center gap-2">
              <div className="rounded-full bg-black/80 px-3 py-1 text-xs uppercase tracking-wide text-gray-200">
                {isComingSoon ? "Coming Soon" : "Web App"}
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
            href={href}
            {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
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
              <p className="relative z-10">
                {projectId ? "View Project" : "Github"}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
