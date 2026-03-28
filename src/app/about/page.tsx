import type { Metadata } from "next";
import Link from "next/link";
import ClutchBadge from "@/components/shared/ClutchBadge";

export const metadata: Metadata = {
  title: "About DeepLearnHQ | Full-Cycle Product Development Company",
  description:
    "Learn about DeepLearnHQ, a full-cycle product development company with 500+ projects delivered, 350+ team members, and offices across the globe.",
};

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "350+", label: "Team Members" },
  { number: "200+", label: "Happy Clients" },
  { number: "15+", label: "Years of Experience" },
];

const leaders = [
  {
    name: "Salman Lakhani",
    role: "CEO & Founder",
    image: "/team/leader-1.jpg",
  },
  {
    name: "Ahsan Tahir",
    role: "CTO",
    image: "/team/leader-2.jpg",
  },
  {
    name: "Maria Rodriguez",
    role: "VP of Engineering",
    image: "/team/leader-3.jpg",
  },
  {
    name: "James Carter",
    role: "VP of Sales",
    image: "/team/leader-4.jpg",
  },
];

const offices = [
  {
    city: "West Palm Beach",
    country: "United States",
    address: "1645 Palm Beach Lakes Blvd, Suite 1200, West Palm Beach, FL 33401",
    phone: "+1 866-978-2220",
  },
  {
    city: "Manchester",
    country: "United Kingdom",
    address: "Peter House, Oxford Street, Manchester, M1 5AN",
    phone: "+44 161 818 7522",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address:
      "Office 1205, Citadel Tower, Business Bay, Dubai, UAE",
    phone: "+971 4 580 3360",
  },
  {
    city: "Karachi",
    country: "Pakistan",
    address: "Plot 14-C, Main Shahrah-e-Faisal, Karachi 75400",
    phone: "+92 21 111 282 949",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#2ED06E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">About</span>
          </div>
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Brilliant Tech Minds, Together!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We are a team of visionary leaders and problem-solvers utilizing our agile processes to build solutions for lasting value.
              </p>
            </div>
            <div className="hidden lg:block">
              <ClutchBadge rating={4.9} reviews={52} />
            </div>
          </div>
        </div>
      </section>

      {/* Office/Team Photo */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="w-full h-[300px] md:h-[450px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden flex items-center justify-center">
            <p className="text-gray-500 text-lg font-medium">DeepLearnHQ Office / Team Photo</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-6">
                We are a full-cycle product development company
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Since our inception, DeepLearnHQ has been at the forefront of digital
                innovation, helping businesses across the globe turn their ideas
                into reality. We combine cutting-edge technology with creative
                excellence to deliver solutions that drive growth.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                From mobile apps and web platforms to blockchain solutions and
                AI-powered systems, we cover the entire product development
                lifecycle. Our team of seasoned developers, designers, and
                strategists work collaboratively to deliver exceptional results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in building long-term partnerships with our clients,
                understanding their unique challenges, and crafting tailored
                solutions that exceed expectations. Our commitment to quality,
                transparency, and innovation sets us apart in the industry.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#2ED06E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-[#2ED06E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">
                  Building Digital Excellence
                </p>
                <p className="text-gray-400 text-sm mt-2">Since 2008</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              To empower businesses with innovative technology solutions that
              drive growth, enhance efficiency, and create lasting impact in the
              digital world.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl border border-gray-800 hover:border-[#2ED06E]/50 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#2ED06E] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries driving DeepLearnHQ forward with their expertise
              and passion for technology.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="group text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2ED06E]/20 to-[#0B0C0D]/10 flex items-center justify-center overflow-hidden">
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
                <h3 className="text-xl font-bold text-[#0B0C0D] group-hover:text-[#2ED06E] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Our Global Offices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With offices spanning four countries, we provide local expertise
              with a global perspective.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#2ED06E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#2ED06E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-1">
                  {office.city}
                </h3>
                <p className="text-[#2ED06E] text-sm font-medium mb-3">
                  {office.country}
                </p>
                <p className="text-gray-500 text-sm mb-2">{office.address}</p>
                <p className="text-gray-600 text-sm font-medium">
                  {office.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Partner with DeepLearnHQ to bring your digital vision to life. Let&apos;s
            create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#2ED06E] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#25b35d] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/work"
              className="border border-gray-700 text-white px-8 py-4 rounded-lg font-bold hover:border-[#2ED06E] hover:text-[#2ED06E] transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
