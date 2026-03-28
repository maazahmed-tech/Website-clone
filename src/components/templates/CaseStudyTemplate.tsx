import Link from 'next/link';
import type { CaseStudyPageData } from '@/data/types';

interface CaseStudyTemplateProps {
  data: CaseStudyPageData;
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <>
      {/* Hero — light warm background */}
      <section className="bg-[#fdf8f6] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Project logo placeholder */}
          {data.heroImage ? (
            <img
              src={data.heroImage}
              alt={`${data.client} logo`}
              className="h-16 md:h-20 mx-auto mb-8 object-contain"
            />
          ) : (
            <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-2xl border border-gray-200 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#1E6FD9]">
                {data.client?.charAt(0) || 'P'}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0C0D] leading-tight mb-6">
            {data.title}
          </h1>

          {/* Category tag */}
          <span className="inline-block bg-[#1E6FD9] text-white text-sm font-semibold px-5 py-2 rounded-full">
            {data.category}
          </span>
        </div>
      </section>

      {/* Full-width app screenshot / image placeholder */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 pb-16">
          {data.heroImage ? (
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={data.heroImage}
                alt={`${data.title} screenshot`}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm">App Screenshot</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Details — Overview, Challenge, Solution */}
      {(data.overview || data.challenge || data.solution) && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Overview */}
            {data.overview && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D] mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {data.overview}
                </p>
              </div>
            )}

            {/* Challenge */}
            {data.challenge && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D] mb-4">
                  The Challenge
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {data.challenge}
                </p>
              </div>
            )}

            {/* Solution */}
            {data.solution && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D] mb-4">
                  Our Solution
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {data.solution}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Results Metrics Cards */}
      {data.results.length > 0 && (
        <section className="py-20 bg-[#f7f8fa]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D] text-center mb-12">
              Results
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm"
                >
                  <p className="text-4xl md:text-5xl font-bold text-[#1E6FD9] mb-3">
                    {result.value}
                  </p>
                  <p className="text-[#0B0C0D] font-semibold text-lg mb-1">
                    {result.metric}
                  </p>
                  {result.description && (
                    <p className="text-gray-500 text-sm">
                      {result.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Used */}
      {data.technologies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D] text-center mb-10">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {data.testimonial && (
        <section className="py-20 bg-[#f7f8fa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <svg
              className="w-10 h-10 text-[#1E6FD9]/30 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-[#0B0C0D] leading-relaxed mb-8 font-medium italic">
              &ldquo;{data.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="text-[#0B0C0D] font-bold text-lg">
                {data.testimonial.name}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {data.testimonial.role}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-24 bg-[#0B0C0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pull the Trigger!
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s bring your vision to life
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#1E6FD9] hover:bg-[#1a5fb8] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300"
          >
            Get Started
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
