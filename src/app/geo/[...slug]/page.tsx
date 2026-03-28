import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGeoPageBySlug, getAllGeoSlugs } from '@/data/geo';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return getAllGeoSlugs().map((slug) => ({
    slug: slug.split('/'),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  const data = getGeoPageBySlug(fullSlug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function GeoPage({ params }: PageProps) {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  const data = getGeoPageBySlug(fullSlug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={data.heading}
        description={data.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: data.service },
          { label: data.location },
        ]}
      />

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg">{data.content}</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              {data.service} Services in {data.location}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Development',
                description: `Bespoke ${data.service.toLowerCase()} solutions tailored to your business requirements and ${data.location} market dynamics.`,
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design that combines visual appeal with intuitive navigation for maximum engagement and conversion.',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing across devices, platforms, and use cases to ensure a flawless experience for every user.',
              },
              {
                title: 'Cloud & DevOps',
                description: 'Scalable cloud infrastructure with automated CI/CD pipelines for rapid, reliable deployments.',
              },
              {
                title: 'Maintenance & Support',
                description: 'Ongoing support, performance monitoring, and feature enhancements to keep your application ahead of the competition.',
              },
              {
                title: 'Strategy & Consulting',
                description: `Technology consulting and product strategy tailored to the ${data.location} market landscape.`,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2ED06E] hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why {data.location} Businesses Choose DeepLearnHQ
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine global development expertise with local market understanding to deliver results that matter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '15+', label: 'Years of Experience' },
              { value: '4.9/5', label: 'Clutch Rating' },
              { value: '95%', label: 'Client Retention' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 border border-white/10 rounded-xl hover:border-[#2ED06E]/50 transition-colors"
              >
                <div className="text-4xl font-bold text-[#2ED06E] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Start Your ${data.service} Project in ${data.location}`}
        description={`Ready to build a world-class application? Our ${data.location}-focused team is ready to bring your vision to life.`}
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Work', href: '/work' }}
      />
    </>
  );
}
