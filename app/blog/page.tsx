import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { sortedArticles, externalArchive } from '@/lib/articles';
import { breadcrumbSchema, jsonLdScript } from '@/lib/schema';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  path: '/blog',
  title: 'Blog: Therapy, Anxiety & Emotional Wellbeing',
  description:
    'Articles on therapy, anxiety, stress, overthinking, burnout and relationships, written by counselling psychologist Bhavana Bulchandani for people considering support.',
});

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${siteConfig.url}/blog#blog`,
  name: 'The Sthairyam blog',
  url: absoluteUrl('/blog'),
  inLanguage: siteConfig.lang,
  author: { '@id': `${siteConfig.url}/#bhavana` },
  publisher: { '@id': `${siteConfig.url}/#practice` },
  blogPost: sortedArticles.map((article) => ({
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    url: absoluteUrl(`/blog/${article.slug}`),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { '@id': `${siteConfig.url}/#bhavana` },
  })),
};

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export default function BlogPage() {
  return (
    <div className="px-5 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(blogListSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema([{ name: 'Blog', path: '/blog' }]))}
      />

      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Writing</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          The <em className="text-pine">blog</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          Articles on therapy, anxiety, stress, overthinking, burnout and relationships. Written for
          people who are weighing up whether to reach out, and for people already doing the work.
        </p>
      </section>

      {/* ——— Articles ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div>
          {sortedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group border-t border-ink/10 last:border-b py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
            >
              <p className="md:col-span-2 text-[11px] uppercase tracking-[0.18em] text-clay font-semibold">
                {formatDate(article.datePublished)}
              </p>
              <h2 className="md:col-span-4 font-display text-xl sm:text-2xl text-ink group-hover:text-pine transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="md:col-span-5 text-ink-soft text-[15px] leading-relaxed">
                {article.excerpt}
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
      </section>

      {/* ——— Earlier writing ——— */}
      <section className="max-w-6xl mx-auto pb-20">
        <div className="border-t border-ink/10 pt-12">
          <p className="eyebrow mb-4">Earlier writing</p>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-4">
            From <em className="text-pine">PsychFuel</em>
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-xl mb-8">
            Pieces I wrote between 2022 and 2023, before Sthairyam existed. They still live on
            PsychFuel and open in a new tab.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {externalArchive.map((post) => (
              <li key={post.url} className="text-[15px] leading-relaxed flex gap-3">
                <span className="text-pine/50 shrink-0 mt-px">—</span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-soft hover:text-pine transition-colors"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              Reading about it is a good start. If you would like to talk it through with someone,{' '}
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
