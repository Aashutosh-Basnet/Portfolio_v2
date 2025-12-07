"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Github,
  Layers,
  Code2,
  LayoutGrid,
  Calendar,
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

// --- Mock Data (Same as before) ---
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
  },
  {
    id: "rag",
    title: "ContextCanva",
    tagline: "RAG-powered Document-Aware Chat Interface",
    role: "Full Stack Developer",
    timeline: "Apr 2024 - Jun 2024",
    description:
      "ContextCanva is a Retrieval-Augmented Generation (RAG) powered document chat platform that lets users converse with their own PDFs, DOCX, and markdown files. It combines a polished Next.js + Tailwind front-end with a FastAPI-based backend, delivering streaming-style chat, per-session isolation, and grounded answers backed by vector search over ingested documents. The system is designed for researchers, teams, and knowledge workers who need fast, reliable, and explainable responses tied to their source material.",
    features: [
      "Polished Next.js + Tailwind document-chat UI with session management and responsive streaming-style chat states",
      "Dual-file upload with metadata visibility and per-session document context panels",
      "Real-time chat history with robust error surfacing and loading/empty states",
      "Document-filter controls to constrain retrieval to specific uploaded files",
      "FastAPI endpoints for document upload and chat querying with per-session data isolation and request-level file limits",
      "LangChain-based ingestion pipeline to parse PDF/DOCX/MD, chunk text, and persist embeddings in Chroma",
      "Grounded RAG responses powered by HuggingFace embeddings and Groq LLMs"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "Python",
      "LangChain",
      "ChromaDB",
      "HuggingFace Embeddings",
      "Groq LLMs",
      "Docker"
    ],
    liveUrl: "https://contextcanva.example.com",
    githubUrl: "https://github.com/example/contextcanva",
    images: [
      "/images/projects/contextcanva-1.png",
      "/images/projects/contextcanva-2.png",
      "/images/projects/contextcanva-3.png",
    ],
    readme: `# ContextCanva - RAG Architecture Overview

## Overview
ContextCanva is a Retrieval-Augmented Generation (RAG) platform that enables users to upload documents (PDF, DOCX, MD) and query them via a chat-style interface. The app delivers grounded answers using vector search over chunked document embeddings and Groq-hosted LLMs.

## System Design

### Frontend (Next.js + Tailwind)
- **Document Chat Interface**
  - Streaming-style chat UI with typing indicators and incremental message updates.
  - Session management to isolate conversations and associated document sets.
  - Dual-file upload with:
    - Inline metadata visibility (file name, size, type, upload time).
    - Per-session document list and active-context indicators.

- **UX Enhancements**
  - Real-time chat history rendering.
  - Clear error surfacing for upload, retrieval, and LLM failures.
  - Document filter controls allowing users to:
    - Query all uploaded docs in a session, or
    - Restrict retrieval to specific selected files.

### Backend (FastAPI)
- **API Endpoints**
  - \`POST /upload\`:
    - Accepts multiple files with per-request file limits.
    - Enforces per-session data isolation via session IDs.
  - \`POST /chat\`:
    - Accepts a query, session ID, and optional document filters.
    - Orchestrates retrieval + generation pipeline and returns grounded responses.

- **Security & Isolation**
  - Session-scoped document stores so data from one user/session is never mixed with another.
  - Validation of file types and sizes at request level.

### Ingestion & RAG Pipeline (LangChain + Chroma)
- **Ingestion Flow**
  - Parse documents in PDF, DOCX, and Markdown formats.
  - Chunk text using LangChain text splitters tuned for semantically coherent segments.
  - Generate embeddings with HuggingFace embedding models.
  - Persist vectors and metadata into ChromaDB, keyed by session and document IDs.

- **Retrieval & Generation**
  - Top-k similarity search over ChromaDB constrained by:
    - Session ID
    - Optional document filters
  - Response construction:
    - Pass retrieved context chunks to Groq LLMs for answer generation.
    - Optionally return source snippets/metadata to the frontend for transparency.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind
- **Backend**: FastAPI (Python)
- **RAG & Vector Store**: LangChain, ChromaDB
- **ML**: HuggingFace Embeddings, Groq LLMs
- **Infra**: Docker (containerized services)

## Getting Started

\`\`\`bash
# Clone the repository
git clone https://github.com/example/contextcanva.git
cd contextcanva

# Backend setup
cd backend
python -m venv .venv
source .venv/bin/activate  # or .venv\\Scripts\\activate on Windows
pip install -r requirements.txt

# Start FastAPI server
uvicorn app.main:app --reload

# Frontend setup
cd ../frontend
npm install
npm run dev
\`\`\`

Configure your environment variables for:
- ChromaDB connection
- HuggingFace embedding model
- Groq API keys

Once both servers are running, open the frontend in your browser to start chatting with your documents.
`
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
    <div className="mt-16 min-h-screen bg-gray-50 text-gray-700 selection:bg-gray-200 font-sans">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>
          <div className="text-sm font-medium text-gray-400">
            Projects / <span className="text-gray-800">{project.title}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-6 pb-20">
        {/* Header Section */}
        <header className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold tracking-tight text-gray-900">
              {project.title}
            </h1>
            <p className="text-sm text-gray-500 max-w-2xl font-light">
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
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-all shadow-sm"
              >
                <Github size={16} />
                View Source
              </a>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          {/* LEFT COLUMN: Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Custom Tab Switcher */}
            <div className="flex border-b border-gray-200">
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
            <div className="min-h-[400px] pt-6">
              {activeTab === "overview" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="prose prose-gray max-w-none">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Technical Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                          <CheckCircle2 size={20} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Main Preview */}
                  <div className="relative aspect-video w-full bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                    <Image
                      src={project.images[currentImageIndex]}
                      alt="Project Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 shadow-sm ${currentImageIndex === idx ? "border-gray-900 ring-2 ring-gray-900/10" : "border-transparent opacity-60 hover:opacity-100"
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
                  <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/20"></div>
                      </div>
                      <span className="text-xs text-gray-500 font-mono font-medium">README.md</span>
                      <Copy size={14} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                    <div className="p-8 max-w-50vw overflow-x-auto">
                      <pre className="font-mono text-sm leading-relaxed text-gray-800 whitespace-pre-wrap break-words">
                        {project.readme}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 lg:pl-8 lg:border-l lg:border-gray-200">

            {/* Project Details Card */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Project Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 text-gray-500 shadow-sm">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Timeline</p>
                      <p className="font-medium">{project.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200" />

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:shadow-sm transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-200" />

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Professional Outcome</h4>
                <p className="text-xs text-blue-800/80 leading-relaxed">
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
        flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-2 relative top-[1px]
        ${active
          ? "border-gray-900 text-gray-900"
          : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"}
      `}
    >
      {icon}
      {label}
    </button>
  )
}