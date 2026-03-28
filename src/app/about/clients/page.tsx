import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Our Clients | DeepLearnHQ",
  description:
    "DeepLearnHQ has partnered with startups, enterprises, and Fortune 500 companies including Sony, Walmart, Canon, Emirates, Tissot, Politico, and more.",
};

const clients = [
  {
    name: "Politico",
    description:
      "Built a cutting-edge digital media platform enabling real-time political news delivery, interactive data visualizations, and audience engagement tools for millions of readers worldwide.",
  },
  {
    name: "Walmart",
    description:
      "Developed scalable e-commerce solutions and inventory management systems powering seamless omnichannel retail experiences for one of the world's largest retailers.",
  },
  {
    name: "Tissot",
    description:
      "Crafted a premium digital experience for the Swiss watchmaker, including an interactive product showcase, virtual try-on features, and global e-commerce integration.",
  },
  {
    name: "Sony",
    description:
      "Delivered innovative entertainment and gaming solutions, building immersive digital experiences and cross-platform applications for Sony's global consumer electronics ecosystem.",
  },
  {
    name: "Canon",
    description:
      "Engineered advanced imaging and workflow solutions, creating professional-grade applications that streamline content creation and digital asset management.",
  },
  {
    name: "Emirates",
    description:
      "Designed and developed premium travel technology solutions, enhancing the digital booking experience and in-flight entertainment platforms for a world-class airline.",
  },
  {
    name: "Unilever",
    description:
      "Created data-driven marketing platforms and supply chain optimization tools, empowering one of the largest consumer goods companies to accelerate digital transformation.",
  },
  {
    name: "PayPal",
    description:
      "Built secure fintech integrations and payment workflow solutions, enhancing transaction processing and user experiences across digital payment platforms.",
  },
  {
    name: "Estee Lauder",
    description:
      "Developed immersive beauty-tech experiences including AR-powered virtual try-on tools, personalized skincare recommendation engines, and global e-commerce platforms.",
  },
  {
    name: "DreamWorks",
    description:
      "Partnered on interactive entertainment projects, creating engaging digital experiences and gaming applications inspired by iconic animated franchises.",
  },
  {
    name: "Nintendo",
    description:
      "Collaborated on gaming platform integrations and companion app development, delivering seamless cross-device experiences for one of gaming's most iconic brands.",
  },
  {
    name: "Suzuki",
    description:
      "Developed connected vehicle solutions and digital dealership platforms, modernizing the automotive customer journey from discovery to purchase.",
  },
  {
    name: "Ray-Ban",
    description:
      "Built interactive product customization tools and augmented reality experiences, enabling customers to virtually try on and personalize eyewear collections.",
  },
  {
    name: "Swatch Group",
    description:
      "Created multi-brand digital commerce solutions and product visualization tools for the world's largest watchmaking group, spanning luxury and lifestyle segments.",
  },
  {
    name: "Sapient",
    description:
      "Delivered enterprise consulting solutions and custom software platforms, supporting digital transformation initiatives for major global organizations.",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Clients"
        description="We take pride in our rich portfolio of working with global brands and turning hundreds of ideas into advanced solutions. Over 600+ companies have trusted DeepLearnHQ to build their most critical digital products."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Clients" },
        ]}
      />

      {/* Client Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div
                key={client.name}
                className="p-8 rounded-2xl border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300 group"
              >
                {/* Logo placeholder */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#0B0C0D]/5 to-[#1E6FD9]/10 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-[#1E6FD9] font-bold text-2xl">
                    {client.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-3 group-hover:text-[#1E6FD9] transition-colors">
                  {client.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection
        title="Join Our Growing Client Portfolio"
        description="Let us show you why leading organizations trust DeepLearnHQ to build their most critical digital products."
        primaryCTA={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCTA={{ label: "View Our Work", href: "/work" }}
      />
    </>
  );
}
