'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';

interface ListingItem {
  slug: string;
  title: string;
  date?: string;
  category?: string;
  image?: string;
  excerpt?: string;
}

interface ListingTemplateProps {
  title: string;
  items: ListingItem[];
  basePath: string;
  categories?: string[];
}

const ITEMS_PER_PAGE = 12;

export default function ListingTemplate({
  title,
  items,
  basePath,
  categories = [],
}: ListingTemplateProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero */}
      <PageHero title={title} />

      {/* Category Filter */}
      {categories.length > 0 && (
        <section className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === 'All'
                    ? 'bg-[#1E6FD9] text-white shadow-md shadow-[#1E6FD9]/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#1E6FD9] text-white shadow-md shadow-[#1E6FD9]/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <p className="text-gray-500 text-sm mb-8">
            Showing {paginatedItems.length} of {filteredItems.length} results
          </p>

          {paginatedItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedItems.map((item) => {
                const formattedDate = item.date
                  ? new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : null;

                return (
                  <Link
                    key={item.slug}
                    href={`${basePath}/${item.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
                  >
                    {/* Card Image */}
                    {item.image ? (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-[#0B0C0D] to-[#1a1d20] flex items-center justify-center">
                        <span className="text-[#1E6FD9] text-4xl font-bold opacity-30">
                          {item.title[0]}
                        </span>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {item.category && (
                          <span className="inline-block bg-[#1E6FD9]/10 text-[#1E6FD9] text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                            {item.category}
                          </span>
                        )}
                        {formattedDate && (
                          <time className="text-gray-400 text-xs">{formattedDate}</time>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      {item.excerpt && (
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No items found.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1E6FD9] hover:text-[#1E6FD9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first, last, current, and neighbors
                const showPage =
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1;

                if (!showPage) {
                  // Show ellipsis once between gaps
                  const prevShown =
                    page - 1 === 1 ||
                    page - 1 === totalPages ||
                    Math.abs(page - 1 - currentPage) <= 1;
                  if (prevShown) {
                    return (
                      <span key={page} className="w-10 h-10 flex items-center justify-center text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-semibold text-sm transition-colors ${
                      currentPage === page
                        ? 'bg-[#1E6FD9] text-white shadow-md shadow-[#1E6FD9]/30'
                        : 'border border-gray-200 text-gray-600 hover:border-[#1E6FD9] hover:text-[#1E6FD9]'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1E6FD9] hover:text-[#1E6FD9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
