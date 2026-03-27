import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at Cubix | Join Our Team",
  description:
    "Join the Cubix team. Explore exciting career opportunities in software development, mobile app development, game development, AI, and more.",
};

const benefits = [
  {
    title: "Flexible Work",
    description:
      "Hybrid and remote work options with flexible hours to fit your lifestyle.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, and wellness programs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Learning & Growth",
    description:
      "Annual learning budgets, conference attendance, and internal training programs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Competitive Pay",
    description:
      "Market-leading salaries, performance bonuses, and equity options for key roles.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Team Events",
    description:
      "Regular team outings, hackathons, game nights, and annual retreats.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Paid Time Off",
    description:
      "Generous vacation policy, paid holidays, and personal days to recharge.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const openings = [
  {
    title: "Senior React Native Developer",
    department: "Mobile Development",
    location: "West Palm Beach, FL / Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "Artificial Intelligence",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer (Node.js + React)",
    department: "Web Development",
    location: "Manchester, UK / Remote",
    type: "Full-time",
  },
  {
    title: "Unity Game Developer",
    department: "Game Development",
    location: "Karachi, Pakistan",
    type: "Full-time",
  },
  {
    title: "Blockchain Developer (Solidity)",
    department: "Blockchain",
    location: "Dubai, UAE / Remote",
    type: "Full-time",
  },
  {
    title: "Senior UI/UX Designer",
    department: "Product Design",
    location: "West Palm Beach, FL / Remote",
    type: "Full-time",
  },
];

const cultureHighlights = [
  {
    title: "Innovation First",
    description:
      "We encourage experimentation and out-of-the-box thinking. Every team member has the freedom to propose and prototype new ideas.",
  },
  {
    title: "Collaborative Spirit",
    description:
      "We believe great products come from great teamwork. Our cross-functional teams work closely to deliver exceptional results.",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly, and so do we. We invest in our team with ongoing training, certifications, and knowledge sharing.",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "With teams across four countries, we celebrate diverse perspectives and foster an inclusive environment where everyone thrives.",
  },
];

export default function CareersPage() {
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
            <span className="text-gray-900">Careers</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Join Our <span className="text-[#2ED06E]">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Build the future of technology with us. We&apos;re looking for
              talented individuals who are passionate about creating world-class
              digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Why Work at Cubix?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. Join a team where your growth,
              well-being, and creativity are valued.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#2ED06E]/10 rounded-xl flex items-center justify-center text-[#2ED06E] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current openings and find the role that matches your
              skills and aspirations.
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2ED06E] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0B0C0D]">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
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
                      {job.department}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
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
                      {job.location}
                    </span>
                    <span className="bg-[#2ED06E]/10 text-[#2ED06E] text-xs font-semibold px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#0B0C0D] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#2ED06E] hover:text-[#0B0C0D] transition-colors whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Our Culture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Cubix, we foster a culture of innovation, collaboration, and
              continuous growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {cultureHighlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4"
              >
                <div className="w-3 h-3 bg-[#2ED06E] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-[#0B0C0D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We&apos;re always looking for talented people. Send us your resume
            and we&apos;ll reach out when a matching position opens up.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2ED06E] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#25b35d] transition-colors"
          >
            Send Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
