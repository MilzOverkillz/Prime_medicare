// ContactHero.tsx
"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eaf3fb] to-[#dbeafe]">

      <div className="mx-auto grid max-w-10xl h-[700px] grid-cols-1 items-center gap-10 px-4 py-14 ml-20 md:grid-cols-2 md:px-8">
        {/* Left column — copy */}
        <div>
          <p className="mb-3 text-sm font-semibold text-[#00a6a6]">Get In Touch</p>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#1e293b] sm:text-5xl">
            Let&apos;s
            <br />
            <span className="text-[#38bdf8]">Connect</span> You
            <br />
            to Better
            <br />
            Care.
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[#1e293b] md:text-base">
            Whether you need to schedule an appointment, consult a specialist,
            or have a general medical inquiry, our premium support team is
            ready to assist you instantly.
          </p>
        </div>

        {/* Right column — doctor photo */}
        <div className="relative mx-auto h-[700px] w-full max-w-[420px] sm:h-[440px] md:h-[680px]">
          <Image
            src="/images/contact-hero.png"
            alt="Smiling doctor"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}