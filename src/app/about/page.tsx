import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About DeepLearnHQ | Full-Cycle Product Development Company",
  description:
    "Learn about DeepLearnHQ, a full-cycle product development company with 500+ projects delivered, 350+ team members, and offices across the globe.",
};

const stats = [
  { number: "500+", label: "Clients" },
  { number: "350+", label: "Experts" },
  { number: "17+", label: "Years" },
  { number: "5", label: "Offices" },
];

export default function AboutPage() {
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
            <span className="text-gray-900">About</span>
          </div>

          <div className="flex items-start justify-between gap-12">
            {/* Left: Title and subtitle */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Brilliant Tech Minds, Together!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We are a team of visionary leaders and problem-solvers who
                utilize agile processes to build solutions of lasting value.
                Since 2008, DeepLearnHQ has been setting new quality benchmarks
                every year.
              </p>
            </div>

            {/* Right: Clutch badge */}
            <div className="hidden lg:block flex-shrink-0">
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Team / Office Photo */}
      <section className="w-full bg-[#fdf8f6] pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="w-full h-[320px] md:h-[480px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
            <p className="text-gray-500 text-lg font-medium">
              Team / Office Photo
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              DeepLearnHQ is a full-cycle software and mobile app development
              company with a world-class team of talented data scientists,
              developers, designers, engineers, and creative artists. We are
              motivated to build elegant and functional digital products that
              solve complex problems for businesses across the globe.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since our founding, we have empowered businesses to thrive in
              the digital era through innovative mobile apps, custom software
              solutions, and cutting-edge technologies including AI, machine
              learning, blockchain, and spatial computing.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a preferred partner for Fortune 500 companies, SMEs, and
              enterprises alike, helping them innovate, transform, and scale
              through technology-driven solutions. Our commitment to quality
              and transparency has earned us the trust of clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#1E6FD9] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Leadership
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            At DeepLearnHQ, leadership is about shaping ideas into real
            solutions, inspiring teams, and creating lasting impact through
            technology.
          </p>

          {/* Founder highlight */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#1E6FD9]/20 to-gray-200 flex-shrink-0 flex items-center justify-center">
              <svg
                className="w-20 h-20 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                Salman Lakhani
              </h3>
              <p className="text-[#1E6FD9] font-semibold mb-4">
                Founder &amp; CEO
              </p>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                A technology entrepreneur with a vision to bridge the gap
                between ideas and execution. Under his leadership, DeepLearnHQ
                has grown from a small development studio into a global company
                with over 350 specialists serving clients in more than 30
                countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Our Culture
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            We are driven by a passion for creativity, constantly seeking
            fresh ideas. Imagination and the thrill of bringing new-age ideas
            to reality set our team apart. It is a culture of
            inquisitiveness, experimentation, and the courage to breach
            frontiers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creativity & Innovation",
                description:
                  "Our creative mindset helps us conceive innovative products that change the dynamics of industries. Creativity is both a skillset and an outlook on life for us.",
              },
              {
                title: "Trust & Integrity",
                description:
                  "We put clients at the center to build trust and innovative software that exceeds expectations. Our teams embody integrity at all levels of the organization.",
              },
              {
                title: "Agile Mindset",
                description:
                  "For us, Agile is not just a process, it is a mindset. Good software begins with excellent communication and simple, clean, efficient documentation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We put clients at the center of everything we do, building trust
              and delivering innovative software that exceeds expectations.
              Our teams embody integrity at all levels, serving as role models
              and ambassadors of our valued principles.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to empower businesses worldwide with technology
              solutions that drive growth, create competitive advantages, and
              transform the way they operate in an ever-evolving digital
              landscape.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's bring your vision to life"
        description="Partner with DeepLearnHQ to turn your ideas into reality. Our team of experts is ready to help you build something extraordinary."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: "View Our Work", href: "/work" }}
      />
    </>
  );
}
