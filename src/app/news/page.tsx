import { getAllNews } from '@/data/news';
import ListingTemplate from '@/components/templates/ListingTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | Cubix',
  description: 'Latest news and updates from Cubix.',
};

export default function NewsPage() {
  const news = getAllNews();
  return (
    <ListingTemplate
      title="News"
      basePath="/news"
      items={news.map(n => ({
        slug: n.slug,
        title: n.title,
        date: n.publishDate,
        image: n.featuredImage,
      }))}
    />
  );
}
