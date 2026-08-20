// CorporateHero.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CorporateHero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8fc]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">

        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl md:text-5xl">
            Driving Business
            <br />
            Excellence Through
            <br />
            <span className="text-[#1565c0]">Collaboration</span>
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#1e293b]">
            We work alongside organizations to provide reliable solutions,
            industry expertise, and the support needed to achieve their
            business goals.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]"
          >
            Contact Us
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
              <ArrowRight size={14} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* Right column — doctor + tech hexagon image */}
        <div className="relative h-[320px] w-full sm:h-[380px] md:h-[440px]">
          <Image
            src="/images/corporate-hero.png"
            alt="Doctor with digital health interface"
            fill
            className="object-contain object-center md:object-right"
          />
        </div>
      </div>

      {/* Bottom scrolling marquee */}
      <div className="overflow-hidden bg-[#1565c0] py-3">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="text-sm font-semibold tracking-wide text-white">
              Prime Medicare
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}