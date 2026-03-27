import { getAllPressReleases } from '@/data/press-releases';
import ListingTemplate from '@/components/templates/ListingTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Releases | Cubix',
  description: 'Latest press releases and announcements from Cubix.',
};

export default function PressReleasesPage() {
  const releases = getAllPressReleases();
  return (
    <ListingTemplate
      title="Press Releases"
      basePath="/press-release"
      items={releases.map((r) => ({
        slug: r.slug,
        title: r.title,
        date: r.publishDate,
        image: r.featuredImage,
      }))}
    />
  );
}
