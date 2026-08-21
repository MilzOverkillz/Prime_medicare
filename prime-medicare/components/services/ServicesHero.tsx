// ServicesHero.tsx
"use client";

import Image from "next/image";
import { ArrowRight, Users, ClipboardCheck, MapPin } from "lucide-react";

const highlights = [
  { icon: Users, label: "Qualified Professionals" },
  { icon: ClipboardCheck, label: "Personalized Care Plans" },
  { icon: MapPin, label: "Available Across Colombo" },
];

const partnerImages = [
  { id: "home-partner1", src: "/images/home-patients.png", alt: "Partner 1" },
  { id: "home-partner2", src: "/images/home-patients.png", alt: "Partner 2" },
  { id: "home-partner3", src: "/images/home-patients.png", alt: "Partner 3" },
  { id: "home-partner4", src: "/images/home-patients.png", alt: "Partner 3" },
];


export default function ServicesHero() {
  return (
    <section className="mx-auto max-w-10xl px-4 py-16 md:px-8">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* Left column — copy */}
        <div>
          <p className="mb-10 text-sm font-semibold text-[#00a6a6]">Services</p>

          <h1 className="mb-10 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
            Comprehensive care
            <br />
            <span className="text-[#00a6a6]">tailored to your</span>
            <br />
            health needs.
          </h1>

          <p className="mb-10 max-w-md text-sm leading-relaxed text-[#475569]">
            At Prime Medicare, we deliver comprehensive healthcare services
            through a team of skilled professionals and modern medical
            solutions. Our commitment is to provide accessible, efficient, and
            compassionate care that helps you achieve better health outcomes.
          </p>

          <a
            href="/contact"
            className="mb-15 inline-flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]"
          >
            Explore Services
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <ArrowRight size={12} className="text-[#1565c0]" strokeWidth={2.5} />
            </span>
          </a>

          <div className="grid grid-cols-3 gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col gap-2 rounded-xl bg-[#f8fafc] p-3">
                <Icon size={16} className="text-[#1565c0]" strokeWidth={2} />
                <span className="text-xs font-medium leading-snug text-[#1e293b]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — image with overlay stat card */}
        <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-80 md:h-[673px]">
          <Image
            src="/images/service-hero.png"
            alt="Doctor caring for patient"
            fill
            className="object-cover"
          />

          {/* Overlay stat card, bottom-left */}
          <div className="absolute bottom-4 left-40 w-[392px] flex items-center gap-10 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
            <div>
              <p className=" text-lg ml-10 font-bold text-[#1565c0]">500+</p>
              <p className="text-xs ml-10 text-[#475569]">
                Patients Served
                <br />
                with Care
              </p>
            </div>
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
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1565c0] text-[10px] font-semibold text-white">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}