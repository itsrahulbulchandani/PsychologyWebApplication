import type { Metadata } from "next";
import { Inter, Cinzel, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Sthairyam",
  },
  description: siteConfig.description,
  keywords: [
    "counselling psychologist",
    "online therapy India",
    "online counselling",
    "therapist India",
    "anxiety therapy",
    "stress management",
    "depression counselling",
    "relationship counselling",
    "mental health support",
    "CBT therapy online",
    "affordable therapy India",
    "Bhavana Bulchandani",
    "Sthairyam",
  ],
  authors: [{ name: siteConfig.therapist }],
  creator: siteConfig.therapist,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Sthairyam, Counselling Psychologist",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#service`,
      name: "Sthairyam",
      description: siteConfig.description,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      image: `${siteConfig.url}/logo.png`,
      email: siteConfig.email,
      priceRange: "₹₹",
      areaServed: { "@type": "Country", name: "India" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${siteConfig.url}/booking`,
        name: "Online video sessions",
      },
      founder: { "@id": `${siteConfig.url}/#therapist` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#therapist`,
      name: "Bhavana Bulchandani",
      jobTitle: "Counselling Psychologist",
      url: `${siteConfig.url}/about`,
      email: siteConfig.email,
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Banaras Hindu University" },
        { "@type": "CollegeOrUniversity", name: "Amity University" },
        { "@type": "CollegeOrUniversity", name: "Jamia Millia Islamia" },
      ],
      knowsAbout: [
        "Counselling Psychology",
        "Cognitive Behavioral Therapy",
        "Mindfulness",
        "Anxiety",
        "Stress Management",
        "Emotional Wellbeing",
      ],
      worksFor: { "@id": `${siteConfig.url}/#service` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${cinzel.variable} ${fraunces.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
