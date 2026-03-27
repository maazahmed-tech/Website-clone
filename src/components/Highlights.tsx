"use client";

import { useState, useEffect, useRef } from "react";

const highlights = [
  {
    title: "John Boccuzzi spoke about the entrepreneurial journey of Mr. Salman Lakhani and Cubix",
    image: "/images/testimonials/video1.webp",
  },
  {
    title: "Cubix Reviews & Testimonials - Greg Morneault of DataStream Content Solutions",
    image: "/images/testimonials/video2.webp",
  },
  {
    title: "Cubix Reviews & Testimonials - Karen Agresti of Nomidate, CEO",
    image: "/images/testimonials/video3.webp",
  },
];

export default function Highlights() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0B0C0D] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
            OUR HIGHLIGHTS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            our highlights
          </h2>
        </div>

        {/* Video thumbnail grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'none' : 'translateY(40px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Thumbnail with play button */}
              <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-black/40 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
                    <svg
                      className="w-6 h-6 text-[#0B0C0D] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <p className="mt-4 text-sm sm:text-base text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
