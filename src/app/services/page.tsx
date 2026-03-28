import type { Metadata } from "next";
import Link from "next/link";
import ClutchBadge from "@/components/shared/ClutchBadge";
import { getAllServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | DeepLearnHQ - Software & App Development",
  description:
    "Explore DeepLearnHQ's comprehensive range of services including mobile app development, software development, web development, game development, AI, blockchain, and more.",
};

/* ------------------------------------------------------------------ */
/*  Service categories – each maps a label to the slugs it contains   */
/* ------------------------------------------------------------------ */
const serviceCategories: {
  category: string;
  description: string;
  slugs: string[];
}[] = [
  {
    category: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    slugs: [
      "mobile-app-development",
      "cross-platform-app-development",
      "flutter-app-development",
      "react-native-app-development",
      "ionic-app-development",
      "visionos-development",
      "iphone-app-development",
      "android-app-development",
      "enterprise-app-development",
    ],
  },
  {
    category: "Software Development",
    description:
      "Custom software solutions tailored to your business needs — from enterprise platforms to SaaS products.",
    slugs: [
      "software-development",
      "software-consulting-services",
      "software-testing-services",
      "custom-api-development-services",
      "mvp-software-development",
    ],
  },
  {
    category: "Web Development",
    description:
      "Responsive, fast, and user-friendly web applications built with modern frameworks and technologies.",
    slugs: [
      "web-application-development",
      "web-development",
      "custom-web-development-services",
    ],
  },
  {
    category: "eCommerce",
    description:
      "End-to-end eCommerce solutions that drive sales, enhance customer experiences, and scale with your business.",
    slugs: [
      "ecommerce-app-development",
      "custom-ecommerce-development-company",
      "magento-development-services",
      "woocommerce-development-services",
      "shopify-website-development-services",
    ],
  },
  {
    category: "Blockchain",
    description:
      "Decentralized applications, smart contracts, DeFi platforms, and NFT marketplaces on leading chains.",
    slugs: [
      "blockchain-development",
      "smart-contract-development",
      "nft-development-services",
      "web3-development",
      "dapp-development-service",
    ],
  },
  {
    category: "Game Development",
    description:
      "Immersive gaming experiences across mobile, console, and PC with stunning visuals and engaging gameplay.",
    slugs: [
      "game-development",
      "unity-game-development",
      "unreal-game-development",
      "blockchain-game-development",
      "mobile-game-development",
      "2d-game-development",
      "3d-game-development",
      "multiplayer-game-development",
    ],
  },
  {
    category: "Cloud & DevOps",
    description:
      "Cloud migration, infrastructure management, and cloud-native application development for scale and reliability.",
    slugs: [
      "cloud-software-development-services",
      "aws-development-services",
      "devops-software-development-services",
    ],
  },
  {
    category: "Product Design",
    description:
      "User-centered design combining aesthetics with functionality to create intuitive digital products.",
    slugs: [
      "product-design-services",
      "ux-design-services",
      "ui-design-services",
    ],
  },
];

/* Collect additional top-level services not already in a category */
const additionalTopLevel = [
  { slug: "artificial-intelligence", category: "AI & Emerging Tech" },
  { slug: "augmented-reality", category: "AI & Emerging Tech" },
  { slug: "virtual-reality-development", category: "AI & Emerging Tech" },
  { slug: "metaverse-development", category: "AI & Emerging Tech" },
  { slug: "iot-app-development", category: "AI & Emerging Tech" },
];

export default function ServicesPage() {
  const allServices = getAllServices();

  /* Build a quick lookup: slug -> service data */
  const serviceMap = new Map(allServices.map((s) => [s.slug, s]));

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="bg-[#fdf8f6] pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Left content */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link
                  href="/"
                  className="hover:text-[#2ED06E] transition-colors"
                >
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900">Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0C0D] mb-6 leading-tight">
                Accelerated Digital{" "}
                <span className="text-[#2ED06E]">Services</span> for Your{" "}
                <span className="text-[#2ED06E]">Business</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl mb-8">
                We help businesses achieve their goals with a comprehensive
                suite of digital services — from mobile apps and custom software
                to AI, blockchain, and beyond.
              </p>
            </div>

            {/* Right decorative + Clutch badge */}
            <div className="flex flex-col items-center gap-8">
              {/* 3-D decorative shapes */}
              <div className="relative w-64 h-48 hidden lg:block">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#2ED06E]/30 to-[#2ED06E]/10 blur-sm" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-tr from-orange-300/40 to-yellow-200/20 blur-sm" />
                <div className="absolute top-8 left-12 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-300/30 to-indigo-200/20 rotate-12 blur-[2px]" />
              </div>

              <ClutchBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services We Provide ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
            Services We <span className="text-[#2ED06E]">Provide</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mb-14">
            From concept to deployment and beyond — explore our full spectrum of
            digital services grouped by expertise.
          </p>

          <div className="space-y-16">
            {serviceCategories.map((group) => (
              <div key={group.category}>
                {/* Category heading */}
                <h3 className="text-2xl font-bold text-[#0B0C0D] mb-2">
                  {group.category}
                </h3>
                <p className="text-gray-500 text-sm mb-6 max-w-xl">
                  {group.description}
                </p>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.slugs.map((slug) => {
                    const svc = serviceMap.get(slug);
                    if (!svc) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
                      >
                        <div>
                          <h4 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#2ED06E] transition-colors">
                            {svc.title}
                          </h4>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {svc.heroDescription}
                          </p>
                        </div>
                        <span className="inline-flex items-center text-[#2ED06E] text-sm font-semibold mt-4">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* AI & Emerging Tech */}
            <div>
              <h3 className="text-2xl font-bold text-[#0B0C0D] mb-2">
                AI &amp; Emerging Tech
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xl">
                Intelligent solutions powered by AI, AR/VR, IoT, and the
                metaverse to unlock new possibilities.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalTopLevel.map(({ slug }) => {
                  const svc = serviceMap.get(slug);
                  if (!svc) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
                    >
                      <div>
                        <h4 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#2ED06E] transition-colors">
                          {svc.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                          {svc.heroDescription}
                        </p>
                      </div>
                      <span className="inline-flex items-center text-[#2ED06E] text-sm font-semibold mt-4">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DeepLearnHQ Guarantees ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              The DeepLearnHQ <span className="text-[#2ED06E]">Guarantee</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with a deep understanding of
              business to deliver solutions that make a real difference.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Team",
                desc: "350+ skilled professionals across multiple domains and technologies.",
              },
              {
                title: "Agile Process",
                desc: "Iterative development with continuous feedback and rapid delivery.",
              },
              {
                title: "Quality First",
                desc: "Rigorous testing and QA processes ensure flawless products.",
              },
              {
                title: "24/7 Support",
                desc: "Round-the-clock support with dedicated account managers.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#0B0C0D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#2ED06E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0B0C0D] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA: Pull the Trigger ─── */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Pull the <span className="text-[#2ED06E]">Trigger!</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Initiate a conversation and let DeepLearnHQ turn your ideas into reality.
            Tell us about your project, and we&apos;ll help you find the best
            approach to bring it to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2ED06E] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#25b35d] transition-colors text-lg"
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
