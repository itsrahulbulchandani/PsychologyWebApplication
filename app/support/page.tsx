import { Heart, Brain, Users, Shield, Compass, Smile, LifeBuoy, Battery, Hand, HelpCircle, Flower2, ArrowRight, Ear, Lightbulb, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  const supportAreas = [
    {
      icon: Brain,
      title: "Anxiety & Stress",
      description: "Find ways to calm your mind, manage overwhelming thoughts, and feel more balanced in everyday life."
    },
    {
      icon: Heart,
      title: "Low Mood & Emotional Wellbeing",
      description: "A safe space to talk about sadness, exhaustion, or loss of motivation, and begin feeling more like yourself again."
    },
    {
      icon: Users,
      title: "Relationships & Communication",
      description: "Work through emotional hurt, misunderstandings, and conflict with clarity and compassion."
    },
    {
      icon: Shield,
      title: "Emotional Healing",
      description: "Gently explore past experiences and build resilience, safety, and inner strength at your own pace."
    },
    {
      icon: Compass,
      title: "Rediscover Yourself",
      description: "Reconnect with your needs, values, and goals, and move toward a more fulfilling and meaningful life."
    },
    {
      icon: Smile,
      title: "Self-Esteem & Confidence",
      description: "Build a healthier relationship with yourself and develop confidence in your choices and voice."
    },
    {
      icon: LifeBuoy,
      title: "Life Transitions & Identity",
      description: "Support through changes like career shifts, breakups, loss, or questions about purpose and direction."
    },
    {
      icon: Battery,
      title: "Burnout & Emotional Fatigue",
      description: "Find ways to cope with constant pressure, exhaustion, and feeling drained."
    },
    {
      icon: Hand,
      title: "Boundaries & Self-Care",
      description: "Learn to set healthy boundaries and care for your emotional needs without guilt."
    },
    {
      icon: HelpCircle,
      title: "Decision-Making & Clarity",
      description: "Support in sorting through confusion and making choices that feel right for you."
    },
    {
      icon: Flower2,
      title: "Mindfulness & Inner Balance",
      description: "Develop awareness and grounding practices to feel more present and steady."
    },
  ];

  const therapyBenefits = [
    {
      icon: Ear,
      number: "1",
      title: "The relief of being heard",
      description: "There is something deeply comforting about finally talking openly about your worries, pain, and confusion\u2014and feeling truly understood. In therapy, you don\u2019t have to filter your thoughts or worry about being judged. You can say what\u2019s on your mind freely. For many people, this experience alone brings a sense of relief they may not have felt in a long time."
    },
    {
      icon: Lightbulb,
      number: "2",
      title: "Gaining clarity and understanding patterns",
      description: "Through gentle questions and reflection, therapy helps you notice patterns and themes in your struggles. What once felt like a heavy, confusing cloud slowly becomes clearer and more understandable. Instead of feeling stuck, you begin to see what needs attention and where change is possible. This often brings a sense of lightness and makes life feel more manageable."
    },
    {
      icon: Wrench,
      number: "3",
      title: "Learning new ways to cope and grow",
      description: "Therapy also offers practical, psychology-based tools through conversation, exercises, and learning resources. These help you develop healthier ways of thinking and responding to life\u2019s challenges. We believe that emotional well-being is a skill that can be learned\u2014and therapy is a space where you practice this skill, step by step, in a supportive environment."
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          How I Can <span className="text-teal-700">Support You</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whatever you&apos;re going through, you don&apos;t have to face it alone. Here are some of the areas I can help with.
        </p>
      </div>

      {/* Support Areas Grid */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-teal-200 hover:border-teal-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 bg-teal-100 rounded-full flex items-center justify-center">
                      <IconComponent className="text-teal-700" size={22} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 Main Ways Therapy Can Help */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          3 Main Ways Therapy Can Help
        </h2>
        <div className="mt-12 space-y-8">
          {therapyBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {benefit.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-teal-700 rounded-2xl shadow-xl p-10 md:p-14 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            You don&apos;t need to have it all figured out. Taking the first step is enough.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-700 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Book a Session
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
