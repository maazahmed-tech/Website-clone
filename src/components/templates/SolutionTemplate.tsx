import type { SolutionPageData } from '@/data/types';
import PageHero from '@/components/shared/PageHero';
import FeatureGrid from '@/components/shared/FeatureGrid';
import CTASection from '@/components/shared/CTASection';

interface SolutionTemplateProps {
  data: SolutionPageData;
}

export default function SolutionTemplate({ data }: SolutionTemplateProps) {
  return (
    <>
      {/* Hero */}
      <PageHero
        title={data.heroHeading}
        description={data.heroDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: data.title },
        ]}
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              Features
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              What Makes Our Solution Stand Out
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {data.tagline}
            </p>
          </div>
          <FeatureGrid features={data.features} />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
                Benefits
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-6">
                Why Choose This Solution
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our {data.title.toLowerCase()} solution is designed to deliver
                measurable results and lasting impact for your business.
              </p>
            </div>
            <div className="space-y-4">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-[#2ED06E] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2ED06E]/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#2ED06E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Implement This Solution?"
        description="Contact us to learn how this solution can address your specific business challenges."
        primaryCTA={{ label: 'Schedule a Demo', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Work', href: '/work' }}
      />
    </>
  );
}
