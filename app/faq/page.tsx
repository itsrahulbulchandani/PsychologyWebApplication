'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
        {isOpen ? (
          <ChevronUp className="text-teal-700 flex-shrink-0" size={22} />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" size={22} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How many sessions will I need?",
      answer: "There\u2019s no fixed number of sessions because everyone\u2019s journey is different. If you are only looking for it on a temporary basis, then try to give it at least 4\u20136 months. This means you may need about 10\u201315 sessions for deeper long-term change. However, some people do come to discuss a very specific problem and they find a lot of benefit just in 4\u20138 sessions."
    },
    {
      question: "What if the solutions are temporary? Problem comes back?",
      answer: "Therapy is not just about quick fixes. It focuses on helping you understand patterns in your thoughts, emotions, and actions so you can handle challenges even when they return. Just like if you stop going to gym you may end up losing muscles. Keeping notes and practicing the newly learnt skills will help you when you find yourself in similar situations later on in life. There\u2019s no shortcut. Just like your body, your mind needs practice and repetition."
    },
    {
      question: "Will a counselor younger in age, be able to handle things?",
      answer: "A therapist\u2019s ability to help comes from their training, experience and capacity to listen with empathy\u2014not their age. What matters most is if you feel understood, safe, and supported in the space we create together. I do understand that we might not be the right fit in the end, and you have every right to explore and find the best match for you."
    },
    {
      question: "How does confidentiality work? What\u2019s the level of privacy?",
      answer: "Everything you share in therapy is kept confidential and treated with respect. Your information is not shared with anyone without your permission, except in rare situations required by law, such as when there is a serious risk of harm to you or someone else."
    },
    {
      question: "Therapy has not worked for me in past? Why will it work now?",
      answer: "Sometimes therapy doesn\u2019t work because the timing, the approach, or the therapist wasn\u2019t the right fit. Therapy is not one-size-fits-all. We will work at your pace and focus on what feels most relevant to you now. Your past experience doesn\u2019t mean therapy can\u2019t help you in the present."
    },
    {
      question: "How do I know if I need therapy?",
      answer: "If something in your life feels overwhelming, confusing, or emotionally heavy, therapy can help. You don\u2019t need to be in crisis to seek support. Therapy is also for people who want clarity, growth, and a better understanding of themselves."
    },
    {
      question: "What happens in the first session?",
      answer: "The first session is about getting to know you and understanding what brings you to therapy. You can share as much or as little as you feel comfortable with. We\u2019ll talk about your concerns, your goals, and how therapy can support you."
    },
    {
      question: "What if I don\u2019t know what to talk about?",
      answer: "That\u2019s completely okay. You don\u2019t need to come with a script. We can begin wherever you are\u2014what you\u2019re feeling today, what\u2019s been bothering you lately, or even why you decided to book the session. I can help you feel comfortable first and we\u2019ll take it from there."
    },
    {
      question: "Is it okay if I feel nervous or awkward at first?",
      answer: "Yes, very normal. Many people feel unsure or anxious in the beginning. Therapy is a new experience, and it takes time to feel comfortable. There is no pressure to be perfect or say the \u201Cright\u201D things. There\u2019s no right or wrong, just being authentic\u2014what you\u2019re feeling at the moment, even if it\u2019s nervousness."
    },
    {
      question: "Do I need to prepare anything before a session?",
      answer: "No preparation is required. You can simply come as you are. If you like, you can think about what you\u2019d like help with, but it\u2019s not necessary."
    },
    {
      question: "How is this different from talking to a friend?",
      answer: "Friends care about you, but therapy offers a safe, unbiased space focused only on you. A therapist is trained to help you understand patterns, ask the right questions, and guide you toward clarity and healthier ways of coping. Since your therapist is outside of your social circles, it helps in making the space truly safe and free of judgement, and entirely focused on your needs."
    },
    {
      question: "What if my problem feels too small for therapy?",
      answer: "There is no problem that is \u201Ctoo small.\u201D If something is affecting your peace of mind, it matters. Therapy is not only for big crises\u2014it\u2019s also for everyday struggles, stress, and emotional confusion. You can see your therapist for a short term focus and discontinue when you feel like you\u2019ve accomplished what you came for."
    },
    {
      question: "How will I know if therapy is helping?",
      answer: "You may notice small changes: feeling lighter, understanding yourself better, reacting differently to situations, or coping more calmly. Progress can be gradual, and we will check in regularly about how you\u2019re feeling, adjusting the focus to achieve the goals we\u2019ve set together for you."
    },
    {
      question: "Does my therapist really understand what I\u2019m going through?",
      answer: "Your experience is unique, and therapy is a space where it is listened to without judgment. My role is to understand your perspective, support you with empathy, and help you make sense of your thoughts and emotions."
    },
    {
      question: "What if I feel dependent on therapy?",
      answer: "Therapy is meant to help you become more independent and confident in handling life, not dependent. The goal is to give you tools and insight so you can support yourself better outside sessions."
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Frequently Asked <span className="text-teal-700">Questions</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Common questions about therapy, sessions, and how it all works.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              item={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-teal-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Still have questions?</h2>
          <p className="text-gray-700 mb-6">
            Book a free discovery call and we can discuss anything you&apos;d like to know.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
}
