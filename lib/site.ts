export const siteConfig = {
  name: 'Sthairyam',
  therapist: 'Bhavana Bulchandani',
  jobTitle: 'Counselling Psychologist',
  title: 'Psychologist in Delhi | Online Therapy Across India | Sthairyam',
  description:
    'Bhavana Bulchandani is a counselling psychologist (MA Psychology, BHU) based in Delhi NCR, offering confidential online therapy for anxiety, stress, low mood, relationships, burnout and self-esteem. Sessions in English and Hindi. Start with a free 15 to 20 minute discovery call.',
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

  /**
   * Where the practice is based and who it serves.
   *
   * The practice is delivered entirely over video, so there is no consulting
   * room open to the public and no street address is published. `locality` is
   * only used for the city-level signals search engines use to decide local
   * relevance — change it if Bhavana's base city changes.
   */
  location: {
    locality: 'Delhi',
    region: 'Delhi',
    country: 'IN',
    countryName: 'India',
    /** Human label used in page copy. */
    label: 'Delhi NCR',
    /** Cities the practice actively serves, most relevant first. */
    servesCities: [
      'Delhi',
      'New Delhi',
      'Noida',
      'Gurugram',
      'Ghaziabad',
      'Faridabad',
      'Greater Noida',
    ],
    /** Delhi and NCR areas clients commonly book from, used in local copy. */
    neighbourhoods: [
      'South Delhi',
      'Saket',
      'Hauz Khas',
      'Vasant Kunj',
      'Dwarka',
      'Rohini',
      'Pitampura',
      'Janakpuri',
      'Lajpat Nagar',
      'Greater Kailash',
      'Mayur Vihar',
      'Karol Bagh',
    ],
    /** Booking window the calendar actually offers, in IST. */
    hours: { opens: '09:00', closes: '23:00' },
    timezone: 'Asia/Kolkata',
  },
} as const;

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = '/') =>
  `${siteConfig.url}${path === '/' ? '/' : path}`;
