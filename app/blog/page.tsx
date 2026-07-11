import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Mental Health Insights & Resources',
  description:
    'Thoughts, insights and practical resources on mental health, emotional wellbeing and self-growth from counselling psychologist Bhavana Bulchandani.',
  alternates: { canonical: '/blog' },
};

type WordPressPost = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
};

const sanitizeHtml = (html: string) =>
  html.replace(/&nbsp;|&#160;/g, ' ').replace(/<[^>]*>/g, '').trim();

async function getPosts(): Promise<WordPressPost[]> {
  const response = await fetch(
    'https://public-api.wordpress.com/wp/v2/sites/psychfuel.home.blog/posts?per_page=9',
    { next: { revalidate: 300 } }
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="px-5 sm:px-8">
      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Writing</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          The <em className="text-pine">blog</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          Thoughts, insights, and resources on mental health and well-being.
        </p>
      </section>

      {/* ——— Posts ——— */}
      <section className="max-w-6xl mx-auto pb-8">
        {posts.length === 0 ? (
          <div className="border-t border-b border-ink/10 py-16 text-center text-ink-soft">
            Unable to load posts right now. Please check back soon.
          </div>
        ) : (
          <div>
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group border-t border-ink/10 last:border-b py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
              >
                <p className="md:col-span-2 text-[11px] uppercase tracking-[0.18em] text-clay font-semibold">
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="md:col-span-4 font-display text-xl sm:text-2xl text-ink group-hover:text-pine transition-colors leading-snug">
                  {sanitizeHtml(post.title.rendered)}
                </h2>
                <p className="md:col-span-5 text-ink-soft text-[15px] leading-relaxed line-clamp-3">
                  {sanitizeHtml(post.excerpt.rendered)}
                </p>
                <span className="md:col-span-1 flex md:justify-end">
                  <ArrowUpRight size={20} className="text-ink/30 group-hover:text-pine transition-colors" />
                </span>
              </a>
            ))}
          </div>
        )}
        {posts.length > 0 && (
          <p className="text-ink-soft text-sm mt-6">Posts open on PsychFuel, my writing home.</p>
        )}
      </section>
    </div>
  );
}
