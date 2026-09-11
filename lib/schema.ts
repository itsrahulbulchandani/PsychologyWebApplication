import { siteConfig, absoluteUrl } from '@/lib/site';

const { location } = siteConfig;

/**
 * Shared JSON-LD identifiers. Every page references these @ids instead of
 * repeating the Person / Organization description, so the knowledge graph
 * stays consistent and there is exactly one canonical node per entity.
 */
export const ID = {
  website: `${siteConfig.url}/#website`,
  practice: `${siteConfig.url}/#practice`,
  person: `${siteConfig.url}/#bhavana`,
};

/**
 * City-level address only. Sessions are held over video and there is no
 * consulting room open to the public, so publishing a street address would
 * state something that is not true. `addressLocality` is what search engines
 * actually use for city relevance.
 */
const practiceAddress = {
  '@type': 'PostalAddress',
  addressLocality: location.locality,
  addressRegion: location.region,
  addressCountry: location.country,
};

/** Delhi NCR first, then the rest of India, which is also served. */
const areaServed = [
  ...location.servesCities.map((name) => ({
    '@type': 'City',
    name,
    containedInPlace: { '@type': 'Country', name: location.countryName },
  })),
  { '@type': 'Country', name: location.countryName },
];

/** Every claim below is taken from what the site already states publicly. */
export const personSchema = {
  '@type': 'Person',
  '@id': ID.person,
  name: siteConfig.therapist,
  givenName: 'Bhavana',
  familyName: 'Bulchandani',
  gender: 'Female',
  jobTitle: siteConfig.jobTitle,
  description: `Female counselling psychologist based in ${location.label}, offering confidential online therapy across India for anxiety, stress, low mood, relationship difficulties, burnout, self-esteem and life transitions.`,
  url: absoluteUrl('/about'),
  image: absoluteUrl('/bhavana.webp'),
  email: `mailto:${siteConfig.email}`,
  address: practiceAddress,
  workLocation: {
    '@type': 'Place',
    name: `${location.label} (online sessions)`,
    address: practiceAddress,
  },
  knowsLanguage: siteConfig.languages.map((name) => ({ '@type': 'Language', name })),
  sameAs: [...siteConfig.sameAs],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Banaras Hindu University' },
    { '@type': 'CollegeOrUniversity', name: 'Jamia Millia Islamia' },
    { '@type': 'CollegeOrUniversity', name: 'Amity University' },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'MA in Psychology (Counselling specialisation)',
      educationalLevel: 'Postgraduate',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Banaras Hindu University' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'diploma',
      name: 'Postgraduate Diploma in Guidance & Counselling',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Jamia Millia Islamia' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'BA in Applied Psychology',
      educationalLevel: 'Undergraduate',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Amity University' },
    },
  ],
  memberOf: [
    {
      '@type': 'Organization',
      name: 'American Psychological Association',
      alternateName: 'APA',
      url: 'https://www.apa.org/',
    },
    { '@type': 'Organization', name: 'Counselors Council of India' },
    {
      // Statutory body constituted under the NCAHP Act, 2021.
      '@type': 'GovernmentOrganization',
      name: 'National Commission for Allied and Healthcare Professions',
      alternateName: 'NCAHP',
      url: 'https://ncahp.abdm.gov.in/',
    },
  ],
  knowsAbout: [
    'Counselling psychology',
    'Anxiety',
    'Stress management',
    'Low mood and emotional wellbeing',
    'Relationship counselling',
    'Burnout',
    'Self-esteem',
    'Cognitive behavioural therapy',
    'Mindfulness',
    'Online therapy',
  ],
  worksFor: { '@id': ID.practice },
};

/**
 * The therapy areas, expressed as a service catalogue. This is what lets a
 * search engine connect "therapy for burnout" to this practice without having
 * to infer it from prose alone.
 */
const therapyAreas = [
  { name: 'Therapy for anxiety and stress', anchor: 'anxiety-and-stress' },
  { name: 'Therapy for low mood and emotional wellbeing', anchor: 'low-mood' },
  { name: 'Relationship and couples counselling', anchor: 'relationships' },
  { name: 'Therapy for burnout and emotional fatigue', anchor: 'burnout' },
  { name: 'Therapy for self-esteem and confidence', anchor: 'self-esteem' },
  { name: 'Support through life transitions and identity', anchor: 'life-transitions' },
];

export const practiceSchema = {
  // Multi-typed: it is a professional service, and specifically a psychology
  // practice, which is the narrower type search engines match on.
  '@type': ['ProfessionalService', 'Psychologist'],
  '@id': ID.practice,
  name: siteConfig.name,
  alternateName: [
    'Sthairyam by Bhavana Bulchandani',
    `Bhavana Bulchandani, Counselling Psychologist, ${location.label}`,
  ],
  description: siteConfig.description,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/logo.png'),
  image: absoluteUrl('/bhavana.webp'),
  email: `mailto:${siteConfig.email}`,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'UPI, Credit Card, Debit Card, Net Banking',
  address: practiceAddress,
  areaServed,
  serviceType: [
    'Counselling psychology',
    'Online therapy',
    'Online counselling',
    'Psychotherapy',
    'Cognitive behavioural therapy',
  ],
  medicalSpecialty: 'https://schema.org/Psychiatric',
  availableLanguage: siteConfig.languages.map((name) => ({ '@type': 'Language', name })),
  knowsLanguage: siteConfig.languages.map((name) => ({ '@type': 'Language', name })),
  founder: { '@id': ID.person },
  employee: { '@id': ID.person },
  identifier: {
    '@type': 'PropertyValue',
    name: 'Udyam Registration (MSME, Government of India)',
    value: 'UDYAM-UP-29-0218942',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: location.hours.opens,
    closes: location.hours.closes,
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    name: 'Online video and audio sessions',
    serviceUrl: absoluteUrl('/booking'),
    availableLanguage: siteConfig.languages.map((name) => ({ '@type': 'Language', name })),
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Areas of counselling',
    itemListElement: therapyAreas.map(({ name, anchor }) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        serviceType: 'Counselling psychology',
        url: absoluteUrl(`/how-i-can-help#${anchor}`),
        provider: { '@id': ID.practice },
        areaServed,
        availableChannel: {
          '@type': 'ServiceChannel',
          name: 'Online video sessions',
          serviceUrl: absoluteUrl('/booking'),
        },
      },
    })),
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Free discovery call',
      description:
        'A free 15 to 20 minute call to share what is on your mind, ask questions and see whether working together feels right. No obligation to continue.',
      price: 0,
      priceCurrency: 'INR',
      url: absoluteUrl('/booking'),
      availability: 'https://schema.org/OnlineOnly',
    },
    {
      '@type': 'Offer',
      name: 'Single counselling session',
      description: 'One online counselling session of up to 60 minutes.',
      price: 1200,
      priceCurrency: 'INR',
      url: absoluteUrl('/booking'),
      availability: 'https://schema.org/OnlineOnly',
    },
    {
      '@type': 'Offer',
      name: '3-session bundle',
      description: 'Three online counselling sessions of up to 60 minutes each.',
      price: 3200,
      priceCurrency: 'INR',
      url: absoluteUrl('/booking'),
      availability: 'https://schema.org/OnlineOnly',
    },
    {
      '@type': 'Offer',
      name: '6-session bundle',
      description: 'Six online counselling sessions of up to 60 minutes each.',
      price: 6000,
      priceCurrency: 'INR',
      url: absoluteUrl('/booking'),
      availability: 'https://schema.org/OnlineOnly',
    },
  ],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': ID.website,
  name: siteConfig.name,
  url: absoluteUrl('/'),
  inLanguage: siteConfig.lang,
  publisher: { '@id': ID.practice },
  about: { '@id': ID.person },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Book a free discovery call',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: absoluteUrl('/booking'),
    },
  },
};

/** Root graph, rendered once in the layout and referenced by every page. */
export const rootGraph = {
  '@context': 'https://schema.org',
  '@graph': [websiteSchema, practiceSchema, personSchema],
};

type Crumb = { name: string; path: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>,
  { id = `${siteConfig.url}/faq#faqpage` }: { id?: string } = {}
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': id,
  inLanguage: siteConfig.lang,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

/**
 * Schema for a page about the service as offered to one place. Keeps the
 * location pages tied to the single practice node rather than declaring a
 * second business per city.
 */
export const localServiceSchema = ({
  path,
  name,
  description,
  cityNames,
}: {
  path: string;
  name: string;
  description: string;
  cityNames: readonly string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${absoluteUrl(path)}#service`,
  name,
  description,
  serviceType: 'Online counselling and psychotherapy',
  category: 'Counselling psychology',
  url: absoluteUrl(path),
  provider: { '@id': ID.practice },
  brand: { '@id': ID.practice },
  areaServed: cityNames.map((cityName) => ({
    '@type': 'City',
    name: cityName,
    containedInPlace: { '@type': 'Country', name: location.countryName },
  })),
  availableChannel: {
    '@type': 'ServiceChannel',
    name: 'Online video and audio sessions',
    serviceUrl: absoluteUrl('/booking'),
    availableLanguage: siteConfig.languages.map((languageName) => ({
      '@type': 'Language',
      name: languageName,
    })),
  },
  offers: {
    '@type': 'Offer',
    name: 'Free discovery call',
    price: 0,
    priceCurrency: 'INR',
    url: absoluteUrl('/booking'),
    availability: 'https://schema.org/OnlineOnly',
  },
});

/** Serialise JSON-LD for a <script type="application/ld+json"> tag. */
export const jsonLdScript = (data: unknown) => ({
  __html: JSON.stringify(data).replace(/</g, '\\u003c'),
});
