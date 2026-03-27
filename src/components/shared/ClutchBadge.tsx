interface ClutchBadgeProps {
  rating?: number;
  reviews?: number;
}

export default function ClutchBadge({
  rating = 4.9,
  reviews = 100,
}: ClutchBadgeProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-3 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">
        C
      </div>
      <div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${
                i < fullStars || (i === fullStars && hasHalfStar)
                  ? "text-red-500"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-1 text-sm font-bold text-[#1a1a1a]">
            {rating}
          </span>
        </div>
        <p className="text-xs text-gray-500">{reviews} Reviews</p>
      </div>
    </div>
  );
}
