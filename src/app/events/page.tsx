import { getAllEvents } from '@/data/events';
import ListingTemplate from '@/components/templates/ListingTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | DeepLearnHQ',
  description: 'Discover upcoming and past events where DeepLearnHQ participates, speaks, and showcases technology solutions.',
};

export default function EventsPage() {
  const events = getAllEvents();
  return (
    <ListingTemplate
      title="Events"
      basePath="/events"
      items={events.map(e => ({
        slug: e.slug,
        title: e.title,
        date: e.date,
        image: e.image,
        excerpt: e.description,
      }))}
    />
  );
}
