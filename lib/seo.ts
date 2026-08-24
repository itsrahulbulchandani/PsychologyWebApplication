import type { Metadata } from 'next';
import { siteConfig, absoluteUrl } from '@/lib/site';

const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Sthairyam — online therapy with Bhavana Bulchandani, counselling psychologist, across India',
};

type PageMetaInput = {
  /** Site-relative path, used for the canonical and og:url. */
  path: string;
  /** Title without the " | Sthairyam" suffix; the layout template appends it. */
  title: string;
  description: string;
  ogType?: 'website' | 'article' | 'profile';
  /** Extra Open Graph fields, e.g. article publish dates. */
  openGraph?: Record<string, unknown>;
};

/**
 * Builds a complete, self-consistent metadata block for a page.
 *
 * Next.js does not merge a parent's Open Graph or Twitter object into a child
 * that declares its own, so building all three from one source here is what
 * keeps og:title, twitter:title and <title> from drifting apart per page.
 */
export function pageMeta({
  path,
  title,
  description,
  ogType = 'website',
  openGraph = {},
}: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
