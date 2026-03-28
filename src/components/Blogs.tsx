"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Apps for Apple Vision Pro and Meta Quest 3",
    category: "Technology",
    date: "12 Mar 2026",
    slug: "building-apps-apple-vision-pro-meta-quest-3",
    image: "/images/blog/vision-pro.webp",
  },
  {
    title: "Top AI Development Companies in 2026",
    category: "AI",
    date: "5 Mar 2026",
    slug: "top-ai-development-companies-2026",
    image: "/images/blog/ai-companies.webp",
  },
  {
    title: "How to Build a Multiplayer Game Like Among Us",
    category: "Game",
    date: "19 Feb 2026",
    slug: "how-to-build-multiplayer-game-like-among-us",
    image: "/images/blog/among-us.webp",
  },
];

export default function Blogs() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '100px' }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              insights
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C0D]">
              our blogs
            </h2>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-[#1E6FD9] font-semibold hover:gap-3 transition-all duration-300"
          >
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Blog grid: 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(40px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <Link href={`/blog/${post.slug}/`} className="block">
                {/* Image */}
                <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category + Date */}
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span className="text-[#1E6FD9] font-medium">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#0B0C0D] text-lg font-bold leading-snug group-hover:text-[#1E6FD9] transition-colors duration-300">
                  {post.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
