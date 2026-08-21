import Image from 'next/image';
import { Undo2, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section
      className="relative w-full h-1001px overflow-hidden bg-cover bg-center px-4 py-16 sm:px-8"
      style={{ backgroundImage: "url('/images/service-bg.png')" }}
    >
      <div className="relative mx-auto max-w-6xl h-856px rounded-[30px] bg-white/70 p-6 backdrop-blur-md sm:p-12">
        {/* Header row: label + heading on left, description on right */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-2 text-sm font-semibold text-[#00a6a6]">Our Services</p>
            <h2 className="max-w-xs text-3xl font-extrabold leading-tight text-[#1e293b] sm:max-w-sm sm:text-4xl">
              Accessible to the Community
            </h2>
          </div>
          <p className="text-center text-sm leading-relaxed text-[#1e293b] md:text-base">
            From specialist consultations and emergency care to dental services,
            pharmacy, and digital healthcare solutions, Prime Medicare provides a
            complete range of medical services focused on delivering convenient,
            personalised, and trusted care for every patient.
          </p>
        </div>

        {/* Content row: counter + nav controls on left, card + image on right */}
        <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Left: slide counter + controls */}
          <div className="flex flex-col justify-between md:h-56">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-[#1e293b]">01</span>
              <span className="text-5xl font-bold text-[#1e293b]">/</span>
              <span className="text-xl font-medium text-[#38bdf8]">04</span>
            </div>

            <div className="mt-10 flex gap-3">
              <button
                type="button"
                aria-label="Previous service"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-500 transition-colors hover:bg-slate-50"
              >
                <Undo2 size={18} strokeWidth={2} />
              </button>
              <button
                type="button"
                aria-label="Next service"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e293b] text-white transition-colors hover:bg-slate-700"
              >
                <ArrowUpRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Right: teal description card + image, corner overlap */}
          <div className="flex items-end gap-0">
            <div className="relative z-10 mb-0 w-56 rounded-[16px] bg-[#a7e8dc]/90 p-5 shadow-lg backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-[#1e293b]">
                Comprehensive blood testing providing accurate, timely results to
                support diagnosis, monitor health conditions, detect potential
                concerns, and guide personalized treatment decisions.
              </p>
            </div>

            <div className="relative w-[385px] overflow-hidden rounded-[20px] shadow-lg">
              <Image
                src="/images/home-blood-test.png"
                alt="Blood Tests"
                width={385}
                height={404}
                className="h-[220px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 flex h-14 w-full items-center justify-center bg-black/60">
                <span className="text-lg font-medium text-white">Blood Tests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}