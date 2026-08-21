import Image from "next/image";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function AppointmentCta() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto flex max-w-10xl flex-col overflow-hidden  md:flex-row">
        {/* Image side */}
        <div className="relative h-[300px] ml-40 w-full md:h-auto md:w-1/2">
          <Image
            src="/images/joinus-cta.png"
            alt="Doctor using tablet"
            fill
            className="object-cover"
          />
        </div>

        {/* Text and CTA */}
        <div className="flex w-full flex-col items-start justify-center gap-4 bg-white px-6 py-8 md:w-1/2 md:px-10">
          <h1 className="text-2xl font-extrabold leading-tight text-[#1e293b] sm:text-3xl">
            Have Questions?
            <br />
            We&apos;re Here to Help
          </h1>

          <button className="flex items-center gap-3 rounded-full bg-[#1565c0] px-5 py-2 transition-colors hover:bg-[#11509e]">
            <span className="text-sm font-semibold text-white">
              Book an Appointment
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <ArrowRight size={14} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}