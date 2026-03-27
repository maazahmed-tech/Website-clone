import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Cubix University | Internship & Training Program',
  description:
    'Cubix University is our flagship internship and training program that prepares the next generation of software engineers, designers, and product managers for real-world success.',
};

const tracks = [
  {
    title: 'Software Engineering',
    duration: '12 weeks',
    description:
      'Learn full-stack development with React, Node.js, and cloud services. Build production-grade features under the mentorship of senior engineers.',
    skills: ['React & Next.js', 'Node.js & Express', 'PostgreSQL & MongoDB', 'AWS & CI/CD', 'Git & Code Review'],
  },
  {
    title: 'Mobile Development',
    duration: '12 weeks',
    description:
      'Master cross-platform mobile development with React Native and Flutter. Ship a real feature to the app store by the end of the program.',
    skills: ['React Native', 'Flutter & Dart', 'iOS & Android Basics', 'Mobile UI/UX', 'App Store Deployment'],
  },
  {
    title: 'UI/UX Design',
    duration: '10 weeks',
    description:
      'Go from user research to high-fidelity prototypes. Learn design thinking, interaction design, and design systems used in professional teams.',
    skills: ['User Research', 'Wireframing', 'Figma & Prototyping', 'Design Systems', 'Usability Testing'],
  },
  {
    title: 'Quality Assurance',
    duration: '10 weeks',
    description:
      'Develop both manual and automated testing skills. Learn to write test plans, build Cypress and Selenium suites, and run performance tests.',
    skills: ['Test Planning', 'Manual Testing', 'Cypress & Selenium', 'API Testing', 'Performance Testing'],
  },
  {
    title: 'Data Science & AI',
    duration: '12 weeks',
    description:
      'Explore machine learning, NLP, and data engineering. Work with real datasets and deploy models into production applications.',
    skills: ['Python & Pandas', 'Machine Learning', 'TensorFlow & PyTorch', 'Data Pipelines', 'Model Deployment'],
  },
];

const programHighlights = [
  {
    title: 'Real Projects',
    description: 'Work on actual client projects alongside experienced engineers — not toy exercises or theoretical assignments.',
  },
  {
    title: 'Dedicated Mentors',
    description: 'Every intern is paired with a senior mentor who provides weekly one-on-one guidance and career coaching.',
  },
  {
    title: 'Structured Curriculum',
    description: 'Follow a proven curriculum that balances technical depth with professional skills development.',
  },
  {
    title: 'Demo Day',
    description: 'Present your capstone project to company leadership and external guests at our end-of-program showcase.',
  },
  {
    title: 'Full-Time Offers',
    description: 'Top-performing interns receive full-time offers. Over 60% of our interns convert to permanent roles.',
  },
  {
    title: 'Global Community',
    description: 'Join a network of Cubix University alumni working at leading tech companies around the world.',
  },
];

const stats = [
  { value: '500+', label: 'Graduates' },
  { value: '60%', label: 'Conversion to Full-Time' },
  { value: '8', label: 'Cohorts Per Year' },
  { value: '4.9/5', label: 'Intern Satisfaction' },
];

const timeline = [
  { step: 'Apply', description: 'Submit your application with resume and a short motivation statement.' },
  { step: 'Assessment', description: 'Complete a technical assessment tailored to your chosen track.' },
  { step: 'Interview', description: 'Meet with our team for a culture-fit and technical discussion.' },
  { step: 'Onboarding', description: 'Receive your equipment, mentor assignment, and program schedule.' },
  { step: 'Program', description: 'Dive into 10-12 weeks of hands-on learning and real project work.' },
  { step: 'Demo Day', description: 'Showcase your capstone project and celebrate your achievements.' },
];

export default function UniversityPage() {
  return (
    <>
      <PageHero
        title="Cubix University"
        description="Our flagship internship and training program that transforms ambitious students and early-career professionals into industry-ready engineers, designers, and product builders."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'University' },
        ]}
      />

      {/* Stats */}
      <section className="py-16 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
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

      {/* Program Tracks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              Program Tracks
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Choose Your Path
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Select the track that aligns with your passion and career goals. Each track provides hands-on experience with industry-standard tools and practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#0B0C0D]">{track.title}</h3>
                  <span className="bg-[#2ED06E]/10 text-[#2ED06E] text-xs font-semibold px-3 py-1 rounded-full">
                    {track.duration}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{track.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Skills You Will Learn
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cubix University */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              Why Join
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              More Than an Internship
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2ED06E] hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
              How to Apply
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Application Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#0B0C0D] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2ED06E] font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0C0D]">{item.step}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-[52px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D]">Who Should Apply</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'University students in CS, Design, or related fields',
              'Recent graduates looking for their first industry experience',
              'Career switchers with foundational technical skills',
              'Self-taught developers ready to level up in a structured environment',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#2ED06E]/10 rounded-lg flex items-center justify-center mt-0.5">
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
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Launch Your Tech Career"
        description="Applications are open for the next cohort. Take the first step toward building world-class digital products."
        primaryCTA={{ label: 'Apply Now', href: '/contact' }}
        secondaryCTA={{ label: 'View Open Positions', href: '/careers' }}
      />
    </>
  );
}
