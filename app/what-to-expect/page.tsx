import { Phone, Users, Clock, BookOpen, Monitor, Lock, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhatToExpectPage() {
  const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Discovery Call",
      points: [
        "Before we begin therapy, I offer a brief 15\u201320 minute free discovery call.",
        "This is a chance for you to share your concerns and ask questions.",
        "It helps us see if my approach is a good fit for your needs.",
        "There\u2019s no obligation to start therapy after this call.",
      ]
    },
    {
      icon: Users,
      number: "2",
      title: "Initial Sessions",
      points: [
        "Your first two sessions at least are about getting to know you, creating a safe space for you and identifying your goals.",
        "We\u2019ll discuss what brought you to therapy, your experiences, and what you hope to achieve.",
        "These sessions help you feel comfortable and understood.",
        "Together, we create a plan that works for you.",
      ]
    },
    {
      icon: Clock,
      number: "3",
      title: "Session Length & Frequency",
      points: [
        "Each session lasts up to 60 minutes, with the option to extend by 15\u201330 minutes for emergencies so that you leave each session feeling composed and supported.",
        "Frequency of sessions depends on your goals and needs, usually once a week to start.",
      ]
    },
    {
      icon: BookOpen,
      number: "4",
      title: "Homework",
      points: [
        "After each session, you\u2019ll be given some homework or exercises to do on your own. These require you to think deeper, learn new ideas or practice desired behaviours.",
        "In the gap between two sessions, you can reach out to me on chat and I will guide you in case you are stuck with your homework, the best I can. I don\u2019t guarantee immediate or 100% replies but I\u2019ll try my best to be there for you, while maintaining my own work life balance :)",
      ]
    },
    {
      icon: Monitor,
      number: "5",
      title: "Online Sessions",
      points: [
        "All therapy sessions are conducted online, so you can attend from the comfort of your home.",
        "Online therapy provides the same level of care, support, and confidentiality as in-person sessions.",
        "You\u2019ll receive a secure link to join each session at the scheduled time.",
      ]
    },
    {
      icon: Lock,
      number: "6",
      title: "Confidentiality",
      points: [
        "Your privacy is a top priority.",
        "Everything shared in sessions is strictly confidential.",
        "My session notes are kept securely and are never shared anywhere, except in cases required by law to ensure safety.",
      ]
    },
    {
      icon: Sparkles,
      number: "7",
      title: "Nature of Therapy",
      points: [
        "Therapy is a collaborative process. You set the pace and goals.",
        "Sessions provide a safe space to explore your thoughts, emotions, and challenges.",
        "Over time, you\u2019ll develop tools and insights to cope, grow, and feel more in control.",
      ]
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          What to <span className="text-teal-700">Expect</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Starting therapy can feel unfamiliar, and it&apos;s normal to have questions. This page explains what to expect and how we work together, so you can feel confident and supported from the very first session.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <ul className="space-y-3">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-teal-600 mt-1 flex-shrink-0">&#8226;</span>
                          <span className="text-gray-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Steps */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-teal-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Next Steps</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you feel ready after the discovery call, we schedule your first session. You&apos;ll receive guidance on preparing for your session and what to expect.
          </p>
          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Book Your Discovery Call
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
