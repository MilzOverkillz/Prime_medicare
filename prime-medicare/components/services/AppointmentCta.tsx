// AppointmentCTA.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AppointmentCta() {
  return (
    <section className="mx-auto max-w-10xl px-4 py-28 md:px-8">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        {/* Left: heading + description + CTA */}
        <div className="max-w-md text-left">
          <h2 className="text-2xl font-extrabold leading-tight text-[#1e293b] sm:text-3xl">
            Your <span className="text-[#1565c0]">Health</span> Start With
            <br />
            One Appointment
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#475569]">
            Book your appointment today and experience care you can trust
          </p>

          <a
            href="/appointment"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]"
          >
            Book an Appointment
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <ArrowRight size={12} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* Right: teardrop-shaped image with dashed outline */}
        <div className="relative h-52 w-52 flex-shrink-0 sm:h-64 sm:w-64">
          {/* Dashed teardrop outline, offset behind/around the image */}
          <div
            className="absolute inset-0 -z-10 translate-x-2 -translate-y-2 border-2 border-dashed border-[#38bdf8]"
            style={{ borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%" }}
          />
          <div
            className="relative h-full w-full overflow-hidden"
            style={{ borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%" }}
          >
            <Image
              src="/images/service-appointment.png"
              alt="Hospital interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}