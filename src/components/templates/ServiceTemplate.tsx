import Link from 'next/link';
import type { ServicePageData } from '@/data/types';

interface ServiceTemplateProps {
  data: ServicePageData;
}

/* ── placeholder data for sections not driven by ServicePageData ── */

const INDUSTRIES = [
  'Healthcare',
  'Fintech',
  'Education',
  'Real Estate',
  'Logistics',
  'Retail & E-commerce',
  'Entertainment',
  'Travel & Hospitality',
];

const TESTIMONIALS = [
  {
    quote:
      'They delivered a polished product on time and exceeded our expectations at every milestone.',
    name: 'Sarah Mitchell',
    role: 'CTO, Greenline Health',
    stars: 5,
  },
  {
    quote:
      'An outstanding partner that truly understands mobile-first strategy and user experience.',
    name: 'James Park',
    role: 'VP Product, FinEdge',
    stars: 5,
  },
  {
    quote:
      'Their team became an extension of ours. Communication was flawless from day one.',
    name: 'Amira Khan',
    role: 'Founder, Learnly',
    stars: 5,
  },
];

const AWARD_BADGES = [
  'DesignRush',
  'Clutch Top Company',
  'RightFirms',
  'GoodFirms',
  'Clutch Global Leader',
  'AppFutura',
];

export default function ServiceTemplate({ data }: ServiceTemplateProps) {
  const titleLower = data.title.toLowerCase();

  /* Sub-nav items matching the original cubix.co service pages */
  const subNavItems = [
    { label: `${data.title} Services`, anchor: '#services' },
    { label: 'Case Studies', anchor: '#case-studies' },
    { label: 'Achievements', anchor: '#achievements' },
    { label: 'Industries', anchor: '#industries' },
    { label: 'Testimonials', anchor: '#testimonials' },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          STICKY SUB-NAV
          ════════════════════════════════════════════════════════════ */}
      <div className="sticky top-[72px] z-40 border-b border-gray-200 bg-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-8 py-3 text-sm font-medium">
            {subNavItems.map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className="text-gray-700 hover:text-[#0B0C0D] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — HERO  (light bg #fdf8f6)
          ════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#fdf8f6] px-4 pb-16 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Clutch "TOP RATED" badge */}
          <div className="mb-6">
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] text-[#0B0C0D] md:text-5xl lg:text-[3.5rem]">
                {data.heroHeading}
              </h1>
              {data.heroDescription && (
                <p className="mb-8 text-lg leading-relaxed text-gray-500 md:text-xl">
                  {data.heroDescription}
                </p>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#0B0C0D] px-8 py-4 text-sm font-semibold text-white hover:bg-[#1a1b1c] transition-colors"
              >
                Talk to the Team
              </Link>
            </div>

            {/* Right — hero image / mockup placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 transform rotate-6" />
                <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1E6FD9]">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-400">
                      {data.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — STATS BAR  (white bg)
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-10 text-2xl font-bold text-[#0B0C0D] md:text-3xl">
            <span className="text-[#1E6FD9]">15+ years</span> of being a top{' '}
            {titleLower} company
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <Link
              href="/work"
              className="group text-center"
            >
              <p className="text-4xl font-extrabold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors">
                950+
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Completed Projects
              </p>
            </Link>

            <div className="hidden md:block h-10 w-px bg-gray-200" />

            <Link
              href="/about"
              className="group text-center"
            >
              <p className="text-4xl font-extrabold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors">
                350+
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Designers &amp; Developers
              </p>
            </Link>

            <div className="hidden md:block h-10 w-px bg-gray-200" />

            <Link
              href="/about/clients"
              className="group text-center"
            >
              <p className="text-4xl font-extrabold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors">
                15+
              </p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Years of Experience
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 3 — SERVICES GRID  (white bg, 3x2 rounded cards)
          ════════════════════════════════════════════════════════════ */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-[#0B0C0D] md:text-4xl">
            our <span className="text-[#1E6FD9]">{titleLower}</span> services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 p-8"
              >
                <h3 className="mb-3 text-lg font-bold text-[#0B0C0D]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 4 — AWARDS CAROUSEL  (white bg)
          ════════════════════════════════════════════════════════════ */}
      <section id="achievements" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-[#0B0C0D] md:text-4xl">
            recognized for excellence in{' '}
            <span className="text-[#1E6FD9]">{titleLower}</span>
          </h2>
          <p className="mb-10 max-w-2xl text-gray-500">
            Our dedication to quality has earned recognition from leading
            industry review platforms worldwide.
          </p>

          {/* Horizontal scroll carousel */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {AWARD_BADGES.map((badge) => (
              <div
                key={badge}
                className="flex-shrink-0 flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-10 py-8 min-w-[200px]"
              >
                {/* Placeholder icon */}
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E6FD9]/10">
                  <svg
                    className="h-7 w-7 text-[#1E6FD9]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#0B0C0D]">
                  {badge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 5 — MID-PAGE CTA  (dark bg #0B0C0D)
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B0C0D] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            ready for game-changing{' '}
            <span className="text-[#1E6FD9]">{titleLower}</span>?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#1E6FD9] px-10 py-4 text-sm font-semibold text-white hover:bg-[#1759b3] transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 6 — INDUSTRIES SERVED  (white bg)
          ════════════════════════════════════════════════════════════ */}
      <section id="industries" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-[#0B0C0D] md:text-4xl">
            Industries we serve
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                {/* Placeholder icon */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#1E6FD9]/10">
                  <svg
                    className="h-6 w-6 text-[#1E6FD9]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#0B0C0D]">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 7 — TESTIMONIALS  (dark bg)
          ════════════════════════════════════════════════════════════ */}
      <section id="testimonials" className="bg-[#0B0C0D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
            What our clients say
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-800 bg-[#141516] p-8"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="mb-6 text-gray-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 8 — FOOTER CTA  (dark bg)
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B0C0D] py-24">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1E6FD9]">
            Pull the Trigger!
          </p>
          <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
            Let&apos;s bring your vision to life
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#1E6FD9] px-10 py-4 text-sm font-semibold text-white hover:bg-[#1759b3] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
