'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import type { IndustryPageData } from '@/data/types';
import ClutchBadge from '@/components/shared/ClutchBadge';
import TechStack from '@/components/shared/TechStack';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/shared/CTASection';

interface IndustryTemplateProps {
  data: IndustryPageData;
}

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
  /* ------------------------------------------------------------------ */
  /*  Sticky sub-nav state                                               */
  /* ------------------------------------------------------------------ */
  const [activeAnchor, setActiveAnchor] = useState<string>('#solutions');
  const subNavRef = useRef<HTMLDivElement>(null);

  const subNavItems = [
    { label: 'Solutions', anchor: '#solutions' },
    ...(data.caseStudies.length > 0
      ? [{ label: 'Case Studies', anchor: '#case-studies' }]
      : []),
    { label: 'Staff Aug', anchor: '#staff-augmentation' },
    ...(data.technologies.length > 0
      ? [{ label: 'Tech Stack', anchor: '#tech-stack' }]
      : []),
    { label: 'Contact', anchor: '#contact' },
  ];

  useEffect(() => {
    const ids = subNavItems.map((i) => i.anchor.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveAnchor(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------------------------------------------------------ */
  /*  Case-studies carousel state                                        */
  /* ------------------------------------------------------------------ */
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const amount = carouselRef.current.offsetWidth * 0.7;
    carouselRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {/* ============================================================= */}
      {/* SECTION 1 : Hero  (light bg #fdf8f6)                          */}
      {/* ============================================================= */}
      <section className="relative bg-[#fdf8f6] px-4 pb-20 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse items-start justify-between gap-10 lg:flex-row lg:items-center">
            {/* Left: text */}
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B0C0D] md:text-5xl lg:text-[3.5rem]">
                {data.heroHeading}
              </h1>
              {data.heroDescription && (
                <p className="text-lg leading-relaxed text-gray-500 md:text-xl">
                  {data.heroDescription}
                </p>
              )}
            </div>

            {/* Right: Clutch badge */}
            <div className="hidden flex-shrink-0 lg:block">
              <ClutchBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 2 : Sticky sub-navigation                             */}
      {/* ============================================================= */}
      <div
        ref={subNavRef}
        className="sticky top-[72px] z-40 border-b border-gray-200 bg-white hidden lg:block"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-10 text-sm font-semibold">
            {subNavItems.map((item) => {
              const isActive = activeAnchor === item.anchor;
              return (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  className={`relative whitespace-nowrap py-4 transition-colors ${
                    isActive
                      ? 'text-[#1E6FD9]'
                      : 'text-gray-600 hover:text-[#0B0C0D]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#1E6FD9]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SECTION 3 : Solutions (services grid)                          */}
      {/* ============================================================= */}
      <section id="solutions" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-3xl font-bold text-[#0B0C0D] md:text-4xl">
              Our{' '}
              <span className="text-[#1E6FD9]">{data.title}</span>{' '}
              Solutions
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We offer specialized technology services tailored to the unique
              needs of the {data.title.toLowerCase()} industry.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {data.services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#1E6FD9] hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1E6FD9] text-sm font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 4 : CTA dark banner                                    */}
      {/* ============================================================= */}
      <section className="bg-[#0B0C0D] px-4 py-16 md:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Left: decorative placeholder */}
          <div className="hidden w-60 flex-shrink-0 lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1E6FD9]/30 to-[#1E6FD9]/5 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-[#1E6FD9]/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#1E6FD9]">
                  {data.title[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Center: heading */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl lg:text-4xl">
              our team is ready to help you with{' '}
              <span className="text-[#1E6FD9]">
                {data.title.toLowerCase()}
              </span>{' '}
              solutions.
            </h2>
          </div>

          {/* Right: CTA button + arrow */}
          <div className="flex flex-shrink-0 items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E6FD9] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1859b0]"
            >
              Request Consultation
            </Link>
            {/* Decorative arrow */}
            <svg
              className="hidden h-8 w-8 text-gray-500 lg:block"
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
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 5 : Case Studies carousel                              */}
      {/* ============================================================= */}
      {data.caseStudies.length > 0 && (
        <section id="case-studies" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading row */}
            <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold text-[#0B0C0D] md:text-4xl">
                  <span className="text-[#1E6FD9]">case</span>{' '}
                  studies
                </h2>
                <p className="mt-3 max-w-xl text-gray-500 leading-relaxed">
                  See how we have helped {data.title.toLowerCase()} companies
                  deliver successful digital solutions.
                </p>
              </div>

              {/* Carousel arrows */}
              <div className="flex gap-3">
                <button
                  onClick={() => scrollCarousel('left')}
                  aria-label="Scroll case studies left"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-[#1E6FD9] hover:text-[#1E6FD9]"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollCarousel('right')}
                  aria-label="Scroll case studies right"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-[#1E6FD9] hover:text-[#1E6FD9]"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Horizontal scroll carousel */}
            <div
              ref={carouselRef}
              className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {data.caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="group w-[340px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg sm:w-[380px]"
                >
                  {/* Card image */}
                  {study.image ? (
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20]">
                      <span className="text-2xl font-bold text-[#1E6FD9]">
                        {study.title[0]}
                      </span>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-[#0B0C0D] transition-colors group-hover:text-[#1E6FD9]">
                      {study.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {study.description}
                    </p>
                    {study.slug && (
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#1E6FD9] transition-all hover:gap-2"
                      >
                        View More
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* Staff Augmentation anchor (for sub-nav)                        */}
      {/* ============================================================= */}
      <section id="staff-augmentation" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0C0D] md:text-4xl">
                <span className="text-[#1E6FD9]">Staff</span> Augmentation
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Scale your {data.title.toLowerCase()} development team with our
                pre-vetted engineers. Get dedicated professionals who integrate
                seamlessly with your existing workflows and start delivering
                results from day one.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B0C0D] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1a1b1c]"
              >
                Hire Developers
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '150+', label: 'Engineers' },
                { stat: '98%', label: 'Retention Rate' },
                { stat: '48h', label: 'Avg. Onboarding' },
                { stat: '10+', label: 'Years Experience' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 bg-white p-6 text-center"
                >
                  <p className="text-2xl font-extrabold text-[#1E6FD9]">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* Tech Stack                                                     */}
      {/* ============================================================= */}
      {data.technologies.length > 0 && (
        <section id="tech-stack" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <h2 className="text-3xl font-bold text-[#0B0C0D] md:text-4xl">
                <span className="text-[#1E6FD9]">Tech</span> Stack
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Industry-leading technologies powering our{' '}
                {data.title.toLowerCase()} solutions.
              </p>
            </div>
            <TechStack technologies={data.technologies} />
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* FAQs                                                           */}
      {/* ============================================================= */}
      {data.faqs.length > 0 && <FAQAccordion faqs={data.faqs} />}

      {/* ============================================================= */}
      {/* SECTION 5 : Footer CTA                                         */}
      {/* ============================================================= */}
      <div id="contact">
        <CTASection
          title="Let's bring your vision to life"
          description={`Partner with DeepLearnHQ to build transformative ${data.title.toLowerCase()} solutions that drive real results.`}
          primaryCTA={{ label: 'Get Started', href: '/contact' }}
        />
      </div>
    </>
  );
}
