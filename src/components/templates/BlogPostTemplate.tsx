import Link from 'next/link';
import type { BlogPostData } from '@/data/types';
import RichContent from '@/components/shared/RichContent';

interface BlogPostTemplateProps {
  data: BlogPostData;
  relatedPosts?: {
    slug: string;
    title: string;
    category: string;
    featuredImage: string;
    publishDate: string;
    excerpt: string;
  }[];
}

export default function BlogPostTemplate({ data, relatedPosts = [] }: BlogPostTemplateProps) {
  const formattedDate = new Date(data.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#2ED06E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#2ED06E] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-xs">{data.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          {/* Category Badge */}
          <Link
            href={`/blog?category=${encodeURIComponent(data.category)}`}
            className="inline-block bg-[#2ED06E]/10 text-[#2ED06E] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-[#2ED06E]/20 transition-colors mb-6"
          >
            {data.category}
          </Link>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0C0D] leading-tight mb-8">
            {data.title}
          </h1>

          {/* Author Card + Meta */}
          <div className="flex flex-wrap items-center gap-4 pb-8 border-b border-gray-200">
            <Link
              href={`/blog/author/${data.authorSlug}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-[#0B0C0D] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {data.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-[#0B0C0D] font-semibold group-hover:text-[#2ED06E] transition-colors">
                  {data.author}
                </p>
              </div>
            </Link>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <time dateTime={data.publishDate}>{formattedDate}</time>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>{data.readingTime} min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {data.featuredImage && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={data.featuredImage}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <RichContent content={data.content} />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D] mb-4">
                Related Articles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Continue exploring topics that interest you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post) => {
                const postDate = new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                });

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#2ED06E] hover:shadow-lg transition-all duration-300"
                  >
                    {post.featuredImage && (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <span className="inline-block bg-[#2ED06E]/10 text-[#2ED06E] text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#0B0C0D] mb-2 group-hover:text-[#2ED06E] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <time className="text-gray-400 text-xs">{postDate}</time>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
