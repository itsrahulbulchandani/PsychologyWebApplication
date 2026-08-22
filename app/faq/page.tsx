import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FAQList from '@/components/FAQList';
import { faqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'FAQ: Common Questions About Therapy',
  description:
    'Answers to common questions about online counselling: how many sessions you need, confidentiality, what happens in the first session, and how to know if therapy is helping.',
  alternates: { canonical: '/faq' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Questions &amp; answers</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          Frequently asked <em className="text-pine">questions</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          Common questions about therapy, sessions, and how it all works.
        </p>
      </section>

      {/* ——— FAQ List ——— */}
      <section className="max-w-6xl mx-auto pb-20">
        <FAQList faqs={faqs} />
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
