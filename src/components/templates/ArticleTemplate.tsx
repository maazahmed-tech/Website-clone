import Link from 'next/link';
import type { PressReleaseData, NewsData } from '@/data/types';
import RichContent from '@/components/shared/RichContent';
import CTASection from '@/components/shared/CTASection';

interface ArticleTemplateProps {
  data: PressReleaseData | NewsData;
  type: 'press-release' | 'news';
}

export default function ArticleTemplate({ data, type }: ArticleTemplateProps) {
  const sectionLabel = type === 'press-release' ? 'Press Releases' : 'News';
  const sectionPath = type === 'press-release' ? '/press-releases' : '/news';

  const formattedDate = new Date(data.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#2ED06E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={sectionPath} className="hover:text-[#2ED06E] transition-colors">
              {sectionLabel}
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Type Badge */}
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
            {sectionLabel}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0C0D] leading-tight mb-4">
            {data.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-3 text-gray-500 text-sm mb-10 pb-8 border-b border-gray-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <time dateTime={data.publishDate}>{formattedDate}</time>
          </div>

          {/* Featured Image */}
          {data.featuredImage && (
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-12">
              <img
                src={data.featuredImage}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <RichContent content={data.content} />
        </div>
      </article>

      {/* CTA */}
      <CTASection
        title="Want to Learn More?"
        description="Stay updated with the latest news and developments from Cubix."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: `View All ${sectionLabel}`, href: sectionPath }}
      />
    </>
  );
}
