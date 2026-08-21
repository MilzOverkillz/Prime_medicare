// ContactInfoCards.tsx
"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const infoItems = [
  { icon: Phone, label: "Call Us", value: "011 424 2030" },
  { icon: Mail, label: "Mail Us", value: "support@primemedicareltd.com" },
  { icon: MapPin, label: "Visit Us", value: "Find the Clinic" },
];

export default function ContactInfoCards() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="mx-auto flex max-w-10xl flex-col items-center gap-8 rounded-2xl bg-[#f8fafc] p-6 md:flex-row md:justify-between mt-4 md:p-8">
        {/* Info items */}
        <div className="flex flex-col gap-6 sm:flex-row ml-10 sm:gap-15">
          {infoItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1565c0]">
                <Icon size={16} className="text-white" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#1e293b]">{label}</h3>
                <p className="text-xs text-[#64748b]">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button — same row, right-aligned */}
        <button
          type="button"
          className="flex flex-shrink-0 items-center gap-3 rounded-full bg-[#1565c0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]"
        >
          Book an Appointment
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <ArrowRight size={14} className="text-[#1565c0]" strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </section>
  );
}