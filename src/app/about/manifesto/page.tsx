import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Our Manifesto | DeepLearnHQ",
  description:
    "The DeepLearnHQ Manifesto — the principles, beliefs, and commitments that guide how we build technology, serve clients, and grow as a company.",
};

const principles = [
  {
    number: "01",
    title: "Continuous Improvement (Kaizen)",
    description:
      "We ensure our software development approach never stagnates. Our entire workforce keeps looking for methods that allow betterment of our work and practices, in both the smallest and largest details. Any fresh idea that adheres to our principles will be tested on small-level preliminary projects and thoroughly assessed, and if successful, adopted throughout the organization.",
  },
  {
    number: "02",
    title: "Review by Management",
    description:
      "Project management is conducted in a manner that paves the way for routine visibility into project state, helping select the best candidates and review overall development. General project documentation is considered the most viable practice for ensuring transparency and accountability at every stage.",
  },
  {
    number: "03",
    title: "Review by Peer",
    description:
      "Regular code and design peer reviews are a must, guaranteeing that every task stays at the highest level and ensuring a feasible way to pass on ideas and techniques. This process drives engagement and creates a culture of growth and learning across the entire team.",
  },
  {
    number: "04",
    title: "Review by Automation",
    description:
      "Every code should be made so it can be tested. A standard testing structure eases the code creation process, ensures robustness, and enables design upgrades while avoiding regression errors. Automated testing is foundational to our engineering culture.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "Personnel outside the development team comprehensively exercise the project before the client reviews the created code. Dedicated QA ensures that our standards are met consistently and that every deliverable reflects our commitment to excellence.",
  },
  {
    number: "06",
    title: "Flexibility & Adaptability",
    description:
      "Beyond essential practices like coding style and source management, the methodological approach should be unique to the client and the project. One size does not fit all. We adapt our processes to serve each engagement optimally.",
  },
  {
    number: "07",
    title: "Talent & Quality",
    description:
      "We take great care in our recruitment process, reserving offers for talented programmers who showcase exceptional performance. Our development processes are built on the belief that our programmers are of the highest quality, and we trust our personnel to do the best possible work for every project and client.",
  },
  {
    number: "08",
    title: "People & Passion",
    description:
      "Our manifesto makes for a team of smart, energetic, and motivated people who know that working here is never just a job. Their passion and willingness translate into great customer relationships and cutting-edge solutions.",
  },
];

export default function ManifestoPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Manifesto"
        description="For us, success means a satisfied and happy client. We always strive for long-term relationships with our clients based on trust and value."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Manifesto" },
        ]}
      />

      {/* Team Collaboration Photo Placeholder */}
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
            <p className="text-gray-500 text-lg font-medium">
              Team Collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Our Principles
            </h2>
          </div>

          <div className="space-y-16">
            {principles.map((p) => (
              <div key={p.number} className="flex gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-6xl font-bold text-[#1E6FD9]/15 leading-none">
                    {p.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0B0C0D] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection
        title="Partner With a Team That Cares"
        description="Experience what it means to work with a company that puts principles before profit."
        primaryCTA={{ label: "Get in Touch", href: "/contact" }}
        secondaryCTA={{ label: "View Our Process", href: "/about/process" }}
      />
    </>
  );
}
