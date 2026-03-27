"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Mobile Apps", "Web Apps", "Games", "Blockchain"];

const projects = [
  {
    title: "Goobr",
    category: "Mobile Apps",
    description:
      "A social networking platform designed for pet lovers to connect, share stories, and find services for their furry companions.",
    gradient: "from-purple-600 to-pink-500",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Tulsa Airport",
    category: "Web Apps",
    description:
      "The official website and mobile app for Tulsa International Airport, providing real-time flight information and wayfinding.",
    gradient: "from-blue-600 to-cyan-500",
    tags: ["React", "AWS", "REST API"],
  },
  {
    title: "PartyShark",
    category: "Mobile Apps",
    description:
      "An event management application that simplifies party planning with features for invitations, RSVPs, and vendor coordination.",
    gradient: "from-orange-500 to-red-500",
    tags: ["Flutter", "Firebase", "Stripe"],
  },
  {
    title: "WAGMI",
    category: "Games",
    description:
      "A tower defense game built on blockchain technology featuring NFT characters, play-to-earn mechanics, and competitive gameplay.",
    gradient: "from-green-500 to-emerald-600",
    tags: ["Unity", "Solidity", "Web3"],
  },
  {
    title: "Pauseitive",
    category: "Mobile Apps",
    description:
      "A mental health application offering guided meditation, mood tracking, therapy resources, and community support features.",
    gradient: "from-indigo-500 to-purple-600",
    tags: ["Swift", "Kotlin", "AI/ML"],
  },
  {
    title: "Oomco",
    category: "Mobile Apps",
    description:
      "An on-demand fuel delivery application that brings fuel directly to your vehicle, featuring real-time tracking and scheduling.",
    gradient: "from-yellow-500 to-orange-500",
    tags: ["React Native", "Node.js", "Google Maps"],
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0B0C0D] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#2ED06E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#2ED06E]">Work</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Explore our portfolio of innovative digital products that have
            transformed businesses across industries.
          </p>
        </div>
      </section>

      {/* Filter & Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-[#2ED06E] text-[#0B0C0D]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div
                  className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                >
                  <span className="text-white/30 text-6xl font-bold">
                    {project.title[0]}
                  </span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B0C0D] mb-2 group-hover:text-[#2ED06E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#2ED06E] text-sm font-semibold hover:underline"
                  >
                    View Case Study
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let&apos;s build something remarkable together. Share your idea with
            us and we&apos;ll help you bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2ED06E] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#25b35d] transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
