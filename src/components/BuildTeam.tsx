import Link from "next/link";

export default function BuildTeam() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] rounded-2xl px-8 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Text */}
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B0C0D] text-center sm:text-left">
            Create a software development{" "}
            <span className="text-[#1E6FD9]">Team</span> with us
          </h4>

          {/* CTA */}
          <Link
            href="/contact/"
            className="inline-flex items-center bg-[#0B0C0D] hover:bg-[#1E6FD9] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-300 whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
