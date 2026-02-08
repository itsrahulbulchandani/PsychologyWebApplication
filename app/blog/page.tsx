import { PenLine } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          <span className="text-teal-700">Blog</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thoughts, insights, and resources on mental health and well-being.
        </p>
      </div>

      {/* Coming Soon */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 md:p-16">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PenLine className="text-teal-700" size={36} />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Coming Soon</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            I&apos;m working on articles and resources to support your mental health journey. Check back soon for helpful insights on anxiety, self-care, relationships, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
