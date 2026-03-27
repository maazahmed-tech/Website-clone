"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Industry {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    title: "Automotive",
    description:
      "Enhance your vehicle management operations with cutting-edge automotive software solutions designed for efficiency and innovation.",
    slug: "automotive",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.368L21 11M3 11v6a1 1 0 001 1h1a2 2 0 104 0h6a2 2 0 104 0h1a1 1 0 001-1v-6M3 11h18" />
      </svg>
    ),
  },
  {
    title: "Finance",
    description:
      "Get scalable custom solutions that streamline financial operations, enhance security, and drive digital transformation in banking and fintech.",
    slug: "finance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    description:
      "Our custom real estate solutions simplify property management, listing services, and client engagement for modern agencies.",
    slug: "real-estate",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Hospitality",
    description:
      "Get user-friendly hospitality solutions that elevate guest experiences, streamline bookings, and optimize hotel management operations.",
    slug: "hospitality",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Education",
    description:
      "Revolutionize ed-tech with innovative solutions that enhance learning experiences, streamline administration, and enable remote education.",
    slug: "education",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Our healthcare solutions streamline operations, improve patient care, and ensure compliance with industry regulations and standards.",
    slug: "healthcare",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Industries() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
            observer.disconnect();
          }
        },
        { threshold: 0.01, rootMargin: '100px' }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
            what we serve
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C0D]">
            industries we serve
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            With a wide range of services and proven experience across major
            industries, we deliver tailored solutions that drive real business
            results.
          </p>
        </div>

        {/* Industry cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#2ED06E] transition-all duration-500 hover:shadow-xl hover:shadow-[#2ED06E]/5 hover:-translate-y-1"
              style={{
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? 'none' : 'translateY(40px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.5s ease, border-color 0.5s ease',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Green top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#2ED06E] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[#2ED06E]/10 text-[#2ED06E] flex items-center justify-center mb-6 group-hover:bg-[#2ED06E] group-hover:text-white transition-all duration-300">
                {industry.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0B0C0D] mb-3 group-hover:text-[#2ED06E] transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-5">
                {industry.description}
              </p>

              {/* Link */}
              <Link
                href={`/industries/${industry.slug}/`}
                className="inline-flex items-center gap-2 text-[#2ED06E] font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
}
