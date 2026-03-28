import type { Metadata } from "next";
import Link from "next/link";

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
      {/* Hero Section - Light background matching deeplearnhq.com */}
      <section className="bg-[#fdf8f6] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="text-gray-500 hover:text-[#0B0C0D] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#0B0C0D] font-medium">Industries</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B0C0D] mb-6 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed md:text-xl">
              We offer a wide range of software development services across diverse
              industries, combining deep domain expertise with cutting-edge technology
              to deliver tailored solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid - 3 columns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* CTA */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We work across many sectors. Get in touch to discuss how we can
            create a custom solution for your specific industry needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1E6FD9] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#1859B3] transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
