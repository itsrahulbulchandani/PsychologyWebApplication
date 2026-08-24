import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { breadcrumbSchema, jsonLdScript } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  path: '/what-to-expect',
  title: 'What to Expect: How Online Therapy Works, Step by Step',
  description:
    'The full process, from the free 15 to 20 minute discovery call to your first sessions, 60-minute weekly appointments, work between sessions, and how confidentiality is handled.',
});

export default function WhatToExpectPage() {
  const steps = [
    {
      title: 'Discovery Call',
      points: [
        'Before we begin therapy, I offer a brief 15–20 minute free discovery call.',
        'This is a chance for you to share your concerns and ask questions.',
        'It helps us see if my approach is a good fit for your needs.',
        'There’s no obligation to start therapy after this call.',
      ],
    },
    {
      title: 'Initial Sessions',
      points: [
        'Your first two sessions at least are about getting to know you, creating a safe space for you and identifying your goals.',
        'We’ll discuss what brought you to therapy, your experiences, and what you hope to achieve.',
        'These sessions help you feel comfortable and understood.',
        'Together, we create a plan that works for you.',
      ],
    },
    {
      title: 'Session Length & Frequency',
      points: [
        'Each session lasts up to 60 minutes, with the option to extend by 15–30 minutes for emergencies so that you leave each session feeling composed and supported.',
        'Frequency of sessions depends on your goals and needs, usually once a week to start.',
      ],
    },
    {
      title: 'Homework',
      points: [
        'After each session, you’ll be given some homework or exercises to do on your own. These require you to think deeper, learn new ideas or practice desired behaviours.',
        'In the gap between two sessions, you can reach out to me on chat and I will guide you in case you are stuck with your homework, the best I can. I don’t guarantee immediate or 100% replies but I’ll try my best to be there for you, while maintaining my own work life balance :)',
      ],
    },
    {
      title: 'Online Sessions',
      points: [
        'All therapy sessions are conducted online, so you can attend from the comfort of your home.',
        'Online therapy provides the same level of care, support, and confidentiality as in-person sessions.',
        'You’ll receive a secure link to join each session at the scheduled time.',
      ],
    },
    {
      title: 'Confidentiality',
      points: [
        'Your privacy is a top priority.',
        'Everything shared in sessions is strictly confidential.',
        'My session notes are kept securely and are never shared anywhere, except in cases required by law to ensure safety.',
      ],
    },
    {
      title: 'Nature of Therapy',
      points: [
        'Therapy is a collaborative process. You set the pace and goals.',
        'Sessions provide a safe space to explore your thoughts, emotions, and challenges.',
        'Over time, you’ll develop tools and insights to cope, grow, and feel more in control.',
      ],
    },
  ];

  return (
    <div className="px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([{ name: 'What to expect', path: '/what-to-expect' }])
        )}
      />

      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">The process</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          What to <em className="text-pine">expect</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
          Starting therapy can feel unfamiliar, and it&apos;s normal to have questions. This page sets
          out exactly how online therapy works here, from the free discovery call through to ongoing
          sessions, so you know what you are agreeing to before you book anything.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
          <Link href="/blog/what-happens-in-your-first-therapy-session" className="link-arrow">
            What happens in a first session
            <ArrowUpRight size={15} />
          </Link>
          <Link href="/blog/how-online-therapy-works-in-india" className="link-arrow">
            How online therapy works in India
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* ——— Timeline ——— */}
      <section className="max-w-6xl mx-auto pb-20">
        <div className="relative border-l border-ink/15 ml-4 sm:ml-8">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-10 sm:pl-14 pb-14 last:pb-0">
                <span className="absolute -left-[13px] top-1 w-[25px] h-[25px] rounded-full bg-cream border border-pine flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-pine" />
                </span>
                <p className="font-display text-sm text-clay mb-2">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-ink mb-5">{step.title}</h2>
                <ul className="space-y-3 max-w-xl">
                  {step.points.map((point, i) => (
                    <li key={i} className="text-ink-soft text-[15px] leading-relaxed flex gap-3">
                      <span className="text-pine/50 shrink-0 mt-px">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>

      {/* ——— Next Steps ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Next steps</p>
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              If you feel ready after the discovery call, we schedule your first session, and
              you&apos;ll receive guidance on how to prepare.{' '}
              <em className="text-pine">No pressure, no rush.</em>
            </p>
            <Link href="/booking" className="btn-primary mt-10">
              Book a free discovery call
              <ArrowRight size={16} />
            </Link>
            <p className="mt-8 text-ink-soft text-sm">
              Want more detail first?{' '}
              <Link
                href="/faq"
                className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
              >
                The FAQ
              </Link>{' '}
              covers fees, rescheduling and confidentiality, and{' '}
              <Link
                href="/how-i-can-help"
                className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
              >
                how I can help
              </Link>{' '}
              describes each area of work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
