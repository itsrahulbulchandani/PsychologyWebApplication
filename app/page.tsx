import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const workAreas = [
    {
      title: 'Anxiety & Stress',
      description: 'Calm your mind, manage overwhelming thoughts, and feel more balanced in everyday life.',
    },
    {
      title: 'Low Mood & Emotional Wellbeing',
      description: 'A safe space to talk about sadness, exhaustion, or loss of motivation.',
    },
    {
      title: 'Relationships & Communication',
      description: 'Work through emotional hurt, misunderstandings, and conflict with clarity.',
    },
    {
      title: 'Burnout & Emotional Fatigue',
      description: 'Find ways to cope with constant pressure, exhaustion, and feeling drained.',
    },
    {
      title: 'Self-Esteem & Confidence',
      description: 'Build a healthier relationship with yourself and trust in your own voice.',
    },
    {
      title: 'Life Transitions & Identity',
      description: 'Support through career shifts, breakups, loss, or questions about direction.',
    },
  ];

  const steps = [
    {
      title: 'A free discovery call',
      description:
        'We start with a free 15–20 minute call. Share what’s on your mind, ask questions, and see if working together feels right. No obligation.',
    },
    {
      title: 'Your first sessions',
      description:
        'The first sessions are about getting to know you, creating a safe space, and setting goals together, at your pace and without judgment.',
    },
    {
      title: 'Ongoing growth',
      description:
        'Weekly 60-minute sessions with practical tools, gentle homework, and chat support in between, so change carries into daily life.',
    },
  ];

  const fees = [
    {
      name: 'Discovery Call',
      detail: '15–20 minutes to connect and see if we’re a good fit',
      price: 'Free',
    },
    {
      name: 'Single Session',
      detail: 'Up to 60 minutes, online, with follow-up exercises',
      price: '₹1,200',
    },
    {
      name: '3-Session Bundle',
      detail: 'A personalised plan with progress tracking',
      price: '₹3,200',
    },
    {
      name: '6-Session Bundle',
      detail: 'Deeper work, priority chat support, goal review',
      price: '₹6,000',
    },
  ];

  const faqTeasers = [
    'How do I know if I need therapy?',
    'What if my problem feels too small?',
    'What happens in the first session?',
  ];

  return (
    <div>
      {/* ——— Hero ——— */}
      <section className="px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 pb-20 lg:pt-24 lg:pb-28 animate-fadeInUp">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Counselling Psychologist · Online across India</p>
            <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.2rem] text-ink font-normal">
              Feel understood.
              <br />
              Feel supported.
              <br />
              <em className="text-pine">Begin your healing journey.</em>
            </h1>
            <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
              I&apos;m Bhavana Bulchandani, a counselling psychologist. This is a calm, confidential
              space to work through anxiety, stress, low mood, and everything in between.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link href="/booking" className="btn-primary">
                Book a free discovery call
                <ArrowRight size={16} />
              </Link>
              <Link href="/support" className="link-arrow">
                How I can help
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 lg:w-80">
              <div className="bg-sage-pale rounded-t-full border border-ink/10 px-10 pt-16 pb-10 flex flex-col items-center">
                <Image
                  src="/logo.png"
                  alt="Sthairyam logo, the counselling psychology practice of Bhavana Bulchandani"
                  width={160}
                  height={160}
                  priority
                />
                <p className="font-display text-2xl text-pine mt-6">स्थैर्यम्</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft mt-2">sthairyam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="max-w-6xl mx-auto border-t border-b border-ink/10 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between gap-x-10 gap-y-2 text-[13px] tracking-wide text-ink-soft">
            <span>MA in Psychology, Banaras Hindu University</span>
            <span className="hidden sm:inline text-ink/20">·</span>
            <span>Member, Counselors Council of India</span>
            <span className="hidden sm:inline text-ink/20">·</span>
            <span>Online sessions across India</span>
            <span className="hidden sm:inline text-ink/20">·</span>
            <span>Strictly confidential</span>
          </div>
        </div>
      </section>

      {/* ——— Definition ——— */}
      <section className="px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-3xl sm:text-4xl text-ink leading-snug">
            <span className="text-pine">sthairyam</span>{' '}
            <span className="text-ink/40">/ स्थैर्यम् /</span>
            <em className="block mt-4 text-ink-soft text-2xl sm:text-3xl">
              n. Sanskrit. Steadiness; the quality of staying grounded and calm within, even when life
              isn&apos;t.
            </em>
          </p>
          <p className="mt-8 text-ink-soft leading-relaxed max-w-xl mx-auto">
            That steadiness is what we work toward here. Not by fixing you, because you aren&apos;t
            broken, but by helping you understand your patterns and find your footing again.
          </p>
        </div>
      </section>

      {/* ——— What we can work on ——— */}
      <section className="px-5 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="eyebrow mb-4">Areas of work</p>
              <h2 className="font-display text-3xl sm:text-5xl text-ink">
                What we can work on, <em className="text-pine">together</em>
              </h2>
            </div>
            <Link href="/support" className="link-arrow shrink-0 mb-1">
              See all areas
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {workAreas.map((area, index) => (
              <div key={index} className="border-t border-ink/10 py-7 flex gap-6">
                <span className="font-display text-sm text-clay pt-1.5 w-8 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl text-ink mb-1.5">{area.title}</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Empathy note ——— */}
      <section className="px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">A note before you begin</p>
            <p className="font-display text-2xl sm:text-[2rem] leading-[1.4] text-ink">
              Maybe your thoughts feel too loud, your energy has quietly drained away, or something just
              feels stuck. You don&apos;t have to have it all figured out to begin.{' '}
              <em className="text-pine">just starting this conversation is enough.</em>
            </p>
            <p className="mt-8 text-ink-soft">Bhavana</p>
            <Link href="/about" className="link-arrow mt-8">
              Get to know me
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— How it works ——— */}
      <section className="px-5 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">The process</p>
          <h2 className="font-display text-3xl sm:text-5xl text-ink mb-14">
            Gentle, structured, <em className="text-pine">one step at a time</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {steps.map((step, index) => (
              <div key={index} className="border-t-2 border-pine/80 pt-6">
                <p className="font-display text-sm text-clay mb-4">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-2xl text-ink mb-3">{step.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <Link href="/what-to-expect" className="link-arrow mt-12">
            What to expect, step by step
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* ——— Fees ——— */}
      <section className="px-5 sm:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Fees</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              Transparent &amp; <em className="text-pine">affordable</em>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Therapy shouldn&apos;t feel out of reach. Start free, and choose what suits you if we
              decide to continue.
            </p>
            <Link href="/booking" className="btn-primary mt-8">
              View packages &amp; book
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:col-span-8">
            {fees.map((fee, index) => (
              <div
                key={index}
                className="border-t border-ink/10 last:border-b py-6 flex items-baseline justify-between gap-6"
              >
                <div>
                  <h3 className="font-display text-xl text-ink">
                    {fee.name}
                    {fee.price === 'Free' && (
                      <span className="ml-3 text-[11px] uppercase tracking-[0.18em] text-clay font-sans font-semibold">
                        Start here
                      </span>
                    )}
                  </h3>
                  <p className="text-ink-soft text-sm mt-1">{fee.detail}</p>
                </div>
                <p className="font-display text-xl text-pine shrink-0">{fee.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FAQ teaser ——— */}
      <section className="px-5 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">Common questions</p>
          <h2 className="font-display text-3xl sm:text-5xl text-ink mb-12">
            Wondering if therapy is <em className="text-pine">for you?</em>
          </h2>
          <div>
            {faqTeasers.map((question, index) => (
              <Link
                key={index}
                href="/faq"
                className="group border-t border-ink/10 last:border-b py-6 flex items-center justify-between gap-6"
              >
                <span className="font-display text-xl sm:text-2xl text-ink group-hover:text-pine transition-colors">
                  {question}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-ink/30 group-hover:text-pine transition-colors shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className="px-5 sm:px-8 pt-24 lg:pt-32">
        <div className="max-w-6xl mx-auto bg-pine rounded-2xl px-6 py-16 sm:px-16 sm:py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream/60 font-semibold mb-6">
            Ready when you are
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-cream leading-tight max-w-2xl mx-auto">
            Start with a free, no-obligation <em>discovery call</em>
          </h2>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-cream text-pine px-8 py-4 rounded-full text-sm font-medium tracking-wide mt-10 hover:bg-white transition-colors"
          >
            Book your free discovery call
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
