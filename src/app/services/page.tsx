"use client";

import { useState } from "react";
import Link from "next/link";
import ClutchBadge from "@/components/shared/ClutchBadge";

/* ------------------------------------------------------------------ */
/*  Accordion data – matches Cubix services page structure             */
/* ------------------------------------------------------------------ */
const accordionItems = [
  {
    id: "custom-software",
    title: "Customized Software Development",
    description:
      "We build tailor-made software solutions designed to fit your unique business processes and objectives. From enterprise platforms and SaaS products to internal tools, our team delivers scalable, secure, and high-performance applications using modern technologies and agile methodologies.",
    links: [
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web Application Development", href: "/services/web-application-development" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "Game Development", href: "/services/game-development" },
      { label: "Blockchain Development", href: "/services/blockchain-development" },
      { label: "AI Solutions", href: "/services/artificial-intelligence" },
    ],
  },
  {
    id: "audit-consulting",
    title: "Audit and Consulting",
    description:
      "Our experienced consultants provide thorough technology audits, architecture reviews, and strategic consulting to identify gaps and opportunities. We help you make informed decisions about your technology investments and digital transformation roadmap.",
    links: [
      { label: "Software Consulting", href: "/services/software-consulting-services" },
      { label: "Product Design", href: "/services/product-design-services" },
      { label: "UX Design", href: "/services/ux-design-services" },
    ],
  },
  {
    id: "delivery",
    title: "Delivery",
    description:
      "From MVP to full-scale product launch, we manage the complete delivery lifecycle. Our agile teams ensure on-time delivery with continuous integration, automated testing, and transparent communication at every milestone.",
    links: [
      { label: "MVP Development", href: "/services/mvp-software-development" },
      { label: "DevOps Services", href: "/services/devops-software-development-services" },
      { label: "Cloud Development", href: "/services/cloud-software-development-services" },
    ],
  },
  {
    id: "support-maintenance",
    title: "Support and Maintenance",
    description:
      "Keep your applications running at peak performance with our dedicated support and maintenance services. We provide proactive monitoring, bug fixes, security patches, performance optimization, and feature enhancements to ensure long-term success.",
    links: [
      { label: "Software Testing", href: "/services/software-testing-services" },
      { label: "API Development", href: "/services/custom-api-development-services" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    quote:
      "DeepLearnHQ delivered a world-class product that exceeded our expectations. Their team was responsive, professional, and deeply committed to our success.",
    author: "Sarah Mitchell",
    role: "CTO, TechVentures Inc.",
  },
  {
    quote:
      "The team understood our vision from day one. They transformed a complex idea into an intuitive, powerful platform that our users love.",
    author: "James Carter",
    role: "Founder, HealthBridge",
  },
  {
    quote:
      "Working with DeepLearnHQ felt like having an extension of our own team. Their expertise in AI and mobile development is truly remarkable.",
    author: "Priya Sharma",
    role: "VP of Product, FinEdge",
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f7fa] via-[#eef2f7] to-[#e8edf5] pt-28 pb-20">
        {/* Decorative gradient blobs */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#1E6FD9]/15 to-[#1E6FD9]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-gradient-to-tr from-purple-300/15 to-indigo-200/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-orange-200/20 to-yellow-100/10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Left content */}
            <div className="flex-1 max-w-2xl">
              {/* Clutch TOP RATED badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Top Rated on Clutch
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0B0C0D] mb-6 leading-[1.15]">
                <span className="text-[#1E6FD9]">Business</span> through
                Accelerated Digital Services
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Achieve business goals and meet user satisfaction by developing
                seamless and intuitive products.
              </p>
            </div>

            {/* Right decorative + badge */}
            <div className="flex flex-col items-center gap-8 shrink-0">
              {/* 3-D decorative shapes placeholder */}
              <div className="relative w-72 h-56 hidden lg:block">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#1E6FD9]/25 to-[#1E6FD9]/8 rotate-12 blur-[1px]" />
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-gradient-to-tr from-orange-300/30 to-yellow-200/15 blur-[1px]" />
                <div className="absolute top-12 left-16 w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-300/25 to-teal-200/15 -rotate-12 blur-[1px]" />
                <div className="absolute bottom-12 right-8 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400/20 to-violet-200/10" />
              </div>

              <ClutchBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services We Provide – Accordion ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
            Services we <span className="text-[#1E6FD9]">provide</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mb-14">
            From concept to deployment and beyond — explore our full spectrum of
            digital services.
          </p>

          {/* Accordion */}
          <div className="border-t border-gray-200">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className="border-b border-gray-200"
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-6 px-2 text-left group transition-colors hover:bg-gray-50"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-xl md:text-2xl font-bold transition-colors ${
                        isOpen
                          ? "text-[#1E6FD9]"
                          : "text-[#0B0C0D] group-hover:text-[#1E6FD9]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`shrink-0 ml-4 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "border-[#1E6FD9] bg-[#1E6FD9] text-white rotate-45"
                          : "border-gray-300 text-gray-400 group-hover:border-[#1E6FD9] group-hover:text-[#1E6FD9]"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Accordion body */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-2 pb-8">
                      <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
                        {item.description}
                      </p>
                      {item.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {item.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E6FD9] bg-[#1E6FD9]/5 hover:bg-[#1E6FD9]/10 px-4 py-2 rounded-full transition-colors"
                            >
                              {link.label}
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Real-Time Project Map (placeholder) ─── */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Our Global <span className="text-[#1E6FD9]">Reach</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering impactful projects for clients around the world with
              dedicated teams across multiple time zones.
            </p>
          </div>

          {/* Map placeholder */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0B0C0D] to-[#1a2332] overflow-hidden h-[400px] flex items-center justify-center">
            {/* Decorative dots to suggest a world map */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-4 p-8 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-white"
                    style={{ opacity: Math.random() * 0.8 + 0.2 }}
                  />
                ))}
              </div>
            </div>
            {/* Highlight dots */}
            <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-[#1E6FD9] animate-pulse shadow-lg shadow-[#1E6FD9]/50" />
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
            <div className="absolute top-[40%] right-1/4 w-3 h-3 rounded-full bg-orange-400 animate-pulse shadow-lg shadow-orange-400/50" />
            <div className="absolute bottom-1/3 left-[35%] w-3 h-3 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-400/50" />

            <div className="relative z-10 text-center">
              <p className="text-white/60 text-lg font-medium">
                Real-Time Project Map
              </p>
              <p className="text-white/40 text-sm mt-1">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Client Testimonials ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              What Our <span className="text-[#1E6FD9]">Clients</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by startups and enterprises across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-[#f9fafb] rounded-2xl p-8 border border-gray-100 flex flex-col"
              >
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-[#1E6FD9]/30 mb-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#0B0C0D]">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA: Pull the Trigger ─── */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Pull the <span className="text-[#1E6FD9]">Trigger!</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Initiate a conversation and let DeepLearnHQ turn your ideas into
            reality. Tell us about your project, and we&apos;ll help you find
            the best approach to bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1E6FD9] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1859B3] transition-colors text-lg"
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
