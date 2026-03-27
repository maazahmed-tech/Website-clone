interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-[#00b67a] hover:shadow-lg"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#00b67a]/10 text-lg font-bold text-[#00b67a]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="mb-3 text-xl font-bold text-[#1a1a1a]">
            {feature.title}
          </h3>
          <p className="leading-relaxed text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
