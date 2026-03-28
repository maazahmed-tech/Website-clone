import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Careers at DeepLearnHQ | Join Our Team",
  description:
    "Join the DeepLearnHQ team. Explore exciting career opportunities in software development, mobile app development, game development, AI, and more.",
};

const benefits = [
  {
    title: "Company Car",
    description:
      "A company-maintained car for eligible team members to support your daily commute and work travel.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-6" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Comprehensive medical insurance and maternity coverage, ensuring all healthcare needs are fully covered.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Mentorship & Training",
    description:
      "Dedicated mentors and training programs to polish your skills and accelerate your professional growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Retirement Planning",
    description:
      "Company-sponsored provident fund to help you plan for retirement and maximize long-term benefits.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Career Growth",
    description:
      "Pay rises, promotions, and top opportunities for professional development. We invest in your career trajectory.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Generous Leave Policy",
    description:
      "Sick, casual, annual, parental, marriage, and hajj leave. Supporting you through every stage of life.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const openPositions = [
  {
    title: "Senior React Native Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer (Node.js + React)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Emerging Tech",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Unity Game Developer",
    department: "Game Development",
    location: "On-site",
    type: "Full-time",
  },
  {
    title: "Senior UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Blockchain Developer (Solidity)",
    department: "AI & Emerging Tech",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    location: "Remote",
    type: "Full-time",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Apply Online",
    description:
      "Browse our open positions and submit your application with your resume and portfolio.",
  },
  {
    step: "02",
    title: "Initial Screening",
    description:
      "Our talent team reviews your application and schedules a brief introductory call.",
  },
  {
    step: "03",
    title: "Technical Assessment",
    description:
      "Complete a role-specific assessment or coding challenge to showcase your skills.",
  },
  {
    step: "04",
    title: "Team Interview",
    description:
      "Meet the team you will be working with for a culture-fit and technical deep dive.",
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    description:
      "Receive your offer letter and begin a structured onboarding experience to set you up for success.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Be part of something great"
        description="Join a team of visionaries, innovators, and creators who are building world-class digital products. At DeepLearnHQ, every individual is empowered to push boundaries and make a real impact."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      {/* Team Photo Placeholder */}
      <section className="w-full">
        <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-gray-500 text-lg font-medium">Our Team</p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Why work with us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              DeepLearnHQ helps employees build their ideal work-life balance
              with amazing perks that support every aspect of your life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl bg-[#fdf8f6] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#1E6FD9]/10 rounded-xl flex items-center justify-center text-[#1E6FD9] mb-5 group-hover:bg-[#1E6FD9] group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our current openings and find the role that matches your
              skills and ambitions.
            </p>
          </div>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <div
                key={position.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0B0C0D] mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-gray-500 text-sm flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {position.department}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </span>
                    <span className="bg-[#1E6FD9]/10 text-[#1E6FD9] text-xs font-semibold px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#1E6FD9] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1859B3] transition-colors whitespace-nowrap text-center"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Application Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our hiring process is designed to be transparent, efficient, and
              respectful of your time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {hiringSteps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < hiringSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gray-200 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1E6FD9] rounded-full flex items-center justify-center text-white text-xl font-bold mb-5">
                    {item.step}
                  </div>
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

      {/* CTA Footer */}
      <CTASection
        title="Don't See the Right Role?"
        description="We're always looking for talented people. Send us your resume and we'll reach out when a matching position opens up."
        primaryCTA={{ label: "Send Your Resume", href: "/contact" }}
        secondaryCTA={{ label: "View Our Culture", href: "/about" }}
      />
    </>
  );
}
