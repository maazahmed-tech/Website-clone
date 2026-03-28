interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  titleHighlight?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  titleHighlight,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "";

  const renderTitle = () => {
    if (!titleHighlight) {
      return title;
    }
    const parts = title.split(titleHighlight);
    if (parts.length === 1) {
      return title;
    }
    return (
      <>
        {parts[0]}
        <span className="text-[#1E6FD9]">{titleHighlight}</span>
        {parts.slice(1).join(titleHighlight)}
      </>
    );
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClass}`}>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
          {label}
        </p>
      )}
      <h2 className="mb-4 text-3xl font-bold text-[#1a1a1a] md:text-4xl lg:text-5xl">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-gray-600">{description}</p>
      )}
    </div>
  );
}
