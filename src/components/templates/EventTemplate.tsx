import Link from 'next/link';
import type { EventData } from '@/data/types';
import PageHero from '@/components/shared/PageHero';
import RichContent from '@/components/shared/RichContent';
import CTASection from '@/components/shared/CTASection';

interface EventTemplateProps {
  data: EventData;
}

export default function EventTemplate({ data }: EventTemplateProps) {
  const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Hero */}
      <PageHero
        title={data.title}
        description={data.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: data.title },
        ]}
      />

      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Date & Location Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#2ED06E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2ED06E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </h3>
              </div>
              <p className="text-[#0B0C0D] font-bold text-lg">{formattedDate}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#2ED06E]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2ED06E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </h3>
              </div>
              <p className="text-[#0B0C0D] font-bold text-lg">{data.location}</p>
            </div>
          </div>

          {/* Event Image */}
          {data.image && (
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-12">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Event Content */}
          <div className="prose prose-lg max-w-none">
            <RichContent content={data.content} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Interested in This Event?"
        description="Get in touch to learn more about this and other upcoming events."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'View All Events', href: '/events' }}
      />
    </>
  );
}
