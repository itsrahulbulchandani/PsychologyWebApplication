'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({
  item,
  id,
  isOpen,
  toggle,
}: {
  item: FAQItem;
  id: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-t border-ink/10 last:border-b">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
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
      {/* Answers stay in the DOM when collapsed so the text is crawlable */}
      <div id={`${id}-answer`} role="region" aria-labelledby={`${id}-question`} hidden={!isOpen}>
        <p className="pb-8 text-ink-soft leading-relaxed max-w-2xl">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQList({
  faqs,
  idPrefix = 'faq',
  defaultOpenIndex = null,
}: {
  faqs: FAQItem[];
  idPrefix?: string;
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQAccordion
          key={index}
          id={`${idPrefix}-${index}`}
          item={faq}
          isOpen={openIndex === index}
          toggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
