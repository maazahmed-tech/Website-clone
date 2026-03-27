"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Step {
  number: string;
  total: string;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    number: "01",
    total: "06",
    title: "Ideate",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
    image: "/images/process/ideate.webp",
  },
  {
    number: "02",
    total: "06",
    title: "Design",
    description:
      "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
    image: "/images/process/design.webp",
  },
  {
    number: "03",
    total: "06",
    title: "Develop",
    description:
      "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.",
    image: "/images/process/development.webp",
  },
  {
    number: "04",
    total: "06",
    title: "Test",
    description:
      "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.",
    image: "/images/process/test.webp",
  },
  {
    number: "05",
    total: "06",
    title: "Launch",
    description:
      "Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.",
    image: "/images/process/launch.webp",
  },
  {
    number: "06",
    total: "06",
    title: "Support",
    description:
      "Providing ongoing support and enhancements to ensure continued product success and long-term growth.",
    image: "/images/process/support.webp",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const sectionRect = sectionEl.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const triggerPoint = window.innerHeight * 0.4;

      let currentActive = 0;
      stepRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          currentActive = index;
        }
      });

      if (sectionTop > triggerPoint) {
        currentActive = 0;
      }

      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0B0C0D] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white lowercase">
            our product{" "}
            <span className="text-[#2ED06E]">development process</span>
          </h2>
          <Link
            href="/about/process/"
            className="inline-flex items-center gap-2 mt-5 text-white text-sm font-medium hover:text-[#2ED06E] transition-colors duration-300 group"
          >
            View More
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT: Vertical timeline */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <div
                    key={step.number}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="relative pl-8 lg:pl-10"
                  >
                    {/* Vertical timeline line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-500 ${
                        isActive
                          ? "bg-[#2ED06E]"
                          : isPast
                          ? "bg-[#2ED06E]/40"
                          : "bg-white/10"
                      }`}
                    />

                    {/* Timeline dot */}
                    <div
                      className={`absolute left-[-5px] top-6 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                        isActive
                          ? "bg-[#2ED06E] border-[#2ED06E] shadow-[0_0_10px_rgba(46,208,110,0.5)]"
                          : isPast
                          ? "bg-[#2ED06E]/40 border-[#2ED06E]/40"
                          : "bg-transparent border-white/20"
                      }`}
                    />

                    <div
                      className="pb-12 lg:pb-16"
                      style={{
                        opacity: isActive ? 1 : 0.5,
                        transition: 'opacity 0.5s ease',
                      }}
                    >
                      {/* Step counter */}
                      <span
                        className={`text-sm font-mono tracking-wider transition-colors duration-500 ${
                          isActive ? "text-white/70" : "text-white/30"
                        }`}
                      >
                        {step.number}/{step.total}
                      </span>

                      {/* Step title */}
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-3 transition-colors duration-500 ${
                          isActive ? "text-[#2ED06E]" : "text-[#2ED06E]/40"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Step description */}
                      <p
                        className={`text-sm sm:text-base leading-relaxed max-w-md transition-colors duration-500 ${
                          isActive ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Mobile image — shown only on small screens below each step */}
                      <div className="lg:hidden mt-6">
                        <div
                          className="relative w-full aspect-square max-w-[320px] rounded-2xl overflow-hidden"
                          style={{
                            opacity: isActive ? 1 : 0.3,
                            transform: isActive ? 'scale(1)' : 'scale(0.95)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                          }}
                        >
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-contain"
                            sizes="320px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Sticky illustration image (desktop only) */}
          <div className="hidden lg:block w-1/2">
            <div className="sticky top-32">
              <div className="relative w-full aspect-square max-w-[540px] ml-auto">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="absolute inset-0"
                    style={{
                      opacity: activeStep === index ? 1 : 0,
                      transform: activeStep === index ? 'scale(1)' : 'scale(0.95)',
                      transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 1024px) 0px, 540px"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
