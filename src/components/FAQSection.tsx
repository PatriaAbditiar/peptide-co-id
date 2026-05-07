"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="mt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="text-2xl font-serif text-slate-900 mb-6">
        Pertanyaan yang Sering Diajukan
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-xl border border-slate-200/80 overflow-hidden bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50/50 transition-colors"
            >
              <span className="text-sm font-medium text-slate-800 pr-4">{faq.question}</span>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openIndex === i ? "bg-teal-100 rotate-180" : "bg-slate-100"}`}>
                <svg className={`w-3.5 h-3.5 ${openIndex === i ? "text-teal-600" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
