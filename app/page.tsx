import Link from 'next/link';
import { Heart, Brain, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const misconceptions = [
    {
      myth: "Therapy is only for 'crazy' people",
      reality: "Therapy is for anyone wanting to improve their mental well-being, just like going to a gym for physical health."
    },
    {
      myth: "Medication is the only solution",
      reality: "Therapy, lifestyle changes, and coping strategies are powerful tools that work alongside or instead of medication."
    },
    {
      myth: "Therapy is too expensive",
      reality: "Affordable options exist! I offer flexible packages to make mental health support accessible to everyone."
    },
    {
      myth: "You should handle problems on your own",
      reality: "Seeking help is a sign of strength, not weakness. Everyone needs support sometimes."
    }
  ];

  const testimonials = [
    {
      name: "Priya S.",
      role: "Software Engineer",
      content: "Bhavana helped me navigate through my work anxiety with practical tools and genuine empathy. Her affordable packages made it possible for me to prioritize my mental health.",
      rating: 5
    },
    {
      name: "Rahul M.",
      role: "College Student",
      content: "I was skeptical about therapy at first, but Bhavana created such a safe space. She helped me understand that seeking help isn't weakness—it's self-care.",
      rating: 5
    },
    {
      name: "Anjali K.",
      role: "Entrepreneur",
      content: "The sessions have been transformative. Bhavana's approach is both professional and deeply human. I finally feel understood and equipped to handle life's challenges.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Mental Health,
              <br />
              Made Affordable
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Professional counselling that doesn't break the bank. Because everyone deserves access to quality mental health support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Book Your Session
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 border-2 border-blue-600"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How I Bring Change Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How I Bring Change
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Empathy First</h3>
              <p className="text-gray-600 leading-relaxed">
                I create a safe, non-judgmental space where you can be your authentic self. Your feelings are valid, and your story matters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Evidence-Based Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Using proven therapeutic techniques tailored to your unique needs. Every person's journey is different, and so is my approach.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Accessible Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Affordable packages and flexible scheduling because mental health support should be available to everyone, not just the privileged few.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misconceptions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Breaking Misconceptions
          </h2>
          <p className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Let's bust some myths about mental health and therapy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {misconceptions.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-xl">✗</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.myth}</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mt-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Services Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I offer individual counselling sessions with flexible packages designed to fit your needs and budget.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
          >
            View Packages & Book Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-center text-xl text-gray-700 mb-12">
            Real stories from people I've had the privilege to support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Your Journey to Better Mental Health Starts Here
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Take the first step towards a healthier, happier you. I'm here to support you every step of the way.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Book Your First Session
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

