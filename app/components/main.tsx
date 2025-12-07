"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// Using dynamic import for the PDF viewer to avoid "DOMMatrix is not defined" SSR error
import dynamic from "next/dynamic";
import { useWindowSize } from "react-use";
import {
  BadgeCheck,
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  User,
  Download,
} from "lucide-react";
import { intro, contact } from "./data/data";
import SocialButton from "./ui/SocialsButton";
import { montserrat, outfit } from "../fonts";
import RevealWrapper from "./ui/RevealWrapper";

// Dynamic import with SSR disabled
const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

const Main = () => {
  const [activeTab, setActiveTab] = useState<"intro" | "resume" | "contact">(
    "intro"
  );
  const contactInfo = contact[0];
  const { width } = useWindowSize();
  const [pdfWidth, setPdfWidth] = useState<number>(800);

  useEffect(() => {
    setPdfWidth(Math.min(width - 48, 800));
  }, [width]);


  const tabs = [
    { id: "intro", label: "Intro", icon: User },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Send },
  ] as const;

  return (
    <div className={`min-h-screen bg-white flex items-center justify-center font-sans ${outfit.className}`}>
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[620px]">

        {/* LEFT PROFILE SECTION */}
        <RevealWrapper className="w-full md:w-[380px] bg-blue-900 text-white p-8 flex flex-col items-center" direction="right" delay={0.2}>
          <div className="flex flex-col items-center text-center">

            {/* CLEAN AVATAR */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-white/20 bg-blue-200">
              <Image
                src="/images/main.png"
                alt="Aashutosh Basnet"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1 className={`mt-6 text-3xl font-bold ${montserrat.className}`}>Aashutosh Basnet</h1>

            <div className="flex items-center gap-2 mt-3 px-4 py-1.5 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
              <BadgeCheck className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Full Stack Developer</span>
            </div>

            <p className="mt-6 text-gray-200 text-sm max-w-[260px] leading-relaxed">
              Building beautiful, functional, and scalable web applications.
            </p>
          </div>
        </RevealWrapper>

        {/* RIGHT CONTENT SECTION */}
        <div className="flex-1 flex flex-col bg-white">

          {/* TABS */}
          <RevealWrapper direction="left" delay={0.4} className="w-full">
            <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${montserrat.className}
                  ${activeTab === tab.id
                        ? "bg-gray-200 text-black"
                        : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </RevealWrapper>

          {/* CONTENT */}
          <div className="flex-1 px-6 md:px-8 overflow-y-auto">

            {/* INTRO */}
            {activeTab === "intro" && (
              <RevealWrapper delay={0.6}>
                <div className="max-w-2xl mx-auto animate-fadeIn">
                  <div className={`prose prose-lg text-gray-700 whitespace-pre-line ${outfit.className}`}>
                    {intro}
                  </div>
                </div>
              </RevealWrapper>
            )}

            {/* RESUME */}
            {activeTab === "resume" && (
              <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-end mb-4">
                  <a
                    href="/files/resume.pdf"
                    download="Aashutosh_Resume.pdf"
                    className={`flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium shadow-sm ${montserrat.className}`}
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </div>

                {/* Dynamically imported PDF Viewer */}
                <PdfViewer file="/files/resume.pdf" width={pdfWidth} />
              </div>
            )}

            {/* CONTACT */}
            {activeTab === "contact" && (
              <div className="max-w-xl mx-auto animate-fadeIn border border-gray-200 shadow-lg rounded-2xl p-6 bg-white my-4">
                <h2 className={`text-3xl text-gray-900 my-2 ${montserrat.className}`}>Contact</h2>

                <p className="text-gray-700 mb-6">
                  Feel free to get in touch — I’d love to discuss how we can work together.
                </p>

                <div className="bg-gray-400 h-[1px] my-6"></div>

                <h3 className={`text-lg text-gray-800 mb-4 ${montserrat.className}`}>
                  Find me on social media
                </h3>

                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center w-full">
                  <SocialButton
                    label="GitHub"
                    Icon={Github}
                    link={contactInfo.github}
                    className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-700 rounded-xl px-6 py-3"
                  />
                  <SocialButton
                    label="LinkedIn"
                    Icon={Linkedin}
                    link={contactInfo.linkedin}
                    className="bg-blue-600 text-white hover:bg-blue-500 border border-blue-700 rounded-xl px-6 py-3"
                  />
                  <SocialButton
                    label="Email"
                    Icon={Mail}
                    link={`mailto:${contactInfo.email}`}
                    className="bg-green-600 text-white hover:bg-green-500 border border-green-700 rounded-xl px-6 py-3"
                  />
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
