import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Our Clients | DeepLearnHQ',
  description:
    'DeepLearnHQ has partnered with startups, enterprises, and Fortune 500 companies including Sony, Walmart, Canon, DreamWorks, Unilever, Estee Lauder, and more.',
};

const clientCategories = [
  {
    category: 'Fortune 500 & Global Brands',
    clients: [
      { name: 'Sony', industry: 'Electronics' },
      { name: 'Walmart', industry: 'Retail' },
      { name: 'Canon', industry: 'Technology' },
      { name: 'Unilever', industry: 'Consumer Goods' },
      { name: 'PayPal', industry: 'Fintech' },
      { name: 'Estee Lauder', industry: 'Beauty' },
    ],
  },
  {
    category: 'Entertainment & Media',
    clients: [
      { name: 'DreamWorks', industry: 'Animation' },
      { name: 'Politico', industry: 'Digital Media' },
      { name: 'Nintendo', industry: 'Gaming' },
    ],
  },
  {
    category: 'Luxury & Fashion',
    clients: [
      { name: 'Tissot', industry: 'Luxury Watches' },
      { name: 'Swatch Group', industry: 'Luxury Watches' },
      { name: 'Ray-Ban', industry: 'Eyewear' },
      { name: 'Clinique', industry: 'Beauty' },
    ],
  },
  {
    category: 'Consulting & Enterprise',
    clients: [
      { name: 'Sapient', industry: 'Consulting' },
      { name: 'Engro Corporation', industry: 'Conglomerate' },
      { name: 'Suzuki', industry: 'Automotive' },
      { name: 'Quaker', industry: 'Food & Beverage' },
    ],
  },
  {
    category: 'Startups & Scale-Ups',
    clients: [
      { name: 'Pauseitive', industry: 'Mental Wellness' },
      { name: 'PartyShark', industry: 'Events' },
      { name: 'Foodly', industry: 'Food Delivery' },
      { name: 'Goobr', industry: 'Social Networking' },
      { name: 'WAGMI', industry: 'Blockchain Gaming' },
      { name: 'OOMCO', industry: 'Energy & Fuel' },
    ],
  },
];

const industries = [
  'Healthcare',
  'Fintech',
  'E-Commerce',
  'Logistics',
  'Education',
  'Real Estate',
  'Entertainment',
  'Oil & Gas',
  'Government',
  'Social Media',
  'Food & Beverage',
  'Travel & Hospitality',
  'Blockchain & Web3',
  'Gaming',
  'Beauty & Fashion',
  'Automotive',
];

const stats = [
  { value: '600+', label: 'Companies Transformed' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '35+', label: 'Countries Served' },
  { value: '17+', label: 'Years of Experience' },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Our Clients"
        description="We take pride in our rich portfolio of working with global brands and turning hundreds of ideas into advanced solutions. From ambitious startups to Fortune 500 enterprises."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Clients' },
        ]}
      />

      {/* Stats */}
      <section className="py-16 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E6FD9] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Trusted By
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Companies That Choose DeepLearnHQ
            </h2>
          </div>

          <div className="space-y-16">
            {clientCategories.map((group) => (
              <div key={group.category}>
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-6 border-b border-gray-200 pb-3">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                  {group.clients.map((client) => (
                    <div
                      key={client.name}
                      className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#1E6FD9] hover:shadow-md transition-all min-h-[120px]"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0B0C0D]/5 to-[#1E6FD9]/10 rounded-full flex items-center justify-center mb-3">
                        <span className="text-[#0B0C0D] font-bold text-xl">
                          {client.name[0]}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#0B0C0D] text-center">
                        {client.name}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">{client.industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Industries
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our cross-industry experience means we bring best practices from diverse verticals into every project.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="bg-white border border-gray-200 text-[#0B0C0D] px-5 py-2.5 rounded-full text-sm font-medium hover:border-[#1E6FD9] hover:bg-[#1E6FD9]/5 transition-all cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Growing Client Portfolio"
        description="Let us show you why leading organizations trust DeepLearnHQ to build their most critical digital products."
        primaryCTA={{ label: 'Start a Conversation', href: '/contact' }}
        secondaryCTA={{ label: 'View Case Studies', href: '/work' }}
      />
    </>
  );
}
