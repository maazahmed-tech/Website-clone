import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Our Process | DeepLearnHQ",
  description:
    "Discover the proven development process DeepLearnHQ follows to deliver world-class digital products — from discovery and strategy through design, development, testing, and launch.",
};

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We prioritize intellectual property protection, commencing every project with an NDA to safeguard crucial client information. In-depth discussions refine the scope, timelines, and resource allocation to align with project requirements and objectives.",
  },
  {
    number: "02",
    title: "Planning & Risk Assessment",
    description:
      "We identify the optimal development approach, evaluate risks, and prepare a detailed Level of Effort (LOE) document. This phase ensures that every potential challenge is anticipated and addressed before development begins.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Our seasoned UI/UX architects craft visually captivating and user-centric designs that seamlessly integrate with your brand identity. We validate designs through usability testing and iterative feedback loops.",
  },
  {
    number: "04",
    title: "Sprint-Based Development",
    description:
      "The project is methodically broken down into sprints, enabling continuous feedback, rapid iteration, and efficient execution. Our agile methodology permits the team to work in sprints, encouraging nimbleness throughout the development cycle.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "Our dedicated quality assurance team conducts comprehensive testing to ensure high performance, reliability, and a flawless user experience. Both manual and automated testing approaches are applied across all user touchpoints.",
  },
  {
    number: "06",
    title: "Deployment & Maintenance",
    description:
      "After deployment, DeepLearnHQ provides comprehensive maintenance and responsive support to guarantee lasting project success. We handle everything from app store submissions and server provisioning to ongoing monitoring and updates.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section - Light background */}
      <section className="bg-[#fdf8f6] pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/about"
              className="hover:text-[#1E6FD9] transition-colors"
            >
              About
            </Link>
            <span>/</span>
            <span className="text-gray-900">Process</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Our Process
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              At DeepLearnHQ, we deliver successful products by doing three
              things: being accountable for our projects, making our methods
              transparent, and building strong relationships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* "We start here" heading + Numbered process steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-16">
            We start here
          </h2>

          <div className="space-y-20">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step number + title */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-[#1E6FD9]/20 leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="pl-0 md:pl-20">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Divider (except last) */}
                {step.number !== "06" && (
                  <div className="mt-16 border-b border-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's bring your vision to life"
        description="Let us walk you through our process and show you how we can bring your vision to life."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "View Our Work", href: "/work" }}
      />
    </>
  );
}
