"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  Code2,
  LayoutGrid,
  Calendar,
  Globe,
  CheckCircle2,
  Copy,
} from "lucide-react";

// --- Types ---
interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  timeline: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
  readme: string;
  features: string[];
}

// --- Mock Data ---
const projects: Project[] = [
  {
    id: "skillswap",
    title: "SkillSwap",
    tagline: "Peer-to-Peer Knowledge Sharing platform",
    role: "Full Stack Developer",
    timeline: "Oct 2023 - Dec 2023",
    description:
      "SkillSwap is an innovative peer-to-peer skill exchange platform designed to promote collaborative learning and empower individuals to share and acquire new skills without financial barriers. Targeted at learners, hobbyists, and professionals alike, the platform enables users to create profiles showcasing their current expertise and desired learning goals.",
    features: [
      "Rating-based bidirectional matching algorithm",
      "Real-time WebSocket signaling for chat & video",
      "Popularity and interest based Skill recommendation algorithm.",
      "JWT-based authentication with role management",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind",
      "Redis",
    ],
    liveUrl: "https://skillswap.example.com",
    githubUrl: "https://github.com/example/skillswap",
    images: [
      "/images/projects/skillswap-1.png",
      "/images/projects/skillswap-2.png",
      "/images/projects/skillswap-3.png",
      "/images/projects/skillswap-4.png",
      "/images/projects/skillswap-5.png",
    ],
    readme: `# SkillSwap - Architecture Overview

## System Design
SkillSwap utilizes a microservices-ready architecture. The core matching engine runs on a separate worker thread to prevent blocking the main event loop during complex graph traversals.

## Key Features
- **Matching Engine**: 
  \`const match = (userA, userB) => ...\`
- **Real-time**: Socket.IO namespaces for isolated rooms.
- **Persistence**: MongoDB with Mongoose ODM.

## Installation
\`\`\`bash
git clone https://github.com/example/skillswap.git
npm install
npm run dev
\`\`\`
`,
  },
  {
  id: "dockfresh",
  title: "DockFresh",
  tagline: "Fresh Seafood E-Commerce Platform",
  role: "Full Stack Developer",
  timeline: "Jan 2024 - Mar 2024",
  description:
    "DockFresh is a specialized fish and seafood e-commerce platform that connects local fisheries with end customers. Built with a NestJS backend and an integrated admin dashboard, it streamlines order management, real-time inventory tracking, and delivery logistics while ensuring product freshness through clear sourcing and cold-chain visibility.",
  features: [
    "Role-based admin dashboard for vendors, admins, and delivery partners",
    "Real-time inventory & pricing management for seafood products",
    "Order lifecycle tracking (placed → packed → shipped → delivered)",
    "Secure JWT-based authentication & refresh token rotation",
    "Advanced product search with filters (species, cut type, freshness, price)",
    "Coupon & seasonal promotion management from the admin panel",
    "Sales analytics with charts for revenue, orders, and top-selling products",
    "Image and media management for product galleries",
  ],
  technologies: [
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "TypeORM",
    "Redis",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Chart.js",
    "JWT",
    "Docker",
  ],
  liveUrl: "https://dockfresh.example.com",
  githubUrl: "https://github.com/example/dockfresh",
  images: [
    "/images/projects/dockfresh-1.png",
    "/images/projects/dockfresh-2.png",
    "/images/projects/dockfresh-3.png",
  ],
  readme: `# DockFresh - Architecture Overview

DockFresh is a fish & seafood e-commerce platform built with a NestJS backend and a React/Next.js frontend. 
It includes a feature-rich admin dashboard for managing products, orders, users, and promotions.

## System Design

DockFresh follows a modular monolith architecture using NestJS modules for clear separation of concerns:

- **Auth Module** – Handles JWT-based authentication, authorization guards, and role-based access control (RBAC).
- **Products Module** – Manages seafood catalog, categories, stock levels, and pricing.
- **Orders Module** – Handles cart, checkout, order status transitions, and payment integration.
- **Users Module** – Manages customers, vendors, admins, and delivery partners.
- **Analytics Module** – Aggregates data for revenue, orders, and top-selling products for the admin dashboard.

The system is designed to be horizontally scalable and can be split into microservices if needed
(e.g., separating Orders, Payments, and Notifications into their own services).

## Backend Stack (NestJS)

- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL with TypeORM
- **Cache**: Redis for session caching, rate limiting, and hot product data
- **Authentication**: JWT access & refresh tokens, with role-based guards
- **Validation**: Class-validator & class-transformer for DTO validation
- **API Style**: RESTful APIs with versioning (\\\`/api/v1\\\`)

Example of a simple NestJS service:

\`\`\`ts
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepo: Repository<Product>,
  ) {}

  findAll(query: FindProductsDto): Promise<Product[]> {
    // Filtering logic for species, cut type, price range, etc.
    return this.productsRepo.find({ where: { isActive: true } });
  }

  updateStock(productId: string, delta: number): Promise<Product> {
    // Adjust stock levels safely inside a transaction
    // ...
  }
}
\`\`\`

## Admin Dashboard

- Built with **React/Next.js** and **Tailwind CSS**
- Consumes secured NestJS APIs using JWT tokens
- Features:
  - Product CRUD (with image upload)
  - Order management (view, update status, assign delivery partner)
  - User & role management
  - Analytics view (orders, revenue, best-sellers) using Chart.js

Example admin dashboard route (Next.js):

\`\`\`tsx
const AdminOrdersPage = () => {
  // Fetch orders via /api/admin/orders
  // Render table with filters by status/date range
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Orders</h1>
      {/* Filters, table, pagination, etc. */}
    </div>
  );
};

export default AdminOrdersPage;
\`\`\`

## Real-time & Performance

- **Redis** used for:
  - Caching frequently accessed product data
  - Storing short-lived promo/config data
- **Queue / Background Jobs** (optional, via BullMQ or similar) for:
  - Sending order confirmation emails
  - Generating daily sales reports

## Installation

\`\`\`bash
git clone https://github.com/example/dockfresh.git
cd dockfresh

# Backend (NestJS)
cd backend
npm install
npm run start:dev

# Frontend (Next.js)
cd ../frontend
npm install
npm run dev
\`\`\`

## Environment Variables

Create a \`.env\` file in the backend and configure:

\`\`\`env
DATABASE_URL=postgres://user:password@localhost:5432/dockfresh
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
REDIS_URL=redis://localhost:6379
\`\`\`

## Scripts

- \`npm run start:dev\` – Start NestJS in watch mode
- \`npm run build\` – Build backend for production
- \`npm run test\` – Run unit tests

DockFresh is designed to be production-ready with clear separation between backend services and the admin-facing UI, enabling smooth management of a seafood e-commerce business.
`,
}

];

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "gallery" | "docs">("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find((p) => p.id === params.id);

  if (!project) return null; // Handle loading/error states in real app

  return (
    <div className="mt-16 min-h-screen bg-black text-zinc-200 selection:bg-white/20 font-sans">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>
          <div className="text-sm font-medium text-zinc-500">
            Projects / <span className="text-zinc-100">{project.title}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-6">
        {/* Header Section */}
        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-sm text-zinc-400 max-w-2xl font-light">
              {project.tagline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
              >
                <Github size={16} />
                View Source
              </a>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Custom Tab Switcher */}
            <div className="flex border-b border-zinc-800">
              <TabButton 
                active={activeTab === "overview"} 
                onClick={() => setActiveTab("overview")} 
                icon={<Layers size={16} />} 
                label="Overview" 
              />
              <TabButton 
                active={activeTab === "gallery"} 
                onClick={() => setActiveTab("gallery")} 
                icon={<LayoutGrid size={16} />} 
                label="Gallery" 
              />
              <TabButton 
                active={activeTab === "docs"} 
                onClick={() => setActiveTab("docs")} 
                icon={<Code2 size={16} />} 
                label="Readme.md" 
              />
            </div>

            {/* TAB CONTENT */}
            <div className="min-h-[400px]">
              {activeTab === "overview" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="prose prose-invert prose-zinc max-w-none">
                    <h3 className="text-lg font-medium text-white mb-3">The Challenge</h3>
                    <p className="text-zinc-400 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Key Technical Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                          <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Main Preview */}
                  <div className="relative aspect-video w-full bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
                    <Image
                      src={project.images[currentImageIndex]}
                      alt="Project Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                          currentImageIndex === idx ? "border-white" : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "docs" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/30">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                      </div>
                      <span className="text-xs text-zinc-500 font-mono">README.md</span>
                      <Copy size={14} className="text-zinc-500" />
                    </div>
                    <div className="p-6 max-w-50vw">
                      <pre className="font-mono text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap break-words">
                        {project.readme}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 lg:pl-8 lg:border-l lg:border-zinc-800">
            
            {/* Project Details Card */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  Project Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-500">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Timeline</p>
                      <p>{project.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-zinc-800" />

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md hover:border-zinc-600 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="h-px bg-zinc-800" />

              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/30">
                <h4 className="text-sm font-medium text-blue-200 mb-2">Professional Outcome</h4>
                <p className="text-xs text-blue-300/80 leading-relaxed">
                  This project decreased user onboarding time by 40% and was deployed to handle 500+ concurrent connections during initial beta testing.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

// Helper Component for Tabs
function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2
        ${active 
          ? "border-white text-white" 
          : "border-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"}
      `}
    >
      {icon}
      {label}
    </button>
  )
}