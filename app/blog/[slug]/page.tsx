import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ArticleBody from '@/components/ArticleBody';
import { articles, getArticle, getRelated } from '@/lib/articles';
import { breadcrumbSchema, jsonLdScript, ID } from '@/lib/schema';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticle(params.slug);

  if (!article) {
    return { title: 'Article not found' };
  }

  return pageMeta({
    path: `/blog/${article.slug}`,
    title: article.metaTitle,
    description: article.metaDescription,
    ogType: 'article',
    openGraph: {
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
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

export default function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const related = getRelated(article);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(`/blog/${article.slug}`)}#article`,
    headline: article.metaTitle,
    name: article.title,
    description: article.metaDescription,
    inLanguage: siteConfig.lang,
    url: absoluteUrl(`/blog/${article.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    wordCount: article.body.reduce((total, block) => {
      if (block.type === 'ul' || block.type === 'ol') {
        return total + block.items.join(' ').split(/\s+/).length;
      }
      return total + block.text.split(/\s+/).length;
    }, 0),
    author: { '@id': ID.person },
    publisher: { '@id': ID.practice },
    isPartOf: { '@id': `${siteConfig.url}/blog#blog` },
  };

  return (
    <div className="px-5 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: 'Blog', path: '/blog' },
            { name: article.title, path: `/blog/${article.slug}` },
          ])
        )}
      />

      {/* ——— Header ——— */}
      <article className="max-w-6xl mx-auto pt-16 lg:pt-24 animate-fadeInUp">
        <Link href="/blog" className="link-arrow mb-8">
          All articles
        </Link>

        <h1 className="font-display text-3xl sm:text-5xl text-ink leading-tight max-w-3xl mt-4">
          {article.title}
        </h1>

        <p className="mt-7 text-lg text-ink-soft leading-relaxed max-w-2xl">{article.standfirst}</p>

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
              <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time> ·{' '}
              {article.readingMinutes} min read
            </p>
          </div>
        </div>

        {/* ——— Body ——— */}
        <div className="py-12">
          <ArticleBody blocks={article.body} />
        </div>
      </article>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Next step</p>
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              {article.cta.heading}
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed">{article.cta.body}</p>
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
            Related <em className="text-pine">articles</em>
          </h2>
          <div>
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
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
