import Link from 'next/link';
import { Mail, MapPin, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="text-teal-400" size={24} />
              <h3 className="text-xl font-bold text-teal-400">
                Sthairyam
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">Bhavana Bulchandani</p>
            <p className="text-gray-400">
              Counselling Psychologist creating a safe, supportive space for your healing journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-teal-400 transition-colors">
                  How I Can Support You
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Bookings
                </Link>
              </li>
              <li>
                <Link href="/what-to-expect" className="text-gray-400 hover:text-teal-400 transition-colors">
                  What to Expect
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>bhavana@counselling.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Available Online</span>
              </li>
            </ul>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sthairyam &mdash; Bhavana Bulchandani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

