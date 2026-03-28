"use client";

import { useState, type FormEvent } from "react";

const offices = [
  {
    city: "West Palm Beach",
    country: "USA",
    address: "1645 Palm Beach Lakes Blvd, Suite 1200, West Palm Beach, FL 33401",
    phone: "+1 866-978-2220",
  },
  {
    city: "Manchester",
    country: "UK",
    address: "Peter House, Oxford Street, Manchester, M1 5AN",
    phone: "+44 161 818 7522",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "Office 1205, Citadel Tower, Business Bay, Dubai",
    phone: "+971 4 580 3360",
  },
  {
    city: "Karachi",
    country: "Pakistan",
    address: "Plot 14-C, Main Shahrah-e-Faisal, Karachi 75400",
    phone: "+92 21 111 282 949",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email";
    }
    if (!phone.trim()) errs.phone = "Phone is required";
    if (!message.trim()) errs.message = "Message is required";
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
      {/* Hero Section - Light background with 2-column layout */}
      <section className="bg-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title & Description */}
            <div className="pt-8">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-black leading-tight mb-6">
                Got an idea for
                <br />
                your project?
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We&apos;d love to learn more about you and what we can design
                and build together.
              </p>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name - Full Width */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Name*
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-100 text-black rounded-lg border ${
                        errors.name ? "border-red-500" : "border-transparent"
                      } focus:outline-none focus:border-gray-300 transition-colors placeholder-gray-400`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Phone - Side by Side */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email*
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-100 text-black rounded-lg border ${
                          errors.email
                            ? "border-red-500"
                            : "border-transparent"
                        } focus:outline-none focus:border-gray-300 transition-colors placeholder-gray-400`}
                        placeholder="Your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-100 text-black rounded-lg border ${
                          errors.phone
                            ? "border-red-500"
                            : "border-transparent"
                        } focus:outline-none focus:border-gray-300 transition-colors placeholder-gray-400`}
                        placeholder="Your phone"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message - Full Width Textarea */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message*
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className={`w-full px-4 py-3 bg-gray-100 text-black rounded-lg border ${
                        errors.message ? "border-red-500" : "border-transparent"
                      } focus:outline-none focus:border-gray-300 transition-colors placeholder-gray-400 resize-none`}
                      placeholder="Your message"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              Find your team among{" "}
              <span className="font-semibold text-black">350 specialists</span>{" "}
              in{" "}
              <span className="font-semibold text-black">4 offices</span> from{" "}
              <span className="font-semibold text-black">3 countries</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-black mb-1">
                  {office.city}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{office.country}</p>
                <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                <p className="text-sm text-gray-600">{office.phone}</p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-8 border-t border-gray-100">
            <a
              href="mailto:info@deeplearnhq.com"
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              info@deeplearnhq.com
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a
              href="tel:8669782220"
              className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              866-978-2220
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
