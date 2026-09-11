import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { sortedArticles } from '@/lib/articles';
import { guides } from '@/lib/guides';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/psychologist-in-delhi', priority: 0.95, changeFrequency: 'monthly' },
    { path: '/how-i-can-help', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/female-psychologist-in-delhi', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/online-therapy-india', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/booking', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/therapy-for-anxiety', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/therapy-for-depression', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/therapy-for-stress-and-burnout', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/relationship-counselling', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/what-to-expect', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/guides', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const pages: MetadataRoute.Sitemap = routes.map(({ path, priority, changeFrequency }) => ({
    // The home entry is the bare origin, matching the canonical Next.js emits.
    url: path === '/' ? base : `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const posts: MetadataRoute.Sitemap = sortedArticles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${base}/guides/${guide.slug}`,
    lastModified: new Date(guide.dateModified),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...pages, ...posts, ...guidePages];
}
