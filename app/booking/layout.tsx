import type { Metadata } from 'next';
import { breadcrumbSchema, jsonLdScript, ID } from '@/lib/schema';
import { siteConfig, absoluteUrl } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  path: '/booking',
  title: 'Book an Online Therapy Session | Free Discovery Call',
  description:
    'Book a free 15 to 20 minute online discovery call with Bhavana Bulchandani, a counselling psychologist based in Delhi NCR. No payment, no obligation. Slots 9 am to 11 pm IST, sessions from ₹1,200, online across India.',
});

const reservationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteConfig.url}/booking#webpage`,
  url: absoluteUrl('/booking'),
  name: 'Book a free discovery call',
  inLanguage: siteConfig.lang,
  isPartOf: { '@id': ID.website },
  about: { '@id': ID.practice },
  primaryImageOfPage: absoluteUrl('/logo.png'),
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Book a free discovery call',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: absoluteUrl('/booking'),
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Free 15 to 20 minute online discovery call',
      provider: { '@id': ID.practice },
    },
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(reservationSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema([{ name: 'Booking', path: '/booking' }]))}
      />
      {children}
    </>
  );
}
