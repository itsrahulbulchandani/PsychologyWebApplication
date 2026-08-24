export const siteConfig = {
  name: 'Sthairyam',
  therapist: 'Bhavana Bulchandani',
  jobTitle: 'Counselling Psychologist',
  title: 'Counselling Psychologist in India | Online Therapy | Sthairyam',
  description:
    'Online therapy with Bhavana Bulchandani, a counselling psychologist (MA Psychology, BHU). Confidential video sessions across India for anxiety, stress, low mood, relationships, burnout and self-esteem. Start with a free 15 to 20 minute discovery call.',
  // Falls back to the live domain so canonicals and sitemap URLs stay correct
  // even if the environment variable is missing on a deployment.
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.sthairyam.co.in',
  email: 'work.bhavanab@gmail.com',
  locale: 'en_IN',
  lang: 'en-IN',
  // Bhavana's earlier writing home, kept as a verified profile link.
  sameAs: ['https://psychfuel.home.blog/'],
  languages: ['English', 'Hindi'],
  discoveryCallMinutes: '15 to 20',
  sessionPriceInr: 1200,
} as const;

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = '/') =>
  `${siteConfig.url}${path === '/' ? '/' : path}`;
