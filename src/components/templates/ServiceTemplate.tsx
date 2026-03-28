import Link from 'next/link';
import type { ServicePageData } from '@/data/types';
import ClutchBadge from '@/components/shared/ClutchBadge';
import FeatureGrid from '@/components/shared/FeatureGrid';
import TechStack from '@/components/shared/TechStack';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/shared/CTASection';

interface ServiceTemplateProps {
  data: ServicePageData;
}

export default function ServiceTemplate({ data }: ServiceTemplateProps) {
  /* Sub-nav anchors derived from page sections */
  const subNavItems = [
    { label: `${data.title} Services`, anchor: '#services' },
    { label: 'Process', anchor: '#process' },
    { label: 'Technologies', anchor: '#technologies' },
    { label: 'FAQ', anchor: '#faq' },
  ];

  return (
    <>
      {/* Sticky sub-navigation bar */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-8 py-3 text-sm font-medium">
            {subNavItems.map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className="text-gray-700 hover:text-[#0B0C0D] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero - Light background matching deeplearnhq.com service pages */}
      <section className="relative bg-[#fdf8f6] px-4 pb-16 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Clutch badge */}
          <div className="mb-6">
            <ClutchBadge />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] text-[#0B0C0D] md:text-5xl lg:text-[3.5rem]">
                {data.heroHeading}
              </h1>
              {data.heroDescription && (
                <p className="text-lg leading-relaxed text-gray-500 md:text-xl mb-8">
                  {data.heroDescription}
                </p>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#0B0C0D] text-white font-semibold rounded-full hover:bg-[#1a1b1c] transition-colors text-sm"
              >
                Talk to the Team
              </Link>
            </div>
            {/* Hero visual - decorative app mockup placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#2ED06E] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{data.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-6">
                {data.overviewTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.overviewDescription}
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#0B0C0D] mb-6">
                Key Highlights
              </h3>
              <ul className="space-y-4">
                {data.overviewPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#2ED06E] rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs.
            </p>
          </div>
          <FeatureGrid features={data.features} />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology to deliver exceptional results.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {data.process.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6 md:gap-8">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-[#0B0C0D] rounded-2xl flex items-center justify-center">
                    <span className="text-[#2ED06E] font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="text-xl font-bold text-[#0B0C0D] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies to build robust solutions.
            </p>
          </div>
          <TechStack technologies={data.technologies} />
        </div>
      </section>

      {/* FAQs */}
      {data.faqs.length > 0 && (
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={data.faqs} />
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how we can help bring your vision to life with our expertise."
        primaryCTA={{ label: 'Get a Free Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Our Work', href: '/work' }}
      />
    </>
  );
}
