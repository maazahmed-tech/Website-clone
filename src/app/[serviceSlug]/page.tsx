import { notFound } from 'next/navigation';
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceSlugs().map(slug => ({ serviceSlug: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }): Promise<Metadata> {
  const { serviceSlug } = await params;
  const data = getServiceBySlug(serviceSlug);
  if (!data) return { title: 'Not Found' };
  return { title: data.metaTitle, description: data.metaDescription };
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params;
  const data = getServiceBySlug(serviceSlug);
  if (!data) notFound();
  return <ServiceTemplate data={data} />;
}
