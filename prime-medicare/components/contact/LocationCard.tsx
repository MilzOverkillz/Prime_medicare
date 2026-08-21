// LocationCard.tsx
import Image from 'next/image';
import React from 'react';

export default function LocationCard() {
  return (
    <section className="relative mx-auto w-full h-8xl max-w-10xl overflow-hidden">
      {/* Map image */}
      <Image
        src="/images/contact-map.png"
        alt="Map showing Prime Medicare location"
        width={1255}
        height={565}
        className="h-[420px] w-full object-cover md:h-[480px]"
      />

      {/* Card — pinned left, vertically centered over the map */}
      <div className="absolute left-4 top-1/2 w-[280px] -translate-y-1/2 rounded-xl bg-[#f8fafc] p-5 shadow-lg md:left-8 md:w-[300px] md:p-6">
        <h1 className="mb-2 text-lg font-semibold text-[#1e293b]">
          Prime Medicare Main Center
        </h1>

        <p className="mb-4 text-sm leading-relaxed text-[#475569]">
          1200 Healthcare Blvd, Suite 400
          <br />
          Metropolis, NY 10001
        </p>

        <h2 className="mb-2 text-base font-semibold text-[#1e293b]">Opening Hours</h2>

        <div className="mb-3 flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
            <span className="text-xs font-medium text-[#15803d]">Open Now</span>
          </span>
        </div>

        <p className="mb-5 text-sm leading-6 text-[#475569]">
          Mon-Sat (09:00 AM - 09:00 PM)
          <br />
          Sun (09:00 AM - 05:00 PM)
          <br />
          Public Holiday (09:00 AM - 05:00 PM)
        </p>

        <button className="flex items-center gap-2 rounded-full bg-[#1565c0] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Get Directions
        </button>
      </div>
    </section>
  );
}