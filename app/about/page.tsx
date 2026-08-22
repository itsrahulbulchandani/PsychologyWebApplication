import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Bhavana: Counselling Psychologist',
  description:
    'Meet Bhavana Bulchandani, counselling psychologist (MA Psychology, BHU). A client-centered, compassionate approach using CBT, mindfulness and emotion-focused work. Free discovery call available.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const approaches = [
    {
      title: 'Cognitive-Behavioral Therapy (CBT)',
      description: 'To explore thought and behavior patterns and develop practical coping strategies.',
    },
    {
      title: 'Mindfulness & Relaxation Techniques',
      description: 'To manage stress, anxiety, and emotional overwhelm.',
    },
    {
      title: 'Emotion-Focused Work',
      description: 'Helping you understand and process your emotions in a safe space.',
    },
    {
      title: 'Personal Meaning & Growth',
      description: 'Drawing on principles of spiritual psychology to explore values, purpose, and inner resilience.',
    },
    {
      title: 'Goal Tracking & Progress Work',
      description: 'Setting achievable steps and monitoring progress so you can see change over time.',
    },
    {
      title: 'Supportive, Empathetic Conversation',
      description: 'Creating a safe space where your experiences are heard and respected.',
    },
  ];

  // Most recent first
  const qualifications = [
    { degree: 'Postgraduate Diploma in Guidance & Counseling', institution: 'Jamia Millia Islamia', year: '2023' },
    { degree: 'MA in Psychology (Counseling Specialisation)', institution: 'Banaras Hindu University', year: '2019' },
    { degree: 'BA in Applied Psychology', institution: 'Amity University', year: '2017' },
  ];

  const memberships = [
    'Member, American Psychological Association (Membership No. C2605770239)',
    'Member, Counselors Council of India',
    'Registered Psychologist, National Council for Allied & Healthcare Professions (NCHAP)',
  ];

  return (
    <div className="px-5 sm:px-8">
      {/* ——— Intro ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-20 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">About</p>
        <div className="flex items-center gap-6">
          <span className="relative block h-24 w-24 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
            <Image
              src="/bhavana.webp"
              alt="Bhavana Bulchandani, counselling psychologist"
              fill
              sizes="128px"
              className="object-cover object-center"
              priority
            />
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-ink">
            Hi, I&apos;m <em className="text-pine">Bhavana.</em>
          </h1>
        </div>
        <div className="mt-10 max-w-2xl space-y-6 text-lg text-ink-soft leading-relaxed">
          <p>
            Reaching out for therapy can feel like a big step. It can be confusing, scary,
            even overwhelming. Here, you will be heard, understood, and supported. My goal is to provide a
            calm, safe space where you can explore your thoughts and feelings at your own pace, without
            judgment.
          </p>
          <p>
            Whether you&apos;re navigating stress, anxiety, low mood, relationship challenges, or just
            feeling stuck, I&apos;m here to walk with you and help you feel a little lighter, clearer,
            and more in control of your life.
          </p>
        </div>
      </section>

      {/* ——— Motivation ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Why I do this</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              My <em className="text-pine">motivation</em>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-ink-soft leading-relaxed max-w-2xl">
            <p>
              I&apos;m passionate about helping people feel heard, understood, and supported. I believe
              that mental health is just as important as physical health. Every person changes and grows
              over time, and our thoughts, feelings, and actions are all connected. What we think
              affects how we feel, what we feel affects what we do, and what we do shapes how we think
              and feel. In therapy, my role is to help you notice these patterns, understand them, and
              find ways to feel more in control, supported, and at peace with yourself.
            </p>
            <p>
              My motivation comes from a simple belief: everyone deserves to be heard, understood, and
              supported. I&apos;ve faced moments in life where things felt confusing or overwhelming,
              and I know how heavy that can feel. It guides me to see people gain clarity, notice
              patterns in their thoughts and feelings, and take small steps toward feeling more in
              control and at peace with themselves.
            </p>
            <p className="font-display text-xl text-ink italic">
              For me, therapy isn&apos;t just a profession. It&apos;s about walking alongside someone
              as they navigate life&apos;s challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Approach ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">How I work</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-6">
          My <em className="text-pine">approach</em>
        </h2>
        <p className="text-ink-soft leading-relaxed max-w-2xl mb-14">
          Client-centered and compassionate, combining evidence-based techniques with practices that
          support personal growth and emotional understanding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {approaches.map((item, index) => (
            <div key={index} className="border-t border-ink/10 py-7 flex gap-6">
              <span className="font-display text-sm text-clay pt-1.5 w-8 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink mb-1.5">{item.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Qualifications ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Credentials</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              Qualifications &amp; <em className="text-pine">memberships</em>
            </h2>
          </div>
          <div className="lg:col-span-8">
            {qualifications.map((qual, index) => (
              <div key={index} className="border-t border-ink/10 first:border-t-0 py-6 flex gap-8 items-baseline">
                <span className="font-display text-clay text-sm w-12 shrink-0">{qual.year}</span>
                <div>
                  <h3 className="font-display text-xl text-ink">{qual.degree}</h3>
                  <p className="text-ink-soft text-sm mt-1">{qual.institution}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-ink/10 py-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft font-semibold mb-4">
                Professional memberships
              </p>
              <ul className="space-y-2">
                {memberships.map((item, index) => (
                  <li key={index} className="text-ink-soft text-[15px] leading-relaxed">
                    <span className="text-pine mr-2">✳</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Discovery Call CTA ——— */}
      <section className="max-w-6xl mx-auto pt-8">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              I want this space to feel like a hand extended, not a lecture. If you&apos;re ready to
              take the first step, I offer a{' '}
              <em className="text-pine">free 15 to 20 minute discovery call</em> so we can connect, discuss
              your needs, and see if therapy with me feels like the right fit.
            </p>
            <p className="mt-6 text-ink-soft">
              You don&apos;t have to have it all figured out. Just starting this conversation is
              enough.
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
