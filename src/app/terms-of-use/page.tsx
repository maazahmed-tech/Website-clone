import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | DeepLearnHQ",
  description:
    "Read the terms and conditions governing your use of the DeepLearnHQ website and services.",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0B0C0D] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#2ED06E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Terms of Use</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terms of <span className="text-[#2ED06E]">Use</span>
          </h1>
          <p className="text-gray-400 mt-4">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the DeepLearnHQ website (deeplearnhq.com) and our
                services, you agree to be bound by these Terms of Use. If you
                do not agree to all of the terms and conditions set forth
                herein, then you should not use our website or services. These
                Terms of Use apply to all visitors, users, and others who
                access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                2. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Unless otherwise indicated, the website and all content,
                features, and functionality thereof, including but not limited
                to all information, software, text, displays, images, video,
                and audio, and the design, selection, and arrangement thereof,
                are owned by DeepLearnHQ, its licensors, or other providers of such
                material and are protected by copyright, trademark, patent,
                trade secret, and other intellectual property or proprietary
                rights laws. You must not reproduce, distribute, modify, create
                derivative works of, publicly display, publicly perform,
                republish, download, store, or transmit any of the material on
                our website without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                3. User Representations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By using the website, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  All registration information you submit will be true,
                  accurate, current, and complete
                </li>
                <li>
                  You will maintain the accuracy of such information and
                  promptly update such registration information as necessary
                </li>
                <li>
                  You have the legal capacity and you agree to comply with
                  these Terms of Use
                </li>
                <li>
                  You are not a minor in the jurisdiction in which you reside
                </li>
                <li>
                  You will not use the website for any illegal or unauthorized
                  purpose
                </li>
                <li>
                  Your use of the website will not violate any applicable law
                  or regulation
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                4. Services and Projects
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All services provided by DeepLearnHQ are subject to separate service
                agreements, statements of work, or contracts that will be
                agreed upon between DeepLearnHQ and the client. The scope,
                deliverables, timeline, and pricing for any project will be
                defined in the applicable service agreement. DeepLearnHQ reserves the
                right to refuse service to anyone for any reason at any time.
                Project timelines and deliverables are estimates and may vary
                based on project complexity and client responsiveness.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                5. Prohibited Activities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not access or use the website for any purpose other
                than that for which we make the website available. The website
                may not be used in connection with any commercial endeavors
                except those that are specifically endorsed or approved by us.
                As a user of the website, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  Systematically retrieve data or other content from the
                  website to create or compile a collection, compilation,
                  database, or directory
                </li>
                <li>
                  Make any unauthorized use of the website, including
                  collecting usernames and/or email addresses of users
                </li>
                <li>
                  Use the website to advertise or offer to sell goods and
                  services without our express permission
                </li>
                <li>
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the website
                </li>
                <li>
                  Engage in unauthorized framing of or linking to the website
                </li>
                <li>
                  Attempt to impersonate another user or person or use the
                  username of another user
                </li>
                <li>
                  Upload or transmit viruses, Trojan horses, or other material
                  that interferes with any party&apos;s uninterrupted use of
                  the website
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall DeepLearnHQ, its directors, employees, partners,
                agents, suppliers, or affiliates be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the website
                or services; any conduct or content of any third party on the
                website; any content obtained from the website; and
                unauthorized access, use, or alteration of your transmissions
                or content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                7. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys&apos; fees and expenses, made by any third party due
                to or arising out of your use of the website, breach of these
                Terms of Use, or any breach of your representations and
                warranties set forth herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                8. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Florida, United States, without
                regard to its conflict of law provisions. Our failure to
                enforce any right or provision of these Terms will not be
                considered a waiver of those rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion. By continuing to access or
                use our website after those revisions become effective, you
                agree to be bound by the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0B0C0D] mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Use, please
                contact us:
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
                <p className="text-gray-600 text-sm">Phone: 866-978-2220</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
