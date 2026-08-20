// BookAppointmentCta.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AppointmentCta() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 text-center md:px-8">
      {/* Headline */}
      <h1 className="mb-6 text-3xl font-extrabold leading-tight text-[#1e293b] sm:text-4xl">
        Your <span className="text-[#1565c0]">Health</span> Start With
        <br />
        <span className="text-[#1565c0]">One Appointment</span>
      </h1>

      {/* Image with organic curved corner + dashed border */}
      <div className="relative mx-auto mb-8 max-w-3xl">
        <div
          className="absolute inset-0 -z-10 -translate-y-1 translate-x-1.5 border-2 border-dashed border-[#00a6a6]"
          style={{ borderRadius: "0% 60% 60% 0% / 0% 100% 100% 0%" }}
        />
        <div
          className="relative h-40 w-full overflow-hidden sm:h-48 md:h-56"
          style={{ borderRadius: "0% 60% 60% 0% / 0% 100% 100% 0%" }}
        >
          <Image
            src="/images/about-appointment.png"
            alt="Nurses assisting patient"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CTA button */}
      <a
        href="/contact"
        className="inline-flex items-center gap-3 rounded-full bg-[#1565c0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#11509e]"
      >
        Book an Appointment
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
          <ArrowRight size={12} className="text-[#1565c0]" strokeWidth={2.5} />
        </span>
      </a>
    </section>
  );
}