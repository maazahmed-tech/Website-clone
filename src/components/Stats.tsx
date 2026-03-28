"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Stat {
  end: number;
  suffix: string;
  label: string;
  href: string;
}

const stats: Stat[] = [
  { end: 500, suffix: "+", label: "Completed Projects", href: "/work/" },
  { end: 350, suffix: "+", label: "Talented Cubixians", href: "/about/" },
  {
    end: 200,
    suffix: "+",
    label: "Satisfied Clients",
    href: "/about/clients/",
  },
];

function useCountUp(end: number, shouldStart: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, shouldStart, duration]);

  return count;
}

function StatCard({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.end, isVisible);

  return (
    <Link href={stat.href} className="group block text-center">
      <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1E6FD9] mb-3 transition-transform duration-300 group-hover:scale-110">
        {count}
        {stat.suffix}
      </div>
      <div className="text-gray-400 text-lg sm:text-xl font-medium group-hover:text-white transition-colors duration-300">
        {stat.label}
      </div>
      <div className="mt-3 w-12 h-0.5 bg-[#1E6FD9]/30 mx-auto group-hover:w-20 group-hover:bg-[#1E6FD9] transition-all duration-500" />
    </Link>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#0B0C0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
            our journey
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            our journey of building success
          </h2>
          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Full-cycle product development company providing end-to-end
            solutions from ideation to launch and beyond, delivering measurable
            results for businesses worldwide.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
