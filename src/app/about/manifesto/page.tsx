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
    title: 'Craft Over Code',
    description:
      'We do not just write code — we craft solutions. Every architecture decision, naming convention, and abstraction layer is deliberate. We believe that software is a medium of expression, and the best products emerge when engineers treat their work as a craft rather than a commodity.',
  },
  {
    number: '02',
    title: 'Client Outcomes Above All',
    description:
      'Features are meaningless without outcomes. We measure our success not by lines of code deployed or sprints completed, but by the business results our clients achieve. If a feature does not move the needle for the client, we challenge whether it should exist.',
  },
  {
    number: '03',
    title: 'Radical Transparency',
    description:
      'We share the good, the bad, and the uncomfortable. Clients see our sprint boards, attend our retrospectives, and receive honest assessments of technical risk. Trust is built through transparency, not through polished status reports that hide problems.',
  },
  {
    number: '04',
    title: 'Relentless Curiosity',
    description:
      'Technology evolves daily, and so do we. Every engineer at DeepLearnHQ dedicates time to learning new frameworks, attending conferences, contributing to open source, and sharing knowledge with colleagues. Curiosity is not encouraged — it is expected.',
  },
  {
    number: '05',
    title: 'People Build Products',
    description:
      'Great products are not built by processes — they are built by people who care. We invest in our team through mentorship, competitive compensation, flexible work arrangements, and a culture that values individual growth as much as company growth.',
  },
  {
    number: '06',
    title: 'Ship Early, Learn Fast',
    description:
      'Perfection is the enemy of progress. We believe in getting working software into real users\' hands as early as possible, collecting feedback, and iterating rapidly. Every sprint should produce a shippable increment that teaches us something new.',
  },
  {
    number: '07',
    title: 'Security Is Not Optional',
    description:
      'Security is baked into our process from day one — not bolted on as an afterthought. Every pull request undergoes security review, every architecture includes threat modeling, and every deployment follows the principle of least privilege.',
  },
  {
    number: '08',
    title: 'Global Mindset, Local Heart',
    description:
      'With offices across four countries, we embrace diverse perspectives and cultural nuances. We design products that work across languages, currencies, and regulations while staying deeply connected to the local communities we serve.',
  },
];

const values = [
  { title: 'Integrity', description: 'We do what we say we will do, even when nobody is watching.' },
  { title: 'Excellence', description: 'We set high standards and hold ourselves accountable to them.' },
  { title: 'Empathy', description: 'We build for real people with real problems, and we never forget that.' },
  { title: 'Courage', description: 'We speak up when something is wrong, even when it is uncomfortable.' },
  { title: 'Collaboration', description: 'The best ideas emerge when diverse minds work toward a shared goal.' },
  { title: 'Ownership', description: 'Every team member owns their work, their mistakes, and their growth.' },
];

export default function ManifestoPage() {
  return (
    <>
      <PageHero
        title="The DeepLearnHQ Manifesto"
        description="These are the principles we live by. They shape how we build technology, how we treat our clients, and how we grow as a company. They are not aspirational statements — they are non-negotiable commitments."
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
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
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
                  <span className="text-5xl font-bold text-[#2ED06E]/20">{p.number}</span>
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
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
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
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#2ED06E]/50 transition-colors"
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
            committed to your success. We will challenge your thinking, protect your interests, and
            build products that create lasting value.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We hold ourselves to these standards every day. If we ever fall short, we want to hear
            about it — because accountability is not just a value we preach, it is how we operate.
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
