import Link from 'next/link';
import type { ServicePageData } from '@/data/types';
import PageHero from '@/components/shared/PageHero';
import ClutchBadge from '@/components/shared/ClutchBadge';
import FeatureGrid from '@/components/shared/FeatureGrid';
import TechStack from '@/components/shared/TechStack';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/shared/CTASection';

interface ServiceTemplateProps {
  data: ServicePageData;
}

export default function ServiceTemplate({ data }: ServiceTemplateProps) {
  return (
    <>
      {/* Hero */}
      <PageHero
        title={data.heroHeading}
        description={data.heroDescription}
        bgColor="#faf9f8"
        textColor="#0B0C0D"
      >
        <ClutchBadge />
      </PageHero>

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
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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
        <section className="py-20 bg-white">
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
