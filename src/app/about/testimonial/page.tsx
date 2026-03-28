import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Client Testimonials | DeepLearnHQ',
  description:
    'Excellence is our minimum bar for client delivery. Read what our clients say about working with DeepLearnHQ.',
};

const testimonials = [
  {
    quote:
      'DeepLearnHQ has delivered fast, high quality builds for us for almost a year now. I continue to be amazed by the excellent work that has come out of their shop.',
    name: 'Verified Client',
    role: 'CEO, Technology Company',
    company: 'Technology Company',
    industry: 'Technology',
    rating: 5,
  },
  {
    quote:
      'The team stood out because of their swift response time and patience. DeepLearnHQ provided one contact person, which helped streamline project management and coordination.',
    name: 'Verified Client',
    role: 'Project Manager, Enterprise',
    company: 'Enterprise Client',
    industry: 'Enterprise',
    rating: 5,
  },
  {
    quote:
      'We worked with DeepLearnHQ for the development of our app and the experience far exceeded our expectations. They were professional, knowledgeable, and very accommodating.',
    name: 'Swatch Group Representative',
    role: 'Product Manager, Swatch Group',
    company: 'Swatch Group',
    industry: 'Luxury & Gaming',
    rating: 5,
  },
  {
    quote:
      'DeepLearnHQ understood my vision from the beginning of the project, collaborated and gave feedback on goal objectives, was consistent with scheduled meetings and punctual despite time zone differences.',
    name: 'Kimberly A. Dalius',
    role: 'Founder & CEO, Pauseitive LLC',
    company: 'Pauseitive',
    industry: 'Mental Wellness',
    rating: 5,
  },
  {
    quote:
      'DeepLearnHQ has been an excellent partner to our organization for 5+ years. Their dedicated team understands our environment, needs, and workflows well.',
    name: 'Verified Client',
    role: 'Director, Long-Term Partner',
    company: 'Enterprise Partner',
    industry: 'Enterprise',
    rating: 5,
  },
  {
    quote:
      'They helped see an idea through from a small prototype to the smallest details. They were friendly and professional, completed the product on time and within budget.',
    name: 'Verified Client',
    role: 'Founder, Startup',
    company: 'Startup',
    industry: 'Startup',
    rating: 5,
  },
  {
    quote:
      'I would recommend DeepLearnHQ to anyone. They are a very talented group of software engineers and designers. The app they built was intuitive, modern, and sleek.',
    name: 'Verified Client',
    role: 'Product Lead',
    company: 'Mobile App Company',
    industry: 'Mobile',
    rating: 5,
  },
  {
    quote:
      'A collaborative partner, DeepLearnHQ complied with the timeline and delivered value. Very responsive and professional! Well prepared for each meeting.',
    name: 'Verified Client',
    role: 'CTO, SaaS Company',
    company: 'SaaS Company',
    industry: 'SaaS',
    rating: 5,
  },
];

const clutchStats = [
  { value: '4.9/5', label: 'Clutch Rating' },
  { value: '55+', label: 'Verified Reviews' },
  { value: '98%', label: 'Would Recommend' },
  { value: '#1', label: 'Top App Developer' },
];

const videoTestimonials = [
  {
    name: 'Pauseitive',
    person: 'Kimberly Dalius',
    role: 'Founder & CEO',
  },
  {
    name: 'OOMCO',
    person: 'Client Representative',
    role: 'Product Director',
  },
  {
    name: 'Swatch Group',
    person: 'Product Manager',
    role: 'Gaming Division',
  },
];

export default function TestimonialPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Excellence. Our Minimum Bar for Client Delivery"
        description="We deliver winning experiences that delight users and drive measurable business outcomes. But don't just take our word for it — hear what our clients have to say."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Testimonials' },
        ]}
        
      />

      {/* Clutch Stats */}
      <section className="py-16 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clutchStats.map((stat) => (
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
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
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0B0C0D] to-[#1E6FD9]/30 rounded-full flex items-center justify-center">
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

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
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
            {videoTestimonials.map((video) => (
              <div
                key={video.name}
                className="group bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] rounded-2xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#1E6FD9] transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1E6FD9]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1E6FD9]/30 transition-colors">
                    <svg className="w-8 h-8 text-[#1E6FD9] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold">{video.name}</p>
                  <p className="text-gray-400 text-sm mt-1">{video.person} &middot; {video.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection
        title="Ready to Write Your Success Story?"
        description="Join the growing list of companies that trust DeepLearnHQ to build their most critical digital products."
        primaryCTA={{ label: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ label: 'View Case Studies', href: '/work' }}
      />
    </>
  );
}
