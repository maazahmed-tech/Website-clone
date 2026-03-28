import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      {/* Top CTA Section */}
      <section className="bg-[#111214] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block text-[#2ED06E] text-sm font-semibold tracking-widest uppercase mb-4">
            Pull the Trigger!
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">
            Let&apos;s bring your vision to life
          </h2>
          <Link
            href="/contact/"
            className="inline-block bg-[#2ED06E] hover:bg-[#26b35d] text-white font-semibold px-10 py-4 rounded-full transition-colors duration-300 text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Green Accent Divider */}
      <div className="h-[3px] bg-[#2ED06E]" />

      {/* Main Footer */}
      <div className="bg-[#0B0C0D] text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-14">
            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Testimonials", href: "/about/testimonial" },
                  { label: "Process", href: "/about/process" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-[#2ED06E] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: "Blog", href: "/blog" },
                  { label: "Events", href: "/events" },
                  { label: "Press Release", href: "/press-release" },
                  { label: "Work", href: "/work" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-[#2ED06E] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Services</h4>
              <ul className="space-y-3">
                {[
                  { label: "Mobile App", href: "/mobile-app-development" },
                  { label: "Game Development", href: "/game-development" },
                  { label: "Blockchain Development", href: "/blockchain-development" },
                  { label: "AI Development", href: "/artificial-intelligence" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-[#2ED06E] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Insights</h4>
              <ul className="space-y-3">
                {[
                  { label: "University", href: "/university" },
                  { label: "Careers", href: "/careers" },
                  { label: "Manifesto", href: "/about/manifesto" },
                  { label: "Culture Book", href: "/about" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-[#2ED06E] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider above locations */}
          <div className="h-px bg-gray-800 mb-14" />

          {/* Locations Section */}
          <div className="mb-14">
            {/* Locations Label with green dot */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#2ED06E] inline-block" />
              <span className="text-white text-sm font-semibold uppercase tracking-widest">
                Locations
              </span>
            </div>

            {/* 4-column Office Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* West Palm Beach */}
              <div>
                <h4 className="text-white font-bold text-xl mb-3">
                  West Palm Beach
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  560 Village Blvd., Suite 120 #3,
                  <br />
                  West Palm Beach, FL-33409,
                  <br />
                  United States
                </p>
              </div>

              {/* Manchester */}
              <div>
                <h4 className="text-white font-bold text-xl mb-3">
                  Manchester
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  73 Meadway, Bramhall Stockport,
                  <br />
                  Manchester - SK7 1LX,
                  <br />
                  United Kingdom
                </p>
              </div>

              {/* Dubai */}
              <div>
                <h4 className="text-white font-bold text-xl mb-3">
                  Dubai
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  IFZA Business Park,
                  <br />
                  Dubai Silicon Oasis, DXB-75900,
                  <br />
                  United Arab Emirates
                </p>
              </div>

              {/* Karachi */}
              <div>
                <h4 className="text-white font-bold text-xl mb-3">
                  Karachi
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  54C, Kashmir Road, Block 2, PECHS,
                  <br />
                  Karachi, Sindh - 75400,
                  <br />
                  Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800 mb-8" />

          {/* Bottom Row: Contact | Centered Logo | Social + Legal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Contact label + info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#2ED06E] inline-block" />
                <span className="text-white text-sm font-semibold uppercase tracking-widest">
                  Contact
                </span>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:866-978-2220"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#2ED06E] transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#2ED06E]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  866-978-2220
                </a>
                <a
                  href="mailto:info@deeplearnhq.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#2ED06E] transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-[#2ED06E]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  info@deeplearnhq.com
                </a>
              </div>
            </div>

            {/* Center: Logo + Copyright */}
            <div className="flex flex-col items-center text-center">
              <Link href="/" aria-label="DeepLearnHQ Home">
                <img
                  src="/images/brand/logo-white.png"
                  alt="DeepLearnHQ"
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-xs text-gray-500 mt-3">
                &copy; 2026 DeepLearnHQ. All Rights Reserved
              </p>
            </div>

            {/* Right: Social + Privacy/Terms */}
            <div className="flex flex-col items-end gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/cubaboratory/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2ED06E] hover:bg-[#2ED06E]/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com/cubaboratory"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2ED06E] hover:bg-[#2ED06E]/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/cubaboratory/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2ED06E] hover:bg-[#2ED06E]/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Dribbble */}
                <a
                  href="https://dribbble.com/cubix"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2ED06E] hover:bg-[#2ED06E]/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-9.36c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.61 14.545 1.62 12 1.62c-.83 0-1.634.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.478-5.69 4.012.22.45.43.908.63 1.372.07.162.13.322.2.48 3.41-.427 6.793.265 7.13.338-.02-2.39-.88-4.58-2.27-6.2z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/cubaboratory"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#2ED06E] hover:bg-[#2ED06E]/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              {/* Privacy / Terms */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <Link
                  href="/privacy-policy/"
                  className="hover:text-[#2ED06E] transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-700">|</span>
                <Link
                  href="/terms-of-use/"
                  className="hover:text-[#2ED06E] transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
