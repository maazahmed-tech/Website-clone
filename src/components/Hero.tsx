"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const services = [
  "Software\nDevelopment",
  "Mobile App\nDevelopment",
  "Game\nDevelopment",
  "Blockchain\nDevelopment",
  "AI\nDevelopment",
  "Cloud\nSolutions",
  "Web\nDevelopment",
  "UI/UX\nDesign",
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing
      const next = currentWord.slice(0, displayText.length + 1);
      setDisplayText(next);

      if (next === currentWord) {
        // Finished typing — pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      // Deleting
      const next = currentWord.slice(0, displayText.length - 1);
      setDisplayText(next);

      if (next === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}

const clientLogos = [
  { name: "Tissot", src: null },
  { name: "Converse", src: null },
  { name: "Ray-Ban", src: null },
  { name: "WFMU", src: null },
  { name: "Michaels", src: "/images/logos/michaels.svg" },
  { name: "Walmart", src: null },
  { name: "Politico", src: null },
  { name: "DreamWorks", src: "/images/logos/dreamworks.svg" },
  { name: "Samsung", src: null },
  { name: "Canon", src: null },
  { name: "Emirates", src: null },
  { name: "Careem", src: null },
];

export default function Hero() {
  const typedText = useTypewriter(services, 80, 40, 2000);
  const lines = typedText.split("\n");

  return (
    <section className="relative w-full flex flex-col justify-center overflow-hidden" style={{ backgroundColor: '#0B0C0D', minHeight: '100vh' }}>
      {/* Main content */}
      <div className="relative flex-1 flex items-center w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12" style={{ zIndex: 10 }}>
        <div className="w-full max-w-7xl mx-auto">
          {/* Heading with typewriter animation */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', minHeight: 'clamp(10rem, 25vw, 20rem)' }}>
            <span style={{ color: '#ffffff' }}>We are a </span>
            {lines.map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                <span style={{ color: '#1E6FD9', fontStyle: 'italic' }}>{line}</span>
              </span>
            ))}
            <span
              className="animate-blink"
              style={{
                color: '#1E6FD9',
                fontStyle: 'normal',
                fontWeight: 300,
                marginLeft: '2px',
              }}
            >
              |
            </span>
            <br />
            <span style={{ color: '#ffffff' }}>Company</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed"
            style={{ color: '#9ca3af', maxWidth: '600px' }}
          >
            We are your trusted development partner with just one goal in focus
            to build products that generate a lasting, profitable impact.
          </p>
        </div>

        {/* Green circle CTA - positioned on the right, vertically centered */}
        <Link
          href="/contact"
          className="absolute right-6 sm:right-10 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 group"
          style={{
            zIndex: 20,
            transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
          }}
          aria-label="Contact us"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-[#1E6FD9] flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:bg-[#1859B3] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#1E6FD9]/30">
            {/* Diagonal arrow SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-semibold text-white text-center leading-tight px-2">
              Let&apos;s Discuss<br />Your Idea
            </span>
          </div>
        </Link>
      </div>

      {/* Scrolling logo marquee */}
      <div
        className="relative z-10 w-full overflow-hidden border-t border-white/10 py-6 sm:py-8"
        style={{
          opacity: 1,
          transition: 'opacity 1s ease 0.7s',
        }}
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#0B0C0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#0B0C0D] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {/* First set of logos */}
          {clientLogos.map((logo, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-10 md:mx-12"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 sm:h-8 w-auto"
                  style={{
                    filter: "brightness(0) invert(1)",
                    opacity: 0.6,
                  }}
                />
              ) : (
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase text-white/50 whitespace-nowrap">
                  {logo.name}
                </span>
              )}
            </div>
          ))}

          {/* Duplicate set for seamless infinite scroll */}
          {clientLogos.map((logo, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-10 md:mx-12"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 sm:h-8 w-auto"
                  style={{
                    filter: "brightness(0) invert(1)",
                    opacity: 0.6,
                  }}
                />
              ) : (
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase text-white/50 whitespace-nowrap">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee animation style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
