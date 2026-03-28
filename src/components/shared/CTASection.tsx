import Link from "next/link";

interface CTAProps {
  label: string;
  href: string;
}

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: CTAProps;
  secondaryCTA?: CTAProps;
}

export default function CTASection({
  title = "Let's bring your vision to life",
  description,
  primaryCTA = { label: "Get Started", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="bg-[#1a1a1a] px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
          Pull the Trigger!
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mb-8 text-lg text-gray-400">{description}</p>
        )}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryCTA.href}
            className="inline-block rounded-full bg-[#1E6FD9] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1859B3]"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
