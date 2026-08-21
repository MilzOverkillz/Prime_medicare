"use client";

import Image from "next/image";
import { ArrowRight, Droplet, Wind, Syringe, Gauge, UserCheck } from "lucide-react";

const benefits = [
  { icon: Droplet, label: "IV Drips & Antibiotics" },
  { icon: Wind, label: "Nebulization" },
  { icon: Syringe, label: "Catheter Care" },
  { icon: Gauge, label: "Oxygen Therapy" },
  { icon: UserCheck, label: "Doctor & Nurse Home Visits" },
];

export default function HomeCareSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-10xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: intro + benefits */}
        <div>
          <p className="mb-2 text-sm font-semibold text-[#00a6a6]">Individual Services</p>
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
            Home Care By
            <br />
            Prime Medicare
          </h2>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-[#475569]">
            Receive high-quality medical care in the comfort of your home with
            Hospital@Home by Prime Medicare. Our service provides safe,
            convenient, and personalized healthcare support for patients
            recovering at home.
          </p>

          <h3 className="mb-4 text-base font-semibold text-[#1e293b]">Benefits:</h3>
          <div className="mb-8 flex flex-col gap-4">
            <p className="text-sm text-[#475569]">Continue hospital-level care at home.</p>
            <p className="text-sm text-[#475569]">Recover comfortably with professional medical support.</p>
            <p className="text-sm text-[#475569]">Receive personalized care plans and regular monitoring.</p>
          </div>

          <button className="flex w-fit items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]">
            Explore Home Care Services
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <ArrowRight size={12} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right: image with overlapping services card */}
        <div className="relative mx-auto w-full max-w-md pr-8">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image src="/images/service-homecare.png" alt="Home care" fill className="object-cover" />
          </div>

          {/* Overlapping card — vertically centered on the right edge of the photo */}
          <div className="absolute right-0 top-3/4 w-56 -translate-y-1/3 translate-x-1/4 rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="mb-4 text-sm font-semibold text-[#1e293b]">Home Care Services</h3>
            <div className="flex flex-col gap-4">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#1565c0]">
                    <Icon size={12} strokeWidth={2} />
                  </span>
                  <span className="text-[11px] leading-snug text-[#1e293b]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}