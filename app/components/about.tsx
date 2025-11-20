"use client";

import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [selectedExperience, setSelectedExperience] = useState("SHAILUNG");

  const experiences = {
    SHAILUNG: {
      title: "AI Research Intern",
      company: "Shailung Tech",
      period: "May 2024 – July 2024 | Kathmandu, Nepal",
      description: [
        "Researched and prototyped an LLM-driven internal assistant to optimize documentation and query retrieval for engineers, cutting lookup time by nearly 30%.",
        "Integrated Model Context Protocol (MCP) to dynamically maintain context for LLMs, improving response precision by over 40% in QA evaluations.",
        "Built modular backend microservices using AWS (Lambda, DynamoDB, API Gateway, SQS), ensuring scalability and <200ms average latency for prompt responses.",
      ],
    },
    FREELANCE: {
      title: "Freelance Developer",
      company: "Independent Projects",
      period: "2023 – Present | Remote",
      description: [
        "Delivered multiple full-stack and AI-integrated solutions for small businesses and startups, focusing on efficient user experience and automation.",
        "Developed custom AI tools using OpenAI and LangChain, including crop recommendation and plant disease detection systems for agricultural platforms.",
        "Built responsive web applications using Next.js, Tailwind CSS, and Express, integrating APIs and database services for scalable product deployments.",
      ],
    },
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-black text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-light mb-8">
                <span className="text-blue-400">/</span> about me
                <div className="w-20 h-0.5 bg-blue-400 mt-2"></div>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  I&apos;m a{" "}
                  <span className="font-medium text-blue-400">
                    Computer Science student
                  </span>{" "}
                  and aspiring AI engineer passionate about building impactful
                  solutions at the intersection of{" "}
                  <span className="text-blue-400 font-medium">
                    machine learning
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-400 font-medium">
                    full-stack development
                  </span>
                  . My experience ranges from AI research at{" "}
                  <span className="text-green-400 font-medium">
                    Shailung Tech
                  </span>{" "}
                  to freelance work delivering production-ready web and AI
                  applications.
                </p>
              </div>
            </div>

            <div className="lg:w-80">
              <div className="relative">
                <div className="w-72 h-72 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-green-400 p-1">
                  <Image
                    src="/images/about_main.jpg"
                    width={500}
                    height={500}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="font-merriweather">
          <h2 className="text-4xl font-light mb-12">
            <span className="text-blue-400">/</span> experience
            <div className="w-20 h-0.5 bg-blue-400 mt-2"></div>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64">
              <div className="space-y-1">
                {Object.keys(experiences).map((company) => (
                  <button
                    key={company}
                    onClick={() => setSelectedExperience(company)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 border-l-2 ${
                      selectedExperience === company
                        ? "border-blue-400 text-blue-400"
                        : "border-gray-700 text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {company}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-lg p-8 border bg-black border-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-medium mb-2 text-white">
                  {
                    experiences[
                      selectedExperience as keyof typeof experiences
                    ].title
                  }{" "}
                  @{" "}
                  <span className="text-green-400">
                    {
                      experiences[
                        selectedExperience as keyof typeof experiences
                      ].company
                    }
                  </span>
                </h3>
                <p className="mb-6 text-sm text-gray-200">
                  {
                    experiences[
                      selectedExperience as keyof typeof experiences
                    ].period
                  }
                </p>

                <div className="space-y-4">
                  {experiences[
                    selectedExperience as keyof typeof experiences
                  ].description.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-blue-400 mt-2">▸</span>
                      <p className="leading-relaxed text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;