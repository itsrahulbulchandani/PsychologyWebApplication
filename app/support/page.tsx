import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How I Can Support You — Areas of Counselling',
  description:
    'Online therapy for anxiety, stress, low mood, relationships, burnout, self-esteem, life transitions and more. Discover how counselling can help you feel heard, gain clarity and grow.',
  alternates: { canonical: '/support' },
};

export default function SupportPage() {
  const supportAreas = [
    {
      title: 'Anxiety & Stress',
      description: 'Find ways to calm your mind, manage overwhelming thoughts, and feel more balanced in everyday life.',
    },
    {
      title: 'Low Mood & Emotional Wellbeing',
      description: 'A safe space to talk about sadness, exhaustion, or loss of motivation, and begin feeling more like yourself again.',
    },
    {
      title: 'Relationships & Communication',
      description: 'Work through emotional hurt, misunderstandings, and conflict with clarity and compassion.',
    },
    {
      title: 'Emotional Healing',
      description: 'Gently explore past experiences and build resilience, safety, and inner strength at your own pace.',
    },
    {
      title: 'Rediscover Yourself',
      description: 'Reconnect with your needs, values, and goals, and move toward a more fulfilling and meaningful life.',
    },
    {
      title: 'Self-Esteem & Confidence',
      description: 'Build a healthier relationship with yourself and develop confidence in your choices and voice.',
    },
    {
      title: 'Life Transitions & Identity',
      description: 'Support through changes like career shifts, breakups, loss, or questions about purpose and direction.',
    },
    {
      title: 'Burnout & Emotional Fatigue',
      description: 'Find ways to cope with constant pressure, exhaustion, and feeling drained.',
    },
    {
      title: 'Boundaries & Self-Care',
      description: 'Learn to set healthy boundaries and care for your emotional needs without guilt.',
    },
    {
      title: 'Decision-Making & Clarity',
      description: 'Support in sorting through confusion and making choices that feel right for you.',
    },
    {
      title: 'Mindfulness & Inner Balance',
      description: 'Develop awareness and grounding practices to feel more present and steady.',
    },
  ];

  const therapyBenefits = [
    {
      title: 'The relief of being heard',
      description:
        'There is something deeply comforting about finally talking openly about your worries, pain, and confusion—and feeling truly understood. In therapy, you don’t have to filter your thoughts or worry about being judged. You can say what’s on your mind freely. For many people, this experience alone brings a sense of relief they may not have felt in a long time.',
    },
    {
      title: 'Gaining clarity and understanding patterns',
      description:
        'Through gentle questions and reflection, therapy helps you notice patterns and themes in your struggles. What once felt like a heavy, confusing cloud slowly becomes clearer and more understandable. Instead of feeling stuck, you begin to see what needs attention and where change is possible. This often brings a sense of lightness and makes life feel more manageable.',
    },
    {
      title: 'Learning new ways to cope and grow',
      description:
        'Therapy also offers practical, psychology-based tools through conversation, exercises, and learning resources. These help you develop healthier ways of thinking and responding to life’s challenges. We believe that emotional well-being is a skill that can be learned—and therapy is a space where you practice this skill, step by step, in a supportive environment.',
    },
  ];

  return (
    <div className="px-5 sm:px-8">
      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Areas of work</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink max-w-3xl leading-tight">
          How I can <em className="text-pine">support you</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          Whatever you&apos;re going through, you don&apos;t have to face it alone. Here are some of the
          areas we can work on together.
        </p>
      </section>

      {/* ——— Support Areas ——— */}
      <section className="max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {supportAreas.map((area, index) => (
            <div key={index} className="border-t border-ink/10 py-7 flex gap-6">
              <span className="font-display text-sm text-clay pt-1.5 w-8 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-display text-xl text-ink mb-1.5">{area.title}</h2>
                <p className="text-ink-soft text-[15px] leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— 3 Ways Therapy Helps ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Why it helps</p>
        <h2 className="font-display text-3xl sm:text-5xl text-ink mb-16">
          Three ways therapy <em className="text-pine">can help</em>
        </h2>

        <div className="space-y-0">
          {therapyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="border-t border-ink/10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-5 flex gap-6">
                <span className="font-display text-sm text-clay pt-2 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                  {benefit.title}
                </h3>
              </div>
              <p className="lg:col-span-7 text-ink-soft leading-relaxed max-w-2xl">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto pt-8">
        <div className="bg-pine rounded-2xl px-6 py-16 sm:px-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-cream">
            Ready to <em>begin?</em>
          </h2>
          <p className="mt-5 text-cream/75 max-w-md mx-auto">
            You don&apos;t need to have it all figured out. Taking the first step is enough.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-cream text-pine px-8 py-4 rounded-full text-sm font-medium tracking-wide mt-10 hover:bg-white transition-colors"
          >
            Book a session
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
