import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center animate-fadeInUp">
            <Image
              src="/logo.png"
              alt="Sthairyam Logo"
              width={120}
              height={120}
              className="mx-auto mb-8"
              priority
            />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-10 text-gray-900 leading-tight">
              Feel understood. Feel supported.
              <br />
              <span className="text-teal-700">Begin your healing journey.</span>
            </h1>
            <div className="flex justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center px-10 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-lg"
              >
                Book a Confidential Session
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

