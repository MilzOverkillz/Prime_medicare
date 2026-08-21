// CorporateHero.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

export default function CorporateHero() {
  return (
    <section className="relative overflow-hidden">
      {/* City skyline background, faded under a white/blue gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/images/corporate-hero-bg.png')" }}
      />
      <div className="absolute inset-0 " />

      <Navbar />

      <div className="relative z-10 mx-auto grid max-w-10xl h-[900px] grid-cols-1 items-center gap-8 px-6 pb-14 pt-28 md:grid-cols-2 md:px-10 md:pb-20 md:pt-32">
        <div>
          <h1 className="text-6xl font-extrabold leading-tight text-[#1e293b] mt-1 sm:text-5xl md:text-7xl">
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

        <div className="relative h-[818px] w-full sm:h-[380px] md:h-[900px]">
          <Image
            src="/images/corporate-hero.png"
            alt="Doctor with digital health interface"
            fill
            className="object-contain object-center md:object-right"
          />
        </div>
      </div>

      {/* Bottom scrolling marquee */}
      <div className="relative z-10 overflow-hidden bg-[#1565c0] py-3">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="text-new/Body Large font-regular tracking-wide text-white">
              Prime Medicare
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}