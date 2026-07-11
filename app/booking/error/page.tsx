import type { Metadata } from 'next';
import Link from 'next/link';
import { XCircle, RefreshCcw } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Booking Failed',
  robots: { index: false, follow: false },
};

export default function BookingErrorPage() {
  return (
    <div className="px-5 sm:px-8 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center animate-fadeInUp">
          <XCircle className="text-clay mx-auto mb-6" size={44} strokeWidth={1.5} />
          <h1 className="font-display text-4xl sm:text-5xl text-ink">
            Booking <em className="text-clay">failed</em>
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-md mx-auto">
            We encountered an issue processing your booking or payment. Please try again.
          </p>
        </div>

        {/* Possible reasons */}
        <div className="mt-16">
          <p className="eyebrow mb-6">Possible reasons</p>
          <ul className="space-y-2.5 border-t border-ink/10 pt-6">
            {[
              'Payment was not completed or was cancelled',
              'Network connection issue',
              'Technical error during booking',
            ].map((reason, i) => (
              <li key={i} className="text-ink-soft text-[15px] leading-relaxed flex gap-3">
                <span className="text-clay/60 shrink-0 mt-px">—</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note */}
        <div className="mt-12 bg-sage-pale border border-ink/10 rounded-xl p-8">
          <p className="text-ink-soft text-[15px] leading-relaxed">
            <strong className="text-ink">Note:</strong> If money was deducted from your account but the
            booking failed, please contact me immediately. I&apos;ll verify the payment and create your
            booking manually.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking" className="btn-primary">
            <RefreshCcw size={16} />
            Try again
          </Link>
          <Link href="/" className="btn-outline">
            Back to home
          </Link>
        </div>

        <p className="mt-12 text-center text-ink-soft text-sm">
          Need assistance?{' '}
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
