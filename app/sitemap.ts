import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { sortedArticles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/how-i-can-help', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/booking', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/what-to-expect', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
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

  return [...pages, ...posts];
}
