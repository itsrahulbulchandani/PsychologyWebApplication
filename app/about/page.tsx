import { GraduationCap, Heart, BookOpen, Coffee, Music, Plane } from 'lucide-react';

export default function AboutPage() {
  const qualifications = [
    {
      degree: "Master's in Counselling Psychology",
      institution: "University Name",
      year: "2020",
      description: "Specialized in cognitive behavioral therapy and trauma-informed care"
    },
    {
      degree: "Bachelor's in Psychology",
      institution: "University Name",
      year: "2018",
      description: "Foundation in clinical psychology and human behavior"
    },
    {
      degree: "Certified Therapist",
      institution: "Professional Board",
      year: "2021",
      description: "Licensed to practice counselling and psychotherapy"
    }
  ];

  const humanTouch = [
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "I start every morning with a good cup of coffee and believe in the power of small rituals for mental wellness."
    },
    {
      icon: BookOpen,
      title: "Lifelong Learner",
      description: "Always reading about new therapeutic approaches and psychology research. Currently exploring mindfulness practices."
    },
    {
      icon: Music,
      title: "Music Lover",
      description: "I find that music has incredible healing powers. I often incorporate music therapy techniques in sessions."
    },
    {
      icon: Plane,
      title: "Travel & Culture",
      description: "Passionate about understanding different cultures and perspectives. Travel teaches empathy—a core skill in therapy."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-700">
          More than just credentials—get to know the person behind the practice
        </p>
      </div>

      {/* Personal Introduction */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Placeholder */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-12">
              <div className="text-white text-center">
                <div className="w-48 h-48 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={80} className="text-white" />
                </div>
                <p className="text-lg font-semibold">Bhavana Bulchandani</p>
                <p className="text-sm opacity-90">Counselling Psychologist</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Hello, I'm Bhavana</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a counselling psychologist with a passion for making mental health support accessible to everyone. 
                  My journey into psychology started from a personal place—I witnessed how transformative proper mental 
                  health support could be, and I wanted to provide that for others.
                </p>
                <p>
                  What drives me is the belief that <strong>everyone deserves affordable, quality mental health care</strong>. 
                  Too often, financial barriers prevent people from seeking the help they need. That's why I've structured 
                  my practice to be accessible without compromising on the quality of care.
                </p>
                <p>
                  In our sessions, you won't find judgment or a one-size-fits-all approach. Instead, you'll find a 
                  safe space where we work together to understand your unique challenges and develop strategies that 
                  work for <em>your</em> life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qualifications Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Qualifications & Training
        </h2>
        <div className="space-y-6">
          {qualifications.map((qual, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{qual.degree}</h3>
                    <span className="text-blue-600 font-semibold">{qual.year}</span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{qual.institution}</p>
                  <p className="text-gray-700">{qual.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="mt-8 bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Additional Certifications & Training</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">✓</span>
              <span>Cognitive Behavioral Therapy (CBT)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">✓</span>
              <span>Trauma-Informed Care</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">✓</span>
              <span>Mindfulness-Based Stress Reduction</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">✓</span>
              <span>Solution-Focused Brief Therapy</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">✓</span>
              <span>Anxiety & Depression Management</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-600">✓</span>
              <span>Relationship Counselling</span>
            </li>
          </ul>
        </div>
      </div>

      {/* What Makes Me Human Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What Makes Me Human
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Beyond the degrees and certifications, here's what makes me, well... me!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {humanTouch.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <IconComponent className="text-blue-600" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* My Approach */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">My Therapeutic Approach</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              I believe in a <strong>collaborative, person-centered approach</strong>. You are the expert on your own life, 
              and I'm here to provide tools, support, and a fresh perspective.
            </p>
            <p>
              My style is <strong>warm, direct, and practical</strong>. I'll challenge you when needed, but always from a 
              place of compassion and respect. We'll work together to identify patterns, develop coping strategies, and 
              build the life you want to live.
            </p>
            <p>
              I draw from evidence-based practices like CBT, mindfulness techniques, and solution-focused therapy, but 
              I customize my approach to what works best for you. Because <strong>your healing journey is unique</strong>, 
              and it deserves a unique approach.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Journey?</h2>
        <p className="text-xl text-gray-700 mb-8">
          Let's work together to create positive change in your life.
        </p>
        <a
          href="/booking"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
        >
          Book a Session
        </a>
      </div>
    </div>
  );
}

