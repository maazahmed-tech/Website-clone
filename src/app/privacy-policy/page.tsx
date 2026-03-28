import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DeepLearnHQ",
  description:
    "Read our privacy policy to understand how DeepLearnHQ collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0B0C0D] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Privacy <span className="text-[#1E6FD9]">Policy</span>
          </h1>
          <p className="text-gray-400 mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  DeepLearnHQ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                  committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website deeplearnhq.com, use our
                  services, or interact with us in any way. Please read this
                  policy carefully. If you do not agree with the terms of this
                  privacy policy, please do not access our website or use our
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect information about you in a variety of ways. The
                  information we may collect includes:
                </p>
                <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                  Personal Data
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Personally identifiable information, such as your name,
                  shipping address, email address, telephone number, and
                  demographic information that you voluntarily give to us when
                  you register with us or when you choose to participate in
                  various activities related to our website and services.
                </p>
                <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                  Derivative Data
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Information our servers automatically collect when you access
                  the website, such as your IP address, browser type, operating
                  system, access times, and the pages you have viewed directly
                  before and after accessing the website.
                </p>
                <h3 className="text-lg font-semibold text-[#0B0C0D] mb-2">
                  Financial Data
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Financial information, such as data related to your payment
                  method, that we may collect when you purchase, order, or
                  request information about our services. We store only very
                  limited financial information that we collect. All payment
                  processing is handled by our third-party payment processors.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  3. Use of Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Having accurate information about you permits us to provide
                  you with a smooth, efficient, and customized experience.
                  Specifically, we may use information collected about you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Create and manage your account</li>
                  <li>Process transactions and deliver services</li>
                  <li>Email you regarding your account or project</li>
                  <li>
                    Send you marketing and promotional communications (with your
                    consent)
                  </li>
                  <li>Improve our website and services</li>
                  <li>Monitor and analyze usage and trends</li>
                  <li>
                    Prevent fraudulent transactions and protect against criminal
                    activity
                  </li>
                  <li>Respond to customer service requests</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  4. Disclosure of Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share information we have collected about you in
                  certain situations. Your information may be disclosed as
                  follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>
                    <strong>By Law or to Protect Rights:</strong> If we believe
                    the release of information is necessary to respond to legal
                    process or to protect the rights, property, and safety of
                    others.
                  </li>
                  <li>
                    <strong>Third-Party Service Providers:</strong> We may share
                    your information with third parties that perform services for
                    us, including payment processing, data analysis, email
                    delivery, and hosting services.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> We may share or transfer
                    your information in connection with a merger, acquisition, or
                    sale of all or a portion of our assets.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  5. Security of Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We use administrative, technical, and physical security
                  measures to help protect your personal information. While we
                  have taken reasonable steps to secure the personal information
                  you provide to us, please be aware that despite our efforts,
                  no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any
                  interception or other type of misuse.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use cookies, web beacons, tracking pixels, and other
                  tracking technologies on our website to help customize the
                  website and improve your experience. You can choose to have
                  your computer warn you each time a cookie is being sent, or
                  you can choose to turn off all cookies through your browser
                  settings. If you turn cookies off, some features may not
                  function properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  7. Your Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>The right to access your personal data</li>
                  <li>The right to rectify inaccurate personal data</li>
                  <li>The right to erasure of your personal data</li>
                  <li>The right to restrict processing of your personal data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your personal data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                  8. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions or comments about this Privacy Policy,
                  please contact us at:
                </p>
                <div className="mt-4 bg-gray-50 rounded-xl p-6">
                  <p className="text-[#0B0C0D] font-semibold">DeepLearnHQ</p>
                  <p className="text-gray-600 text-sm mt-1">
                    1645 Palm Beach Lakes Blvd, Suite 1200
                  </p>
                  <p className="text-gray-600 text-sm">
                    West Palm Beach, FL 33401
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Email: info@deeplearnhq.com
                  </p>
                  <p className="text-gray-600 text-sm">
                    Phone: 866-978-2220
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
