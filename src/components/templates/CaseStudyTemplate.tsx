import Link from 'next/link';
import type { CaseStudyPageData } from '@/data/types';
import PageHero from '@/components/shared/PageHero';
import TechStack from '@/components/shared/TechStack';
import CTASection from '@/components/shared/CTASection';

interface CaseStudyTemplateProps {
  data: CaseStudyPageData;
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <>
      {/* Hero */}
      <PageHero
        title={data.title}
        description={data.overview}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Work', href: '/work' },
          { label: data.title },
        ]}
      >
        <span className="inline-block bg-[#1E6FD9]/10 text-[#1E6FD9] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          {data.category}
        </span>
      </PageHero>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#1E6FD9] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Project Overview
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <p className="text-gray-600 leading-relaxed text-lg">
                {data.overview}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Client
              </h3>
              <p className="text-[#0B0C0D] font-bold text-lg">{data.client}</p>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-5 mb-3">
                Industry
              </h3>
              <p className="text-[#0B0C0D] font-medium">{data.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-red-500 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              The Challenge
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {data.challenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#1E6FD9] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Our Solution
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {data.solution}
          </p>
        </div>
      </section>

      {/* Results */}
      {data.results.length > 0 && (
        <section className="py-20 bg-[#0B0C0D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Results & Impact
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Measurable outcomes that demonstrate the value of our solution.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#1E6FD9]/50 transition-colors duration-300"
                >
                  <p className="text-4xl md:text-5xl font-bold text-[#1E6FD9] mb-2">
                    {result.value}
                  </p>
                  <p className="text-white font-semibold text-lg mb-2">
                    {result.metric}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Used */}
      {data.technologies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
                Technologies Used
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The technology stack that powered this project.
              </p>
            </div>
            <TechStack technologies={data.technologies} />
          </div>
        </section>
      )}

      {/* Testimonial */}
      {data.testimonial && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] rounded-2xl p-10 md:p-14 text-center">
              <svg
                className="w-12 h-12 text-[#1E6FD9] mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{data.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-white font-bold text-lg">
                  {data.testimonial.name}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {data.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Have a Similar Project in Mind?"
        description="Let's discuss how we can deliver exceptional results for your business."
        primaryCTA={{ label: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View More Case Studies', href: '/work' }}
      />
    </>
  );
}
