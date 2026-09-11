import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ArticleBody from '@/components/ArticleBody';
import { guides, getGuide, getRelatedGuides, guideClusters } from '@/lib/guides';
import { breadcrumbSchema, jsonLdScript, ID } from '@/lib/schema';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuide(params.slug);

  if (!guide) {
    return { title: 'Guide not found' };
  }

  return pageMeta({
    path: `/guides/${guide.slug}`,
    title: guide.metaTitle,
    description: guide.metaDescription,
    ogType: 'article',
    openGraph: {
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: [absoluteUrl('/about')],
      section: 'Mental health',
    },
  });
}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function GuidePage({ params }: Props) {
  const guide = getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const related = getRelatedGuides(guide);
  const cluster = guideClusters.find((item) => item.id === guide.cluster);

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(`/guides/${guide.slug}`)}#article`,
    headline: guide.metaTitle,
    name: guide.title,
    description: guide.metaDescription,
    inLanguage: siteConfig.lang,
    url: absoluteUrl(`/guides/${guide.slug}`),
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    wordCount: guide.body.reduce((total, block) => {
      if (block.type === 'ul' || block.type === 'ol') {
        return total + block.items.join(' ').split(/\s+/).length;
      }
      return total + block.text.split(/\s+/).length;
    }, 0),
    author: { '@id': ID.person },
    publisher: { '@id': ID.practice },
    isPartOf: { '@id': `${siteConfig.url}/guides#guides` },
  };

  return (
    <div className="px-5 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(guideSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: 'Guides', path: '/guides' },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ])
        )}
      />

      {/* ——— Header ——— */}
      <article className="max-w-6xl mx-auto pt-16 lg:pt-24 animate-fadeInUp">
        <Link href="/guides" className="link-arrow mb-8">
          All guides
        </Link>

        {cluster && <p className="eyebrow mt-6">{cluster.title}</p>}

        <h1 className="font-display text-3xl sm:text-5xl text-ink leading-tight max-w-3xl mt-4">
          {guide.title}
        </h1>

        <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">{guide.standfirst}</p>

        {/* Byline */}
        <div className="mt-10 pt-6 border-t border-ink/10 flex items-center gap-4 max-w-2xl">
          <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
            <Image
              src="/bhavana.webp"
              alt="Bhavana Bulchandani, counselling psychologist"
              fill
              sizes="44px"
              className="object-cover object-center"
            />
          </span>
          <div className="text-[13px] leading-relaxed">
            <p className="text-ink">
              Written by{' '}
              <Link
                href="/about"
                className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
              >
                Bhavana Bulchandani
              </Link>
              , Counselling Psychologist
            </p>
            <p className="text-ink-soft">
              MA in Psychology, Banaras Hindu University ·{' '}
              <time dateTime={guide.datePublished}>{formatDate(guide.datePublished)}</time> ·{' '}
              {guide.readingMinutes} min read
            </p>
          </div>
        </div>

        {/* ——— Body ——— */}
        <div className="py-12">
          <ArticleBody blocks={guide.body} />
        </div>
      </article>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Next step</p>
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              {guide.cta.heading}
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed">{guide.cta.body}</p>
            <Link href="/booking" className="btn-primary mt-10">
              Book a free discovery call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Related ——— */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto pt-20">
          <p className="eyebrow mb-4">Keep reading</p>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">
            Related <em className="text-pine">guides</em>
          </h2>
          <div>
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/guides/${item.slug}`}
                className="group border-t border-ink/10 last:border-b py-6 flex items-center justify-between gap-6"
              >
                <span className="font-display text-lg sm:text-xl text-ink group-hover:text-pine transition-colors">
                  {item.title}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-ink/30 group-hover:text-pine transition-colors shrink-0"
                />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
