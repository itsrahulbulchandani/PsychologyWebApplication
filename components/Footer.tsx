import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bhavana Bulchandani
            </h3>
            <p className="text-gray-400 mb-4">
              Counselling Psychologist dedicated to making mental health support accessible and affordable for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Book Session
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>bhavana@counselling.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Available Online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bhavana Bulchandani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

