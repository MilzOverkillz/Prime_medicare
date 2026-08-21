// ServicesFaqAccordion.tsx
"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. What is Home Care by Prime Medicare?",
    answer:
      "Home Care by Prime Medicare provides professional medical services at your home, allowing patients to receive quality healthcare while recovering in a comfortable environment.",
  },
  { question: "2. Who can use the Home Care service?", answer: "" },
  { question: "3. What services are available at home?", answer: "" },
  { question: "4. Are home care services provided by trained medical professionals?", answer: "" },
  { question: "5. Can I receive hospital-level care at home?", answer: "" },
  { question: "6. How can I book a Home Care service?", answer: "" },
];

export default function ServicesFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl px-5 py-4 transition-colors ${
            openIndex === i ? "bg-[#e0f2fe]" : "bg-white"
          }`}
        >
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-sm font-semibold text-[#1e293b] sm:text-base">
              {faq.question}
            </span>
            <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1565c0]">
              <ChevronDown
                size={14}
                className={`text-white transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </span>
          </button>
          {openIndex === i && faq.answer && (
            <p className="mt-3 text-sm leading-relaxed text-[#1565c0]">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}