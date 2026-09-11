import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FAQList from '@/components/FAQList';
import { breadcrumbSchema, faqSchema, localServiceSchema, jsonLdScript } from '@/lib/schema';
import { siteConfig } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

const NCR = siteConfig.location.servesCities;

export const metadata: Metadata = pageMeta({
  path: '/female-psychologist-in-delhi',
  title: 'Female Psychologist in Delhi | Online Therapy for Women',
  description:
    'Bhavana Bulchandani is a female counselling psychologist based in Delhi NCR offering confidential online therapy in English and Hindi. Anxiety, low mood, relationships, family pressure, burnout and self-esteem. Sessions from ₹1,200, free discovery call.',
});

const femaleFaqs = [
  {
    question: 'Are you a female psychologist based in Delhi?',
    answer:
      'Yes. I am a woman, a counselling psychologist with an MA in Psychology from Banaras Hindu University, and I am based in Delhi NCR. All sessions are held online over video, in English, Hindi or a mix of the two.',
  },
  {
    question: 'Does it matter whether my therapist is a woman?',
    answer:
      'Research on therapy outcomes finds that the therapist’s gender predicts far less than the quality of the working relationship does. But that is an average across many people, and it is not an argument against your preference. If you would speak more openly to a woman, or if you would spend the first three sessions managing how a man might react, then a female therapist is simply the more effective choice for you. Preference is information about what will help you, not something to talk yourself out of.',
  },
  {
    question: 'Do you only work with women?',
    answer:
      'No. I work with adults of any gender, and with couples and families. This page exists because “female psychologist” is what a lot of people in Delhi actually search for, and it is a fair thing to want to know before booking.',
  },
  {
    question: 'Can I talk about things I have not told my family?',
    answer:
      'Yes, and most people do. What you share stays confidential, with the narrow legal and safety exceptions set out in the privacy policy. Nothing is shared with a parent, partner or employer without your permission. Session notes are kept securely.',
  },
  {
    question: 'How do I keep sessions private if I live with family?',
    answer:
      'This comes up constantly and it is worth planning rather than improvising. Use headphones, pick a room you can close or a parked car, and decide in advance what you will say if you are asked where you are going. Most people simply say they have a call. Late-evening slots up to 11 pm exist partly for this reason.',
  },
  {
    question: 'What does a session cost?',
    answer:
      'The first discovery call of 15 to 20 minutes is free, with no obligation to continue. After that a single session of up to 60 minutes is ₹1,200, a three-session bundle is ₹3,200 and a six-session bundle is ₹6,000.',
  },
];

const commonThemes = [
  {
    title: 'Pressure that is framed as concern',
    body: 'Marriage timelines, career choices questioned at every family gathering, the assumption that your plans are provisional. Therapy is a place to separate what you want from what you have been told to want, and to work out what you are willing to negotiate.',
  },
  {
    title: 'Carrying the emotional work',
    body: 'Being the person everyone calls, managing a household alongside a full job, and the resentment that builds quietly because saying it out loud feels ungrateful. We work on boundaries as a practical skill, not a slogan.',
  },
  {
    title: 'Anxiety, overthinking and sleep',
    body: 'The replaying of conversations, the anticipation of everything that might go wrong, the mind that gets loudest at 1 am. Cognitive behavioural work on anxious predictions, plus grounding practices that lower the physical baseline.',
  },
  {
    title: 'Self-esteem, body image and comparison',
    body: 'The internal commentary that would end a friendship if you said it to anyone else. We look at where those beliefs came from, whether they still hold, and what changes when you stop treating them as facts.',
  },
  {
    title: 'Relationships, endings and repair',
    body: 'Conflict that repeats the same shape every time, hurt that has stopped being spoken about, and decisions about whether to stay. Individual and couple sessions are both available.',
  },
  {
    title: 'Work, burnout and coming back',
    body: 'Depletion from a job that keeps asking, imposter feelings in rooms where you are the only woman, and rest that no longer restores anything. Recovery involves the conditions as well as the exhaustion.',
  },
];

export default function FemalePsychologistInDelhiPage() {
  const faqId = `${siteConfig.url}/female-psychologist-in-delhi#faqpage`;

  return (
    <div className="px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          localServiceSchema({
            path: '/female-psychologist-in-delhi',
            name: 'Online therapy with a female counselling psychologist in Delhi',
            description:
              'Confidential online counselling with Bhavana Bulchandani, a female counselling psychologist based in Delhi NCR. Sessions in English and Hindi for anxiety, low mood, relationships, family pressure, burnout and self-esteem.',
            cityNames: NCR,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(femaleFaqs, { id: faqId }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: 'Psychologist in Delhi', path: '/psychologist-in-delhi' },
            { name: 'Female psychologist in Delhi', path: '/female-psychologist-in-delhi' },
          ])
        )}
      />

      {/* ——— Hero ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Delhi &middot; NCR &middot; Online</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-[1.1]">
          Female psychologist in Delhi, <em className="text-pine">online</em>
        </h1>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
            <p>
              I&apos;m Bhavana Bulchandani, a counselling psychologist based in Delhi NCR with an MA
              in Psychology from Banaras Hindu University. If you have been searching specifically for
              a woman to talk to, that is a reasonable thing to want, and you do not need to justify
              it to anyone, including me.
            </p>
            <p>
              Sessions are held online over video, in English, Hindi or the mix of the two. Everyone
              starts with a free 15 to 20 minute discovery call, which exists precisely so you can
              hear how I work before deciding anything.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
              <Link href="/booking" className="btn-primary">
                Book a free discovery call
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="link-arrow">
                My training and approach
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="border border-ink/10 rounded-2xl bg-sage-pale p-7">
              <span className="relative block h-20 w-20 overflow-hidden rounded-full ring-1 ring-ink/10">
                <Image
                  src="/bhavana.webp"
                  alt="Bhavana Bulchandani, female counselling psychologist in Delhi NCR"
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </span>
              <p className="font-display text-xl text-ink mt-5">Bhavana Bulchandani</p>
              <p className="text-sm text-ink-soft mt-1">Counselling Psychologist</p>
              <ul className="mt-5 space-y-2 text-[13px] text-ink-soft leading-relaxed">
                <li>MA Psychology, Banaras Hindu University</li>
                <li>PG Diploma in Guidance &amp; Counselling, Jamia Millia Islamia</li>
                <li>Member, American Psychological Association</li>
                <li>Registered with NCAHP</li>
                <li>English &amp; Hindi &middot; 9 am to 11 pm, all week</li>
                <li>From ₹1,200 per session &middot; first call free</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— On preference ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">On the preference itself</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              Why it is a <em className="text-pine">reasonable ask</em>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-ink-soft leading-relaxed max-w-2xl">
            <p>
              People sometimes arrive slightly apologetic about having searched for a female
              psychologist, as though it were a bias rather than a preference. It is worth saying
              plainly: therapy only works if you actually say the thing. If you would spend the first
              three sessions managing how a man in the room might react, then those are three sessions
              spent on something other than you.
            </p>
            <p>
              The research is honest about this too. Across studies, a therapist&apos;s gender predicts
              far less about outcome than the strength of the working relationship does. But an average
              across thousands of people is not a prediction about you. What predicts your outcome is
              whether you can be direct in the room, and you are the only person who knows what makes
              that easier.
            </p>
            <p>
              So: if it matters, it matters. If it turns out not to, that is fine too. The discovery
              call costs nothing and is a reasonable way to find out.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Themes ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Common ground</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-12">
          What comes up <em className="text-pine">most often</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {commonThemes.map((item, index) => (
            <div key={item.title} className="border-t border-ink/10 py-7 flex gap-6">
              <span className="font-display text-sm text-clay pt-1.5 w-8 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink mb-1.5">{item.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-ink-soft leading-relaxed max-w-2xl">
          None of this is limited to women. I work with adults of any gender, and with couples and
          families. This page exists because it is what people in Delhi type into a search box, and
          because the question behind it deserves a straight answer.
        </p>
      </section>

      {/* ——— How sessions run ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Practicalities</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              How sessions <em className="text-pine">actually run</em>
            </h2>
          </div>
          <div className="lg:col-span-8 max-w-2xl">
            <ul className="space-y-4 text-ink-soft leading-relaxed">
              <li>
                <strong className="text-ink font-medium">Online, over video.</strong> No clinic, no
                waiting room, nobody in Delhi who might see you arrive.
              </li>
              <li>
                <strong className="text-ink font-medium">Up to 60 minutes,</strong> usually weekly to
                begin with, reviewed as things change.
              </li>
              <li>
                <strong className="text-ink font-medium">English, Hindi, or both.</strong> You can
                switch mid-sentence if that is how the thought arrives.
              </li>
              <li>
                <strong className="text-ink font-medium">Slots from 9 am to 11 pm,</strong> seven days
                a week, so a session can sit inside a working day or well after it.
              </li>
              <li>
                <strong className="text-ink font-medium">Confidential,</strong> with the narrow legal
                and safety exceptions set out in the{' '}
                <Link href="/privacy-policy" className="text-pine hover:underline">
                  privacy policy
                </Link>
                .
              </li>
              <li>
                <strong className="text-ink font-medium">No diagnosis, no medication.</strong> As a
                counselling psychologist I do neither, and I will refer you on if that is what would
                help.
              </li>
            </ul>
            <Link href="/what-to-expect" className="link-arrow mt-8">
              What to expect, step by step
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Questions &amp; answers</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-10">
          Before you <em className="text-pine">book</em>
        </h2>
        <FAQList faqs={femaleFaqs} idPrefix="female-delhi" defaultOpenIndex={0} />
        <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
          <Link href="/psychologist-in-delhi" className="link-arrow">
            Psychologist in Delhi: the full picture
            <ArrowUpRight size={15} />
          </Link>
          <Link href="/faq" className="link-arrow">
            All frequently asked questions
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto pb-4">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              You can ask me anything you like before deciding.{' '}
              <em className="text-pine">That is what the first call is for.</em>
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
