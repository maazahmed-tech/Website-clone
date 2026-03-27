"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Goobr",
    subtitle: "A Social Networking for Pets and Pet Owners",
    description:
      "Goobr is a trailblazing social networking app dedicated to pets and their owners.",
    image: "/images/casestudies/goobr.webp",
    slug: "goobr",
  },
  {
    title: "Tulsa Airport",
    subtitle: "Official Website and App for Tulsa Airport",
    description:
      "Tulsa Airport, a prominent name in aviation, sought Cubix's expertise to enhance its digital presence.",
    image: "/images/casestudies/tulsa.webp",
    slug: "tulsa-airport",
  },
  {
    title: "PartyShark",
    subtitle: "A Social Networking and Event Management App",
    description:
      "App designed for young partygoers, specializes in facilitating the organization & discovery of house parties.",
    image: "/images/casestudies/partyshark.webp",
    slug: "partyshark",
  },
  {
    title: "WAGMI",
    subtitle: "Multiplayer Tower Defense Game",
    description:
      "A PvP play-and-earn mobile tower defense game where players can own, trade, and use in-game NFT assets.",
    image: "/images/casestudies/wagmi.webp",
    slug: "wagmi",
  },
];

export default function CaseStudies() {
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
        {/* Section header */}
        <div className="mb-14">
          <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
            our success stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C0D]">
            Case Studies
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? 'none' : 'translateY(40px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.5s ease',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Image area */}
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B0C0D] mb-1">
                  {study.title}
                </h3>
                <p className="text-[#2ED06E] font-medium text-sm mb-3">
                  {study.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {study.description}
                </p>
                <Link
                  href={`/work/${study.slug}/`}
                  className="inline-flex items-center text-[#2ED06E] font-semibold text-sm group/link hover:gap-3 gap-2 transition-all duration-300"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
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
            </div>
          ))}
        </div>

        {/* More link */}
        <div className="mt-14 text-center">
          <Link
            href="/work/"
            className="inline-flex items-center gap-2 text-[#0B0C0D] font-semibold text-lg hover:text-[#2ED06E] transition-colors duration-300 border-b-2 border-[#0B0C0D] hover:border-[#2ED06E] pb-1"
          >
            More case studies
            <svg
              className="w-5 h-5"
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
      </div>
    </section>
  );
}
