import type { Metadata } from 'next';
import ServiceLanding from '@/components/ServiceLanding';
import { getService } from '@/lib/services';
import { pageMeta } from '@/lib/seo';

const service = getService('/therapy-for-anxiety')!;

export const metadata: Metadata = pageMeta({
  path: service.path,
  title: service.metaTitle,
  description: service.metaDescription,
});

export default function Page() {
  return <ServiceLanding service={service} />;
}
