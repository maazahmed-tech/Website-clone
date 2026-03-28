"use client";

import { useState, useEffect, useRef } from "react";

interface Tech {
  name: string;
  color: string;
  abbr: string;
}

const tabs: Record<string, Tech[]> = {
  Mobile: [
    { name: "Swift", color: "#F05138", abbr: "Sw" },
    { name: "Kotlin", color: "#7F52FF", abbr: "Kt" },
    { name: "React Native", color: "#61DAFB", abbr: "RN" },
    { name: "Flutter", color: "#02569B", abbr: "Fl" },
    { name: "SwiftUI", color: "#0071E3", abbr: "SU" },
    { name: "Jetpack Compose", color: "#4285F4", abbr: "JC" },
    { name: "Ionic", color: "#3880FF", abbr: "Io" },
    { name: "Xamarin", color: "#3498DB", abbr: "Xa" },
  ],
  Frontend: [
    { name: "React", color: "#61DAFB", abbr: "Re" },
    { name: "Next.js", color: "#000000", abbr: "Nx" },
    { name: "Angular", color: "#DD0031", abbr: "Ng" },
    { name: "Vue.js", color: "#4FC08D", abbr: "Vu" },
    { name: "TypeScript", color: "#3178C6", abbr: "TS" },
    { name: "Tailwind CSS", color: "#06B6D4", abbr: "TW" },
    { name: "HTML5", color: "#E34F26", abbr: "H5" },
    { name: "Sass", color: "#CC6699", abbr: "Sa" },
  ],
  Backend: [
    { name: "Node.js", color: "#339933", abbr: "Nd" },
    { name: "Python", color: "#3776AB", abbr: "Py" },
    { name: "Django", color: "#092E20", abbr: "Dj" },
    { name: ".NET", color: "#512BD4", abbr: ".N" },
    { name: "Java Spring", color: "#6DB33F", abbr: "Sp" },
    { name: "Ruby on Rails", color: "#CC0000", abbr: "RR" },
    { name: "PHP", color: "#777BB4", abbr: "PH" },
    { name: "Go", color: "#00ADD8", abbr: "Go" },
  ],
  Database: [
    { name: "PostgreSQL", color: "#4169E1", abbr: "Pg" },
    { name: "MongoDB", color: "#47A248", abbr: "Mg" },
    { name: "MySQL", color: "#4479A1", abbr: "My" },
    { name: "Redis", color: "#DC382D", abbr: "Rd" },
    { name: "Firebase", color: "#FFCA28", abbr: "Fb" },
    { name: "DynamoDB", color: "#4053D6", abbr: "Dy" },
    { name: "Elasticsearch", color: "#005571", abbr: "Es" },
    { name: "Cassandra", color: "#1287B1", abbr: "Ca" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", color: "#FF9900", abbr: "AW" },
    { name: "Azure", color: "#0078D4", abbr: "Az" },
    { name: "GCP", color: "#4285F4", abbr: "GC" },
    { name: "Docker", color: "#2496ED", abbr: "Dk" },
    { name: "Kubernetes", color: "#326CE5", abbr: "K8" },
    { name: "Terraform", color: "#7B42BC", abbr: "Tf" },
    { name: "CI/CD", color: "#FC6D26", abbr: "CI" },
    { name: "Jenkins", color: "#D24939", abbr: "Jk" },
  ],
};

const tabKeys = Object.keys(tabs);

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setFadeKey((prev) => prev + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
            OUR TECH STACK
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C0D]">
            Technologies we use
          </h2>
        </div>

        {/* Tabs on left, tech grid on right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: vertical tab list */}
          <div className="lg:w-56 shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {tabKeys.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-5 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap text-left ${
                    activeTab === tab
                      ? "bg-[#1E6FD9] text-white shadow-md shadow-[#1E6FD9]/30"
                      : "bg-gray-100 text-gray-600 hover:text-[#1E6FD9] hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right: tech badges grid */}
          <div className="flex-1">
            <div
              key={fadeKey}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fadeIn"
            >
              {tabs[activeTab].map((tech, index) => (
                <div
                  key={`${activeTab}-${tech.name}`}
                  className="group bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#1E6FD9] hover:shadow-md transition-all duration-300 animate-slideUp"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.abbr}
                  </div>
                  <span className="font-semibold text-[#0B0C0D] text-sm whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
