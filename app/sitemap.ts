import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/support', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/booking', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/what-to-expect', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
