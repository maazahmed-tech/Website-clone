"use client";

import Link from "next/link";
import { useState } from "react";

const blogCategories = [
  "All",
  "AI",
  "Mobile",
  "Blockchain",
  "Game Dev",
  "Web Dev",
];

const featuredPost = {
  title: "The Future of AI in Enterprise Software Development",
  category: "AI",
  date: "March 15, 2025",
  excerpt:
    "Artificial intelligence is reshaping how enterprises build and deploy software. From automated code generation to intelligent testing, discover how AI is transforming the software development lifecycle and what it means for businesses in 2025 and beyond.",
  gradient: "from-[#2ED06E] to-emerald-700",
};

const posts = [
  {
    title: "Building Scalable Mobile Apps with React Native in 2025",
    category: "Mobile",
    date: "March 10, 2025",
    excerpt:
      "A comprehensive guide to building high-performance, scalable mobile applications using the latest features in React Native.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "DeFi 2.0: The Next Evolution of Decentralized Finance",
    category: "Blockchain",
    date: "March 5, 2025",
    excerpt:
      "Exploring the innovations driving the next wave of DeFi protocols and how they address the limitations of first-generation platforms.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Unity vs Unreal Engine: Choosing the Right Game Engine",
    category: "Game Dev",
    date: "February 28, 2025",
    excerpt:
      "An in-depth comparison of Unity and Unreal Engine to help you decide which game engine best fits your project requirements.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Next.js 15: What Developers Need to Know",
    category: "Web Dev",
    date: "February 20, 2025",
    excerpt:
      "Breaking down the major features and improvements in Next.js 15 and how they impact modern web development workflows.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Machine Learning Models for Predictive Maintenance",
    category: "AI",
    date: "February 15, 2025",
    excerpt:
      "How businesses are leveraging ML models to predict equipment failures and optimize maintenance schedules for maximum uptime.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Cross-Platform Development: Flutter vs React Native",
    category: "Mobile",
    date: "February 10, 2025",
    excerpt:
      "A detailed comparison of Flutter and React Native for cross-platform mobile development, covering performance, ecosystem, and developer experience.",
    gradient: "from-yellow-500 to-orange-600",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const showFeatured =
    activeCategory === "All" || featuredPost.category === activeCategory;

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
            <span className="text-white">Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#2ED06E]">Blog</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Insights, trends, and expert perspectives on technology, innovation,
            and digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {blogCategories.map((cat) => (
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

          {/* Featured Post */}
          {showFeatured && (
            <div className="mb-12">
              <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2">
                  <div
                    className={`h-64 md:h-auto bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center`}
                  >
                    <span className="text-white/20 text-8xl font-bold">
                      AI
                    </span>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#2ED06E]/10 text-[#2ED06E] text-xs font-semibold px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {featuredPost.date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D] mb-4 group-hover:text-[#2ED06E] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center text-[#2ED06E] font-semibold hover:underline"
                    >
                      Read More
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
              </div>
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.title}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                >
                  <span className="text-white/20 text-5xl font-bold">
                    {post.category[0]}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#2ED06E]/10 text-[#2ED06E] text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#2ED06E] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-[#2ED06E] text-sm font-semibold hover:underline"
                  >
                    Read More
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
