import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { breadcrumbSchema, jsonLdScript, ID } from '@/lib/schema';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  path: '/how-i-can-help',
  title: 'How I Can Help: Therapy for Anxiety, Stress & Relationships',
  description:
    'Online counselling with Bhavana Bulchandani, a counselling psychologist based in Delhi NCR, for anxiety, stress, low mood, relationship difficulties, burnout, self-esteem and life transitions. What each area looks like, and how therapy helps.',
});

export default function HowICanHelpPage() {
  const areas = [
    {
      id: 'anxiety-and-stress',
      title: 'Anxiety and stress',
      lead: 'Therapy for anxiety, chronic stress, worry and overthinking.',
      experience: [
        'A mind that will not switch off, especially at night',
        'Physical symptoms: a tight chest, restlessness, disturbed sleep, stomach trouble',
        'Constant anticipation of what might go wrong',
        'Avoiding calls, conversations, or opportunities because of what they might bring',
        'Feeling permanently braced, even when nothing is actually happening',
      ],
      helps: [
        'Anxiety and stress are two different things, and telling them apart changes what actually helps. Stress is a response to a demand you can usually name, and it eases when the demand passes. Anxiety anticipates threat and tends to persist regardless, finding a new object as soon as the last one resolves.',
        'In sessions we begin by mapping your particular pattern: what sets it off, what it promises you, and what it costs. From there the work usually combines cognitive behavioural techniques, which examine and test anxious predictions rather than simply arguing with them, with grounding and mindfulness practices that lower the physical baseline enough for the thinking work to be possible. Where avoidance has narrowed your life, we rebuild it in steps small enough to actually take.',
      ],
      reading: [
        { label: 'Therapy for anxiety', href: '/therapy-for-anxiety' },
        { label: 'Anxiety vs stress: what is the difference?', href: '/blog/anxiety-vs-stress-whats-the-difference' },
        { label: 'How therapy helps with overthinking', href: '/blog/therapy-for-overthinking-and-anxiety' },
      ],
    },
    {
      id: 'low-mood',
      title: 'Low mood and emotional wellbeing',
      lead: 'Support with sadness, flatness, loss of motivation and emotional exhaustion.',
      experience: [
        'Waking up tired regardless of how long you slept',
        'Things you used to enjoy feeling oddly flat',
        'Withdrawing from people, then feeling worse for being alone',
        'Harsh, tired self-criticism running in the background',
        'Getting through the day rather than living it',
      ],
      helps: [
        'Low mood is rarely just sadness. More often it is a slow narrowing: less energy, less contact, fewer of the things that used to give the week its shape, and a running commentary that reads the narrowing as proof of personal failure.',
        'Therapy works on both ends of that loop. We look at the thinking patterns that keep the commentary going, and at the same time work on gently rebuilding activity and contact, because waiting to feel motivated before doing anything is a trap that keeps low mood in place. We also make room for whatever is underneath, which is sometimes grief, sometimes anger, and sometimes something that has never been said out loud.',
        'If low mood has lasted for weeks, is severe, or is accompanied by thoughts of harming yourself, that is a reason to seek help promptly rather than to wait, and it may be appropriate to involve a doctor or psychiatrist alongside counselling.',
      ],
      reading: [
        { label: 'Therapy for depression and low mood', href: '/therapy-for-depression' },
        { label: 'How do I know if I need therapy?', href: '/blog/how-do-i-know-if-i-need-therapy' },
      ],
    },
    {
      id: 'relationships',
      title: 'Relationships and communication',
      lead: 'Relationship counselling and couples therapy, for individuals and for partners together.',
      experience: [
        'The same argument on repeat, with different subject matter each time',
        'Conversations that have gone quiet rather than loud',
        'Feeling unseen, unheard, or alone inside a relationship',
        'Difficulty saying what you need without it turning into conflict',
        'Something that happened and was never really resolved',
        'Strain with family, in-laws, friends, or at work rather than with a partner',
      ],
      helps: [
        'Most recurring conflict is not about the thing being argued over. Underneath it is usually something more constant: feeling unimportant, feeling controlled, feeling unsafe, feeling taken for granted. Once that layer becomes visible, the surface arguments tend to lose a good deal of their charge.',
        'I work with individuals on relationship difficulties, and with couples together. In couples sessions the aim is not to establish who was right; it is to help both people be heard properly, to make the pattern between you visible, and to build practical skills: raising something difficult without it escalating, repairing after a fight, making requests rather than complaints, and distinguishing a disagreement that needs solving from one that needs accepting.',
        'Family sessions are also available where the difficulty sits across a wider set of relationships.',
      ],
      reading: [
        { label: 'Relationship counselling', href: '/relationship-counselling' },
        { label: 'When should you consider couples therapy?', href: '/blog/when-should-you-consider-couples-therapy' },
      ],
    },
    {
      id: 'burnout',
      title: 'Burnout and emotional fatigue',
      lead: 'Working with exhaustion, detachment and the sense that rest is no longer restoring you.',
      experience: [
        'Tiredness that a weekend, or even a holiday, does not touch',
        'Growing cynicism about work you used to care about',
        'Doubting your own competence at something you were good at',
        'Irritability with the people around you, and guilt about it afterwards',
        'Getting through the evening with a screen and a drink rather than a life',
      ],
      helps: [
        'Burnout is not a hard week. It is what accumulates when sustained demand meets insufficient recovery over months, and it is disproportionately common in conscientious people who absorb extra work and find it difficult to say no.',
        'The work is practical. We stabilise the basics first, then map which pressures are genuinely structural and which are being maintained by beliefs such as "if I stop, everything falls apart". Boundaries come next, which is usually the hardest part, along with learning to tolerate the guilt that follows a no. Where the honest conclusion is that something external has to change, therapy is a good place to think that through without panic.',
      ],
      reading: [
        { label: 'Therapy for stress and burnout', href: '/therapy-for-stress-and-burnout' },
        { label: 'Signs of burnout and how therapy helps', href: '/blog/signs-of-burnout-and-how-therapy-helps' },
      ],
    },
    {
      id: 'self-esteem',
      title: 'Self-esteem and confidence',
      lead: 'Building a steadier, less punishing relationship with yourself.',
      experience: [
        'An internal voice that is harsher with you than you would ever be with anyone else',
        'Discounting achievements and waiting to be found out',
        'Difficulty accepting praise, or difficulty asking for anything',
        'Shrinking yourself to keep other people comfortable',
        'Deciding what you want by working out what others expect',
      ],
      helps: [
        'Low self-esteem is usually learned rather than innate. Somewhere, a set of conclusions formed about what you are worth and what you have to do to earn it, and those conclusions have gone on running long after the situation that produced them ended.',
        'Therapy works on making those beliefs explicit, examining where they came from and whether they still hold, and then testing them in practice. Alongside that, we work on the concrete skills that confidence actually rests on: setting boundaries, tolerating disapproval, making requests, and letting a mistake be a mistake rather than evidence about your character.',
      ],
      reading: [],
    },
    {
      id: 'life-transitions',
      title: 'Life transitions and identity',
      lead: 'Support through career shifts, endings, relocation, loss and questions of direction.',
      experience: [
        'A change you chose that still feels like a loss',
        'Feeling unmoored after a breakup, a move, a job change, or a bereavement',
        'Not recognising the life you have built, or the person living it',
        'Pressure from family or culture that pulls against what you want',
        'Being unable to make a decision, so circumstances make it for you',
      ],
      helps: [
        'Transitions unsettle more than logistics. They disturb the story you tell about who you are, and that disturbance often arrives some months after the event itself, when everyone else has moved on and assumes you have too.',
        'Sessions give you space to grieve what ended, including the parts you wanted to end, and to work out what you actually want rather than what you are expected to want. Where a decision is stuck, we look at what is really being weighed, which is frequently not the options on the table but a fear underneath them.',
      ],
      reading: [],
    },
  ];

  const otherAreas = [
    { title: 'Emotional healing', description: 'Gently exploring past experiences and building resilience, safety and inner strength at your own pace.' },
    { title: 'Boundaries and self-care', description: 'Learning to set healthy boundaries and attend to your own needs without guilt.' },
    { title: 'Decision-making and clarity', description: 'Working through confusion and making choices that genuinely fit you.' },
    { title: 'Mindfulness and inner balance', description: 'Developing awareness and grounding practices so you feel more present and steady.' },
    { title: 'Rediscovering yourself', description: 'Reconnecting with your needs, values and goals, and moving toward a more meaningful life.' },
  ];

  const therapyBenefits = [
    {
      title: 'The relief of being heard',
      description:
        'There is something deeply comforting about finally talking openly about your worries, pain, and confusion, and feeling truly understood. In therapy, you don’t have to filter your thoughts or worry about being judged. You can say what’s on your mind freely. For many people, this experience alone brings a sense of relief they may not have felt in a long time.',
    },
    {
      title: 'Gaining clarity and understanding patterns',
      description:
        'Through gentle questions and reflection, therapy helps you notice patterns and themes in your struggles. What once felt like a heavy, confusing cloud slowly becomes clearer and more understandable. Instead of feeling stuck, you begin to see what needs attention and where change is possible. This often brings a sense of lightness and makes life feel more manageable.',
    },
    {
      title: 'Learning new ways to cope and grow',
      description:
        'Therapy also offers practical, psychology-based tools through conversation, exercises, and learning resources. These help you develop healthier ways of thinking and responding to life’s challenges. We believe that emotional well-being is a skill that can be learned, and therapy is a space where you practice this skill, step by step, in a supportive environment.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/how-i-can-help#service`,
    name: 'Online counselling and psychotherapy',
    serviceType: 'Counselling psychology',
    description:
      'Confidential online counselling for anxiety, stress, low mood, relationship difficulties, burnout, self-esteem and life transitions, offered across India in English and Hindi.',
    url: absoluteUrl('/how-i-can-help'),
    provider: { '@id': ID.practice },
    areaServed: { '@type': 'Country', name: 'India' },
    availableLanguage: siteConfig.languages.map((name) => ({ '@type': 'Language', name })),
    audience: { '@type': 'Audience', audienceType: 'Adults seeking counselling support in India' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Areas of counselling',
      itemListElement: areas.map((area) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: area.title, description: area.lead },
      })),
    },
  };

  return (
    <div className="px-5 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([{ name: 'How I can help', path: '/how-i-can-help' }])
        )}
      />

      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-12 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Areas of work</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink max-w-3xl leading-tight">
          How I can <em className="text-pine">support you</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
          I&apos;m Bhavana Bulchandani, a counselling psychologist offering online therapy across
          India. Most of my work is with adults navigating anxiety and stress, low mood, relationship
          difficulties, burnout, self-esteem and periods of change. Sessions are held over video in
          English or Hindi, individually or with a partner or family.
        </p>
        <p className="mt-5 text-ink-soft leading-relaxed max-w-2xl">
          Below is what each of those areas tends to look like from the inside, and how therapy
          actually works with it. If you recognise yourself somewhere here, the{' '}
          <Link
            href="/booking"
            className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
          >
            first call is free
          </Link>
          .
        </p>
      </section>

      {/* ——— Jump links ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="border-t border-b border-ink/10 py-5 flex flex-wrap gap-x-8 gap-y-2 text-[13px] tracking-wide">
          {areas.map((area) => (
            <a key={area.id} href={`#${area.id}`} className="text-ink-soft hover:text-pine transition-colors">
              {area.title}
            </a>
          ))}
        </div>
      </section>

      {/* ——— Areas in depth ——— */}
      <section className="max-w-6xl mx-auto pb-8">
        {areas.map((area, index) => (
          <div
            key={area.id}
            id={area.id}
            className="border-t border-ink/10 py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24"
          >
            <div className="lg:col-span-4">
              <p className="font-display text-sm text-clay mb-4">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug">{area.title}</h2>
              <p className="mt-4 text-ink-soft text-[15px] leading-relaxed">{area.lead}</p>
            </div>

            <div className="lg:col-span-8 max-w-2xl">
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink-soft font-semibold mb-4">
                What people often describe
              </h3>
              <ul className="space-y-2.5 mb-8">
                {area.experience.map((item, i) => (
                  <li key={i} className="text-ink-soft text-[15px] leading-relaxed flex gap-3">
                    <span className="text-pine/50 shrink-0 mt-px">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-[11px] uppercase tracking-[0.22em] text-ink-soft font-semibold mb-4">
                How therapy works with it
              </h3>
              {area.helps.map((paragraph, i) => (
                <p key={i} className="text-ink-soft leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}

              {area.reading.length > 0 && (
                <div className="mt-7 space-y-2">
                  {area.reading.map((item) => (
                    <Link key={item.href} href={item.href} className="link-arrow block">
                      {item.label}
                      <ArrowUpRight size={15} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ——— Other areas ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Also worked with</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
          Other things people <em className="text-pine">bring here</em>
        </h2>
        <p className="text-ink-soft leading-relaxed max-w-2xl mb-12">
          Not everything fits neatly into a category, and it does not need to. These come up often
          enough to be worth naming.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {otherAreas.map((area, index) => (
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

      {/* ——— Honest limits ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Being straight with you</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              What this <em className="text-pine">is not</em>
            </h2>
          </div>
          <div className="lg:col-span-8 max-w-2xl space-y-4 text-ink-soft leading-relaxed">
            <p>
              This is not a crisis or emergency service. If you or someone you know is in immediate
              danger, please contact Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency
              services on 112.
            </p>
            <p>
              As a counselling psychologist I do not prescribe medication and I do not provide
              psychiatric diagnosis. Where medication or psychiatric assessment would serve you
              better, I will say so and suggest a referral rather than take the booking. Therapy and
              medication are not alternatives to each other, and many people benefit from both.
            </p>
            <p>
              No one can honestly promise a particular outcome from therapy. What I can commit to is a
              confidential space, an evidence-informed approach, and honesty about whether the work we
              are doing is helping.
            </p>
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto pt-8">
        <div className="bg-pine rounded-2xl px-6 py-16 sm:px-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-cream">
            Ready to <em>begin?</em>
          </h2>
          <p className="mt-5 text-cream/75 max-w-md mx-auto">
            Start with a free 15 to 20 minute discovery call. No obligation to book a session
            afterwards.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-cream text-pine px-8 py-4 rounded-full text-sm font-medium tracking-wide mt-10 hover:bg-white transition-colors"
          >
            Book a free discovery call
            <ArrowRight size={16} />
          </Link>
          <p className="mt-8 text-cream/70 text-sm">
            <Link href="/what-to-expect" className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream">
              See how therapy works here
            </Link>
            {'  ·  '}
            <Link href="/faq" className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream">
              Read common questions
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
