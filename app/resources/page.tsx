import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Resources — Guides & Tools for Mental Wellbeing',
  description:
    'Practical guides and worksheets on anxiety, mindfulness, sleep and stress from counselling psychologist Bhavana Bulchandani — plus articles on the blog.',
  alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
  const guides = [
    {
      title: 'Managing Anxiety: A Practical Guide',
      description: 'Evidence-based techniques to understand and manage anxiety in your daily life.',
      type: 'Guide',
    },
    {
      title: 'Daily Mindfulness Exercises',
      description: '5-minute mindfulness practices you can do anywhere, anytime.',
      type: 'Workbook',
    },
    {
      title: 'Sleep Hygiene Checklist',
      description: 'Improve your sleep quality with these scientifically-backed tips.',
      type: 'Checklist',
    },
    {
      title: 'Stress Management Techniques',
      description: 'Quick strategies to reduce stress and regain your calm.',
      type: 'Guide',
    },
  ];

  return (
    <div className="px-5 sm:px-8">
      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Library</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          Resources for your <em className="text-pine">wellbeing</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          Tools, guides, and materials to support your mental health journey — between sessions or
          before you&apos;ve even had one.
        </p>
      </section>

      {/* ——— Guides ——— */}
      <section className="max-w-6xl mx-auto pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">Free guides &amp; worksheets</h2>
          <p className="text-ink-soft text-sm max-w-xs sm:text-right">
            Email me and I&apos;ll send any of these to you — no charge, no strings attached.
          </p>
        </div>

        <div>
          {guides.map((resource, index) => (
            <a
              key={index}
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Resource request: ${resource.title}`)}`}
              className="group border-t border-ink/10 last:border-b py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline"
            >
              <span className="md:col-span-2 text-[11px] uppercase tracking-[0.18em] text-clay font-semibold">
                {resource.type}
              </span>
              <h3 className="md:col-span-4 font-display text-xl sm:text-2xl text-ink group-hover:text-pine transition-colors">
                {resource.title}
              </h3>
              <p className="md:col-span-5 text-ink-soft text-[15px] leading-relaxed">
                {resource.description}
              </p>
              <span className="md:col-span-1 flex md:justify-end">
                <ArrowUpRight size={20} className="text-ink/30 group-hover:text-pine transition-colors" />
              </span>
            </a>
          ))}
        </div>
        <p className="text-ink-soft text-sm mt-6">
          Click any guide to request it by email.
        </p>
      </section>

      {/* ——— More coming ——— */}
      <section className="max-w-6xl mx-auto pb-20">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">In the works</p>
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              Self-help workbooks, guided audio practices, and structured programs are coming soon. In
              the meantime, <em className="text-pine">the blog has articles</em> on mental health and
              emotional wellbeing.
            </p>
            <Link href="/blog" className="link-arrow mt-8">
              Read the blog
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Suggestions ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="border-t border-ink/10 pt-10">
          <p className="text-ink-soft max-w-xl">
            Looking for something specific? I&apos;m always creating new resources based on what my
            clients need.{' '}
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Resource suggestion')}`}
              className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
            >
              Send me your suggestions
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
