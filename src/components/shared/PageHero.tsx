import { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import ClutchBadge from "./ClutchBadge";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  clutchRating?: number;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
}

export default function PageHero({
  title,
  description,
  breadcrumbs,
  clutchRating,
  bgColor = "#faf9f8",
  textColor = "#1a1a1a",
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative px-4 pb-16 pt-32 md:px-8 lg:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-7xl">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="flex items-start justify-between gap-8">
          <div className="max-w-3xl">
            <h1
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              style={{ color: textColor }}
            >
              {title}
            </h1>
            {description && (
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                {description}
              </p>
            )}
          </div>

          <div className="hidden lg:block">
            {children ? (
              children
            ) : clutchRating !== undefined ? (
              <ClutchBadge rating={clutchRating} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
