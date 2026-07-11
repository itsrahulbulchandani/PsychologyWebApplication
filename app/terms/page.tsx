import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Sessions, Payments & Rescheduling',
  description:
    'Terms for counselling sessions: payment policy, 24-hour rescheduling notice, missed sessions, late arrivals, and client and therapist responsibilities.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  const sections = [
    {
      title: "Payment Policy",
      points: [
        "All sessions must be paid in full in advance before the session begins.",
        "A session is confirmed only after payment has been received.",
      ]
    },
    {
      title: "Cancellation & Rescheduling",
      points: [
        "Sessions can be rescheduled if you inform the therapist at least 24 hours in advance.",
        "Requests made within 24 hours of the scheduled session may not be eligible for rescheduling.",
      ]
    },
    {
      title: "Emergency Exceptions",
      points: [
        "In cases of genuine emergencies (such as serious illness or critical family situations), one reschedule may be offered as a courtesy, at the therapist’s discretion, even if prior notice could not be given.",
      ]
    },
    {
      title: "Missed Sessions / No-Shows",
      points: [
        "If you miss a session without prior notice and without an emergency reason, the session will be considered completed.",
        "No refunds or rescheduling will be provided in such cases, as the time was reserved specifically for you.",
      ]
    },
    {
      title: "Late Arrival",
      points: [
        "The therapist will wait up to 10 minutes from the scheduled session time.",
        "If you do not join within this time, the session will be marked as completed.",
        "If you arrive late, the session will still end at the original scheduled time.",
      ]
    },
    {
      title: "Technical & Internet Issues",
      points: [
        "In case of internet or technical difficulties, both the client and therapist will attempt to reconnect for up to 10 minutes.",
        "If the session cannot be conducted due to persistent connection issues, the session will be considered completed.",
      ]
    },
    {
      title: "Therapist’s Rights",
      points: [
        "The therapist reserves the right to reschedule sessions in case of personal emergencies or unforeseen circumstances.",
        "The therapist reserves the right to refer the client to another mental health professional if continuing therapy is not clinically appropriate or beneficial, with prior communication.",
      ]
    },
    {
      title: "Client Responsibilities",
      points: [
        "The client agrees to attend sessions on time and in a private, quiet space.",
        "The client agrees to provide accurate information necessary for therapeutic work.",
        "The client agrees to follow the informed consent and confidentiality guidelines.",
      ]
    },
    {
      title: "Acceptance of Terms",
      points: [
        "By booking a session, you confirm that you have read, understood, and agreed to these Terms & Conditions, along with the Informed Consent policy.",
      ]
    },
  ];

  return (
    <div className="px-5 sm:px-8">
      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Legal</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          Terms &amp; <em className="text-pine">conditions</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          These terms are designed to ensure clarity, respect for time, and a smooth therapeutic process
          for both the client and the therapist.
        </p>
        <p className="mt-4 text-sm text-ink/50">Last updated: January 26, 2026</p>
      </section>

      {/* ——— Sections ——— */}
      <section className="max-w-4xl mx-auto lg:mx-0 pb-8">
        {sections.map((section, index) => (
          <div key={index} className="border-t border-ink/10 last:border-b py-8 grid grid-cols-1 sm:grid-cols-12 gap-4">
            <span className="sm:col-span-1 font-display text-sm text-clay pt-1">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="sm:col-span-4 font-display text-xl sm:text-2xl text-ink leading-snug">
              {section.title}
            </h2>
            <ul className="sm:col-span-7 space-y-3">
              {section.points.map((point, i) => (
                <li key={i} className="text-ink-soft text-[15px] leading-relaxed flex gap-3">
                  <span className="text-pine/50 shrink-0 mt-px">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
