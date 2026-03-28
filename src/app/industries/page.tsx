import type { Metadata } from "next";
import Link from "next/link";
import ClutchBadge from "@/components/shared/ClutchBadge";

export const metadata: Metadata = {
  title: "Industries We Serve | DeepLearnHQ",
  description:
    "DeepLearnHQ delivers tailored technology solutions across 16+ industries including healthcare, finance, education, ecommerce, and more.",
};

const industries = [
  {
    title: "Automotive",
    slug: "automotive",
    description:
      "Connected vehicles, fleet management, and digital showroom solutions for the automotive industry.",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Telemedicine, EHR systems, patient portals, and health monitoring applications.",
  },
  {
    title: "Education",
    slug: "education",
    description:
      "E-learning platforms, student management systems, and virtual classroom solutions.",
  },
  {
    title: "Ecommerce",
    slug: "ecommerce",
    description:
      "Online stores, marketplace platforms, and omnichannel commerce solutions.",
  },
  {
    title: "Finance",
    slug: "finance",
    description:
      "Fintech apps, banking platforms, payment gateways, and financial analytics tools.",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Property listing platforms, virtual tours, CRM systems, and smart building solutions.",
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    description:
      "Hotel booking systems, restaurant management apps, and guest experience platforms.",
  },
  {
    title: "Logistics",
    slug: "logistics",
    description:
      "Supply chain management, fleet tracking, warehouse automation, and delivery solutions.",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description:
      "IoT-enabled manufacturing, quality control systems, and production planning platforms.",
  },
  {
    title: "Fashion",
    slug: "fashion",
    description:
      "Fashion e-commerce, virtual try-on solutions, and inventory management systems.",
  },
  {
    title: "Food",
    slug: "food",
    description:
      "Food delivery apps, restaurant POS systems, and recipe management platforms.",
  },
  {
    title: "Travel",
    slug: "travel",
    description:
      "Travel booking engines, itinerary planners, and tourism management platforms.",
  },
  {
    title: "Legal",
    slug: "legal",
    description:
      "Legal practice management, document automation, and case tracking solutions.",
  },
  {
    title: "Agriculture",
    slug: "agriculture",
    description:
      "Precision farming tools, crop monitoring, and agricultural supply chain management.",
  },
  {
    title: "B2B Software",
    slug: "b2b-software",
    description:
      "Enterprise SaaS platforms, workflow automation, and business intelligence solutions.",
  },
  {
    title: "CRM",
    slug: "crm",
    description:
      "Custom CRM development, sales pipeline automation, and customer engagement platforms.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f7fa] via-[#eef2f7] to-[#e8edf5] pt-28 pb-20">
        {/* Decorative 3D-style gradient blobs */}
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#1E6FD9]/15 to-cyan-300/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-60 h-60 rounded-full bg-gradient-to-tr from-purple-300/15 to-pink-200/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-44 h-44 rounded-full bg-gradient-to-br from-orange-200/20 to-yellow-100/10 blur-2xl pointer-events-none" />

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
                Industries We Empower &amp; Support
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Drive success with industry-specific products designed to meet
                diverse business needs.
              </p>
            </div>

            {/* Right decorative shapes + Clutch badge */}
            <div className="flex flex-col items-center gap-8 shrink-0">
              {/* 3D geometric shapes placeholder */}
              <div className="relative w-72 h-56 hidden lg:block">
                <div className="absolute top-0 right-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1E6FD9]/30 to-cyan-400/10 rotate-[15deg] blur-[1px]" />
                <div className="absolute top-4 left-0 w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-400/25 to-teal-200/10 blur-[1px]" />
                <div className="absolute bottom-0 right-8 w-24 h-24 rounded-xl bg-gradient-to-br from-orange-300/25 to-amber-200/10 -rotate-12 blur-[1px]" />
                <div className="absolute bottom-8 left-8 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400/25 to-violet-200/15 rotate-6" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-pink-300/20 to-rose-200/10 blur-[2px]" />
              </div>

              <ClutchBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Industries Grid – 3 columns ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
            Industries We <span className="text-[#1E6FD9]">Serve</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mb-14">
            We combine deep domain expertise with cutting-edge technology to
            deliver tailored solutions across diverse sectors.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#1E6FD9] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {industry.description}
                </p>
                <div className="flex items-center gap-1 text-[#1E6FD9] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg
                    className="w-4 h-4"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Footer ─── */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Pull the <span className="text-[#1E6FD9]">Trigger!</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Don&apos;t see your industry? We work across many sectors. Get in
            touch to discuss how we can create a custom solution for your
            specific needs.
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
