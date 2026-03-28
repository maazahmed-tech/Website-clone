"use client";

import { useRef } from "react";

interface Award {
  platform: string;
  platformStyle: string;
  rating: number;
  description: string;
}

const awards: Award[] = [
  {
    platform: "GoodFirms",
    platformStyle: "text-2xl font-bold text-blue-400",
    rating: 4.9,
    description:
      "Ranked among top gaming app development companies of 2026",
  },
  {
    platform: "DesignRush",
    platformStyle: "text-2xl font-bold text-orange-400",
    rating: 5.0,
    description:
      "Ranked among leading game development companies for 2026",
  },
  {
    platform: "Clutch",
    platformStyle: "text-2xl font-bold text-red-400",
    rating: 4.9,
    description:
      "Acknowledged among top software consulting experts 2026",
  },
  {
    platform: "TechReviewer",
    platformStyle: "text-2xl font-bold text-cyan-400",
    rating: 4.9,
    description:
      "Recognized among top mobile app development companies 2026",
  },
  {
    platform: "TopDevelopers",
    platformStyle: "text-2xl font-bold text-purple-400",
    rating: 4.8,
    description:
      "Acclaimed as a top-rated software development company 2026",
  },
  {
    platform: "AppFutura",
    platformStyle: "text-2xl font-bold text-emerald-400",
    rating: 4.9,
    description:
      "Ranked among top software development companies of 2026",
  },
];

export default function Awards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#0B0C0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - left aligned */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Our awards and </span>
            <span className="text-[#1E6FD9]">recognitions</span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg leading-relaxed max-w-2xl">
            Recognized globally for our industry-leading development expertise
            and commitment to delivering exceptional digital solutions.
          </p>
        </div>

        {/* Horizontal scrolling carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] sm:w-[340px] bg-[#151617] rounded-2xl p-7 snap-start border border-white/5 hover:border-[#1E6FD9]/30 transition-all duration-300 group"
            >
              {/* Top row: Platform name + rating */}
              <div className="flex items-start justify-between mb-6">
                <span className={award.platformStyle}>
                  {award.platform}
                </span>
                <div className="flex items-center gap-1.5 text-yellow-400">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white font-bold text-sm">
                    {award.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar globally for this component */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
