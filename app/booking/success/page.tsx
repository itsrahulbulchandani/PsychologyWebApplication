import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Booking Confirmed',
  robots: { index: false, follow: false },
};

export default function BookingSuccessPage({
  searchParams,
}: {
  searchParams?: { bookingId?: string };
}) {
  const bookingId = searchParams?.bookingId;

  const nextSteps = [
    {
      title: 'Check your email',
      description: "You'll receive a confirmation email with all the details about your session.",
    },
    {
      title: 'Calendar invite',
      description: 'A calendar invite has been added to your Google Calendar with the appointment details.',
    },
    {
      title: 'Google Meet link',
      description: 'Your email will contain a Google Meet link. Simply click it at your appointment time to join.',
    },
  ];

  return (
    <div className="px-5 sm:px-8 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center animate-fadeInUp">
          <CheckCircle className="text-pine mx-auto mb-6" size={44} strokeWidth={1.5} />
          <h1 className="font-display text-4xl sm:text-5xl text-ink">
            Booking <em className="text-pine">confirmed</em>
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-md mx-auto">
            Your session has been booked and added to the calendar. I look forward to speaking with you.
          </p>
          {bookingId && (
            <p className="mt-6 text-sm text-ink-soft">
              Booking ID <span className="font-medium text-ink">{bookingId}</span>
            </p>
          )}
        </div>

        {/* What's Next */}
        <div className="mt-16">
          <p className="eyebrow mb-8 text-center">What happens next</p>
          <div>
            {nextSteps.map((step, index) => (
              <div key={index} className="border-t border-ink/10 last:border-b py-6 flex gap-6">
                <span className="font-display text-sm text-clay pt-1 w-8 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-display text-xl text-ink mb-1">{step.title}</h2>
                  <p className="text-ink-soft text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before your session */}
        <div className="mt-14 bg-sage-pale border border-ink/10 rounded-xl p-8">
          <p className="eyebrow mb-5">Before your session</p>
          <ul className="space-y-2.5">
            {[
              'Join the meeting 2–3 minutes before your scheduled time',
              'Ensure you have a stable internet connection',
              'Find a quiet, private space for the session',
              'Have your camera and microphone ready',
              'If you need to reschedule, please give at least 24 hours notice',
            ].map((note, i) => (
              <li key={i} className="text-ink-soft text-[15px] leading-relaxed flex gap-3">
                <span className="text-pine/50 shrink-0 mt-px">—</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/what-to-expect" className="btn-outline">
            What to expect
          </Link>
        </div>

        <p className="mt-12 text-center text-ink-soft text-sm">
          Questions? Contact me at{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </div>
  );
}
