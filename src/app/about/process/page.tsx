import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Our Development Process | DeepLearnHQ',
  description:
    'Discover the proven development process DeepLearnHQ follows to deliver world-class digital products — from discovery and strategy through design, development, testing, and launch.',
};

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'We prioritize intellectual property protection, commencing every project with an NDA to safeguard crucial client information. In-depth discussions refine the scope, timelines, and resource allocation to align with project requirements and objectives.',
    deliverables: ['NDA & IP Protection', 'Scope Definition', 'Timeline Planning', 'Resource Allocation'],
  },
  {
    number: '02',
    title: 'Planning & Risk Assessment',
    description:
      'We identify the optimal development approach, evaluate risks, and prepare a detailed Level of Effort (LOE) document. This phase ensures that every potential challenge is anticipated and addressed before development begins.',
    deliverables: ['LOE Document', 'Risk Assessment Report', 'Development Approach', 'Project Roadmap'],
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'Our seasoned UI/UX architects craft visually captivating and user-centric designs that seamlessly integrate with your brand identity. We validate designs through usability testing and iterative feedback loops.',
    deliverables: ['Wireframes & Mockups', 'Interactive Prototypes', 'Design System', 'Usability Testing Results'],
  },
  {
    number: '04',
    title: 'Sprint-Based Development',
    description:
      'The project is methodically broken down into sprints, enabling continuous feedback, rapid iteration, and efficient execution. Our agile methodology permits the team to work in sprints, encouraging nimbleness throughout the development cycle.',
    deliverables: ['Sprint Demos', 'Working Builds', 'Code Repository', 'Progress Reports'],
  },
  {
    number: '05',
    title: 'Quality Assurance',
    description:
      'Our dedicated quality assurance team conducts comprehensive testing to ensure high performance, reliability, and a flawless user experience. Both manual and automated testing approaches are applied across all user touchpoints.',
    deliverables: ['Test Plans & Cases', 'Automated Test Suites', 'Performance Benchmarks', 'Security Audit Report'],
  },
  {
    number: '06',
    title: 'Deployment & Maintenance',
    description:
      'After deployment, DeepLearnHQ provides comprehensive maintenance and responsive support to guarantee lasting project success. We handle everything from app store submissions and server provisioning to ongoing monitoring and updates.',
    deliverables: ['Deployment Runbook', 'App Store Listings', 'Post-Launch Monitoring', 'Ongoing Maintenance & Support'],
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
                      <span className="text-[#1E6FD9] font-bold text-lg">{step.number}</span>
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
                            className="bg-[#1E6FD9]/10 text-[#0B0C0D] text-sm px-3 py-1.5 rounded-full font-medium"
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
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Why It Works
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Built on Agile Principles
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Agile project management paves the way for swift and feature-driven
              software development. Our agile methodology permits the team to work
              in sprints, encouraging nimbleness throughout the project cycle.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'IP Protection First', description: 'Every project starts with an NDA. We prioritize safeguarding your crucial information from day one.' },
              { title: 'Sprint-Based Delivery', description: 'Continuous feedback, rapid iteration, and efficient execution through methodical sprint breakdowns.' },
              { title: 'Comprehensive QA', description: 'Dedicated QA teams conduct comprehensive testing to ensure high performance and flawless user experience.' },
              { title: 'Post-Launch Support', description: 'Comprehensive maintenance and responsive support to guarantee lasting project success after deployment.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all"
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
