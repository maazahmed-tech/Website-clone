"use client";

import { useState, useEffect, useRef } from "react";

interface Tech {
  name: string;
  color: string;
  abbr: string;
}

const tabs: Record<string, Tech[]> = {
  iOS: [
    { name: "Swift", color: "#F05138", abbr: "Sw" },
    { name: "SwiftUI", color: "#0071E3", abbr: "SU" },
    { name: "UIKit", color: "#2396F3", abbr: "UK" },
    { name: "RxSwift", color: "#B7178C", abbr: "Rx" },
    { name: "Combine", color: "#5856D6", abbr: "Cb" },
    { name: "MVVM", color: "#6D28D9", abbr: "MV" },
    { name: "Alamofire", color: "#E4405F", abbr: "AF" },
    { name: "Core Data", color: "#30D158", abbr: "CD" },
    { name: "ARKit", color: "#FF9500", abbr: "AR" },
    { name: "TestFlight", color: "#0D96F6", abbr: "TF" },
  ],
  Android: [
    { name: "Kotlin", color: "#7F52FF", abbr: "Kt" },
    { name: "Java", color: "#ED8B00", abbr: "Jv" },
    { name: "Jetpack Compose", color: "#4285F4", abbr: "JC" },
    { name: "MVVM", color: "#6D28D9", abbr: "MV" },
    { name: "RxJava", color: "#B7178C", abbr: "Rx" },
    { name: "Retrofit", color: "#48B983", abbr: "Rf" },
    { name: "Room", color: "#3DDC84", abbr: "Rm" },
    { name: "Dagger", color: "#FF6F00", abbr: "Dg" },
    { name: "Firebase", color: "#FFCA28", abbr: "Fb" },
  ],
  Web: [
    { name: "React", color: "#61DAFB", abbr: "Re" },
    { name: "Next.js", color: "#000000", abbr: "Nx" },
    { name: "Angular", color: "#DD0031", abbr: "Ng" },
    { name: "Vue.js", color: "#4FC08D", abbr: "Vu" },
    { name: "TypeScript", color: "#3178C6", abbr: "TS" },
    { name: "Tailwind CSS", color: "#06B6D4", abbr: "TW" },
    { name: "Node.js", color: "#339933", abbr: "Nd" },
    { name: "GraphQL", color: "#E10098", abbr: "GQ" },
  ],
  Backend: [
    { name: "Node.js", color: "#339933", abbr: "Nd" },
    { name: "Python", color: "#3776AB", abbr: "Py" },
    { name: "Django", color: "#092E20", abbr: "Dj" },
    { name: ".NET", color: "#512BD4", abbr: ".N" },
    { name: "Java Spring", color: "#6DB33F", abbr: "Sp" },
    { name: "Ruby on Rails", color: "#CC0000", abbr: "RR" },
    { name: "PostgreSQL", color: "#4169E1", abbr: "Pg" },
    { name: "MongoDB", color: "#47A248", abbr: "Mg" },
  ],
  "AI/ML": [
    { name: "TensorFlow", color: "#FF6F00", abbr: "TF" },
    { name: "PyTorch", color: "#EE4C2C", abbr: "PT" },
    { name: "OpenAI", color: "#412991", abbr: "OA" },
    { name: "LangChain", color: "#1C3C3C", abbr: "LC" },
    { name: "Scikit-learn", color: "#F7931E", abbr: "Sk" },
    { name: "Pandas", color: "#150458", abbr: "Pd" },
    { name: "Computer Vision", color: "#0078D4", abbr: "CV" },
    { name: "NLP", color: "#8B5CF6", abbr: "NL" },
  ],
  Blockchain: [
    { name: "Solidity", color: "#363636", abbr: "So" },
    { name: "Ethereum", color: "#3C3C3D", abbr: "Et" },
    { name: "Web3.js", color: "#F16822", abbr: "W3" },
    { name: "Hardhat", color: "#FFF100", abbr: "HH" },
    { name: "IPFS", color: "#65C2CB", abbr: "IP" },
    { name: "Smart Contracts", color: "#2775CA", abbr: "SC" },
    { name: "Hyperledger", color: "#2F3134", abbr: "HL" },
    { name: "Polygon", color: "#8247E5", abbr: "Pl" },
  ],
  Cloud: [
    { name: "AWS", color: "#FF9900", abbr: "AW" },
    { name: "Azure", color: "#0078D4", abbr: "Az" },
    { name: "GCP", color: "#4285F4", abbr: "GC" },
    { name: "Docker", color: "#2496ED", abbr: "Dk" },
    { name: "Kubernetes", color: "#326CE5", abbr: "K8" },
    { name: "Terraform", color: "#7B42BC", abbr: "Tf" },
    { name: "CI/CD", color: "#FC6D26", abbr: "CI" },
    { name: "Serverless", color: "#FD5750", abbr: "SL" },
  ],
  "Game Dev": [
    { name: "Unity", color: "#000000", abbr: "Un" },
    { name: "Unreal Engine", color: "#0E1128", abbr: "UE" },
    { name: "Godot", color: "#478CBF", abbr: "Go" },
    { name: "C#", color: "#239120", abbr: "C#" },
    { name: "C++", color: "#00599C", abbr: "C+" },
    { name: "Photon", color: "#004480", abbr: "Ph" },
    { name: "PlayFab", color: "#FF8C00", abbr: "PF" },
    { name: "Blender", color: "#F5792A", abbr: "Bl" },
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
      { threshold: 0.15 }
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
      className={`py-20 lg:py-28 bg-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#2ED06E] text-sm font-semibold uppercase tracking-widest">
            OUR TECH STACK
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0C0D]">
            technologies we use
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1.5 gap-1 overflow-x-auto max-w-full">
            {tabKeys.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-5 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#2ED06E] text-white shadow-md shadow-[#2ED06E]/30"
                    : "text-gray-600 hover:text-[#2ED06E]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tech badges */}
        <div
          key={fadeKey}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 min-h-[120px] animate-fadeIn"
        >
          {tabs[activeTab].map((tech, index) => (
            <div
              key={`${activeTab}-${tech.name}`}
              className="group bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 flex items-center gap-3 hover:border-[#2ED06E] hover:shadow-md transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ backgroundColor: tech.color }}
              >
                {tech.abbr}
              </div>
              <span className="font-semibold text-[#0B0C0D] text-sm sm:text-base whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
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
