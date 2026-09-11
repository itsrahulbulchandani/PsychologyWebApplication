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
  path: '/psychologist-in-delhi',
  title: 'Psychologist in Delhi | Online Therapy & Counselling',
  description:
    'Looking for a psychologist in Delhi? Bhavana Bulchandani is a counselling psychologist (MA Psychology, BHU) based in Delhi NCR, offering online therapy for anxiety, stress, low mood, relationships and burnout. Sessions in English and Hindi, evening slots, from ₹1,200. Free discovery call.',
});

const delhiFaqs = [
  {
    question: 'Are you a psychologist based in Delhi?',
    answer:
      'Yes. I am based in Delhi NCR and most of the people I work with are in Delhi, Noida and Gurugram. Sessions themselves are held online over video rather than in a consulting room, so you can attend from home, from your office, or from wherever you can close a door.',
  },
  {
    question: 'Do you see clients in person anywhere in Delhi?',
    answer:
      'No. This is an online-only practice and there is no walk-in clinic address. That is a deliberate choice: it removes the commute, it opens up evening slots that a physical room could not offer, and it means a session does not fall apart because of traffic on the Ring Road. If in-person work is important to you, I will say so on the discovery call and point you towards a referral.',
  },
  {
    question: 'What does therapy cost in Delhi?',
    answer:
      'My fees are ₹1,200 for a single session of up to 60 minutes, ₹3,200 for a three-session bundle and ₹6,000 for a six-session bundle. The first discovery call of 15 to 20 minutes is free and carries no obligation. Fees across Delhi vary widely depending on the therapist’s experience and setting, so it is worth asking any practitioner directly before you book.',
  },
  {
    question: 'Can I have sessions in Hindi?',
    answer:
      'Yes. Sessions run in English, Hindi, or the mix of the two most people in Delhi actually speak. You do not have to pick a language in advance, and you can switch mid-sentence if that is how a thought comes out.',
  },
  {
    question: 'Do you offer evening or weekend appointments?',
    answer:
      'Yes. The booking calendar opens slots from 9 am to 11 pm, seven days a week, and shows only the times that are genuinely free. Late-evening slots are the ones Delhi and Gurugram office workers book most, so they go first.',
  },
  {
    question: 'How do I know a psychologist in Delhi is properly qualified?',
    answer:
      'India does not yet have a single licensing register for counselling psychologists, so titles alone are not a safeguard. Ask for the specific postgraduate degree and the university that awarded it, ask what supervision the practitioner has, and ask which approach they use and why. My own qualifications are an MA in Psychology from Banaras Hindu University, a PG Diploma in Guidance and Counselling from Jamia Millia Islamia, and a BA in Applied Psychology from Amity University, all listed on the about page.',
  },
  {
    question: 'Is online therapy as effective as sitting in a room in Delhi?',
    answer:
      'For the common concerns people bring — anxiety, stress, low mood, relationship difficulty, burnout, self-esteem — research on video-delivered therapy shows outcomes broadly comparable to in-person work. What matters more than the medium is the fit between you and the therapist and whether you keep coming back. Online therapy is not suitable for psychiatric emergencies or for anyone needing medication, and I will refer you on if that is what would serve you.',
  },
];

const whoIWorkWith = [
  {
    title: 'Professionals in Gurugram, Noida and Central Delhi',
    body: 'People whose working day ends at 8 pm and whose commute swallows the rest of it. Burnout, chronic stress, a mind that will not switch off at night, and the slow realisation that the job has taken more than it gave.',
  },
  {
    title: 'Students and early-career adults',
    body: 'University pressure, entrance-exam anxiety, first jobs, and the particular loneliness of living in a PG or a shared flat far from home. Sessions can be booked around class and shift timings.',
  },
  {
    title: 'Couples and families across NCR',
    body: 'Communication that has turned into scorekeeping, conflict that repeats the same shape every time, and the strain of extended family expectations. Individual, couple and family sessions are all available.',
  },
  {
    title: 'People who want privacy above all',
    body: 'Delhi is a small city socially. Online sessions mean no waiting room, no chance of running into someone you know, and no clinic name on your calendar.',
  },
];

export default function PsychologistInDelhiPage() {
  const faqId = `${siteConfig.url}/psychologist-in-delhi#faqpage`;

  return (
    <div className="px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          localServiceSchema({
            path: '/psychologist-in-delhi',
            name: 'Online therapy with a counselling psychologist in Delhi',
            description:
              'Online counselling and psychotherapy for adults and couples in Delhi and the NCR, provided by counselling psychologist Bhavana Bulchandani. Sessions in English and Hindi for anxiety, stress, low mood, relationships, burnout and self-esteem.',
            cityNames: NCR,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(delhiFaqs, { id: faqId }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([{ name: 'Psychologist in Delhi', path: '/psychologist-in-delhi' }])
        )}
      />

      {/* ——— Hero ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Delhi &middot; NCR &middot; Online</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-[1.1]">
          Psychologist in Delhi, <em className="text-pine">online</em>
        </h1>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
            <p>
              I&apos;m Bhavana Bulchandani, a counselling psychologist based in Delhi NCR with an MA
              in Psychology from Banaras Hindu University. I work with adults and couples across
              Delhi, Noida and Gurugram on anxiety, stress, low mood, relationship difficulties,
              burnout and self-esteem.
            </p>
            <p>
              Every session is held online over video, in English, Hindi, or the mix of the two most
              of us actually speak. There is no clinic to travel to and no waiting room. Everyone
              starts with a free 15 to 20 minute discovery call, with no obligation to book anything
              afterwards.
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
                  alt="Bhavana Bulchandani, counselling psychologist in Delhi NCR"
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

      {/* ——— Honest scope note ——— */}
      <section className="max-w-6xl mx-auto py-4">
        <div className="border-l-2 border-clay pl-6 py-2 max-w-2xl">
          <p className="text-ink-soft leading-relaxed">
            <strong className="text-ink font-semibold">To be clear about what this is:</strong> this
            is an online practice run by one psychologist. There is no in-person consulting room in
            Delhi, no reception desk and no panel of therapists. If what you need is a psychiatrist,
            medication, a hospital team or in-person work, say so on the discovery call and I will
            point you somewhere better suited rather than take the booking.
          </p>
        </div>
      </section>

      {/* ——— Why online, in this city ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Why online works here</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              Therapy that survives <em className="text-pine">a Delhi week</em>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6 text-ink-soft leading-relaxed max-w-2xl">
            <p>
              The single biggest reason therapy stops in this city is not cost or doubt. It is the
              journey. A 6 pm appointment in South Delhi is a two-hour round trip from Gurugram on a
              bad evening, and after three or four weeks of that, sessions start getting skipped.
              What gets skipped stops working.
            </p>
            <p>
              Online sessions remove that variable completely. You need fifty minutes and a room you
              can close. That is also why the calendar can run until 11 pm: nobody has to factor in
              getting home afterwards.
            </p>
            <p>
              The second reason is privacy. Delhi is socially small, and a fair number of people who
              write to me are more worried about being seen walking into a clinic than about therapy
              itself. There is nothing to walk into here.
            </p>
            <Link href="/blog/how-online-therapy-works-in-india" className="link-arrow">
              How online therapy actually works
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Who I work with ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Who books these sessions</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-12">
          People I work with <em className="text-pine">across the NCR</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {whoIWorkWith.map((item, index) => (
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
      </section>

      {/* ——— What we work on ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Areas of work</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              What we can <em className="text-pine">work on</em>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-4 text-ink-soft leading-relaxed max-w-2xl">
              <li>
                <Link href="/how-i-can-help#anxiety-and-stress" className="text-ink hover:text-pine font-medium">
                  Anxiety and stress
                </Link>{' '}
                — a mind that will not switch off, physical tension, anticipating what might go wrong.
              </li>
              <li>
                <Link href="/how-i-can-help#low-mood" className="text-ink hover:text-pine font-medium">
                  Low mood and emotional wellbeing
                </Link>{' '}
                — flatness, exhaustion, and the loss of motivation that follows it.
              </li>
              <li>
                <Link href="/how-i-can-help#relationships" className="text-ink hover:text-pine font-medium">
                  Relationships and communication
                </Link>{' '}
                — conflict that repeats, hurt that has stopped being spoken about, family expectations.
              </li>
              <li>
                <Link href="/how-i-can-help#burnout" className="text-ink hover:text-pine font-medium">
                  Burnout and emotional fatigue
                </Link>{' '}
                — the specific depletion of a job that keeps asking, and rest that no longer restores.
              </li>
              <li>
                <Link href="/how-i-can-help#self-esteem" className="text-ink hover:text-pine font-medium">
                  Self-esteem and confidence
                </Link>{' '}
                — the beliefs underneath the self-criticism, and the skills confidence actually rests on.
              </li>
              <li>
                <Link href="/how-i-can-help#life-transitions" className="text-ink hover:text-pine font-medium">
                  Life transitions and identity
                </Link>{' '}
                — career shifts, breakups, loss, moving cities, and questions about direction.
              </li>
            </ul>
            <Link href="/how-i-can-help" className="link-arrow mt-8">
              How I can help, in detail
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Fees ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Fees</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              What sessions <em className="text-pine">cost</em>
            </h2>
          </div>
          <div className="lg:col-span-8 max-w-2xl">
            <dl className="divide-y divide-ink/10 border-t border-b border-ink/10">
              {[
                ['Discovery call, 15 to 20 minutes', 'Free'],
                ['Single session, up to 60 minutes', '₹1,200'],
                ['3-session bundle', '₹3,200'],
                ['6-session bundle', '₹6,000'],
              ].map(([label, price]) => (
                <div key={label} className="flex justify-between gap-6 py-4">
                  <dt className="text-ink-soft">{label}</dt>
                  <dd className="font-display text-lg text-ink shrink-0">{price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Fees are the same wherever in Delhi NCR you are, and the same for individual, couple and
              family sessions. Payment is online, before the session. There is no charge for the first
              call, and no pressure to book afterwards.
            </p>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Delhi questions</p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-10">
          Questions people in Delhi <em className="text-pine">ask first</em>
        </h2>
        <FAQList faqs={delhiFaqs} idPrefix="delhi" defaultOpenIndex={0} />
      </section>

      {/* ——— Areas served ——— */}
      <section className="max-w-6xl mx-auto py-16 border-t border-ink/10">
        <p className="eyebrow mb-4">Where clients book from</p>
        <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight mb-6">
          Delhi and the wider NCR
        </h2>
        <p className="text-ink-soft leading-relaxed max-w-2xl">
          Because sessions are online, where you live in the city changes nothing about availability.
          People currently book from {siteConfig.location.neighbourhoods.slice(0, 6).join(', ')} and
          across the rest of Delhi, as well as from {NCR.slice(2).join(', ')} and elsewhere in India.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-12">
          <Link href="/female-psychologist-in-delhi" className="link-arrow">
            Looking for a female psychologist in Delhi?
            <ArrowUpRight size={15} />
          </Link>
          <Link href="/online-therapy-india" className="link-arrow">
            Outside Delhi? Online therapy across India
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto pb-4">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              You don&apos;t have to cross the city to start.{' '}
              <em className="text-pine">A free call is the whole first step.</em>
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
