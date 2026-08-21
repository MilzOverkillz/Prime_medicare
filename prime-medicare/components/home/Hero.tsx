// Hero.tsx
import React from 'react';
import Image from "next/image";
import { Heart, ShieldCheck, Stethoscope, Plus } from 'lucide-react';
import Navbar from './Navbar';

const badgeIcons = [Heart, ShieldCheck, Stethoscope, Plus];

const calloutLabels = [
  { text: 'Trusted by\n1000+ patients', className: 'right-[6%] top-[30%] text-left' },
  { text: 'Expert\nDoctors', className: 'left-[2%] top-[44%] text-right' },
  { text: 'Patient\nFirst\nApproach', className: 'right-[4%] top-[44%] text-left' },
  { text: 'Advanced\nMedical\nCare', className: 'right-[100%] top-[76%] text-right' },
];

const partnerImages = [
  { id: "home-partner1", src: "/images/home-patients.png", alt: "Partner 1" },
  { id: "home-partner2", src: "/images/home-patients.png", alt: "Partner 2" },
  { id: "home-partner3", src: "/images/home-patients.png", alt: "Partner 3" },
  { id: "home-partner4", src: "/images/home-patients.png", alt: "Partner 3" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[1018px] overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60%"
        style={{ backgroundImage: "url('/images/home-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/30 to-transparent" />

      {/* Doctor image: fills section height, capped at 780px */}
      <img
        src="/images/home-doctor.png"
        alt="Doctor"
        className="absolute bottom-0 right-40 z-[5] hidden h-[780px] w-auto object-contain md:block"
      />

      <Navbar />

      {/* 2-column grid, not 3 — this is what keeps callouts aligned over the doctor */}
      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-6 md-10  md:grid-cols-2 md:px-18">
        {/* Left column — copy */}
        <div className="flex flex-col">
          <p className="mb-2 text-10sm font-medium text-white/80">
            Reliable Care, Anywhere Anytime
          </p>

          <h1 className="max-w-md text-8xl font-extrabold leading-[1.1] text-white sm:text-6xl">
            <span className="block">Compassionate</span>
            <span className="block">Care. Trusted</span>
            <span className="block">Doctors.</span>
          </h1>

          {/* Badges sit tight under the headline */}
          <div className="mt-3 flex gap-2">
            {badgeIcons.map((Icon, i) => (
              <span
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm"
              >
                <Icon size={14} strokeWidth={1.75} />
              </span>
            ))}
          </div>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Advanced healthcare with experienced Expert doctors who put your health first.
          </p>

          <form className="mt-6 flex w-full max-w-md overflow-hidden rounded-full bg-white p-1 shadow-lg">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent px-5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get Started
            </button>
          </form>

          <div className="mt-20 flex items-center gap-8">
            <div className="flex -space-x-2">
              {partnerImages.map((partner) => (
                <Image
                  key={partner.id}
                  src={partner.src}
                  alt={partner.alt}
                  width={28}
                  height={28}
                  className="rounded-full border-2 border-white object-cover"
                />
              ))}
  
            </div>
            <div>
            <p className="text-xs leading-snug text-white/80">
              Trusted by 1000+
              <br />
              patients
            </p>
            </div>
          </div>
        </div>

        {/* Right column — callout labels, now correctly spanning the doctor's half */}
        <div className="relative hidden h-full md:block">
          {calloutLabels.map((label) => (
            <div key={label.text} className={`absolute flex items-center gap-2 ${label.className}`}>
              {label.className.includes('text-right') && <span className="h-px w-6 bg-white/60" />}
              <p className="whitespace-pre text-xs font-medium leading-snug text-white/90">
                {label.text}
              </p>
              {label.className.includes('text-left') && <span className="h-px w-6 bg-white/60" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}