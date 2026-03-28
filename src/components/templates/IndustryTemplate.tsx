import Link from 'next/link';
import type { IndustryPageData } from '@/data/types';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ClutchBadge from '@/components/shared/ClutchBadge';
import TechStack from '@/components/shared/TechStack';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/shared/CTASection';

interface IndustryTemplateProps {
  data: IndustryPageData;
}

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
  /* Sub-nav anchors derived from page sections */
  const subNavItems = [
    { label: `${data.title} Services`, anchor: '#services' },
    ...(data.caseStudies.length > 0
      ? [{ label: 'Case Studies', anchor: '#case-studies' }]
      : []),
    ...(data.technologies.length > 0
      ? [{ label: 'Technologies', anchor: '#technologies' }]
      : []),
    ...(data.faqs.length > 0
      ? [{ label: 'FAQ', anchor: '#faq' }]
      : []),
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

      {/* Hero - Light background matching deeplearnhq.com industry pages */}
      <section className="relative bg-[#fdf8f6] px-4 pb-16 pt-28 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Industries', href: '/industries' },
                { label: data.title },
              ]}
            />
          </div>
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[#0B0C0D] md:text-5xl lg:text-6xl">
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
            <div className="hidden lg:block">
              <ClutchBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-6">
                Industry Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.overview}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#1E6FD9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1E6FD9] text-3xl font-bold">
                    {data.title[0]}
                  </span>
                </div>
                <p className="text-white font-semibold text-lg">{data.title}</p>
                <p className="text-gray-400 text-sm mt-1">Technology Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Our {data.title} Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer specialized technology services tailored to the unique
              needs of the {data.title.toLowerCase()} industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {data.services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1E6FD9] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B0C0D] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {data.caseStudies.length > 0 && (
        <section id="case-studies" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
                Case Studies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how we have helped {data.title.toLowerCase()} companies achieve their goals.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
                >
                  {study.image && (
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#1E6FD9] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.description}
                    </p>
                    {study.slug && (
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-1 mt-4 text-[#1E6FD9] text-sm font-semibold hover:gap-2 transition-all"
                      >
                        View Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {data.technologies.length > 0 && (
        <section id="technologies" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
                Technologies We Use
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Industry-leading technologies powering our {data.title.toLowerCase()} solutions.
              </p>
            </div>
            <TechStack technologies={data.technologies} />
          </div>
        </section>
      )}

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
        title={`Ready to Transform Your ${data.title} Business?`}
        description={`Let's discuss how our technology solutions can help your ${data.title.toLowerCase()} business grow and innovate.`}
        primaryCTA={{ label: 'Get a Free Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
      />
    </>
  );
}
