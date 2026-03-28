import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Our Manifesto | DeepLearnHQ',
  description:
    'The DeepLearnHQ Manifesto — the principles, beliefs, and commitments that guide how we build technology, serve clients, and grow as a company.',
};

const principles = [
  {
    number: '01',
    title: 'Continuous Improvement (Kaizen)',
    description:
      'We try our best to ensure that our software development approach does not stagnate. We count on our entire developer workforce to keep looking for methods that allow the betterment of our work and practices, in both the smallest and largest details. Any fresh idea that adheres to our principles will be tested on small-level preliminary projects and thoroughly assessed, and if successful, adopted throughout the organization.',
  },
  {
    number: '02',
    title: 'Review by Management',
    description:
      'Project management needs to be conducted in a manner that paves the way for routine visibility into project state, helping in selecting the best candidates and reviewing overall development. General project documentation is considered the most viable practice for ensuring transparency and accountability at every stage.',
  },
  {
    number: '03',
    title: 'Review by Peer',
    description:
      'Regular code and design peer reviews are a must, aiding in guaranteeing that every task stays at the highest level and ensuring a feasible way to pass on ideas and techniques. This process ensures engagement and creates a sense of growth and learning across the entire team.',
  },
  {
    number: '04',
    title: 'Review by Automation',
    description:
      'Every code should be made so it can be tested. A standard testing structure eases the code creation process, ensures robustness, and enables design upgrades while avoiding regression errors. Automated testing is not optional \u2014 it is foundational to our engineering culture.',
  },
  {
    number: '05',
    title: 'Quality Assurance',
    description:
      'It is imperative that personnel outside the development team comprehensively exercise the project before the client is permitted to review the created code. Dedicated QA ensures that our standards are met consistently and that every deliverable reflects our commitment to excellence.',
  },
  {
    number: '06',
    title: 'Flexibility & Adaptability',
    description:
      'Our employees and projects have a great deal of sophistication and complexity. Beyond essential practices like coding style and source management, the methodological approach should be unique to the client and the project. One size does not fit all \u2014 we adapt our processes to serve each engagement optimally.',
  },
  {
    number: '07',
    title: 'Talent & Quality',
    description:
      'We take great care in our recruitment process, with our procedure crafted to save job offers for talented programmers who can showcase exceptional performance. Our development processes are based on the core belief that our programmers are of the utmost quality, and we have faith in our personnel to do the best possible things for the project and the client.',
  },
  {
    number: '08',
    title: 'People & Passion',
    description:
      'Our manifesto is not only part of our core principles; it is also what makes for a team of smart, energetic, and motivated people who know that working here is never just a job. Their passion and willingness translate into great customer relationships and cutting-edge solutions.',
  },
];

const values = [
  { title: 'Creativity', description: 'We are driven by a passion for creativity, constantly seeking fresh ideas. Imagination and bringing new-age ideas to reality set our team apart.' },
  { title: 'Inquisitiveness', description: 'It is a culture of inquisitiveness \u2014 we question assumptions, explore possibilities, and dig deeper to find the best solutions.' },
  { title: 'Experimentation', description: 'We test new approaches on preliminary projects and thoroughly assess them. If successful, we adopt them throughout the organization.' },
  { title: 'Courage', description: 'We have the courage to breach frontiers, challenge the status quo, and push boundaries in pursuit of innovation.' },
  { title: 'Integrity', description: 'Our teams embody integrity at all levels, serving as role models and ambassadors of our valued principles.' },
  { title: 'Trust', description: 'We put clients at the center to build trust and innovative software that exceeds expectations. Trust is the foundation of every relationship.' },
];

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        title="The DeepLearnHQ Manifesto"
        description="DeepLearnHQ always strives for long-term relationships with clients based on trust and value. Our manifesto reflects a team of smart, energetic, and motivated people. These are not aspirational statements \u2014 they are non-negotiable commitments."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Manifesto' },
        ]}
      />

      {/* Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Our Principles
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              What We Believe
            </h2>
          </div>

          <div className="space-y-12">
            {principles.map((p) => (
              <div key={p.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-[#1E6FD9]/20">{p.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0B0C0D] mb-3">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Core Values
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              The Values That Drive Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1E6FD9]/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-6">
            Our Commitment to You
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            When you choose DeepLearnHQ, you are not hiring a vendor — you are gaining a technology partner
            committed to your success. Our creative mindset helps us conceive innovative products that
            change the dynamics of industries and exceed expected levels.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            To us, creativity is a skillset and an outlook on life that steers us toward a future filled
            with possibilities. We hold ourselves to these standards every day, because accountability
            is not just a value we preach — it is how we operate.
          </p>
        </div>
      </section>

      <CTASection
        title="Partner With a Team That Cares"
        description="Experience what it means to work with a company that puts principles before profit."
        primaryCTA={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Process', href: '/about/process' }}
      />
    </>
  );
}
