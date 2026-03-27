import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Our Development Process | Cubix',
  description:
    'Discover the proven development process Cubix follows to deliver world-class digital products — from discovery and strategy through design, development, testing, and launch.',
};

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We begin every engagement by deeply understanding your business objectives, target audience, and competitive landscape. Through stakeholder workshops, user research, and technical feasibility assessments, we define a clear product roadmap that aligns technology decisions with business goals.',
    deliverables: ['Product Vision Document', 'User Personas', 'Competitive Analysis', 'Technical Feasibility Report'],
  },
  {
    number: '02',
    title: 'UX Research & Design',
    description:
      'Our design team transforms insights into intuitive user experiences. We create information architecture, wireframes, and interactive prototypes that are validated through usability testing before a single line of code is written.',
    deliverables: ['Information Architecture', 'Wireframes', 'Interactive Prototype', 'UI Design System'],
  },
  {
    number: '03',
    title: 'Architecture & Planning',
    description:
      'Senior engineers define the system architecture, technology stack, and infrastructure strategy. We plan sprints, establish coding standards, set up CI/CD pipelines, and create a detailed technical specification that guides the development team.',
    deliverables: ['System Architecture Diagram', 'Technology Stack Decision', 'Sprint Plan', 'Technical Specification'],
  },
  {
    number: '04',
    title: 'Agile Development',
    description:
      'Our development teams work in two-week sprints with daily stand-ups, code reviews, and continuous integration. You receive a working build at the end of every sprint, ensuring transparency and the ability to provide feedback throughout the process.',
    deliverables: ['Sprint Demos', 'Working Builds', 'Code Repository', 'Progress Reports'],
  },
  {
    number: '05',
    title: 'Quality Assurance',
    description:
      'QA is not a phase—it runs in parallel with development. Our testing engineers execute functional, regression, performance, and security tests using both automated and manual approaches to ensure your product is rock-solid before launch.',
    deliverables: ['Test Plans & Cases', 'Automated Test Suites', 'Performance Benchmarks', 'Security Audit Report'],
  },
  {
    number: '06',
    title: 'Launch & Deployment',
    description:
      'We handle everything from app store submissions and server provisioning to DNS configuration and CDN setup. A detailed launch checklist ensures nothing is missed, and a dedicated team monitors the rollout in real time.',
    deliverables: ['Deployment Runbook', 'App Store Listings', 'Infrastructure Setup', 'Launch Monitoring'],
  },
  {
    number: '07',
    title: 'Post-Launch Support',
    description:
      'Our relationship does not end at launch. We provide ongoing maintenance, performance monitoring, bug fixes, and feature enhancements. Dedicated support tiers ensure your product continues to evolve and perform at its best.',
    deliverables: ['SLA-Backed Support', 'Performance Monitoring', 'Feature Roadmap Updates', 'Monthly Health Reports'],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="Our Development Process"
        description="A battle-tested methodology that balances speed with quality. Every step is designed to minimize risk, maximize transparency, and deliver products that exceed expectations."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Process' },
        ]}
      />

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-16">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-8">
                  {/* Step number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-[#0B0C0D] flex items-center justify-center">
                      <span className="text-[#2ED06E] font-bold text-lg">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="text-2xl font-bold text-[#0B0C0D] mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Key Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((d) => (
                          <span
                            key={d}
                            className="bg-[#2ED06E]/10 text-[#0B0C0D] text-sm px-3 py-1.5 rounded-full font-medium"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              Why It Works
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Built on Agile Principles
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our process is flexible enough to adapt to your unique needs while structured enough to deliver consistent results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Transparency', description: 'Daily updates, sprint demos, and shared dashboards keep you informed at every step.' },
              { title: 'Flexibility', description: 'Agile sprints let you reprioritize features and pivot based on real user feedback.' },
              { title: 'Quality First', description: 'Continuous testing and code reviews ensure defects are caught early, not after launch.' },
              { title: 'Speed to Market', description: 'Parallel workstreams and automation cut time-to-launch without compromising quality.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2ED06E] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        description="Let us walk you through our process and show you how we can bring your vision to life."
        primaryCTA={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Work', href: '/work' }}
      />
    </>
  );
}
