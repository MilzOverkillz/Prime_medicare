"use client";

import Image from "next/image";
import { Building2, HeartPulse, Info, Pill } from "lucide-react";

const benefits = [
  { icon: Building2, text: "Reduce the time they need to take off work to seek healthcare" },
  { icon: HeartPulse, text: "Help them get better quicker when they are ill" },
  { icon: Info, text: "Help them stay healthy" },
  { icon: Pill, text: "Suggest travel medicines" },
];

export default function CorporateHelp() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 text-center md:py-12">
      <p className="mb-2 text-sm font-semibold text-[#00a6a6]">Help</p>
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
        Help For Your Business
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#1e293b] sm:text-base">
        Get the support, expertise, and solutions your business needs to
        overcome challenges, improve performance, and achieve sustainable
        growth.
      </p>

      {/* Three-card row */}
      <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
        {/* Left card — icon + description */}
        <div className="rounded-2xl bg-[#f8fafc] p-6">
          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#38bdf8]">
            <Building2 size={16} className="text-white" strokeWidth={2} />
          </div>
          <p className="text-sm leading-relaxed text-[#1e293b]">
            Prime Medicare is here to help your business. The best part of our
            work is ensuring staff have accessible healthcare when they need
            it the most. Investing in our Digital-first corporate services
            and/or a regular office-based health checks ensures a healthy
            workplace.
          </p>
        </div>

        {/* Middle card — photo */}
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-full">
          <Image
            src="/images/corporate-help.png"
            alt="Business newspaper with stethoscope"
            fill
            className="object-cover"
          />
        </div>

        {/* Right card — checklist */}
        <div className="rounded-2xl bg-[#f8fafc] p-6">
          <ul className="flex flex-col gap-4">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#38bdf8]/20">
                  <Icon size={12} className="text-[#38bdf8]" strokeWidth={2.5} />
                </span>
                <p className="text-sm leading-relaxed text-[#1e293b]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}