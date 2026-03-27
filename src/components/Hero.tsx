"use client";

import Link from "next/link";

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
  const fadeIn = true; // Always visible — no animation delay

  return (
    <section className="relative w-full flex flex-col justify-center overflow-hidden" style={{ backgroundColor: '#0B0C0D', minHeight: '100vh' }}>
      {/* Main content */}
      <div className="relative flex-1 flex items-center w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12" style={{ zIndex: 10 }}>
        <div className="w-full max-w-7xl mx-auto">
          {/* Heading — left aligned like original */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            <span style={{ color: '#ffffff' }}>We are a </span>
            <span style={{ color: '#2ED06E' }}>Software</span>
            <br />
            <span style={{ color: '#2ED06E' }}>Development</span>
            <br />
            <span style={{ color: '#2ED06E' }}>Company</span>
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

        {/* Green circle CTA - positioned on the right */}
        <Link
          href="/contact"
          className="absolute right-6 sm:right-10 md:right-16 lg:right-24 group"
          style={{
            bottom: '25%',
            zIndex: 20,
            transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
          }}
          aria-label="Contact us"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-[#2ED06E] flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:bg-[#25b35d] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#2ED06E]/30">
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
          opacity: fadeIn ? 1 : 0,
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
