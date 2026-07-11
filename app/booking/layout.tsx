import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Session — Free Discovery Call & Therapy Packages',
  description:
    'Book an online counselling session with Bhavana Bulchandani. Start with a free 15–20 minute discovery call, then choose single sessions or discounted 3- and 6-session bundles.',
  alternates: { canonical: '/booking' },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
