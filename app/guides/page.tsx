import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { guides, guideClusters, guidesInCluster } from '@/lib/guides';
import { breadcrumbSchema, jsonLdScript } from '@/lib/schema';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  path: '/guides',
  title: 'Therapy Guides: Online Therapy, Costs & Finding a Psychologist',
  description:
    'Plain answers about therapy in India — what it costs, how online sessions work, how to check a psychologist’s qualifications, and what help exists for specific difficulties.',
});

const guidesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteConfig.url}/guides#guides`,
  name: 'Therapy guides',
  url: absoluteUrl('/guides'),
  inLanguage: siteConfig.lang,
  author: { '@id': `${siteConfig.url}/#bhavana` },
  publisher: { '@id': `${siteConfig.url}/#practice` },
  about: 'Therapy, counselling and mental health support in India',
  hasPart: guides.map((guide) => ({
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    url: absoluteUrl(`/guides/${guide.slug}`),
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: { '@id': `${siteConfig.url}/#bhavana` },
  })),
};

export default function GuidesPage() {
  return (
    <div className="px-5 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(guidesSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema([{ name: 'Guides', path: '/guides' }]))}
      />

      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-14 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Guides</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight max-w-3xl">
          Straight answers about <em className="text-pine">therapy in India</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          What it costs, how online sessions actually work, how to check whether someone is
          qualified, and what help exists for specific difficulties. Written for people deciding
          whether to reach out at all.
        </p>
        <p className="mt-6 text-ink-soft leading-relaxed max-w-xl">
          These are reference guides rather than personal writing. For the latter, see{' '}
          <Link
            href="/blog"
            className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
          >
            the blog
          </Link>
          .
        </p>
      </section>

      {/* ——— Clusters ——— */}
      {guideClusters.map((cluster) => {
        const items = guidesInCluster(cluster.id);
        if (items.length === 0) return null;

        return (
          <section key={cluster.id} className="max-w-6xl mx-auto pb-14">
            <div className="border-t border-ink/10 pt-10">
              <h2 className="font-display text-2xl sm:text-3xl text-ink">{cluster.title}</h2>
              <p className="mt-3 text-ink-soft leading-relaxed max-w-xl">{cluster.blurb}</p>

              <div className="mt-8">
                {items.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group border-t border-ink/10 last:border-b py-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
                  >
                    <h3 className="md:col-span-5 font-display text-lg sm:text-xl text-ink group-hover:text-pine transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="md:col-span-6 text-ink-soft text-[15px] leading-relaxed">
                      {guide.excerpt}
                    </p>
                    <span className="md:col-span-1 flex md:justify-end">
                      <ArrowUpRight
                        size={20}
                        className="text-ink/30 group-hover:text-pine transition-colors"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              Reading is a reasonable place to start. If you would rather talk it through,{' '}
              <em className="text-pine">the first call is free.</em>
            </p>
            <Link href="/booking" className="btn-primary mt-10">
              Book a free discovery call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
