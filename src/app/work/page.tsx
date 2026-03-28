"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { caseStudies } from "@/data/case-studies";

const serviceOptions = [
  "All Services",
  "Mobile App Development",
  "Web Development",
  "Game Development",
  "Blockchain Development",
  "AI & Machine Learning",
  "IoT Solutions",
];

const categoryOptions = [
  "All Categories",
  "Healthcare & Wellness",
  "Events & Entertainment",
  "Logistics & Transportation",
  "Food & Beverage",
  "Environment & Sustainability",
  "Blockchain & Gaming",
  "Social Networking",
  "Luxury & Gaming",
];

const technologyOptions = [
  "All Technologies",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Node.js",
  "Python",
  "AWS",
  "Firebase",
  "Unity",
  "Solidity",
  "TensorFlow",
];

export default function WorkPage() {
  const [serviceFilter, setServiceFilter] = useState("All Services");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [technologyFilter, setTechnologyFilter] = useState("All Technologies");

  const filteredProjects = useMemo(() => {
    let result = caseStudies;

    if (categoryFilter !== "All Categories") {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (technologyFilter !== "All Technologies") {
      result = result.filter((p) =>
        p.technologies.some((t) =>
          t.toLowerCase().includes(technologyFilter.toLowerCase())
        )
      );
    }

    return result;
  }, [serviceFilter, categoryFilter, technologyFilter]);

  return (
    <>
      {/* Hero Section - Light Background */}
      <section className="bg-[#fdf8f6] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-800">Work</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0B0C0D] leading-tight mb-6">
            Case Studies
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg max-w-3xl mb-12">
            From award-winning iOS and Android app development to seamless web
            development, discover how we help clients achieve their goals and
            bring their vision of digital innovation to life.
          </p>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-4">
            {/* Services Dropdown */}
            <div className="relative">
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-5 py-3 pr-10 text-sm text-gray-700 font-medium focus:outline-none focus:border-[#1E6FD9] cursor-pointer min-w-[200px]"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Categories Dropdown */}
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-5 py-3 pr-10 text-sm text-gray-700 font-medium focus:outline-none focus:border-[#1E6FD9] cursor-pointer min-w-[200px]"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Technology Dropdown */}
            <div className="relative">
              <select
                value={technologyFilter}
                onChange={(e) => setTechnologyFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-5 py-3 pr-10 text-sm text-gray-700 font-medium focus:outline-none focus:border-[#1E6FD9] cursor-pointer min-w-[200px]"
              >
                {technologyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/case-studies/${project.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E6FD9]/10 to-emerald-500/5" />
                    <span className="text-gray-300 text-6xl font-bold">
                      {project.title[0]}
                    </span>
                    {/* Category overlay badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B0C0D] mb-2 group-hover:text-[#1E6FD9] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-50 text-gray-600 text-xs px-2.5 py-1 rounded-md border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-gray-400 text-xs px-1 py-1">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Results preview */}
                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                      {project.results.slice(0, 2).map((r) => (
                        <div key={r.metric}>
                          <p className="text-[#1E6FD9] font-bold text-lg">
                            {r.value}
                          </p>
                          <p className="text-gray-400 text-xs">{r.metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No projects found matching your filters.
              </p>
              <button
                onClick={() => {
                  setServiceFilter("All Services");
                  setCategoryFilter("All Categories");
                  setTechnologyFilter("All Technologies");
                }}
                className="mt-4 text-[#1E6FD9] font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] px-4 py-20 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
            Pull the Trigger!
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Want to See Your Project Here?
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            Let&apos;s build something remarkable together. Share your idea with
            us and we&apos;ll help you bring it to life.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#1E6FD9] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1859B3]"
            >
              Start Your Project
            </Link>
            <Link
              href="/about/testimonial"
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              View Testimonials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
