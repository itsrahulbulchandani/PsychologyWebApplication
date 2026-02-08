import { GraduationCap, Heart, Brain, Sparkles, Target, MessageCircle, Flower2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const approaches = [
    {
      icon: Brain,
      title: "Cognitive-Behavioral Therapy (CBT)",
      description: "To explore thought and behavior patterns and develop practical coping strategies."
    },
    {
      icon: Flower2,
      title: "Mindfulness & Relaxation Techniques",
      description: "To manage stress, anxiety, and emotional overwhelm."
    },
    {
      icon: Heart,
      title: "Emotion-Focused Work",
      description: "Helping you understand and process your emotions in a safe space."
    },
    {
      icon: Sparkles,
      title: "Personal Meaning & Growth",
      description: "Drawing on principles of spiritual psychology to explore values, purpose, and inner resilience."
    },
    {
      icon: Target,
      title: "Goal Tracking & Progress Work",
      description: "Setting achievable steps and monitoring progress so you can see change over time."
    },
    {
      icon: MessageCircle,
      title: "Supportive, Empathetic Conversation",
      description: "Creating a safe space where your experiences are heard and respected."
    }
  ];

  const qualifications = [
    { degree: "BA in Applied Psychology", institution: "Amity University", year: "2017" },
    { degree: "MA in Psychology (Counseling Specialisation)", institution: "Banaras Hindu University", year: "2019" },
    { degree: "Postgraduate Diploma in Guidance & Counseling", institution: "Jamia Millia Islamia", year: "2023" },
  ];

  const memberships = [
    "Member, Counselors Council of India",
    "Registered Psychologist, National Council for Allied & Healthcare Professions (NCHAP)",
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Hi, I&apos;m <span className="text-teal-700">Bhavana.</span>
        </h1>
      </div>

      {/* Personal Introduction */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Reaching out for therapy can feel like a big step.. it can be confusing, scary, overwhelming. Here, you will be heard, understood, and supported. My goal is to provide a calm, safe space where you can explore your thoughts and feelings at your own pace, without judgment.
            </p>
            <p>
              Whether you&apos;re navigating stress, anxiety, low mood, relationship challenges, or just feeling stuck, I&apos;m here to walk with you and help you feel a little lighter, clearer, and more in control of your life.
            </p>
          </div>
        </div>
      </div>

      {/* My Motivation */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">My Motivation</h2>
        <div className="bg-teal-50 rounded-2xl p-8 md:p-12">
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              I&apos;m passionate about helping people feel heard, understood, and supported. I believe that mental health is just as important as physical health. Every person changes and grows over time, and our thoughts, feelings, and actions are all connected. What we think affects how we feel, what we feel affects what we do, and what we do shapes how we think and feel. In therapy, my role is to help you notice these patterns, understand them, and find ways to feel more in control, supported, and at peace with yourself.
            </p>
            <p>
              My motivation comes from a simple belief: everyone deserves to be heard, understood, and supported. I&apos;ve faced moments in life where things felt confusing or overwhelming, and I know how heavy that can feel. It guides me to see people gain clarity, notice patterns in their thoughts and feelings, and take small steps toward feeling more in control and at peace with themselves.
            </p>
            <p>
              For me, therapy isn&apos;t just a profession, it&apos;s about walking alongside someone as they navigate life&apos;s challenges and discovering the tools and insights that help them grow.
            </p>
          </div>
        </div>
      </div>

      {/* My Approach */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">My Approach</h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          I use a client-centered, compassionate approach, combining evidence-based techniques with practices that support personal growth and emotional understanding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <IconComponent className="text-teal-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Qualifications */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Qualifications &amp; Credentials
        </h2>
        <div className="space-y-4">
          {qualifications.map((qual, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-teal-700" size={20} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-bold text-gray-900">{qual.degree}</h3>
                    <span className="text-teal-700 font-semibold">{qual.year}</span>
                  </div>
                  <p className="text-gray-600">{qual.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-teal-50 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-3 text-gray-900">Professional Memberships</h3>
          <ul className="space-y-2 text-gray-700">
            {memberships.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-teal-700">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Discovery Call CTA */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-teal-600">
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              I want this space to feel like a hand extended, not a lecture. If you&apos;re ready to take the first step, I offer a <strong>free 15&ndash;20 minute discovery call</strong> so we can connect, discuss your needs, and see if therapy with me feels like the right fit.
            </p>
            <p className="text-gray-900 font-medium italic">
              You don&apos;t have to have it all figured out&mdash;just starting this conversation is enough.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Book a Free Discovery Call
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

