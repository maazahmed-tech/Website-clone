interface TechStackProps {
  technologies: string[];
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#1a1a1a] transition-colors hover:border-[#1E6FD9] hover:text-[#1E6FD9]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
