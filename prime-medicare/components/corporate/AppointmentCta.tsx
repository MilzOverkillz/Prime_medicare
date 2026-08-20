"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AppointmentCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Left column — copy */}
        <div className="text-left">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
            Your <span className="text-[#1565c0]">Health</span> Start With
            <br />
            <span className="text-[#1565c0]">One Appointment</span>
          </h1>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]"
          >
            Book an Appointment
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <ArrowRight size={12} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* Right column — cross-shaped composite graphic */}
        <div className="relative h-[220px] w-full sm:h-[280px] md:h-[320px]">
          <Image
            src="/images/global-cross-graphic.png"
            alt="Global healthcare cross graphic"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}