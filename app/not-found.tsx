import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const links = [
    { label: 'How I can help', href: '/how-i-can-help' },
    { label: 'About Bhavana', href: '/about' },
    { label: 'What to expect', href: '/what-to-expect' },
    { label: 'Frequently asked questions', href: '/faq' },
    { label: 'Articles', href: '/blog' },
  ];

  return (
    <div className="px-5 sm:px-8">
      <section className="max-w-6xl mx-auto pt-16 pb-20 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          This page <em className="text-pine">isn&apos;t here</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          The link may be old, or the address slightly off. Here is where most people are heading.
        </p>

        <div className="mt-12 max-w-2xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group border-t border-ink/10 last:border-b py-5 flex items-center justify-between gap-6"
            >
              <span className="font-display text-xl text-ink group-hover:text-pine transition-colors">
                {link.label}
              </span>
              <ArrowUpRight
                size={20}
                className="text-ink/30 group-hover:text-pine transition-colors shrink-0"
              />
            </Link>
          ))}
        </div>

        <Link href="/booking" className="btn-primary mt-12">
          Book a free discovery call
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
