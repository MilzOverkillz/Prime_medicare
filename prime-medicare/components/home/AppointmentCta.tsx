import Image from "next/image";
import React from "react";

export default function AppointmentCTA() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:justify-between md:px-8">
      {/* Left: heading + CTA */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl font-extrabold leading-tight text-[#1e293b] sm:text-5xl">
          Your <span className="text-[#2563eb]">Health</span> Start With{" "}
          <span className="block text-[#2563eb]">One Appointment</span>
        </h2>

        <a
          href="/appointment"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2563eb] py-3 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Book an Appointment
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2563eb]">
            →
          </span>
        </a>
      </div>

      {/* Right: heart-shaped image with decorative squiggle */}
      <div className="relative h-64 w-72 flex-shrink-0 sm:h-80 sm:w-96">
        {/* Dashed decorative line above the shape */}
        <svg
          viewBox="0 0 300 100"
          className="pointer-events-none absolute -top-6 left-4 h-16 w-64 text-[#0ea5a5]"
          fill="none"
        >
          <path
            d="M10,60 C80,10 160,10 230,50 C260,65 280,55 290,30"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>

        {/* Heart-shaped clipped image */}
        <svg width="0" height="0" className="absolute">
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.2 C0.38,-0.02 0.06,0.02 0.02,0.28 C-0.02,0.52 0.14,0.72 0.5,0.98 C0.86,0.72 1.02,0.52 0.98,0.28 C0.94,0.02 0.62,-0.02 0.5,0.2 Z" />
          </clipPath>
        </svg>

        <div
          className="relative h-full w-full overflow-hidden"
          style={{ clipPath: "url(#heart-clip)" }}
        >
          <Image
            src="/images/home-appointment.png"
            alt="Doctor holding a patient's hand"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}