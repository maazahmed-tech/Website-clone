import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Map long slugs (from nav) to short slugs (used as keys)
const slugAliases: Record<string, string> = {
  "automotive-software-development": "automotive",
  "healthcare-software-development": "healthcare",
  "education-software-development": "education",
  "ecommerce-software-development": "ecommerce",
  "finance-software-development": "finance",
  "real-estate-software-development": "real-estate",
  "hospitality-software-development": "hospitality",
  "logistics-software-development": "logistics",
  "manufacturing-software-solutions": "manufacturing",
  "fashion-software-development": "fashion",
  "foodtech-software-development": "food",
  "travel-software-development": "travel",
  "legal-software-development": "legal",
  "agriculture-software-development": "agriculture",
  "b2b-software-development": "b2b-software",
  "crm-development-services": "crm",
};

function resolveSlug(slug: string): string {
  return slugAliases[slug] ?? slug;
}

const industriesData: Record<
  string,
  {
    title: string;
    description: string;
    overview: string;
    services: { title: string; description: string }[];
  }
> = {
  automotive: {
    title: "Automotive",
    description:
      "Expert automotive software development services for vehicle automation, safety, connectivity, and performance optimization using AI, sensors, and real-time data for precision.",
    overview:
      "DeepLearnHQ provides expert automotive software development services covering autonomous driving systems that enhance safety and efficiency by enabling self-navigation. We apply AI, sensors, and real-time data for precision. Our automotive software experts use advanced technologies to secure sensitive vehicle information with strong data protection. We offer comprehensive QA and testing to optimize workflows, performance, and reliability across the entire automotive software lifecycle.",
    services: [
      { title: "Autonomous Driving Systems", description: "AI-powered self-navigation systems that enhance safety and efficiency using sensors, LiDAR, radar, and real-time data processing for precise autonomous vehicle control." },
      { title: "Connected Vehicle Platforms", description: "IoT-enabled platforms for real-time vehicle monitoring, diagnostics, over-the-air updates, and seamless connectivity between vehicles and cloud infrastructure." },
      { title: "Fleet Management & Tracking", description: "Comprehensive fleet tracking solutions with route optimization, driver management, fuel optimization, and predictive maintenance scheduling." },
      { title: "Digital Showroom & Dealer Solutions", description: "Virtual test drives, remote vehicle personalization, and end-to-end dealer management systems covering inventory, sales, CRM, and service operations." },
      { title: "Automotive Security & Data Protection", description: "Advanced technologies to secure sensitive vehicle information, protect data in transit, and ensure compliance with automotive cybersecurity standards." },
      { title: "R&D & Innovation", description: "Research and development capabilities for car software, electric vehicles, smart mobility solutions, and next-generation automotive technologies." },
    ],
  },
  healthcare: {
    title: "Healthcare",
    description:
      "We deliver high-performance healthcare software applications through precision, innovation, seamless integration, and advanced digital transformation to improve patient care and automate medical operations.",
    overview:
      "DeepLearnHQ provides healthcare software development services to improve patient care, automate work processes, and streamline hospital operations. Our healthcare software experts follow the latest market trends and adopt optimal digital platforms to improve the patient experience in the medical industry. We adopt advanced integration with customized solutions to enhance productivity, reduce workflows, and improve patient care while ensuring compliance with healthcare regulatory norms through advanced security controls and protections for sensitive patient data.",
    services: [
      { title: "AI-Powered Diagnostics & Patient Management", description: "Innovative healthcare software solutions equipped with AI-powered diagnostics, patient management systems, and intelligent clinical decision support tools." },
      { title: "AI-Enabled Health Dashboards", description: "Real-time analytics dashboards for management of patient records, optimization of medical resource allocation, and data-driven clinical insights." },
      { title: "Telemedicine & Remote Patient Monitoring", description: "HIPAA-compliant video consultation platforms with scheduling, prescriptions, IoT-enabled continuous health monitoring, and patient records integration." },
      { title: "EHR/EMR Systems", description: "Custom electronic health record systems with interoperability, clinical decision support, and seamless integration across departments including admissions, labs, pharmacy, and billing." },
      { title: "Security & Compliance Solutions", description: "Advanced security controls and protections for sensitive patient data in medical transactions, ensuring compliance with HIPAA and healthcare regulatory norms." },
      { title: "Healthcare Staff Augmentation", description: "First-rate developers, UI/UX designers, and compliance experts that fit seamlessly into in-house healthcare IT teams for accelerated project delivery." },
    ],
  },
  education: {
    title: "Education",
    description:
      "EdTech solutions including e-learning platforms, LMS development, and virtual classroom tools.",
    overview:
      "The education sector has embraced digital transformation like never before. E-learning platforms, learning management systems, virtual classrooms, and AI-powered tutoring are reshaping how knowledge is delivered and consumed. DeepLearnHQ develops comprehensive EdTech solutions that make learning engaging, accessible, and effective. We work with educational institutions, corporate training departments, and EdTech startups to build platforms that support diverse learning styles and scale to millions of users.",
    services: [
      { title: "Learning Management Systems", description: "Feature-rich LMS platforms with course management, assessments, certifications, and analytics." },
      { title: "Virtual Classroom Solutions", description: "Real-time video classrooms with whiteboard tools, breakout rooms, and recording capabilities." },
      { title: "Student Information Systems", description: "Comprehensive student management platforms covering enrollment, grades, attendance, and reporting." },
      { title: "AI-Powered Tutoring", description: "Intelligent tutoring systems that adapt to individual learning styles and provide personalized feedback." },
    ],
  },
  ecommerce: {
    title: "Ecommerce",
    description:
      "End-to-end eCommerce solutions including marketplace platforms, payment integration, and inventory management.",
    overview:
      "Ecommerce continues to evolve rapidly with changing consumer expectations and emerging technologies. From headless commerce architectures and marketplace platforms to AR-powered shopping experiences and AI-driven personalization, the digital retail landscape demands innovative solutions. DeepLearnHQ builds scalable eCommerce platforms that deliver seamless shopping experiences across all channels. We help retailers, D2C brands, and marketplace operators create solutions that drive conversions, increase customer loyalty, and optimize operations.",
    services: [
      { title: "Custom eCommerce Platforms", description: "Tailored online stores with advanced product management, search, and checkout experiences." },
      { title: "Marketplace Development", description: "Multi-vendor marketplace platforms with seller management, commission tracking, and dispute resolution." },
      { title: "Payment Gateway Integration", description: "Secure payment processing with multiple gateway support, recurring billing, and fraud prevention." },
      { title: "Inventory & Order Management", description: "Real-time inventory tracking, automated order processing, and warehouse management systems." },
    ],
  },
  finance: {
    title: "Finance",
    description:
      "Scalable custom fintech solutions that enhance operational efficiency, boost data security, and streamline financial services for banks, enterprises, and fintech startups.",
    overview:
      "DeepLearnHQ empowers the fintech sector with enterprise solutions that enable seamless digital banking and wealth management to ensure customer loyalty and a better experience. From concept building and UI/UX design to development, testing, and deployment, we provide businesses with secure, scalable, and intelligent platforms. Our specialized knowledge enables us to implement AI-driven solutions that address specific industry challenges and regulatory requirements while ensuring the platform enhances user satisfaction and operational efficiency.",
    services: [
      { title: "Mobile Banking App Development", description: "Robust mobile banking applications with QR-code payments, cardless ATM withdrawals, multi-currency virtual cards, crypto transactions, and Buy Now Pay Later options." },
      { title: "Crypto Banking & DeFi Solutions", description: "Bespoke crypto banking app development empowering enterprises with secure cryptocurrency capabilities, DeFi protocol integration, smart contracts, and dApp connectivity." },
      { title: "Mobile Wallet Development", description: "Digital wallet apps for storing, sending, and receiving traditional currency, cryptocurrency, and NFTs with AI-powered transaction recommendations and fraud detection." },
      { title: "Payment Processing & Gateway Integration", description: "Secure payment platforms supporting multiple methods, currencies, real-time settlement, and seamless third-party gateway integration." },
      { title: "KYC/AML & Compliance Automation", description: "Geography-based KYC/AML verification, biometric authentication, AI-based fraud detection, and blockchain recordkeeping for regulatory compliance." },
      { title: "Financial Analytics & Wealth Management", description: "Data-driven dashboards and reporting tools for portfolio management, risk assessment, personal finance tracking, and budget optimization." },
    ],
  },
  "real-estate": {
    title: "Real Estate",
    description:
      "PropTech solutions including property listing platforms, virtual tours, and property management systems.",
    overview:
      "Real estate technology is transforming property transactions, management, and investment. From virtual property tours and AI-powered valuations to smart building management and real estate CRM systems, PropTech is making the industry more transparent and efficient. DeepLearnHQ builds innovative real estate technology solutions that streamline property management, enhance buyer and tenant experiences, and optimize investment decisions.",
    services: [
      { title: "Property Listing Platforms", description: "MLS-integrated property listing websites with advanced search, filters, and map-based browsing." },
      { title: "Virtual Tour Solutions", description: "3D virtual tours and AR visualization tools for remote property viewing experiences." },
      { title: "Property Management Systems", description: "Comprehensive platforms for lease management, maintenance requests, and tenant communications." },
      { title: "Real Estate CRM", description: "Custom CRM solutions for agents and brokers with lead tracking and automated follow-ups." },
    ],
  },
  hospitality: {
    title: "Hospitality",
    description:
      "Hospitality tech solutions including booking systems, guest experience platforms, and restaurant management tools.",
    overview:
      "The hospitality industry thrives on exceptional experiences, and technology plays a crucial role in delivering them. From seamless booking engines and contactless check-in to smart room controls and personalized guest experiences, digital solutions are elevating hospitality standards. DeepLearnHQ develops technology solutions that help hotels, restaurants, and tourism businesses enhance guest satisfaction, optimize operations, and drive revenue growth.",
    services: [
      { title: "Booking & Reservation Systems", description: "Real-time booking engines with channel management, rate optimization, and availability sync." },
      { title: "Guest Experience Platforms", description: "Mobile apps for contactless check-in, room service, concierge requests, and loyalty programs." },
      { title: "Restaurant Management Systems", description: "POS systems, table management, online ordering, and kitchen display solutions." },
      { title: "Revenue Management Tools", description: "AI-powered pricing optimization and demand forecasting for maximum revenue." },
    ],
  },
  logistics: {
    title: "Logistics",
    description:
      "Supply chain and logistics solutions including fleet tracking, route optimization, and warehouse management.",
    overview:
      "Logistics and supply chain management are becoming increasingly complex and technology-driven. Real-time tracking, route optimization, warehouse automation, and predictive analytics are essential for modern logistics operations. DeepLearnHQ builds comprehensive logistics technology solutions that help companies optimize their supply chains, reduce costs, and improve delivery performance.",
    services: [
      { title: "Fleet Management & Tracking", description: "GPS-enabled fleet tracking with real-time monitoring, driver management, and fuel optimization." },
      { title: "Route Optimization", description: "AI-powered route planning that considers traffic, weather, delivery windows, and vehicle capacity." },
      { title: "Warehouse Management Systems", description: "Automated warehouse solutions with barcode scanning, inventory tracking, and pick optimization." },
      { title: "Last-Mile Delivery Platforms", description: "On-demand delivery apps with real-time tracking, proof of delivery, and customer notifications." },
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    description:
      "Smart manufacturing solutions including IoT platforms, quality control systems, and production planning.",
    overview:
      "Industry 4.0 is revolutionizing manufacturing with smart factories, IoT-enabled machinery, and data-driven decision making. Predictive maintenance, automated quality control, and digital twin technology are helping manufacturers increase efficiency and reduce downtime. DeepLearnHQ delivers custom manufacturing technology solutions that modernize production processes and drive operational excellence.",
    services: [
      { title: "IoT & Smart Factory Solutions", description: "Connected machinery platforms with real-time monitoring, alerts, and performance analytics." },
      { title: "Quality Control Systems", description: "AI-powered visual inspection and automated quality assurance throughout the production line." },
      { title: "Production Planning Software", description: "Advanced planning and scheduling systems that optimize resource allocation and minimize waste." },
      { title: "Predictive Maintenance", description: "ML-based systems that predict equipment failures before they occur to reduce downtime." },
    ],
  },
  fashion: {
    title: "Fashion",
    description:
      "Fashion tech solutions including virtual try-on, inventory management, and fashion eCommerce platforms.",
    overview:
      "Fashion technology is transforming how brands design, produce, and sell clothing. Virtual try-on solutions, AI-powered trend forecasting, sustainable supply chain tracking, and personalized shopping experiences are becoming industry standards. DeepLearnHQ builds innovative fashion technology solutions that help brands stay ahead of trends, reduce waste, and create personalized customer experiences.",
    services: [
      { title: "Fashion eCommerce Platforms", description: "Visually rich online stores with size guides, styling recommendations, and seamless checkout." },
      { title: "Virtual Try-On Solutions", description: "AR-powered virtual fitting rooms that let customers try products before purchasing." },
      { title: "Inventory Management", description: "Multi-location inventory tracking with demand forecasting and automated reordering." },
      { title: "Brand Management Tools", description: "Digital asset management, lookbook creation, and wholesale order management platforms." },
    ],
  },
  food: {
    title: "Food",
    description:
      "FoodTech solutions including delivery apps, restaurant POS systems, and recipe management platforms.",
    overview:
      "The food industry is being transformed by technology at every level, from farm to table. Food delivery platforms, restaurant management systems, recipe apps, and supply chain solutions are changing how food is prepared, ordered, and delivered. DeepLearnHQ develops comprehensive food technology solutions that help restaurants, delivery services, and food businesses operate more efficiently and serve customers better.",
    services: [
      { title: "Food Delivery Platforms", description: "On-demand delivery apps with real-time tracking, restaurant dashboards, and driver management." },
      { title: "Restaurant POS Systems", description: "Modern POS solutions with menu management, order processing, and analytics dashboards." },
      { title: "Recipe & Menu Management", description: "Digital menu platforms with nutritional information, allergen tracking, and seasonal updates." },
      { title: "Food Safety & Compliance", description: "Digital food safety management systems with HACCP compliance and audit trail tracking." },
    ],
  },
  travel: {
    title: "Travel",
    description:
      "Travel tech solutions including booking engines, itinerary planners, and tourism management platforms.",
    overview:
      "Travel technology continues to evolve with AI-powered recommendations, virtual experiences, and seamless booking platforms. From OTA platforms and travel management tools to destination marketing and tour operator systems, technology is essential for modern travel businesses. DeepLearnHQ builds travel technology solutions that help companies deliver exceptional travel experiences and optimize their operations.",
    services: [
      { title: "Booking & Reservation Engines", description: "Multi-service booking platforms for flights, hotels, tours, and car rentals with GDS integration." },
      { title: "Itinerary Planning Tools", description: "Smart trip planners with AI-powered recommendations, budget tracking, and collaborative features." },
      { title: "Tourism Management Platforms", description: "Destination management systems for tour operators with scheduling and group management." },
      { title: "Travel Mobile Apps", description: "Feature-rich travel companion apps with offline maps, language tools, and local recommendations." },
    ],
  },
  legal: {
    title: "Legal",
    description:
      "LegalTech solutions including case management, document automation, and legal analytics platforms.",
    overview:
      "The legal industry is embracing digital transformation to improve efficiency, reduce costs, and enhance client service. Case management systems, document automation, contract analytics, and legal research tools are becoming essential for modern law practices. DeepLearnHQ develops legal technology solutions that help law firms, corporate legal departments, and legal startups streamline operations and deliver better outcomes.",
    services: [
      { title: "Case Management Systems", description: "Comprehensive platforms for managing cases, deadlines, documents, and client communications." },
      { title: "Document Automation", description: "Template-based document generation with smart fields, version control, and e-signature integration." },
      { title: "Contract Analytics", description: "AI-powered contract review and analysis tools that identify risks and extract key terms." },
      { title: "Legal Research Tools", description: "Intelligent legal research platforms with case law databases and citation analysis." },
    ],
  },
  agriculture: {
    title: "Agriculture",
    description:
      "AgriTech solutions including precision farming, crop monitoring, and supply chain management.",
    overview:
      "Agriculture technology is revolutionizing how food is grown, monitored, and distributed. Precision farming, drone-based crop monitoring, IoT soil sensors, and supply chain optimization are helping farmers increase yields while reducing resource consumption. DeepLearnHQ develops agricultural technology solutions that empower farmers and agribusinesses with data-driven insights and automation.",
    services: [
      { title: "Precision Farming Platforms", description: "Data-driven farming solutions with GPS mapping, variable rate application, and yield monitoring." },
      { title: "Crop Monitoring Systems", description: "Drone and satellite-based crop health monitoring with AI-powered disease detection." },
      { title: "Farm Management Software", description: "Comprehensive platforms for planning, record-keeping, financial management, and compliance." },
      { title: "Agricultural Supply Chain", description: "Farm-to-table traceability platforms with quality tracking and marketplace integration." },
    ],
  },
  "b2b-software": {
    title: "B2B Software",
    description:
      "Enterprise SaaS development including workflow automation, business intelligence, and integration platforms.",
    overview:
      "B2B software is the backbone of modern business operations. From SaaS platforms and workflow automation tools to business intelligence solutions and API integration platforms, enterprise software enables businesses to operate efficiently at scale. DeepLearnHQ develops robust B2B software solutions that help companies automate workflows, gain insights from data, and integrate disparate systems into cohesive platforms.",
    services: [
      { title: "SaaS Platform Development", description: "Multi-tenant SaaS applications with subscription management, analytics, and white-labeling." },
      { title: "Workflow Automation", description: "Custom automation tools that streamline business processes and eliminate manual tasks." },
      { title: "Business Intelligence", description: "Data analytics platforms with interactive dashboards, reporting, and predictive insights." },
      { title: "API & Integration Solutions", description: "Custom API development and third-party integration platforms for seamless data flow." },
    ],
  },
  crm: {
    title: "CRM",
    description:
      "Custom CRM development including sales automation, customer engagement, and analytics platforms.",
    overview:
      "Customer relationship management is critical for business success. Off-the-shelf CRM solutions often fall short of meeting unique business requirements. DeepLearnHQ develops custom CRM solutions that align perfectly with your sales processes, customer engagement strategies, and reporting needs. Our CRM systems help businesses manage leads, automate sales workflows, and build lasting customer relationships.",
    services: [
      { title: "Custom CRM Development", description: "Tailored CRM platforms built to match your specific sales processes and business workflows." },
      { title: "Sales Pipeline Automation", description: "Automated lead scoring, deal tracking, and sales forecasting with AI-powered insights." },
      { title: "Customer Engagement Tools", description: "Multi-channel communication platforms with email automation, chat, and social media integration." },
      { title: "CRM Analytics & Reporting", description: "Advanced reporting dashboards with customer segmentation, lifetime value analysis, and churn prediction." },
    ],
  },
};

export function generateStaticParams() {
  const shortSlugs = Object.keys(industriesData).map((slug) => ({ slug }));
  const longSlugs = Object.keys(slugAliases).map((slug) => ({ slug }));
  return [...shortSlugs, ...longSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = industriesData[resolveSlug(slug)];
  if (!data) {
    return { title: "Industry Not Found | DeepLearnHQ" };
  }
  return {
    title: `${data.title} Solutions | DeepLearnHQ`,
    description: data.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = industriesData[resolveSlug(slug)];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#faf9f8] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0C0D] mb-6">
                {data.title} Software Development Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {data.description}
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-3 shadow-sm flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">C</div>
              <div>
                <div className="flex items-center gap-1">
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-[#ff3d2e]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-6">
                Industry Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {data.overview}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#1E6FD9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1E6FD9] text-3xl font-bold">
                    {data.title[0]}
                  </span>
                </div>
                <p className="text-white font-semibold">{data.title}</p>
                <p className="text-gray-400 text-sm mt-1">
                  Technology Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for This Industry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
              Our {data.title} Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer specialized technology services tailored to the unique
              needs of the {data.title.toLowerCase()} industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {data.services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1E6FD9] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B0C0D] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your {data.title} Business?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our technology solutions can help your{" "}
            {data.title.toLowerCase()} business grow and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#1E6FD9] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#1859B3] transition-colors"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/services"
              className="border border-gray-700 text-white px-8 py-4 rounded-lg font-bold hover:border-[#1E6FD9] hover:text-[#1E6FD9] transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
