'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-t border-ink/10 last:border-b">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <h3
          className={`font-display text-xl sm:text-2xl transition-colors ${
            isOpen ? 'text-pine' : 'text-ink group-hover:text-pine'
          }`}
        >
          {item.question}
        </h3>
        {isOpen ? (
          <Minus className="text-pine flex-shrink-0" size={20} />
        ) : (
          <Plus className="text-ink/30 group-hover:text-pine transition-colors flex-shrink-0" size={20} />
        )}
      </button>
      {isOpen && (
        <p className="pb-8 text-ink-soft leading-relaxed max-w-2xl">{item.answer}</p>
      )}
    </div>
  );
}

export default function FAQList({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQAccordion
          key={index}
          item={faq}
          isOpen={openIndex === index}
          toggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
