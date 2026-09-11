import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FAQList from '@/components/FAQList';
import { faqs, faqGroups } from '@/lib/faqs';
import { faqSchema, breadcrumbSchema, jsonLdScript } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  path: '/faq',
  title: 'Therapy FAQ: Sessions, Fees, Privacy & Online Counselling',
  description:
    'Answers about online therapy with a counselling psychologist based in Delhi NCR: the free discovery call, session length and frequency, fees, booking times, rescheduling, confidentiality, and how to know whether therapy is right for you.',
});

export default function FAQPage() {
  return (
    <div className="px-5 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema(faqs))} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema([{ name: 'FAQ', path: '/faq' }]))}
      />

      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-12 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Questions &amp; answers</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          Frequently asked <em className="text-pine">questions</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
          Practical answers about online therapy with me: whether therapy is right for you, what the
          free discovery call involves, how sessions run, what they cost, and how confidentiality
          works. If something you need is not here, ask me on the discovery call.
        </p>
      </section>

      {/* ——— FAQ groups ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        {faqGroups.map((group, index) => (
          <div key={group.eyebrow} className="pb-14">
            <p className="eyebrow mb-4">{group.eyebrow}</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-8">{group.heading}</h2>
            <FAQList
              faqs={group.items}
              idPrefix={`g${index}`}
              defaultOpenIndex={index === 0 ? 0 : null}
            />
          </div>
        ))}
      </section>

      {/* ——— Further reading ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="border-t border-ink/10 pt-10 flex flex-col sm:flex-row gap-6 sm:gap-12">
          <Link href="/what-to-expect" className="link-arrow">
            What to expect, step by step
            <ArrowUpRight size={15} />
          </Link>
          <Link href="/how-i-can-help" className="link-arrow">
            Areas I work with
            <ArrowUpRight size={15} />
          </Link>
          <Link href="/blog" className="link-arrow">
            Articles on therapy and anxiety
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              Still have questions? Book a free discovery call and{' '}
              <em className="text-pine">we can discuss anything you&apos;d like to know.</em>
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
