'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'How I Can Help', href: '/how-i-can-help' },
    { name: 'What to Expect', href: '/what-to-expect' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Sthairyam" width={34} height={34} />
              <span className="text-lg font-bold font-cinzel text-pine tracking-wide">Sthairyam</span>
            </div>
            <span className="text-[10px] text-ink-soft tracking-[0.14em] uppercase ml-[42px] -mt-0.5">
              by Bhavana Bulchandani
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[13px] tracking-wide transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-pine font-semibold'
                    : 'text-ink-soft hover:text-pine'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="inline-flex items-center px-5 py-2 border border-pine text-pine rounded-full text-[13px] font-medium tracking-wide hover:bg-pine hover:text-cream transition-colors duration-200"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-ink hover:text-pine"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-cream border-t border-ink/10">
          <div className="px-5 pt-3 pb-5 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-2 py-2.5 text-[15px] border-b border-ink/5 ${
                  isActive(item.href) ? 'text-pine font-semibold' : 'text-ink-soft'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="block mt-4 px-4 py-3 border border-pine text-pine rounded-full font-medium text-center text-[15px] hover:bg-pine hover:text-cream transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
