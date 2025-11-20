"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Braces,
  Code2,
  Database,
  FileCode,
  Globe,
  Server,
  PenTool,
  GithubIcon,
  Terminal,
  CloudIcon,
  BrainCircuit,
  Ship,
  Workflow,
  CodepenIcon,
  Cpu,
  FolderKanban,
  UserCircle2,
} from "lucide-react";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

const technologies: Tech[] = [
  { name: "React", icon: <Code2 size={32} className="text-blue-400" /> },
  { name: "TypeScript", icon: <FileCode size={32} className="text-blue-500" /> },
  { name: "Next.js", icon: <Braces size={32} className="text-gray-700" /> },
  { name: "Tailwind CSS", icon: <PenTool size={32} className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FileCode size={32} className="text-yellow-400" /> },
  { name: "HTML5", icon: <Code2 size={32} className="text-orange-400" /> },
  { name: "CSS3", icon: <Globe size={32} className="text-blue-300" /> },
  { name: "Vue.js", icon: <CodepenIcon size={32} className="text-green-400" /> },
  { name: "Node.js", icon: <Server size={32} className="text-green-500" /> },
  { name: "Python", icon: <Terminal size={32} className="text-blue-400" /> },
  { name: "Express", icon: <Server size={32} className="text-gray-300" /> },
  { name: "MongoDB", icon: <Database size={32} className="text-green-500" /> },
  { name: "PostgreSQL", icon: <Database size={32} className="text-blue-400" /> },
  { name: "Django", icon: <Workflow size={32} className="text-green-600" /> },
  { name: "GraphQL", icon: <Braces size={32} className="text-pink-500" /> },
  { name: "Firebase", icon: <CloudIcon size={32} className="text-yellow-400" /> },
  { name: "Git", icon: <Workflow size={32} className="text-orange-500" /> },
  { name: "Docker", icon: <Ship size={32} className="text-blue-400" /> },
  { name: "AWS", icon: <CloudIcon size={32} className="text-orange-400" /> },
  { name: "TensorFlow", icon: <BrainCircuit size={32} className="text-orange-400" /> },
  { name: "GitHub", icon: <GithubIcon size={32} className="text-gray-700" /> },
  { name: "VS Code", icon: <Code2 size={32} className="text-blue-400" /> },
  { name: "Figma", icon: <PenTool size={32} className="text-purple-400" /> },
  { name: "Jupyter", icon: <Cpu size={32} className="text-orange-400" /> },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pointsRef = useRef<{ x: number; y: number; z: number }[]>([]);
  const [radius, setRadius] = useState(120);

  const mouseX = useRef(0);
  const targetMouseX = useRef(0);
  const isMouseOverRef = useRef(false);
  const angleRef = useRef(0);
  const [sphereScale, setSphereScale] = useState(1);

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const newRadius = containerRef.current.offsetWidth / 2.2;
        setRadius(newRadius > 160 ? 160 : newRadius);
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    if (radius === 0) return;
    const numTechs = technologies.length;
    const newPoints = [];

    for (let i = 0; i < numTechs; i++) {
      const phi = Math.acos(-1 + (2 * i + 1) / numTechs);
      const theta = Math.sqrt(numTechs * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      newPoints.push({ x, y, z });
    }
    pointsRef.current = newPoints;
    itemsRef.current = itemsRef.current.slice(0, technologies.length);
  }, [radius]);

  useEffect(() => {
    if (radius === 0) return;
    let animationFrameId: number;

    const animate = () => {
      angleRef.current += 0.002;

      if (!isMouseOverRef.current) {
        targetMouseX.current *= 0.95;
        if (Math.abs(targetMouseX.current) < 0.01) {
          targetMouseX.current = 0;
        }
      }
      mouseX.current += (targetMouseX.current - mouseX.current) * 0.05;

      const rotateY = mouseX.current * 0.001;
      const totalAngle = angleRef.current + rotateY;

      pointsRef.current.forEach((point, i) => {
        const { x, y, z } = point;
        const rotX = x * Math.cos(totalAngle) + z * Math.sin(totalAngle);
        const rotZ = -x * Math.sin(totalAngle) + z * Math.cos(totalAngle);

        const scale = (rotZ + radius) / (2 * radius) * 0.7 + 0.5;
        const opacity = scale * 0.8 + 0.2;

        const itemEl = itemsRef.current[i];
        if (itemEl) {
          itemEl.style.transform = `translate(-50%, -50%) translate(${rotX}px, ${y}px) scale(${scale})`;
          itemEl.style.opacity = `${opacity}`;
          itemEl.style.zIndex = `${Math.floor(scale * 100)}`;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [radius]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isMouseOverRef.current = true;
    setSphereScale(1.2);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    targetMouseX.current = x;
  };

  const handleMouseLeave = () => {
    isMouseOverRef.current = false;
    setSphereScale(1);
  };

  const handleAboutClick = () => {
    if (typeof window === "undefined") return;
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.pathname === "/") {
        history.replaceState(null, "", "/#about");
      } else {
        window.location.href = "/#about";
      }
    } else {
      window.location.href = "/#about";
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-black text-white">
      <style>
        {`
          .sphere-container {
            position: relative;
          }
          .sphere {
            width: 100%;
            height: 100%;
            position: relative;
          }
          .sphere-item {
            position: absolute;
            top: 50%;
            left: 50%;
            will-change: transform, opacity;
          }
        `}
      </style>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">/</span> Tech Stack
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div
          className="sphere-container h-80 w-80 md:h-96 md:w-96 flex items-center justify-center mx-auto"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="sphere transition-transform duration-300 ease-out"
            style={{ transform: `scale(${sphereScale})` }}
          >
            {technologies.map((tech, i) => (
              <div
                key={tech.name}
                ref={(el: HTMLDivElement | null) => {
                  itemsRef.current[i] = el;
                }}
                className="sphere-item group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-2px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Link href="/project">
              <span className="bg-black hover:bg-gray-900 text-white rounded-xl text-md flex gap-2 items-center px-6 py-3 shadow-md border border-gray-700 transition-all duration-300">
                <FolderKanban size={20} />
                Projects
              </span>
            </Link>
            <button
              type="button"
              onClick={handleAboutClick}
              className="bg-black hover:bg-gray-900 text-white rounded-xl text-md flex gap-2 items-center px-6 py-3 shadow-md border border-gray-700 transition-all duration-300"
            >
              <UserCircle2 size={20} />
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;