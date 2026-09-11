import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FAQList from '@/components/FAQList';
import { breadcrumbSchema, faqSchema, localServiceSchema, jsonLdScript } from '@/lib/schema';
import { siteConfig } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  path: '/online-therapy-india',
  title: 'Online Therapy in India | Book a Session from ₹1,200',
  description:
    'Online counselling in India with Bhavana Bulchandani, a counselling psychologist (MA Psychology, BHU). Video sessions in English and Hindi for anxiety, stress, low mood, relationships and burnout. Slots 9 am to 11 pm IST, from ₹1,200, free discovery call first.',
});

const onlineFaqs = [
  {
    question: 'How do I book an online therapy session in India?',
    answer:
      'Open the booking page, pick a date and a slot that suits you, and fill in the short intake form. The calendar only shows times that are genuinely free, so whatever you can select is available. Your first booking is the free 15 to 20 minute discovery call; paid sessions are booked the same way afterwards. You receive an email confirmation with the video link.',
  },
  {
    question: 'What does online therapy cost in India?',
    answer:
      'Here, the discovery call is free, a single session of up to 60 minutes is ₹1,200, a three-session bundle is ₹3,200 and a six-session bundle is ₹6,000. Rates across India vary a great deal with the practitioner’s experience and setting, so it is always worth asking directly rather than assuming.',
  },
  {
    question: 'What do I need for a session to work?',
    answer:
      'A phone or laptop with a working camera, a reasonable internet connection, headphones, and a room where you will not be interrupted for an hour. Headphones matter more than people expect: they keep your side of the conversation private and make it much easier to hear tone.',
  },
  {
    question: 'What happens if my connection drops mid-session?',
    answer:
      'It happens, and it is not a problem. We reconnect, and if the connection will not hold we switch to audio or to a phone call and continue. Time lost to a genuine technical failure is not time you lose from the session.',
  },
  {
    question: 'Which cities do you work with?',
    answer:
      'All of them. Sessions are held over video, so location does not affect availability. Most clients are in Delhi NCR, but I work with people across India and with Indians living abroad who prefer sessions in Hindi or in a shared cultural frame. Slots are set in Indian Standard Time.',
  },
  {
    question: 'Is online therapy right for everyone?',
    answer:
      'No, and it is worth being honest about that. It works well for anxiety, stress, low mood, relationship difficulty, burnout, self-esteem and life transitions. It is not appropriate for psychiatric emergencies, for anyone at immediate risk, or where medication or a psychiatric diagnosis is what is actually needed. As a counselling psychologist I do not prescribe or diagnose, and I will refer you on when that is the right call.',
  },
  {
    question: 'Is what I say online kept confidential?',
    answer:
      'Yes. Sessions are not recorded. What you share stays confidential, with the narrow legal and safety exceptions set out in the privacy policy, and notes are kept securely. Nothing is shared with family or an employer without your permission.',
  },
];

const steps = [
  {
    title: 'Book the free discovery call',
    body: 'Fifteen to twenty minutes, no payment, no obligation. You describe what has been going on, ask whatever you want to ask, and we both decide whether this is a fit.',
  },
  {
    title: 'Pick a slot that survives your week',
    body: 'The calendar runs 9 am to 11 pm IST, seven days a week, and shows only genuinely free times. Consistency matters more than the specific hour, so choose the slot you can actually keep.',
  },
  {
    title: 'The first sessions',
    body: 'Getting a clear picture of what is happening, what has already been tried, and what you want to be different. We set goals together rather than my handing you a plan.',
  },
  {
    title: 'Ongoing work',
    body: 'Usually weekly to begin with, up to 60 minutes, with practical exercises between sessions and the option to message if you get stuck on one. Frequency is reviewed as things change.',
  },
];

export default function OnlineTherapyIndiaPage() {
  const faqId = `${siteConfig.url}/online-therapy-india#faqpage`;

  return (
    <div className="px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          localServiceSchema({
            path: '/online-therapy-india',
            name: 'Online therapy and counselling in India',
            description:
              'Confidential online counselling across India with Bhavana Bulchandani, counselling psychologist. Video sessions in English and Hindi for anxiety, stress, low mood, relationships, burnout and self-esteem.',
            cityNames: [
              'Delhi',
              'Mumbai',
              'Bengaluru',
              'Hyderabad',
              'Pune',
              'Chennai',
              'Kolkata',
              'Noida',
              'Gurugram',
            ],
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(onlineFaqs, { id: faqId }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([{ name: 'Online therapy in India', path: '/online-therapy-india' }])
        )}
      />

      {/* ——— Hero ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-14 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Online &middot; Across India</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-[1.1]">
          Online therapy in India, <em className="text-pine">from ₹1,200</em>
        </h1>
        <div className="mt-9 max-w-2xl space-y-6 text-lg text-ink-soft leading-relaxed">
          <p>
            Confidential video sessions with Bhavana Bulchandani, a counselling psychologist with an
            MA in Psychology from Banaras Hindu University, based in Delhi NCR and working with people
            across the country. Sessions run in English, Hindi, or a mix of the two.
          </p>
          <p>
            Everyone starts with a free 15 to 20 minute discovery call. No payment, no obligation, and
            no assumption that you will book anything afterwards.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
            <Link href="/booking" className="btn-primary">
              Book a free discovery call
              <ArrowRight size={16} />
            </Link>
            <Link href="/how-i-can-help" className="link-arrow">
              What I work with
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="mt-14 border-t border-b border-ink/10 py-5">
          <div className="flex flex-wrap justify-center lg:justify-between gap-x-10 gap-y-2 text-[13px] tracking-wide text-ink-soft">
            <span>MA Psychology, Banaras Hindu University</span>
            <span className="hidden sm:inline text-ink/20">&middot;</span>
            <span>Slots 9 am to 11 pm IST</span>
            <span className="hidden sm:inline text-ink/20">&middot;</span>
            <span>English &amp; Hindi</span>
            <span className="hidden sm:inline text-ink/20">&middot;</span>
            <span>Sessions never recorded</span>
          </div>
        </div>
      </section>

      {/* ——— Steps ——— */}
      <section className="max-w-6xl mx-auto py-16">
        <p className="eyebrow mb-4">How booking works</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-12">
          Four steps, and the first one <em className="text-pine">is free</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {steps.map((step, index) => (
            <div key={step.title} className="border-t border-ink/10 py-7 flex gap-6">
              <span className="font-display text-sm text-clay pt-1.5 w-8 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink mb-1.5">{step.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— What it is good for ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Fit</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              What online therapy <em className="text-pine">is and is not</em> for
            </h2>
          </div>
          <div className="lg:col-span-8 max-w-2xl space-y-6 text-ink-soft leading-relaxed">
            <p>
              Video sessions work well for the concerns most people actually bring: anxiety and
              chronic stress, low mood and flatness, relationship and communication difficulty,
              burnout, self-esteem, and the disorientation of a life transition. Studies comparing
              video-delivered therapy with in-person work find broadly comparable outcomes for these.
            </p>
            <p>
              They are the wrong tool for a psychiatric emergency, for anyone at immediate risk of
              harm, and for situations where medication or a formal diagnosis is the thing that would
              help. I am a counselling psychologist: I do not prescribe and I do not diagnose. Where a
              psychiatrist or a hospital team is what you need, I will say so rather than take the
              booking.
            </p>
            <p className="text-[15px] border-l-2 border-clay pl-5">
              This is not a crisis service. If you or someone you know is in immediate danger, contact
              Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112.
            </p>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Questions &amp; answers</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-10">
          Booking an online session, <em className="text-pine">answered</em>
        </h2>
        <FAQList faqs={onlineFaqs} idPrefix="online-india" defaultOpenIndex={0} />
        <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
          <Link href="/psychologist-in-delhi" className="link-arrow">
            In Delhi NCR? Start here
            <ArrowUpRight size={15} />
          </Link>
          <Link href="/blog/how-online-therapy-works-in-india" className="link-arrow">
            How online therapy works in India
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto pb-4">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              Wherever you are in India, the first conversation{' '}
              <em className="text-pine">costs nothing.</em>
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
