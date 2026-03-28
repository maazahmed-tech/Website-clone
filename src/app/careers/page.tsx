import type { Metadata } from "next";
import Link from "next/link";

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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "We ensure all healthcare needs are covered, including comprehensive medical insurance and maternity coverage.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Mentorship & Training",
    description:
      "We have mentors to guide and support you along with training programs to polish your skills and accelerate your growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Retirement Planning",
    description:
      "We plan your retirement because we care for our people. A company-sponsored provident fund enables you to maximize benefits.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Career Growth",
    description:
      "Pay rises, promotions, and top opportunities for professional development. We invest in your career trajectory.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Generous Leave Policy",
    description:
      "Sick, casual, annual, parental, marriage, and hajj leave. We believe in supporting you through every stage of life.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const departments = [
  {
    name: 'Web, Mobile & SaaS Development',
    roles: [
      'Senior React Native Developer',
      'Full Stack Developer (Node.js + React)',
      'iOS Developer (Swift)',
      'Android Developer (Kotlin)',
    ],
  },
  {
    name: 'AI & Emerging Technologies',
    roles: [
      'AI/ML Engineer',
      'Blockchain Developer (Solidity)',
      'VR/AR Developer',
      'Data Scientist',
    ],
  },
  {
    name: 'Game Development',
    roles: [
      'Unity Game Developer',
      'Game Designer',
      '3D Artist & Animator',
      'Unreal Engine Developer',
    ],
  },
  {
    name: 'Design & Creative',
    roles: [
      'Senior UI/UX Designer',
      'Graphic Designer',
      'Motion Designer',
    ],
  },
  {
    name: 'DevOps & QA',
    roles: [
      'DevOps Engineer',
      'Cloud Specialist (AWS/Azure)',
      'QA Automation Engineer',
      'Manual QA Analyst',
    ],
  },
];

const cultureHighlights = [
  {
    title: "Innovation First",
    description:
      "We encourage experimentation and out-of-the-box thinking. Every team member has the freedom to propose and prototype new ideas.",
  },
  {
    title: "Value-Based Leadership",
    description:
      "We promote a value-based leadership style that guides behavior and is the foundation of our company culture.",
  },
  {
    title: "Empowered Individuals",
    description:
      "Every individual is empowered to innovate, contribute, and make decisions that matter. We believe in ownership at every level.",
  },
  {
    title: "Diversity & Global Perspective",
    description:
      "With teams across five continents, we celebrate diverse perspectives and foster an inclusive environment where everyone thrives.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Careers</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Join Our <span className="text-[#1E6FD9]">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              DeepLearnHQ is a full-lifecycle software development company where
              every individual is empowered to innovate, contribute, and make
              decisions that matter. Build the future of technology with us.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Amazing Perks & Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DeepLearnHQ helps employees build their ideal work-life balance
              with amazing perks that support every aspect of your life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#1E6FD9]/10 rounded-xl flex items-center justify-center text-[#1E6FD9] mb-4">
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

      {/* Open Positions by Department */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current openings across departments. We hire web, mobile,
              SaaS, AI, and emerging tech developers, game designers, artists,
              animators, DevOps engineers, and more.
            </p>
          </div>
          <div className="space-y-10">
            {departments.map((dept) => (
              <div key={dept.name}>
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-4 border-b border-gray-200 pb-3">
                  {dept.name}
                </h3>
                <div className="space-y-3">
                  {dept.roles.map((role) => (
                    <div
                      key={role}
                      className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                      <div>
                        <h4 className="text-lg font-bold text-[#0B0C0D]">
                          {role}
                        </h4>
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
                            {dept.name}
                          </span>
                          <span className="bg-[#1E6FD9]/10 text-[#1E6FD9] text-xs font-semibold px-3 py-1 rounded-full">
                            Full-time
                          </span>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="bg-[#0B0C0D] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1E6FD9] hover:text-[#0B0C0D] transition-colors whitespace-nowrap"
                      >
                        Apply Now
                      </Link>
                    </div>
                  ))}
                </div>
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
              At DeepLearnHQ, we foster a culture of inquisitiveness,
              experimentation, and the courage to breach frontiers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {cultureHighlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-4"
              >
                <div className="w-3 h-3 bg-[#1E6FD9] rounded-full mt-2 flex-shrink-0" />
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
            className="inline-block bg-[#1E6FD9] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#1859B3] transition-colors"
          >
            Send Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
