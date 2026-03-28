import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Client Testimonials | DeepLearnHQ',
  description:
    'Read what our clients say about working with DeepLearnHQ. Testimonials from startups, enterprises, and industry leaders across healthcare, fintech, logistics, and more.',
};

const testimonials = [
  {
    quote:
      'DeepLearnHQ delivered our mobile banking platform three weeks ahead of schedule. Their team felt like an extension of ours, and the quality of code was exceptional. We have renewed our partnership for the next two years.',
    name: 'Richard Kensington',
    role: 'CTO, NovaPay Financial',
    company: 'NovaPay Financial',
    industry: 'Fintech',
    rating: 5,
  },
  {
    quote:
      'From the first discovery workshop to post-launch support, DeepLearnHQ demonstrated a level of professionalism and technical depth that is rare in this industry. Our e-commerce platform handles 10x the traffic we originally planned for.',
    name: 'Amira Al-Farsi',
    role: 'VP of Digital, Gulf Retail Group',
    company: 'Gulf Retail Group',
    industry: 'E-Commerce',
    rating: 5,
  },
  {
    quote:
      'We interviewed seven agencies before choosing DeepLearnHQ. They were the only team that asked the hard questions and challenged our assumptions—exactly what we needed. The product they built has become our primary revenue driver.',
    name: 'Jason Rivera',
    role: 'Founder, PartyShark LLC',
    company: 'PartyShark',
    industry: 'Events',
    rating: 5,
  },
  {
    quote:
      'Our healthcare compliance requirements are strict, and DeepLearnHQ navigated them flawlessly. They built a HIPAA-compliant telehealth platform that our patients love and our compliance team trusts.',
    name: 'Dr. Sarah Mitchell',
    role: 'Co-Founder & CEO, Pauseitive Inc.',
    company: 'Pauseitive',
    industry: 'Healthcare',
    rating: 5,
  },
  {
    quote:
      'DeepLearnHQ took our paper-based logistics operation and turned it into a real-time, data-driven machine. Fleet utilization is up 40%, and our customers finally have the visibility they have been asking for.',
    name: 'Ahmed Al-Rashidi',
    role: 'Chief Digital Officer, Oomco Petroleum',
    company: 'Oomco',
    industry: 'Logistics',
    rating: 5,
  },
  {
    quote:
      'We needed a team that could handle AI, IoT, and geospatial data processing at scale. DeepLearnHQ not only had the skills but also the passion for our environmental mission. The result speaks for itself.',
    name: 'Dr. Elena Vasquez',
    role: 'Executive Director, Forest Fusion Foundation',
    company: 'Forest Fusion',
    industry: 'Environment',
    rating: 5,
  },
  {
    quote:
      'The DeepLearnHQ design team transformed our outdated enterprise dashboard into something our employees actually enjoy using. User adoption went from 30% to 89% within four months of the redesign.',
    name: 'Mark Gallagher',
    role: 'Head of Product, Pinnacle Systems',
    company: 'Pinnacle Systems',
    industry: 'Enterprise SaaS',
    rating: 5,
  },
  {
    quote:
      'What impressed us most was DeepLearnHQ\'s ability to scale. We started with a three-person team and grew to fifteen engineers within a month when our timeline accelerated. Zero compromise on quality.',
    name: 'Priya Sharma',
    role: 'CTO, Foodly Technologies',
    company: 'Foodly',
    industry: 'Food & Beverage',
    rating: 5,
  },
];

const clutchStats = [
  { value: '4.9/5', label: 'Clutch Rating' },
  { value: '200+', label: 'Verified Reviews' },
  { value: '98%', label: 'Would Recommend' },
  { value: '#1', label: 'Top App Developer' },
];

export default function TestimonialPage() {
  return (
    <>
      <PageHero
        title="What Our Clients Say"
        description="Hear directly from the founders, CTOs, and product leaders who trusted DeepLearnHQ to build their most important digital products."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Testimonials' },
        ]}
        clutchRating={4.9}
      />

      {/* Clutch Stats */}
      <section className="py-16 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clutchStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2ED06E] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Trusted Across Industries
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B0C0D] to-[#2ED06E]/30 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#0B0C0D]">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                  <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                    {t.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              Video Stories
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Watch Their Stories
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our clients share their experiences working with DeepLearnHQ in their own words.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Pauseitive', 'Oomco', 'Foodly'].map((name) => (
              <div
                key={name}
                className="group bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#2ED06E] transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2ED06E]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#2ED06E]/30 transition-colors">
                    <svg className="w-8 h-8 text-[#2ED06E] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold">{name} Story</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Write Your Success Story?"
        description="Join the growing list of companies that trust DeepLearnHQ to build their most critical digital products."
        primaryCTA={{ label: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Case Studies', href: '/work' }}
      />
    </>
  );
}
