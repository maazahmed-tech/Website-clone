import Link from "next/link";

export default function BuildTeam() {
  return (
    <section className="py-20 lg:py-24 bg-[#0B0C0D] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1E6FD9]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1E6FD9]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1E6FD9]/10 via-[#1E6FD9]/5 to-transparent border border-[#1E6FD9]/20 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
          {/* Content */}
          <div className="flex-1">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Create a software development Team with us
            </h4>
            <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Hire from our pool of 350+ specialized experts in web, mobile, and
              software engineering, specializing in the latest technologies and
              frameworks, ready to scale your development teams effortlessly.
            </p>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 bg-[#1E6FD9] hover:bg-[#1859B3] text-white font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1E6FD9]/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Build a Team
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
