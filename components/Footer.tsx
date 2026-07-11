import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  const quickLinks = [
    { name: 'About Me', href: '/about' },
    { name: 'How I Can Help', href: '/support' },
    { name: 'Book a Session', href: '/booking' },
    { name: 'What to Expect', href: '/what-to-expect' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="bg-pine-dark text-cream mt-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About Section */}
          <div className="md:col-span-4">
            <p className="font-cinzel text-2xl tracking-wide mb-1">Sthairyam</p>
            <p className="text-cream/60 text-sm mb-5">by Bhavana Bulchandani</p>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Counselling Psychologist creating a safe, supportive space for your healing journey.
              Online sessions across India.
            </p>
            <p className="text-cream/70 text-sm mt-5">
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4 decoration-cream/30 hover:decoration-cream">
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/50 font-semibold mb-5">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/75 hover:text-cream transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/50 font-semibold mb-5">Legal</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-cream/75 hover:text-cream transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-cream/75 hover:text-cream transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
            <p className="text-cream/40 text-xs leading-relaxed mt-6 max-w-[26ch]">
              Registered under Udyam (MSME, Government of India) &ndash; Registration No: UDYAM-UP-29-0218942
            </p>
          </div>

          {/* Crisis Support */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/50 font-semibold mb-5">In Crisis? Get Help Now</p>
            <p className="text-cream/70 text-sm leading-relaxed mb-5">
              This is not a crisis helpline. If you or someone you know is in immediate danger, please
              reach out to a 24x7 helpline:
            </p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li>
                <span className="block text-cream font-medium">Tele-MANAS (Govt. of India)</span>
                <a href="tel:14416" className="hover:text-cream">14416</a>
                {' or '}
                <a href="tel:18008914416" className="hover:text-cream">1800-891-4416</a>
              </li>
              <li>
                <span className="block text-cream font-medium">KIRAN Helpline</span>
                <a href="tel:18005990019" className="hover:text-cream">1800-599-0019</a>
              </li>
              <li>
                <span className="block text-cream font-medium">Emergency</span>
                <a href="tel:112" className="hover:text-cream">112</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/15 flex flex-col sm:flex-row justify-between gap-2 text-cream/50 text-xs tracking-wide">
          <p>&copy; {new Date().getFullYear()} Sthairyam &mdash; Bhavana Bulchandani. All rights reserved.</p>
          <p>स्थैर्यम् &mdash; steadiness</p>
        </div>
      </div>
    </footer>
  );
}
