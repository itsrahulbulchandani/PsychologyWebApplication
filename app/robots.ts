import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/booking/success', '/booking/error', '/demo-payment'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
