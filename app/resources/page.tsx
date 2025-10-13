'use client';

import { Download, ShoppingCart, FileText, Headphones, Video, BookOpen } from 'lucide-react';

export default function ResourcesPage() {
  const freeResources = [
    {
      title: "Managing Anxiety: A Practical Guide",
      description: "Evidence-based techniques to understand and manage anxiety in your daily life.",
      type: "PDF Guide",
      icon: FileText,
      pages: "15 pages",
      downloadLink: "#"
    },
    {
      title: "Daily Mindfulness Exercises",
      description: "5-minute mindfulness practices you can do anywhere, anytime.",
      type: "PDF Workbook",
      icon: BookOpen,
      pages: "12 pages",
      downloadLink: "#"
    },
    {
      title: "Sleep Hygiene Checklist",
      description: "Improve your sleep quality with these scientifically-backed tips.",
      type: "PDF Checklist",
      icon: FileText,
      pages: "3 pages",
      downloadLink: "#"
    },
    {
      title: "Stress Management Techniques",
      description: "Quick strategies to reduce stress and regain your calm.",
      type: "PDF Guide",
      icon: BookOpen,
      pages: "10 pages",
      downloadLink: "#"
    }
  ];

  const paidResources = [
    {
      title: "Complete CBT Self-Help Workbook",
      description: "A comprehensive 8-week cognitive behavioral therapy program you can do on your own.",
      type: "Digital Workbook",
      icon: BookOpen,
      price: "₹499",
      includes: ["60+ pages of exercises", "Thought tracking sheets", "Progress assessments", "Email support"]
    },
    {
      title: "Guided Meditation Audio Series",
      description: "12 professionally recorded meditation sessions for anxiety, sleep, and stress relief.",
      type: "Audio Bundle",
      icon: Headphones,
      price: "₹799",
      includes: ["12 guided meditations", "30-60 minutes each", "Downloadable MP3s", "Meditation guide PDF"]
    },
    {
      title: "Mental Wellness Video Course",
      description: "8-module video course covering emotional regulation, healthy relationships, and self-care.",
      type: "Video Course",
      icon: Video,
      price: "₹1,499",
      includes: ["8 video modules", "Lifetime access", "Downloadable worksheets", "Certificate of completion"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Resources
        </h1>
        <p className="text-xl text-gray-700">
          Tools, guides, and materials to support your mental health journey
        </p>
      </div>

      {/* Free Resources Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Free Resources</h2>
          <p className="text-lg text-gray-600">
            Download these helpful guides and worksheets at no cost
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freeResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <IconComponent className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        {resource.type}
                      </span>
                      <span className="text-sm text-gray-500">{resource.pages}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => alert('This would download the PDF. Add your actual file links here!')}
                  className="w-full mt-6 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <Download className="mr-2" size={20} />
                  Download Free
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Resources Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Premium Resources</h2>
          <p className="text-lg text-gray-600">
            In-depth materials for deeper work on your mental wellness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paidResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">
                    {resource.type}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-3xl font-bold">{resource.price}</p>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {resource.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => alert('This would open a payment gateway. Integrate your preferred payment solution!')}
                    className="mt-auto w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <ShoppingCart className="mr-2" size={20} />
                    Purchase Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Newsletter/Updates Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Free Resources in Your Inbox</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to receive monthly mental health tips, new free resources, and exclusive discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No spam, unsubscribe anytime. Your privacy is important to me.
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Looking for something specific?</h3>
          <p className="text-gray-700 mb-4">
            I'm always creating new resources based on what my clients need. If there's a topic you'd like to see covered, let me know!
          </p>
          <a
            href="mailto:bhavana@counselling.com"
            className="text-blue-600 font-semibold hover:text-purple-600 transition-colors"
          >
            Send me your suggestions
          </a>
        </div>
      </div>
    </div>
  );
}

