"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  title: string;
  intro?: React.ReactNode;
  items: FAQItem[];
}

export default function FAQAccordion({ title, intro, items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section mt-12 mb-12">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 text-base text-foreground/90">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">
            {title}
          </h2>
          {intro && <p className="mb-6">{intro}</p>}
        </div>

        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <div className="faq-accordion w-full space-y-2 px-1 text-base leading-relaxed">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-accordion-item py-4 border-b border-black/5"
                >
                <button
                  type="button"
                  className="faq-accordion-trigger w-full flex items-center justify-between text-left font-semibold text-foreground hover:opacity-80 transition-opacity"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="pr-4">{item.question}</span>
                  <span
                    className={`faq-accordion-icon flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`faq-accordion-content grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="faq-accordion-body pb-4 pt-2 leading-relaxed text-foreground/80">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
