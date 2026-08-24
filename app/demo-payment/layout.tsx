import type { Metadata } from 'next';

// Demo screen for the (currently disabled) payment flow: never index it.
export const metadata: Metadata = {
  title: 'Demo Payment',
  robots: { index: false, follow: false },
};

export default function DemoPaymentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
