"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The team at Cubix provided successful support and development for our platform. Their proactive approach and technical expertise made the collaboration seamless and rewarding.",
    name: "Jackie Dallas",
    title: "Director",
    company: "TechVentures",
    rating: 5,
    logo: "/images/testimonials/hotset.svg",
  },
  {
    quote:
      "Cubix consistently met our expectations and delivered on every milestone. Their attention to detail and commitment to quality truly set them apart from other development partners.",
    name: "Hamed Al Zadjal",
    title: "Digital Manager",
    company: "OmanTech",
    rating: 5,
    logo: "/images/testimonials/omanoil.svg",
  },
  {
    quote:
      "The code quality was exceptionally clean and well-documented. The development team demonstrated deep technical proficiency and delivered a product that exceeded our requirements.",
    name: "Geoffrey Anderson",
    title: "Co-Founder and CEO",
    company: "AppFlow",
    rating: 5,
    logo: "/images/testimonials/glimmer.svg",
  },
  {
    quote:
      "Cubix successfully built our application from the ground up. Their team was responsive, skilled, and dedicated to making our vision a reality with remarkable precision.",
    name: "Kimberly A. Dalius",
    title: "Founder",
    company: "StartUp Hub",
    rating: 5,
    logo: "/images/testimonials/pauseitive.svg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section className="py-20 lg:py-28 bg-[#0B0C0D] relative overflow-hidden">
      {/* Green gradient glow on the right side */}
      <div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(46,208,110,0.15) 0%, rgba(46,208,110,0.05) 40%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
            testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            our clients simply love <span className="text-[#2ED06E]">what we do</span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Proud to serve as the innovation partner for industry leaders who
            have experienced our expertise and excellence firsthand.
          </p>

          {/* Review badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            {/* Clutch badge */}
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm tracking-wide">CLUTCH</span>
              <span className="text-gray-400 text-xs">52 REVIEWS</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            {/* GoodFirms badge */}
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm tracking-wide">GoodFirms</span>
              <span className="text-gray-400 text-xs">32 REVIEWS</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#151617] border border-[#2ED06E]/20 rounded-2xl p-8 sm:p-12 text-center shadow-[0_0_30px_rgba(46,208,110,0.06)]">
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6">
                      <svg
                        className="w-12 h-12 text-[#2ED06E]/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                      </svg>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      {/* Green circle avatar with initials */}
                      <div className="w-12 h-12 rounded-full bg-[#2ED06E] flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <p className="text-white font-semibold text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {testimonial.title} &middot; {testimonial.company}
                      </p>
                      {/* Stars below author */}
                      <div className="flex justify-center mt-3">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical progress indicator on the right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center -mr-10">
            <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden">
              <div
                className="w-full bg-[#2ED06E] rounded-full transition-all duration-700"
                style={{
                  height: `${((current + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-10 h-3 bg-[#2ED06E]"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
