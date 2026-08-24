import { siteConfig, absoluteUrl } from '@/lib/site';

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

/** Every claim below is taken from what the site already states publicly. */
export const personSchema = {
  '@type': 'Person',
  '@id': ID.person,
  name: siteConfig.therapist,
  givenName: 'Bhavana',
  familyName: 'Bulchandani',
  jobTitle: siteConfig.jobTitle,
  description:
    'Counselling psychologist offering confidential online therapy across India for anxiety, stress, low mood, relationship difficulties, burnout, self-esteem and life transitions.',
  url: absoluteUrl('/about'),
  image: absoluteUrl('/bhavana.webp'),
  email: `mailto:${siteConfig.email}`,
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

export const practiceSchema = {
  '@type': 'ProfessionalService',
  '@id': ID.practice,
  name: siteConfig.name,
  alternateName: 'Sthairyam by Bhavana Bulchandani',
  description: siteConfig.description,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/logo.png'),
  image: absoluteUrl('/bhavana.webp'),
  email: `mailto:${siteConfig.email}`,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  areaServed: { '@type': 'Country', name: 'India' },
  availableLanguage: siteConfig.languages.map((name) => ({ '@type': 'Language', name })),
  founder: { '@id': ID.person },
  employee: { '@id': ID.person },
  identifier: {
    '@type': 'PropertyValue',
    name: 'Udyam Registration (MSME, Government of India)',
    value: 'UDYAM-UP-29-0218942',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    name: 'Online video and audio sessions',
    serviceUrl: absoluteUrl('/booking'),
    availableLanguage: siteConfig.languages.map((name) => ({ '@type': 'Language', name })),
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

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteConfig.url}/faq#faqpage`,
  inLanguage: siteConfig.lang,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

/** Serialise JSON-LD for a <script type="application/ld+json"> tag. */
export const jsonLdScript = (data: unknown) => ({
  __html: JSON.stringify(data).replace(/</g, '\\u003c'),
});
