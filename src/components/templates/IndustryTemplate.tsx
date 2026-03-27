import Link from 'next/link';
import type { IndustryPageData } from '@/data/types';
import PageHero from '@/components/shared/PageHero';
import TechStack from '@/components/shared/TechStack';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/shared/CTASection';

interface IndustryTemplateProps {
  data: IndustryPageData;
}

export default function IndustryTemplate({ data }: IndustryTemplateProps) {
  return (
    <>
      {/* Hero */}
      <PageHero
        title={data.heroHeading}
        description={data.heroDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: data.title },
        ]}
      />

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
                <div className="w-20 h-20 bg-[#2ED06E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2ED06E] text-3xl font-bold">
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
      <section className="py-20 bg-gray-50">
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
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2ED06E] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
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
        <section className="py-20 bg-white">
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
                  className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
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
                    <h3 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#2ED06E] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.description}
                    </p>
                    {study.slug && (
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-1 mt-4 text-[#2ED06E] text-sm font-semibold hover:gap-2 transition-all"
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
        <section className="py-20 bg-gray-50">
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
        title={`Ready to Transform Your ${data.title} Business?`}
        description={`Let's discuss how our technology solutions can help your ${data.title.toLowerCase()} business grow and innovate.`}
        primaryCTA={{ label: 'Get a Free Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Explore Our Services', href: '/services' }}
      />
    </>
  );
}
