"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface NavLink {
  label: string;
  href: string;
  green?: boolean; // for green-colored links
}

interface MegaColumn {
  heading: string;
  links: NavLink[];
}

const servicesMenu: MegaColumn[] = [
  {
    heading: "Mobile App",
    links: [
      { label: "iOS App", href: "/iphone-app-development" },
      { label: "Android App", href: "/android-app-development" },
      { label: "eCommerce App", href: "/ecommerce-app-development" },
      { label: "visionOS App", href: "/visionos-development" },
      { label: "Enterprise App", href: "/enterprise-app-development" },
      { label: "Flutter App", href: "/flutter-app-development" },
      { label: "React Native", href: "/react-native-app-development" },
      { label: "Ionic App", href: "/ionic-app-development" },
      { label: "OnDemand App", href: "/on-demand-app-development" },
    ],
  },
  {
    heading: "Software Development",
    links: [
      { label: "Software Consulting", href: "/software-consulting-services" },
      { label: "System Integration", href: "/system-integration-services" },
      { label: "Software Design", href: "/software-design-services" },
      { label: "Software Testing", href: "/software-testing-services" },
      { label: "Software Maintenance & Support", href: "/software-maintenance-support" },
      { label: "Software Product Development", href: "/software-product-development" },
      { label: "Custom API Development", href: "/custom-api-development-services", green: true },
      { label: "IoT Software Development", href: "/iot-app-development" },
      { label: "Web App Development", href: "/web-application-development" },
      { label: "Web Development", href: "/web-development" },
      { label: "Custom Web Development", href: "/custom-web-development-services" },
    ],
  },
  {
    heading: "Blockchain Development",
    links: [
      { label: "Blockchain Protocol", href: "/blockchain-protocol-development" },
      { label: "Crypto Bank Development", href: "/crypto-bank-development" },
      { label: "Crypto Wallet Development", href: "/crypto-wallet-development" },
      { label: "Smart Contract Development", href: "/smart-contract-development" },
      { label: "Defi Staking Platform", href: "/defi-staking-platform" },
      { label: "Decentralized Exchange", href: "/decentralized-exchange-development" },
      { label: "Digital Assets Development", href: "/digital-assets-development" },
      { label: "Stablecoin Development", href: "/stablecoin-development" },
      { label: "NFT Development Services", href: "/nft-development-services" },
      { label: "NFT Marketplace Development", href: "/nft-marketplace-development" },
      { label: "DApp Development", href: "/dapp-development-service" },
      { label: "Web3 Development", href: "/web3-development" },
    ],
  },
  {
    heading: "Game Development",
    links: [
      { label: "Mobile Game", href: "/mobile-game-development" },
      { label: "Unity Game", href: "/unity-game-development" },
      { label: "Unreal Game", href: "/unreal-game-development" },
      { label: "Blockchain Game", href: "/blockchain-game-development" },
      { label: "2D Game", href: "/2d-game-development" },
      { label: "3D Game", href: "/3d-game-development" },
      { label: "Web3 Game", href: "/web3-game-development" },
      { label: "Multiplayer Game", href: "/multiplayer-game-development" },
      { label: "Game Testing", href: "/game-development" },
      { label: "See All Games", href: "/game-development", green: true },
    ],
  },
  {
    heading: "Cloud Strategy",
    links: [
      { label: "AWS", href: "/aws-development-services" },
      { label: "DevOps", href: "/devops-software-development-services" },
    ],
  },
];

const technologiesList = [
  "React", "Angular", "Vue", "Node.js", "Python", "Swift", "Kotlin", "Flutter", "AWS", "Azure",
];

const industriesMenu: NavLink[] = [
  { label: "Automotive", href: "/industries/automotive-software-development" },
  { label: "B2B Software", href: "/industries/b2b-software-development" },
  { label: "Healthcare", href: "/industries/healthcare-software-development" },
  { label: "Education", href: "/industries/education-software-development" },
  { label: "Ecommerce", href: "/industries/ecommerce-software-development" },
  { label: "Food", href: "/industries/foodtech-software-development" },
  { label: "Travel", href: "/industries/travel-software-development" },
  { label: "Fashion and Apparel", href: "/industries/fashion-software-development" },
  { label: "CRM Development", href: "/industries/crm-development-services" },
  { label: "Logistics", href: "/industries/logistics-software-development" },
  { label: "Manufacturing", href: "/industries/manufacturing-software-solutions" },
  { label: "Legal", href: "/industries/legal-software-development" },
  { label: "Agriculture", href: "/industries/agriculture-software-development" },
  { label: "Finance", href: "/industries/finance-software-development" },
  { label: "Real Estate", href: "/industries/real-estate-software-development" },
  { label: "Hospitality", href: "/industries/hospitality-software-development" },
];

interface CompanySection {
  heading: string;
  links: NavLink[];
}

const companyMenu: CompanySection[] = [
  {
    heading: "About",
    links: [
      { label: "Process", href: "/about/process" },
      { label: "Careers", href: "/careers" },
      { label: "Clients", href: "/about/clients" },
      { label: "University", href: "/university" },
      { label: "Testimonials", href: "/about/testimonial" },
      { label: "Manifesto", href: "/about/manifesto" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "News & Updates", href: "/news" },
      { label: "Press Release", href: "/press-release" },
      { label: "Events", href: "/events" },
    ],
  },
];

const companyMenuFlat: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/about/process" },
  { label: "Careers", href: "/careers" },
  { label: "Clients", href: "/about/clients" },
  { label: "University", href: "/university" },
  { label: "Testimonials", href: "/about/testimonial" },
  { label: "Manifesto", href: "/about/manifesto" },
  { label: "Blog", href: "/blog" },
  { label: "News & Updates", href: "/news" },
  { label: "Press Release", href: "/press-release" },
  { label: "Events", href: "/events" },
];

const solutionsMenu: NavLink[] = [
  { label: "DeepLearnHQ HappyForce", href: "/solutions/deeplearnhq-happyforce" },
  { label: "DeepLearnHQ Hero", href: "/solutions/deeplearnhq-hero" },
  { label: "DeepLearnHQ Shop", href: "/solutions/deeplearnhq-shop" },
  { label: "DeepLearnHQ Messenger", href: "/solutions/messenger-app" },
  { label: "On-Demand Delivery", href: "/solutions/on-demand-delivery-platform" },
  { label: "Chat Bot", href: "/solutions/chat-bot" },
  { label: "DeepLearnHQ Chain", href: "/solutions/deeplearnhq-chain" },
  { label: "Social Platform", href: "/solutions/social-platform" },
  { label: "DeepLearnHQ Insight Machine", href: "/solutions/deeplearnhq-insight-machine" },
  { label: "Event Management", href: "/solutions/event-management-platform" },
];

type DropdownKey = "services" | "industries" | "company" | "solutions";

/* ------------------------------------------------------------------ */
/*  SVG ICONS                                                          */
/* ------------------------------------------------------------------ */

function DeepLearnLogo() {
  return (
    <img
      src="/images/brand/logo-white.png"
      alt="DeepLearnHQ"
      className="h-8 w-auto"
    />
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GreenArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="#1E6FD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  SIDEBAR COMPONENT for mega menus                                   */
/* ------------------------------------------------------------------ */

function DropdownSidebar({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="w-[160px] flex-shrink-0 border-r border-gray-200 pr-4">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-bold text-[#0B0C0D]">{title}</h3>
        <GreenArrowIcon />
      </div>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownKey | null>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* dropdown hover handlers with delay */
  const showDropdown = useCallback((key: DropdownKey) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setActiveDropdown(key);
  }, []);

  const hideDropdown = useCallback(() => {
    hideTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const toggleMobileAccordion = (key: DropdownKey) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  /* ---- renderers ---- */

  const renderServicesMega = () => (
    <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
        {/* Left Sidebar */}
        <DropdownSidebar title="Services">
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {technologiesList.map((tech) => (
                <span key={tech} className="text-[11px] text-gray-500 bg-gray-100 rounded px-1.5 py-0.5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DropdownSidebar>

        {/* Columns */}
        <div className="flex-1 grid grid-cols-5 gap-4">
          {servicesMenu.map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold text-[#0B0C0D] text-xs mb-2">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-[12px] leading-snug transition-colors duration-200 ${
                        link.green
                          ? "text-[#1E6FD9] hover:text-[#15509E]"
                          : "text-gray-500 hover:text-[#0B0C0D]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIndustriesMega = () => (
    <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Left Sidebar */}
        <DropdownSidebar title="Industries" />

        {/* Columns */}
        <div className="flex-1 grid grid-cols-4 gap-x-6 gap-y-3">
          {industriesMenu.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-500 hover:text-[#0B0C0D] text-sm py-1.5 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSolutionsMega = () => (
    <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Left Sidebar */}
        <DropdownSidebar title="Solutions" />

        {/* Columns */}
        <div className="flex-1 grid grid-cols-4 gap-x-6 gap-y-3">
          {solutionsMenu.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-500 hover:text-[#0B0C0D] text-sm py-1.5 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCompanyMega = () => (
    <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Left Sidebar */}
        <DropdownSidebar title="Company" />

        {/* Columns with green dots */}
        <div className="flex-1 flex gap-16">
          {companyMenu.map((section) => (
            <div key={section.heading}>
              <h4 className="font-bold text-[#0B0C0D] text-xs mb-2">{section.heading}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FD9] flex-shrink-0" />
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[#0B0C0D] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Partner logos section */}
          <div className="ml-auto max-w-[260px]">
            <p className="text-sm text-gray-500 mb-4">
              We partner with the world&apos;s technology leaders.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {["Google", "Adobe", "Amazon", "Microsoft"].map((partner) => (
                <span
                  key={partner}
                  className="text-xs font-semibold text-gray-400 bg-gray-100 rounded px-3 py-1.5"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* ---- mobile accordion renderers ---- */

  const renderMobileServicesAccordion = () => (
    <div className="pl-4 pb-4 space-y-4">
      {servicesMenu.map((col) => (
        <div key={col.heading}>
          <h4 className="text-[#1E6FD9] font-semibold text-xs mb-2 uppercase tracking-wider">
            {col.heading}
          </h4>
          <ul className="space-y-1">
            {col.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-300 hover:text-white text-sm py-1 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderMobileLinksAccordion = (items: NavLink[]) => (
    <div className="pl-4 pb-3 space-y-1">
      {items.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className="block text-gray-300 hover:text-white text-sm py-1.5 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  /* ---- main render ---- */

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 font-[Manrope,sans-serif] ${
          scrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <DeepLearnLogo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services */}
              <div
                onMouseEnter={() => showDropdown("services")}
                onMouseLeave={hideDropdown}
              >
                <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-white hover:text-[#1E6FD9] transition-colors duration-200 font-medium">
                  Services
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Industries */}
              <div
                onMouseEnter={() => showDropdown("industries")}
                onMouseLeave={hideDropdown}
              >
                <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-white hover:text-[#1E6FD9] transition-colors duration-200 font-medium">
                  Industries
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      activeDropdown === "industries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Work */}
              <Link
                href="/work"
                className="px-3 py-2 text-sm text-white hover:text-[#1E6FD9] transition-colors duration-200 font-medium"
              >
                Work
              </Link>

              {/* Company */}
              <div
                onMouseEnter={() => showDropdown("company")}
                onMouseLeave={hideDropdown}
              >
                <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-white hover:text-[#1E6FD9] transition-colors duration-200 font-medium">
                  Company
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      activeDropdown === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Solutions */}
              <div
                onMouseEnter={() => showDropdown("solutions")}
                onMouseLeave={hideDropdown}
              >
                <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-white hover:text-[#1E6FD9] transition-colors duration-200 font-medium">
                  Solutions
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      activeDropdown === "solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "solutions" && renderSolutionsMega()}
              </div>

              {/* Contact (nav link) */}
              <Link
                href="/contact"
                className="px-3 py-2 text-sm text-white hover:text-[#1E6FD9] transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Right side CTA area */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href="tel:8669782220"
                className="flex items-center gap-2 text-white hover:text-[#1E6FD9] transition-colors text-sm font-medium"
              >
                <PhoneIcon />
                <span>866-978-2220</span>
              </a>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="inline-flex items-center border border-white text-white hover:bg-white hover:text-black rounded-md px-5 py-2 font-semibold text-sm transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>

        {/* Edge-to-edge dropdown panels rendered at header level */}
        {activeDropdown === "services" && (
          <div onMouseEnter={() => showDropdown("services")} onMouseLeave={hideDropdown}>
            {renderServicesMega()}
          </div>
        )}
        {activeDropdown === "industries" && (
          <div onMouseEnter={() => showDropdown("industries")} onMouseLeave={hideDropdown}>
            {renderIndustriesMega()}
          </div>
        )}
        {activeDropdown === "company" && (
          <div onMouseEnter={() => showDropdown("company")} onMouseLeave={hideDropdown}>
            {renderCompanyMega()}
          </div>
        )}
        {activeDropdown === "solutions" && (
          <div onMouseEnter={() => showDropdown("solutions")} onMouseLeave={hideDropdown}>
            {renderSolutionsMega()}
          </div>
        )}
      </header>

      {/* ---- Mobile Overlay ---- */}
      {mobileOpen && (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          backgroundColor: '#0d0d0d',
        }}
        className="font-[Manrope,sans-serif]"
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-4 h-[72px] border-b border-white/10">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <DeepLearnLogo />
          </Link>
          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Mobile nav */}
        <nav className="overflow-y-auto h-[calc(100vh-72px)] px-4 py-6">
          {/* Services accordion */}
          <div className="border-b border-white/10 pb-2 mb-2">
            <button
              onClick={() => toggleMobileAccordion("services")}
              className="flex items-center justify-between w-full py-3 text-white text-base font-medium"
            >
              Services
              <ChevronDown
                className={`transition-transform duration-200 ${
                  mobileAccordion === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              style={{
                maxHeight: mobileAccordion === "services" ? '2000px' : '0',
                opacity: mobileAccordion === "services" ? 1 : 0,
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {renderMobileServicesAccordion()}
            </div>
          </div>

          {/* Industries accordion */}
          <div className="border-b border-white/10 pb-2 mb-2">
            <button
              onClick={() => toggleMobileAccordion("industries")}
              className="flex items-center justify-between w-full py-3 text-white text-base font-medium"
            >
              Industries
              <ChevronDown
                className={`transition-transform duration-200 ${
                  mobileAccordion === "industries" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              style={{
                maxHeight: mobileAccordion === "industries" ? '800px' : '0',
                opacity: mobileAccordion === "industries" ? 1 : 0,
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {renderMobileLinksAccordion(industriesMenu)}
            </div>
          </div>

          {/* Work */}
          <div className="border-b border-white/10 pb-2 mb-2">
            <Link
              href="/work"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white text-base font-medium"
            >
              Work
            </Link>
          </div>

          {/* Company accordion */}
          <div className="border-b border-white/10 pb-2 mb-2">
            <button
              onClick={() => toggleMobileAccordion("company")}
              className="flex items-center justify-between w-full py-3 text-white text-base font-medium"
            >
              Company
              <ChevronDown
                className={`transition-transform duration-200 ${
                  mobileAccordion === "company" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              style={{
                maxHeight: mobileAccordion === "company" ? '400px' : '0',
                opacity: mobileAccordion === "company" ? 1 : 0,
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {renderMobileLinksAccordion(companyMenuFlat)}
            </div>
          </div>

          {/* Solutions accordion */}
          <div className="border-b border-white/10 pb-2 mb-2">
            <button
              onClick={() => toggleMobileAccordion("solutions")}
              className="flex items-center justify-between w-full py-3 text-white text-base font-medium"
            >
              Solutions
              <ChevronDown
                className={`transition-transform duration-200 ${
                  mobileAccordion === "solutions" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              style={{
                maxHeight: mobileAccordion === "solutions" ? '300px' : '0',
                opacity: mobileAccordion === "solutions" ? 1 : 0,
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {renderMobileLinksAccordion(solutionsMenu)}
            </div>
          </div>

          {/* Contact */}
          <div className="border-b border-white/10 pb-2 mb-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white text-base font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA area */}
          <div className="mt-8 space-y-4">
            <a
              href="tel:8669782220"
              className="flex items-center justify-center gap-2 text-white hover:text-[#1E6FD9] transition-colors text-base font-medium"
            >
              <PhoneIcon />
              <span>866-978-2220</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center border border-white text-white hover:bg-white hover:text-black rounded-md px-5 py-3 font-semibold text-base transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
      )}
    </>
  );
}
