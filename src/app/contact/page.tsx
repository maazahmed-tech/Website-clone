"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const offices = [
  {
    city: "West Palm Beach",
    country: "USA",
    address: "1645 Palm Beach Lakes Blvd, Suite 1200, FL 33401",
    phone: "+1 866-978-2220",
  },
  {
    city: "Manchester",
    country: "UK",
    address: "Peter House, Oxford Street, M1 5AN",
    phone: "+44 161 818 7522",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "Office 1205, Citadel Tower, Business Bay",
    phone: "+971 4 580 3360",
  },
  {
    city: "Karachi",
    country: "Pakistan",
    address: "Plot 14-C, Main Shahrah-e-Faisal, 75400",
    phone: "+92 21 111 282 949",
  },
];

const socials = [
  { name: "Facebook", href: "https://facebook.com/cubaborainc" },
  { name: "Twitter", href: "https://twitter.com/cubaborainc" },
  { name: "LinkedIn", href: "https://linkedin.com/company/cubix-co" },
  { name: "Instagram", href: "https://instagram.com/cubaborainc" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0B0C0D] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#2ED06E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-[#2ED06E]">Us</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Have a project in mind? Let&apos;s talk about how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#2ED06E]/10 border border-[#2ED06E] rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-[#2ED06E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <h3 className="text-2xl font-bold text-[#0B0C0D] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#0B0C0D] mb-6">
                    Send Us a Message
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-[#0B0C0D] text-white rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-700"
                        } focus:outline-none focus:border-[#2ED06E] transition-colors placeholder-gray-500`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 bg-[#0B0C0D] text-white rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-700"
                        } focus:outline-none focus:border-[#2ED06E] transition-colors placeholder-gray-500`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#0B0C0D] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#2ED06E] transition-colors placeholder-gray-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#0B0C0D] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#2ED06E] transition-colors placeholder-gray-500"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0B0C0D] text-white rounded-lg border border-gray-700 focus:outline-none focus:border-[#2ED06E] transition-colors"
                    >
                      <option value="" className="text-gray-500">
                        Select your budget range
                      </option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k+">$250,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className={`w-full px-4 py-3 bg-[#0B0C0D] text-white rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:outline-none focus:border-[#2ED06E] transition-colors placeholder-gray-500 resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#2ED06E] text-[#0B0C0D] px-8 py-4 rounded-lg font-bold hover:bg-[#25b35d] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-[#0B0C0D] rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#2ED06E] mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">866-978-2220</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#2ED06E] mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">info@cubix.co</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-[#0B0C0D] rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="border-b border-gray-800 last:border-0 pb-4 last:pb-0"
                    >
                      <p className="text-white font-medium text-sm">
                        {office.city},{" "}
                        <span className="text-[#2ED06E]">
                          {office.country}
                        </span>
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {office.address}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {office.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#0B0C0D] rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#2ED06E] hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <span className="text-xs font-bold">
                        {social.name[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
